import { TRACK_CATALOG } from '../data/catalog.ts';
import type { CatalogTrack, CustomPlaylist, PlaylistSource } from '../types/game.ts';
import { artistsOverlap, isSameTrack, normalizeText } from '../utils/matching.ts';
import { cleanTrackTitle } from './itunes.ts';

interface ImportedRawTrack {
  itunesId?: number;
  title: string;
  artist: string;
  query: string;
  artworkUrl?: string;
}

interface ImportApiResponse {
  name: string;
  source: PlaylistSource;
  sourceUrl: string;
  tracks: ImportedRawTrack[];
  error?: string;
}

interface ITunesResultItem {
  wrapperType?: string;
  trackId?: number;
  trackName?: string;
  artistName?: string;
  collectionName?: string;
  artworkUrl100?: string;
  previewUrl?: string;
}

interface ITunesBatchResponse {
  results?: ITunesResultItem[];
}

export interface ImportProgress {
  stage: 'extracting' | 'matching';
  matched: number;
  processed: number;
  total: number;
}

function findLocalCatalogMatch(raw: ImportedRawTrack): CatalogTrack | null {
  if (raw.itunesId) {
    const byId = TRACK_CATALOG.find((t) => t.id === raw.itunesId);
    if (byId) return byId;
  }

  const normTitle = normalizeText(cleanTrackTitle(raw.title));
  if (!normTitle) return null;

  for (const t of TRACK_CATALOG) {
    const catTitle = normalizeText(t.title);
    if (catTitle === normTitle) {
      if (
        !raw.artist ||
        raw.artist === 'Indian Music' ||
        artistsOverlap(raw.artist, t.artistName)
      ) {
        return t;
      }
    }
  }

  for (const t of TRACK_CATALOG) {
    const catTitle = normalizeText(t.title);
    if (normTitle.length >= 6 && catTitle.includes(normTitle)) {
      if (raw.artist && artistsOverlap(raw.artist, t.artistName)) {
        return t;
      }
    }
  }
  return null;
}

async function batchLookupItunesIds(
  ids: number[],
  signal?: AbortSignal,
): Promise<Map<number, CatalogTrack>> {
  const map = new Map<number, CatalogTrack>();
  if (ids.length === 0) return map;

  for (let i = 0; i < ids.length; i += 80) {
    const chunk = ids.slice(i, i + 80);
    const resp = await fetch(
      `https://itunes.apple.com/lookup?id=${chunk.join(',')}&country=in`,
      { signal },
    );
    if (!resp.ok) continue;
    const data = (await resp.json()) as ITunesBatchResponse;
    for (const item of data.results ?? []) {
      if (!item.trackId || !item.trackName || !item.artistName || !item.previewUrl) {
        continue;
      }
      map.set(item.trackId, {
        id: item.trackId,
        title: cleanTrackTitle(item.trackName),
        trackName: item.trackName,
        artistName: item.artistName,
        albumName: item.collectionName ?? '',
        artworkUrl: (item.artworkUrl100 ?? '').replace('100x100bb', '300x300bb'),
        category: 'desi-pop',
      });
    }
  }

  return map;
}

async function searchSingleItunesTrack(
  raw: ImportedRawTrack,
  signal?: AbortSignal,
): Promise<{ track: CatalogTrack | null; rateLimited: boolean }> {
  const q = raw.query || `${raw.title} ${raw.artist}`.trim();
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
    q,
  )}&entity=musicTrack&country=in&media=music&limit=5`;

  const resp = await fetch(url, { signal });
  if (resp.status === 403 || resp.status === 429) {
    return { track: null, rateLimited: true };
  }
  if (!resp.ok) {
    return { track: null, rateLimited: false };
  }

  const data = (await resp.json()) as ITunesBatchResponse;
  const candidates = (data.results ?? []).filter((r) => Boolean(r.previewUrl && r.trackId));
  const hasSpecificArtist =
    Boolean(raw.artist) && raw.artist.toLowerCase() !== 'indian music';
  const hit =
    (hasSpecificArtist
      ? candidates.find(
          (r) => r.artistName && artistsOverlap(raw.artist, r.artistName),
        )
      : undefined) ?? (hasSpecificArtist ? undefined : candidates[0]);

  if (!hit || !hit.trackId || !hit.trackName || !hit.artistName) {
    return { track: null, rateLimited: false };
  }

  return {
    track: {
      id: hit.trackId,
      title: cleanTrackTitle(hit.trackName),
      trackName: hit.trackName,
      artistName: hit.artistName,
      albumName: hit.collectionName ?? '',
      artworkUrl: (hit.artworkUrl100 ?? '').replace('100x100bb', '300x300bb'),
      category: 'desi-pop',
    },
    rateLimited: false,
  };
}

export async function importAndResolvePlaylist(
  url: string,
  customName: string,
  onProgress: (progress: ImportProgress) => void,
  signal?: AbortSignal,
): Promise<CustomPlaylist> {
  onProgress({ stage: 'extracting', matched: 0, processed: 0, total: 0 });

  const resp = await fetch('/api/import-playlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
    signal,
  });

  const data = (await resp.json()) as ImportApiResponse;
  if (!resp.ok || data.error) {
    throw new Error(data.error || `Playlist import failed (${resp.status}).`);
  }

  const rawTracks = data.tracks ?? [];
  if (rawTracks.length === 0) {
    throw new Error('No tracks were found in that playlist.');
  }

  const resolvedTracks: CatalogTrack[] = [];
  const unresolved: ImportedRawTrack[] = [];

  const pushResolved = (track: CatalogTrack) => {
    if (resolvedTracks.some((existing) => isSameTrack(existing, track))) return;
    resolvedTracks.push(track);
  };

  // 1. Instant local catalog matching
  for (const raw of rawTracks) {
    const local = findLocalCatalogMatch(raw);
    if (local) {
      pushResolved(local);
    } else {
      unresolved.push(raw);
    }
  }

  onProgress({
    stage: 'matching',
    matched: resolvedTracks.length,
    processed: rawTracks.length - unresolved.length,
    total: rawTracks.length,
  });

  // 2. Batch lookup for Apple Music IDs in 1–2 requests
  const idsToLookup = unresolved
    .map((r) => r.itunesId)
    .filter((id): id is number => typeof id === 'number');

  const stillNeeded: ImportedRawTrack[] = [];
  if (idsToLookup.length > 0) {
    const batchMap = await batchLookupItunesIds(idsToLookup, signal);
    for (const raw of unresolved) {
      if (raw.itunesId && batchMap.has(raw.itunesId)) {
        pushResolved(batchMap.get(raw.itunesId)!);
      } else {
        stillNeeded.push(raw);
      }
    }
  } else {
    stillNeeded.push(...unresolved);
  }

  let processedCount = rawTracks.length - stillNeeded.length;
  onProgress({
    stage: 'matching',
    matched: resolvedTracks.length,
    processed: processedCount,
    total: rawTracks.length,
  });

  // 3. Pre-resolve up to 12 remaining tracks gently; keep the rest as lazy on-demand tracks
  //    so 100+ song playlists import completely in seconds without hitting Apple's 20 req/min search cap!
  const preResolveCount = Math.min(stillNeeded.length, 12);
  let hitRateLimit = false;
  let lazyIndex = 0;

  for (let i = 0; i < stillNeeded.length; i += 1) {
    if (signal?.aborted) break;
    const raw = stillNeeded[i];

    if (i < preResolveCount && !hitRateLimit) {
      const { track, rateLimited } = await searchSingleItunesTrack(raw, signal);
      if (rateLimited) {
        hitRateLimit = true;
      } else if (track) {
        pushResolved(track);
        processedCount += 1;
        onProgress({
          stage: 'matching',
          matched: resolvedTracks.length,
          processed: processedCount,
          total: rawTracks.length,
        });
        await new Promise((r) => setTimeout(r, 250));
        continue;
      }
    }

    // Keep track for just-in-time resolution when its round starts
    const fallbackId = -(Date.now() % 1_000_000) * 1000 - lazyIndex - 1;
    lazyIndex += 1;
    pushResolved({
      id: fallbackId,
      title: cleanTrackTitle(raw.title) || raw.title,
      trackName: raw.title,
      artistName: raw.artist || 'Indian Music',
      albumName: '',
      artworkUrl: raw.artworkUrl ?? '',
      category: 'desi-pop',
    });
    processedCount += 1;
  }

  onProgress({
    stage: 'matching',
    matched: resolvedTracks.length,
    processed: rawTracks.length,
    total: rawTracks.length,
  });

  if (resolvedTracks.length === 0) {
    throw new Error('Could not find any playable tracks in that playlist.');
  }

  return {
    id: `custom-${Date.now()}`,
    name: customName.trim() || data.name,
    source: data.source,
    sourceUrl: data.sourceUrl,
    tracks: resolvedTracks,
    createdAt: Date.now(),
  };
}
