# UI Redesign — Feed, Tabs, Icons

Completed 2026-07-24

## Changes Made

### 1. Bottom Nav — expanded to 5 tabs

- **Home** (feed) — `home` / `home-outline`
- **Search** — `search` / `search-outline`
- **Categories** — `grid` / `grid-outline`
- **Bookmarks** — `bookmark` / `bookmark-outline`
- **Profile** — `person` / `person-outline`

All emoji-based tab icons replaced with Ionicons via `@expo/vector-icons`.

### 2. New tab screens created

- `app/(tabs)/search.tsx` — placeholder
- `app/(tabs)/categories.tsx` — placeholder
- `app/(tabs)/bookmarked.tsx` — placeholder

### 3. Profile page — emoji removed

- `☺` avatar placeholder → `person-outline` Ionicons
- `✓` bullet → `checkmark-circle` Ionicons
- Empty states now show relevant outline icons (time, bookmark)

### 4. Feed (Home) — full TikTok-style layout

**Header**: `Kivo` (left) | `search` icon (right, same line)

**Categories row**: horizontal ScrollView
- "For You" first, black (`#000000`) active background
- Each pill has an icon + label
- Active state: white text, black bg. Inactive: dark bg, gray text

**TikTok video card**:
- Full-height media placeholder area
- **Right-side action buttons** (stacked vertically): Follow (circled ring), Like (with count), Comment (with count), Bookmark, Share
- **Bottom-left overlay**: Category badge + timestamp + article title
- Gradient overlay at bottom for readability

### Files modified

| File | Action |
|------|--------|
| `app/(tabs)/_layout.tsx` | Rewritten — 5 tabs with Ionicons |
| `app/(tabs)/feed.tsx` | Rewritten — TikTok layout |
| `app/(tabs)/profile.tsx` | Rewritten — emoji → icons |
| `app/(tabs)/search.tsx` | Created |
| `app/(tabs)/categories.tsx` | Created |
| `app/(tabs)/bookmarked.tsx` | Created |
| `package.json` | Added `@expo/vector-icons` dependency |

### What's next (not implemented)

- Wire search tab with real search UI
- Wire categories tab with category grid
- Wire bookmarks tab with actual saved articles
- Real media (images/video) in feed cards
- Swipe-up gesture for next article
- Connect auth to real backend API
