# SurSnap — v1 Prototype Design Spec

- **Date:** 2026-11-26
- **Stack:** React 19 + TypeScript + Vite + Web Audio API
- **Audio Source:** iTunes Search & Lookup API (`country=in`)

## Scope (v1)
1. **Solo + Screen-Share Ready Gameplay:** Progressive audio reveal (`0.1s`, `0.5s`, `1s`, `3s`, `7s`, `15s`) from `0.0s` of each track's 30-second iTunes preview, expanding to full `30s` upon win/reveal.
2. **Verified Indian Music Categories:** All India Mix, Desi Pop & Viral Hits, Modern Bollywood (2010s–Now), Bollywood Nostalgia (90s–2000s), Punjabi Bangers, and Desi Hip-Hop & Indie.
3. **Guessing & Clues:** Hybrid local + live `country=in` iTunes autocomplete with Green (match), Amber (artist match), and Red (miss/skip) feedback, plus local session streak and points tracking.
4. **Future v2 (Out of Scope for v1):** Custom playlist builder and online multiplayer rooms.
