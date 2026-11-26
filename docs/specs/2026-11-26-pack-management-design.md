# SurSnap — Milestone 1: Pack Management & Reliability

- **Date:** 2026-11-26
- **Scope:** Client-side pack editing (`CustomPlaylist`) and resilient auto-skip for imported packs.

## Features
1. **Manage Pack Modal (`ManagePackDialog.tsx`):**
   - Rename any imported pack.
   - Filter tracks by song title or artist.
   - Toggle individual tracks active/muted via checkboxes (`disabledIds?: number[]` persisted in `localStorage`) without losing them from the pack list.
   - Bulk actions: **Select All**, **Deselect All**, and **Remove Unchecked** (permanent removal), plus per-row **Remove**.
   - Guard against leaving 0 active tracks in a pack.
2. **Gameplay Integration (`App.tsx`):**
   - Sidebar **Manage** icon button on every imported pack + quick **Manage Pack** button in the sidebar footer when a custom pack is active.
   - Active pool & queue respect `disabledIds`; muting or removing the currently playing track advances to an active track automatically.
   - **Auto-skip unavailable previews:** Up to 3 consecutive lazy-resolved imported tracks with no Apple Music India preview auto-advance to the next track with a dismissible notice.
