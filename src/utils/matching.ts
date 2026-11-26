import { cleanTrackTitle } from '../services/itunes.ts';
import type { GuessStatus } from '../types/game.ts';

/**
 * Normalizes a song title or artist token for comparison.
 */
export function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’"`]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function splitArtists(artistString: string): string[] {
  return artistString
    .split(/,|&|\bfeat\.?\b|\bft\.?\b|\bwith\b|\bx\b|\+/gi)
    .map((part) => normalizeText(part))
    .filter((part) => part.length >= 2);
}

export function artistsOverlap(a: string, b: string): boolean {
  const listA = splitArtists(a);
  const listB = splitArtists(b);
  if (listA.length === 0 || listB.length === 0) return false;

  return listA.some((itemA) =>
    listB.some(
      (itemB) =>
        itemA === itemB ||
        (itemA.length >= 4 && itemB.includes(itemA)) ||
        (itemB.length >= 4 && itemA.includes(itemB)),
    ),
  );
}

export interface GuessTarget {
  id: number;
  title: string;
  trackName: string;
  artistName: string;
}

export interface GuessCandidate {
  id?: number;
  title: string;
  trackName?: string;
  artistName: string;
}

export function evaluateGuess(
  candidate: GuessCandidate,
  target: GuessTarget,
): GuessStatus {
  if (candidate.id !== undefined && candidate.id === target.id) {
    return 'correct';
  }

  const normCandidateTitle = normalizeText(cleanTrackTitle(candidate.title || candidate.trackName || ''));
  const normTargetTitle = normalizeText(cleanTrackTitle(target.title || target.trackName));

  const sameTitle =
    normCandidateTitle.length > 0 &&
    normTargetTitle.length > 0 &&
    (normCandidateTitle === normTargetTitle ||
      normalizeText(candidate.trackName ?? '') === normalizeText(target.trackName));

  const sameArtist = artistsOverlap(candidate.artistName, target.artistName);

  if (sameTitle && sameArtist) {
    return 'correct';
  }

  if (sameArtist) {
    return 'artist-match';
  }

  return 'wrong';
}

export interface DedupableTrack {
  id: number;
  title: string;
  artistName: string;
}

/**
 * Treats two tracks as the same song only when they share an ID or share
 * both normalized title and at least one overlapping artist.
 */
export function isSameTrack(a: DedupableTrack, b: DedupableTrack): boolean {
  if (a.id > 0 && b.id > 0 && a.id === b.id) return true;
  const normA = normalizeText(cleanTrackTitle(a.title));
  const normB = normalizeText(cleanTrackTitle(b.title));
  if (!normA || !normB || normA !== normB) return false;
  return artistsOverlap(a.artistName, b.artistName);
}

export function dedupeTracksByTitleAndArtist<T extends DedupableTrack>(
  existing: T[],
  incoming: T[],
): { combined: T[]; added: T[] } {
  const result = [...existing];
  const added: T[] = [];

  for (const candidate of incoming) {
    if (result.some((item) => isSameTrack(item, candidate))) {
      continue;
    }
    result.push(candidate);
    added.push(candidate);
  }

  return { combined: result, added };
}
