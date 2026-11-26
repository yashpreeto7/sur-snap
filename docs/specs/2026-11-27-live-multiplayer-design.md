# SurSnap — Milestone 3: Live Multiplayer Rooms Design Spec

- **Date:** 2026-11-27
- **Scope:** Real-time private multiplayer rooms (`classic-sync`, `speed-race`, `buzz-in`) running over a shared Node WebSocket server (`ws`) integrated into both Vite dev middleware (`vite.config.ts`) and the standalone production server (`server/prodServer.ts`).

---

## 1. Objectives & Constraints

1. **Zero-login private rooms:** Players join using a 4-letter room code (or `?room=CODE` invite link) and a display nickname (1–20 characters).
2. **Host-configured packs:** The host picks any built-in Indian category (`all-india`, `old-is-gold`, `bollywood-classics`, `modern-bollywood`, `desi-pop`, `punjabi`, `dhh-indie`) or one of their locally saved custom imported playlists (`CustomPlaylist`). Custom pack track lists are uploaded to the room when created/updated so guests play immediately without importing links.
3. **Host-selected mode & match length:** Host picks `classic-sync` (default), `speed-race`, or `buzz-in`, and `5`, `10`, or `15` rounds (clamped if the chosen pack has fewer active playable tracks).
4. **Anti-spoiler integrity:** During `loading-round`, `playing`, and `buzz-window`, clients never receive the target track's ID, title, artist, album, artwork, or iTunes URL. Audio loads through a server proxy endpoint, and guesses are evaluated strictly server-side.
5. **Single-deployment Render compatibility:** All HTTP, WebSocket (`/ws`), static assets, and `/api/*` endpoints run inside one Node process (`npm start`), while `vite.config.ts` attaches the exact same handlers during `npm run dev`.

---

## 2. Architecture & Module Boundaries

### Shared Types (`src/types/multiplayer.ts`)

Defines the wire protocol and room state shapes used by both server and frontend:
- `RoomMode = 'classic-sync' | 'speed-race' | 'buzz-in'`
- `RoomPhase = 'lobby' | 'loading-round' | 'playing' | 'buzz-window' | 'round-reveal' | 'finished'`
- `PlayerRoundStatus = 'idle' | 'ready' | 'guessing' | 'artist-match' | 'solved' | 'wrong' | 'locked-out' | 'skipped'`
- `PublicRoomPlayer`: `{ id, name, score, isHost, connected, roundStatus, attemptIndex, roundPointsDelta, lastGuessLabel? }`
- `RevealedTrackInfo`: `{ id, title, trackName, artistName, albumName, artworkUrl, appleMusicUrl? }`
- `PublicRoomState`: `{ code, mode, packId, packName, roundCount, currentRound, totalRounds, phase, stepIndex, phaseEndsAt, serverNow, audioUrl, buzzedPlayerId, players, revealedTrack, notice? }`
- Client-to-server WebSocket messages:
  - `create_room` (`{ nickname, settings, customTracks? }`)
  - `join_room` (`{ code, nickname, reconnectToken? }`)
  - `update_settings` (`{ settings, customTracks? }`) — host only, in `lobby`
  - `start_match` — host only, in `lobby`
  - `round_ready` (`{ roundIndex }`)
  - `submit_guess` (`{ roundIndex, candidate: { id?, title, trackName?, artistName } }`)
  - `player_skip` (`{ roundIndex }`)
  - `buzz_in` (`{ roundIndex }`)
  - `next_round` — host only, in `round-reveal`
  - `play_again` — host only, in `finished`
  - `leave_room`
- Server-to-client WebSocket messages:
  - `session_assigned` (`{ roomCode, playerId, reconnectToken }`)
  - `room_state` (`{ state: PublicRoomState }`)
  - `guess_feedback` (`{ status: GuessStatus, message: string, pointsAwarded: number, lockedOut?: boolean }`)
  - `error` (`{ code: string, message: string }`)

### Server Modules (`server/multiplayer/`)

1. **`server/multiplayer/trackResolver.ts`**
   - Accepts built-in `CategoryId` (filtering `BUILT_IN_TRACKS` from `src/data/catalog.ts`) or host-submitted `CustomPlaylist` active tracks (`disabledIds` excluded).
   - Shuffles candidate pool using Fisher-Yates and lazily resolves up to `roundCount` playable tracks via `resolveTrackPreview` (`src/services/itunes.ts`), skipping tracks lacking a preview (up to 6 fallback attempts per round slot).
   - Stores resolved `previewUrl` and secret `RevealedTrackInfo` privately on the server room object; never puts them into `PublicRoomState` until `round-reveal` or `finished`.
   - Builds a normalized autocomplete pool combining `BUILT_IN_TRACKS` plus any resolved/uploaded custom pack entries, exposing `suggestTracks(room, query)` returning at most 8 `{ id, title, trackName, artistName, albumName, artworkUrl }` results for queries of length `>= 2`.

2. **`server/multiplayer/roomManager.ts`**
   - Pure in-memory manager parameterized by clock (`nowFn`) and timer scheduling hooks so every game-mode transition can be unit-tested deterministically.
   - Room codes: 4 uppercase non-ambiguous characters (`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`), max 12 players per room, empty/idle room TTL eviction (30 minutes).
   - Reconnect & host migration: if a disconnected player reconnects with their `reconnectToken` within the match, they reclaim their existing slot and score. If the host disconnects permanently (or clicks **Leave Room**) while other connected players remain, host automatically transfers to the oldest connected player.
   - Reuses `evaluateGuess` (`src/utils/matching.ts`) for exact title+artist matching (`correct`), same-artist detection (`artist-match`), and misses (`wrong`).

3. **`server/multiplayer/wsServer.ts`**
   - Uses `ws` (`WebSocketServer({ noServer: true })`) attached to `http.Server` on HTTP upgrade path `/ws`.
   - Handles HTTP endpoints via a shared helper called from both `vite.config.ts` (`configureServer`) and `server/prodServer.ts`:
     - `GET /api/rooms/:code/audio/:roundIndex`: fetches the current round's resolved `.m4a` bytes upstream from Apple CDN and pipes/returns `audio/mp4` with `Cache-Control: no-store` and no track title/artist headers. Returns `404` if room/round does not match or round is no longer active/loading.
     - `GET /api/rooms/:code/suggest?q=...`: validates room exists and query length `>= 2`, returns JSON suggestions via `suggestTracks`.

### Frontend Modules (`src/`)

1. **`src/services/multiplayerClient.ts`**
   - Manages WebSocket lifecycle (`ws://` or `wss://` relative to `window.location.host` + `/ws`), JSON message serialization, clock-offset estimation (`serverNow - Date.now()`), and `sessionStorage` reconnect persistence (`sursnap_mp_session_v1`).

2. **`src/components/multiplayer/MultiplayerLobby.tsx`**
   - Nickname input, **Create Room** card (mode cards for Classic Sync / Speed Race / Buzz-In, pack selector including imported packs, `5 / 10 / 15` round chips), and **Join Room** card (4-letter code + prefilled from `?room=CODE`).

3. **`src/components/multiplayer/MultiplayerRoomView.tsx`**
   - **Waiting Lobby:** Room code pill, **Copy Invite Link** button (`?room=CODE`), host-editable settings summary, player roster, and **Start Match** button.
   - **Live Match:** Header bar (`Round X / N`, mode badge, countdown timer, step progress), reusable snippet playback controls via `AudioEngine` loading `/api/rooms/:code/audio/:roundIndex` (plus auto-play step trigger or buzz control depending on mode), `GuessInput` fed by `/api/rooms/:code/suggest` + live iTunes autocomplete, and live compact scoreboard showing each player's status and points.
   - **Round Reveal & Podium:** Artwork, song title, artist, Apple Music link, round point deltas (`+1000`, `−150`, etc.), host **Next Round** button (`8s` auto-advance fallback), and final podium with **Play Again (Keep Room)**.

4. **`src/App.tsx` Integration**
   - Top bar mode toggle pill (**Solo** | **Multiplayer**). Switching to Multiplayer keeps Solo stats untouched; visiting `/?room=CODE` automatically switches to Multiplayer and prefills the code.

---

## 3. Mode State Machines & Scoring Rules

All rounds begin in `loading-round`:
- Clients download & decode `/api/rooms/:code/audio/:roundIndex` into `AudioBuffer`, then send `round_ready`.
- Round enters `playing` when all connected players confirm `round_ready` or after a `4,000ms` sync timeout.

### Mode 1: `classic-sync` (Default)
- `stepIndex` progresses through `0..5` (`[0.1, 1, 3, 7, 15, 30]` seconds).
- Each step gives `12,000ms` (`phaseEndsAt`) where clients auto-play that step's snippet from `0.0s`.
- Players submit at most 1 guess per step (`correct` stops that player as `solved`; `artist-match` or `wrong` marks their status for that step without stopping later steps). Players may also click **Skip** for the current step.
- **Early step advance:** If all connected un-solved players have either solved, guessed once on the current step, or clicked skip, advance to `stepIndex + 1` (or `round-reveal` if `stepIndex === 5`).
- **Scoring:** `STEP_POINTS[stepIndex] + Math.round(remainingStepRatio * 150)` (`1000..250` base + `0..150` speed bonus).

### Mode 2: `speed-race`
- Shared `45,000ms` round timer (`phaseEndsAt`); `stepIndex` stays informational while each player owns an independent `attemptIndex` (`0..5`).
- Clients play/skip locally through `ATTEMPT_DURATIONS` using the decoded `AudioBuffer` and report `player_skip` (updates server-side `attemptIndex`) and `submit_guess`.
- Up to 6 total attempts per player (`correct` awards `STEP_POINTS[attemptIndex] + Math.round(remainingRoundSeconds * 5)`).
- **Early round end:** Ends immediately and enters `round-reveal` once every connected player is `solved`, `skipped` all 6, or exhausted 6 attempts.

### Mode 3: `buzz-in`
- `stepIndex` progresses `0..5` (`12,000ms` listening/buzz window per step).
- Any non-locked-out player may send `buzz_in`. First `buzz_in` accepted by the server switches phase to `buzz-window` (`8,000ms`, recording remaining step time and locking out other buzzes). Clients pause snippet audio.
- **Correct guess by buzzed player:** Awards `STEP_POINTS[stepIndex]` and immediately enters `round-reveal`.
- **Wrong guess or `8,000ms` buzz timeout:** Deducts `150` points (player score floored at `0`), sets that player's status to `locked-out` for the rest of the round, clears `buzzedPlayerId`, and resumes `playing` at the current step (or advances/reveals if all connected players are now `locked-out`).

---

## 4. Error Handling & Edge Cases

- **Unplayable custom/catalog track on server:** `trackResolver.ts` retries up to 6 tracks from the shuffled pool before failing the round gracefully (`notice` shown and skipped to next round).
- **Empty room / all players leave:** Room timers are cancelled cleanly and room state is deleted from memory.
- **Last-second audio request failure:** Client shows an inline retry/warning without crashing the match, and does not stall other players past the `4,000ms` `loading-round` cap.
- **Invalid/full/in-progress room join:** Server sends structured `error` (`ROOM_NOT_FOUND`, `ROOM_FULL`, `MATCH_IN_PROGRESS`, `DUPLICATE_NAME`), keeping the user on `MultiplayerLobby` with clear inline feedback.
- **Rate/size safety:** WebSocket max frame payload capped at `512 KB` (supports host custom packs up to `1,500` track summaries trimmed to `{ id, title, trackName, artistName, albumName, artworkUrl }`), with sanitized nicknames (`1–20` chars).

---

## 5. Verification Plan

1. **Automated Unit Tests (`node --test`):**
   - `server/multiplayer/roomManager.test.ts` testing: room creation/join/reconnect/host migration, `PublicRoomState` anti-spoiler assertions (zero track leaks before reveal), and full progression/scoring/lockout flows across `classic-sync`, `speed-race`, and `buzz-in`.
   - Existing `src/utils/matching.test.ts` continues passing.
2. **Typecheck, Lint & Build:**
   - `npm run lint` (`oxlint`), `npm run build` (`tsc -b && vite build`), and `npx tsc -p tsconfig.node.json --noEmit` (verifying `server/multiplayer/**` strict typing).
3. **Live Browser Verification:**
   - Start local app (`npm run dev` or `node server/prodServer.ts`) and verify two simultaneous browser tabs/contexts creating a room, joining via code, loading proxied `/api/rooms/:code/audio/0`, submitting guesses, verifying reveal + scoreboard updates, and testing `?room=CODE` invite link flow.
