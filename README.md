# SurSnap

A Songless-style Indian music guessing game built with React, TypeScript, Vite, and the Web Audio API.

## Features
- **0.1s Precision Playback:** Preloads 30-second previews from the Indian iTunes Store (`country=in`) and plays exact `0.1s` → `1s` → `3s` → `7s` → `15s` → `30s` clips from `0.0s`.
- **Curated Indian Categories:** All India Mix, Desi Pop & Viral Hits, Modern Bollywood, Bollywood Classics, Old Is Gold, Punjabi Bangers, and Desi Hip-Hop & Indie.
- **Custom Playlist Importer & Pack Manager:** Import public YouTube / YouTube Music, Apple Music, and Spotify playlist links, merge playlists into existing packs, and toggle/remove tracks anytime.
- **Smart Guess Matching:** Combines pack tracks with live Indian iTunes autocomplete and highlights Green (exact match) or Amber (right artist, wrong song).

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal.

## Production Hosting

SurSnap includes both a standalone Node production server (`server/prodServer.ts`) and a Vercel serverless function (`api/import-playlist.ts`) so `POST /api/import-playlist` works in production.

### Option 1: Render / Railway (Recommended — ready for WebSocket multiplayer)

Render reads `render.yaml` automatically, or configure manually:
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Health Check:** `/api/health`
- **Node Version:** `>=22.18.0`

### Option 2: Vercel

Vercel reads `vercel.json` automatically:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **API Route:** `/api/import-playlist` (`api/import-playlist.ts`)
