import type { SearchSuggestion } from '../types/game.ts';

interface ITunesLookupResult {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName?: string;
  artworkUrl100?: string;
  previewUrl?: string;
  trackViewUrl?: string;
}

interface ITunesResponse {
  resultCount: number;
  results: ITunesLookupResult[];
}

export interface ResolvedTrackPreview {
  trackId: number;
  previewUrl: string;
  trackName: string;
  artistName: string;
  albumName: string;
  artworkUrl: string;
  appleMusicUrl?: string;
}

const previewCache = new Map<number, ResolvedTrackPreview>();

/**
 * Strips parenthetical soundtrack noise like "(From \"Brahmastra\")" or "[Remix]"
 * so display and comparison are clean.
 */
export function cleanTrackTitle(rawTitle: string): string {
  return rawTitle
    .replace(/\s*\((?:From|Original Motion Picture Soundtrack|Feat\.|feat\.|with)[^)]*\)/gi, '')
    .replace(/\s*\[(?:From|Original)[^\]]*\]/gi, '')
    .trim();
}

/**
 * Fetches a fresh 30-second preview URL from the Indian iTunes Store.
 * Falls back to searching by title + artist if the exact trackId lookup lacks a preview.
 */
export async function resolveTrackPreview(
  trackId: number,
  fallbackQuery?: string,
  signal?: AbortSignal,
): Promise<ResolvedTrackPreview> {
  const cached = previewCache.get(trackId);
  if (cached) return cached;

  if (trackId > 0) {
    const lookupUrl = `https://itunes.apple.com/lookup?id=${trackId}&country=in`;
    const resp = await fetch(lookupUrl, { signal });
    if (!resp.ok) {
      throw new Error(`iTunes lookup failed (${resp.status})`);
    }

    const data = (await resp.json()) as ITunesResponse;
    const hit = data.results.find((item) => Boolean(item.previewUrl));

    if (hit && hit.previewUrl) {
      const resolved: ResolvedTrackPreview = {
        trackId: hit.trackId,
        previewUrl: hit.previewUrl,
        trackName: hit.trackName,
        artistName: hit.artistName,
        albumName: hit.collectionName ?? '',
        artworkUrl: (hit.artworkUrl100 ?? '').replace('100x100bb', '600x600bb'),
        appleMusicUrl: hit.trackViewUrl,
      };
      previewCache.set(trackId, resolved);
      return resolved;
    }
  }

  if (fallbackQuery) {
    const cleanedFallback = fallbackQuery
      .replace(/\b(?:title track|full song|lyrical|official)\b/gi, '')
      .replace(/,/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const shortFallback = cleanedFallback.split(' ').slice(0, 4).join(' ');
    const queries = Array.from(new Set([fallbackQuery, cleanedFallback, shortFallback])).filter(
      (q) => q.length >= 2,
    );

    for (const q of queries) {
      const searchUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(
        q,
      )}&entity=musicTrack&country=in&media=music&limit=5`;
      const fallbackResp = await fetch(searchUrl, { signal });
      if (!fallbackResp.ok) continue;
      const fallbackData = (await fallbackResp.json()) as ITunesResponse;
      const fallbackHit = fallbackData.results.find((item) => Boolean(item.previewUrl));
      if (fallbackHit && fallbackHit.previewUrl) {
        const resolved: ResolvedTrackPreview = {
          trackId: fallbackHit.trackId,
          previewUrl: fallbackHit.previewUrl,
          trackName: fallbackHit.trackName,
          artistName: fallbackHit.artistName,
          albumName: fallbackHit.collectionName ?? '',
          artworkUrl: (fallbackHit.artworkUrl100 ?? '').replace('100x100bb', '600x600bb'),
          appleMusicUrl: fallbackHit.trackViewUrl,
        };
        previewCache.set(trackId, resolved);
        return resolved;
      }
    }
  }

  throw new Error('No playable 30s preview returned by iTunes for this track.');
}

/**
 * Searches Indian iTunes Store tracks for autocomplete suggestions.
 */
export async function searchIndianTracks(
  query: string,
  signal?: AbortSignal,
): Promise<SearchSuggestion[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
    trimmed,
  )}&entity=musicTrack&country=in&media=music&limit=10`;

  const resp = await fetch(url, { signal });
  if (!resp.ok) return [];

  const data = (await resp.json()) as ITunesResponse;
  const seen = new Set<string>();
  const suggestions: SearchSuggestion[] = [];

  for (const item of data.results) {
    const clean = cleanTrackTitle(item.trackName);
    const key = `${clean.toLowerCase()}::${item.artistName.toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.add(key);

    suggestions.push({
      id: item.trackId,
      title: clean,
      trackName: item.trackName,
      artistName: item.artistName,
      albumName: item.collectionName ?? '',
      artworkUrl: item.artworkUrl100 ?? '',
    });
  }

  return suggestions;
}
