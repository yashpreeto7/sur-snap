export const ATTEMPT_DURATIONS = [0.1, 1, 3, 7, 15, 30] as const;
export const MAX_PREVIEW_SECONDS = 30;

export type CategoryId =
  | 'all-india'
  | 'old-is-gold'
  | 'bollywood-classics'
  | 'modern-bollywood'
  | 'desi-pop'
  | 'punjabi'
  | 'dhh-indie';

export interface CategoryMeta {
  id: CategoryId;
  name: string;
  shortTag: string;
  subtitle: string;
  tagline: string;
  accent: string;
}

export interface CatalogTrack {
  id: number;
  title: string;
  trackName: string;
  artistName: string;
  albumName: string;
  artworkUrl: string;
  category: Exclude<CategoryId, 'all-india'>;
}

export type PlaylistSource = 'apple-music' | 'youtube' | 'spotify';

export interface CustomPlaylist {
  id: string;
  name: string;
  source: PlaylistSource;
  sourceUrl: string;
  tracks: CatalogTrack[];
  disabledIds?: number[];
  createdAt: number;
}

export interface SearchSuggestion {
  id: number;
  title: string;
  trackName: string;
  artistName: string;
  albumName: string;
  artworkUrl: string;
}

export type GuessStatus = 'correct' | 'artist-match' | 'wrong' | 'skipped';

export interface GuessEntry {
  attemptIndex: number;
  durationSec: number;
  status: GuessStatus;
  guessedTitle?: string;
  guessedArtist?: string;
}

export type RoundPhase = 'loading' | 'playing' | 'won' | 'lost' | 'error';

export interface SessionStats {
  played: number;
  won: number;
  streak: number;
  bestStreak: number;
  points: number;
}
