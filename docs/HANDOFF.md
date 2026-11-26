# SurSnap — Project Handoff (Milestones 2 & 3)

## Overview
**SurSnap** is a Songless-style Indian music guessing web app (React 19 + TypeScript + Vite 8 + Tailwind CSS v4 + Web Audio API).

## What Is Already Built & Verified (Milestone 1 Complete)
- **Built-in Indian Music Catalog (`src/data/catalog.ts`):**
  - **436 verified playable Indian tracks** across 7 packs (`all-india`, `old-is-gold`, `bollywood-classics`, `modern-bollywood`, `desi-pop`, `punjabi`, `dhh-indie`) plus `EXTRA_AUTOCOMPLETE_SONGS`.
- **Precision Web Audio Engine (`src/services/audioEngine.ts` & `src/services/itunes.ts`):**
  - Fetches fresh 30-second `.m4a` previews live from `itunes.apple.com/lookup?country=in` (or `search` fallback when `trackId <= 0`), decodes into an `AudioBuffer`, and plays sample-accurate snippets from `0.0s` across **`0.1s`, `1s`, `3s`, `7s`, `15s`, `30s`** (`ATTEMPT_DURATIONS` in `src/types/game.ts`).
  - Scoring (`STEP_POINTS`): `[1000, 800, 650, 500, 350, 250]`.
- **Playlist Link Importer (`server/playlistImporter.ts` + `src/services/playlistImportClient.ts` + `src/components/ImportPlaylistDialog.tsx`):**
  - Currently exposed in dev via Vite middleware (`POST /api/import-playlist` in `vite.config.ts`).
  - Extracts public **YouTube / YouTube Music** playlists (with `continuationCommand.token` pagination up to ~1,500 tracks), **Apple Music** playlists (`ld+json` + `serialized-server-data`), and **Spotify** embed playlists (`__NEXT_DATA__`).
  - Supports **merging** new playlist links into an existing custom pack (`dedupeTracksByTitleAndArtist` in `src/utils/matching.ts`, preserving same-title songs by different artists).
  - Pre-resolves up to 12 unmatched tracks and keeps the rest with negative placeholder IDs for lazy on-demand resolution (avoids Apple's ~20 req/min `/search` rate limit).
- **Pack Management (`src/components/ManagePackDialog.tsx` & `src/App.tsx`):**
  - Rename imported packs, filter tracks, toggle active/muted tracks via checkboxes (`disabledIds?: number[]`), bulk select/deselect/remove muted, delete single tracks, and auto-skip up to 3 consecutive unavailable lazy previews.
  - Persists custom packs in `localStorage` under `sursnap_custom_playlists_v1` and stats under `sursnap-stats-v2`.
- **UI & Checks:**
  - Obsidian + cyan neon UI (`src/index.css`, `src/components/AudioPlayerCard.tsx`, `src/components/GuessInput.tsx`, `src/components/HelpDialog.tsx`).
  - Passing checks: `npm run lint` (`oxlint`), `npm run build` (`tsc -b && vite build`), and `node --test src/utils/matching.test.ts` (6/6 tests).

---

## Next Targets

### Milestone 2 — GitHub + Production Hosting
1. Initialize git in `C:\Users\Yashpreet_o7\Desktop\sur-snap` and publish to GitHub (via Antigravity IDE Source Control).
2. Add a production serverless endpoint for `server/playlistImporter.ts` (e.g. `api/import-playlist.ts` for Vercel, or a unified Node/Express server if self-hosting both Milestones 2 & 3 together) so `POST /api/import-playlist` works in deployed production, not only `npm run dev`.
3. Add shareable pack export/import (URL hash/query or JSON share code) so friends can load custom packs easily.

### Milestone 3 — Live Multiplayer Rooms
1. Real-time room system (short room code like `ABCD`, player display names, host controls).
2. Host picks any built-in category or imported custom pack; server broadcasts the round's track/target metadata (or round seed/ID without spoiling the title to clients until round end, OR verified server-side guess evaluation so players can't inspect network/DOM!).
3. Synchronized snippet progression (`0.1s` → `1s` → `3s` → `7s` → `15s` → `30s`), private per-player guess submission, speed/attempt points, and live round/match scoreboard.
4. Recommended architecture options to evaluate with the user:
   - **Option A:** Vercel (frontend + `/api/import-playlist`) + **PartyKit** or **Supabase Realtime**.
   - **Option B:** Single **Node + Express + Socket.io** server (serves `dist/`, `/api/import-playlist`, and WebSockets together on Render / Railway / Fly.io).
