import { EXTRA_AUTOCOMPLETE_SONGS, TRACK_CATALOG } from '../../src/data/catalog.ts';
import { cleanTrackTitle, resolveTrackPreview } from '../../src/services/itunes.ts';
import type { SearchSuggestion } from '../../src/types/game.ts';
import {
  MAX_ROOM_CUSTOM_TRACKS,
  type RevealedTrackInfo,
  type RoomTrackInput,
} from '../../src/types/multiplayer.ts';
import { normalizeText } from '../../src/utils/matching.ts';

export interface ResolvedRoundTrack {
  previewUrl: string;
  track: RevealedTrackInfo;
}

export type RoomTrackResolver = (
  packId: string,
  customPool: RoomTrackInput[],
  usedTrackKeys: Set<string>,
) => Promise<ResolvedRoundTrack | null>;

const MAX_CANDIDATE_ATTEMPTS = 6;

export function sanitizeCustomTracks(raw?: RoomTrackInput[]): RoomTrackInput[] {
  if (!Array.isArray(raw)) return [];
  const cleaned: RoomTrackInput[] = [];
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue;
    const title = typeof item.title === 'string' ? item.title.trim().slice(0, 140) : '';
    const artistName =
      typeof item.artistName === 'string' ? item.artistName.trim().slice(0, 140) : '';
    if (!title || !artistName) continue;
    cleaned.push({
      id: typeof item.id === 'number' && Number.isFinite(item.id) ? item.id : -1 - cleaned.length,
      title,
      trackName:
        typeof item.trackName === 'string' && item.trackName.trim()
          ? item.trackName.trim().slice(0, 140)
          : title,
      artistName,
      albumName: typeof item.albumName === 'string' ? item.albumName.trim().slice(0, 140) : '',
      artworkUrl: typeof item.artworkUrl === 'string' ? item.artworkUrl.trim().slice(0, 300) : '',
    });
    if (cleaned.length >= MAX_ROOM_CUSTOM_TRACKS) break;
  }
  return cleaned;
}

function getPoolForPack(packId: string, customPool: RoomTrackInput[]): RoomTrackInput[] {
  if (packId.startsWith('custom:')) {
    if (customPool.length > 0) return customPool;
  }
  if (packId === 'all-india') return TRACK_CATALOG;
  const matched = TRACK_CATALOG.filter((track) => track.category === packId);
  return matched.length > 0 ? matched : TRACK_CATALOG;
}

function getTrackKey(track: Pick<RoomTrackInput, 'id' | 'title' | 'artistName'>): string {
  return `${track.id}:${normalizeText(track.title)}::${normalizeText(track.artistName)}`;
}

function shuffleInPlace<T>(items: T[]): T[] {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

export async function resolveNextRoundTrack(
  packId: string,
  customPool: RoomTrackInput[],
  usedTrackKeys: Set<string>,
): Promise<ResolvedRoundTrack | null> {
  const fullPool = getPoolForPack(packId, customPool);
  if (fullPool.length === 0) return null;

  const freshPool = fullPool.filter((track) => !usedTrackKeys.has(getTrackKey(track)));
  const candidates = shuffleInPlace([...(freshPool.length > 0 ? freshPool : fullPool)]);
  const attempts = Math.min(MAX_CANDIDATE_ATTEMPTS, candidates.length);

  for (let i = 0; i < attempts; i += 1) {
    const pick = candidates[i];
    const key = getTrackKey(pick);
    usedTrackKeys.add(key);

    try {
      const resolved = await resolveTrackPreview(
        pick.id,
        `${pick.title} ${pick.artistName}`,
      );
      return {
        previewUrl: resolved.previewUrl,
        track: {
          id: resolved.trackId || pick.id,
          title: cleanTrackTitle(resolved.trackName || pick.title),
          trackName: resolved.trackName || pick.trackName,
          artistName: resolved.artistName || pick.artistName,
          albumName: resolved.albumName || pick.albumName,
          artworkUrl: resolved.artworkUrl || pick.artworkUrl,
          appleMusicUrl: resolved.appleMusicUrl,
        },
      };
    } catch {
      // Skip tracks that fail iTunes lookup/preview and try next shuffled candidate
    }
  }

  return null;
}

export function suggestRoomTracks(
  customPool: RoomTrackInput[],
  rawQuery: string,
  limit = 8,
): SearchSuggestion[] {
  const q = normalizeText(rawQuery);
  if (q.length < 2) return [];

  const combinedSource: SearchSuggestion[] = [
    ...customPool,
    ...TRACK_CATALOG,
    ...EXTRA_AUTOCOMPLETE_SONGS,
  ];

  const seen = new Set<string>();
  const matches: SearchSuggestion[] = [];

  for (const item of combinedSource) {
    const hay = normalizeText(`${item.title} ${item.trackName} ${item.artistName} ${item.albumName}`);
    if (!hay.includes(q)) continue;

    const dedupeKey = `${normalizeText(item.title)}::${normalizeText(item.artistName)}`;
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);

    matches.push({
      id: item.id,
      title: item.title,
      trackName: item.trackName,
      artistName: item.artistName,
      albumName: item.albumName,
      artworkUrl: item.artworkUrl,
    });
    if (matches.length >= limit) break;
  }

  return matches;
}
