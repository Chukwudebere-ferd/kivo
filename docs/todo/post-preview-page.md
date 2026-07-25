# Post Preview Page

**Status:** ✅ Completed
**Date:** 2026-07-24

## Tasks

| # | Task | Status |
|---|---|---|
| 1 | Create shared mock data in `lib/mock-data.ts` (FeedItem type + enriched content) | ✅ |
| 2 | Create Post Preview screen at `app/post/[id].tsx` | ✅ |
| 3 | Wire feed card tap to navigate to post preview via `router.push` | ✅ |
| 4 | Register `post/[id]` route in root layout | ✅ |

## Layout (top to bottom)

```
┌──────────────────────────┐
│  ←          Kivo      ⋮  │   Header (back + logo + menu)
├──────────────────────────┤
│                          │
│     Hero Image (220px)   │   expo-image, 100% width, contentFit="cover"
│                          │
├──────────────────────────┤
│  ◎ Tech  •  1h ago       │   Category badge (indigo) + time dot separator
│                          │
│  Post Topic Title        │   Font size 24, weight 700, white
│                          │
│  ─────────────────────── │   1px divider (#1F1F2E)
│                          │
│  Subtitle (gray 500)     │
│  Content body text       │   Scrollable article content
│  (full article here)     │
│                          │
│  ─────────────────────── │
│                          │
│  💬 142  ❤ 2.4K         │   Stats row: 4 items (comment, like, save, share)
│  🔖 1.1K  ↗ 456         │   Each with count + label
│                          │
├──────────────────────────┤
│  🪪  Write a comment...  │   Fixed bottom input with avatar icon
│                     [→]  │   Rounded input, send button
└──────────────────────────┘
```

## Files Created/Modified

| File | Action |
|---|---|
| `lib/mock-data.ts` | **Created** — shared `FeedItem` type, `feedItems` array with content body, `formatCount` utility, `categories` array |
| `app/post/[id].tsx` | **Created** — full post preview page with hero image, meta, content, stats, comment input |
| `app/(tabs)/feed.tsx` | **Modified** — imports from mock-data, card tap navigates to post preview, uses `formatCount` |
| `app/_layout.tsx` | **Modified** — added `post/[id]` route with header hidden |

## Key Design Decisions

- **Routes within tabs**: `post/[id]` sits in the root stack (above tabs), so the tab bar hides when viewing a post
- **Stats layout**: 4-column horizontal row with counts + labels for comments, likes, saves, shares
- **Comment input**: Fixed at the bottom, uses `person-circle` Ionicons as avatar placeholder, multiline TextInput with rounded styling, send button in indigo tint
- **Hero image**: Only renders when `mediaUrl` exists; fixed 220px height, 100% width
- **No emoji**: All icons use Ionicons via `@expo/vector-icons`

## What's Next

- Wire comment send button to backend API
- Add real user avatar (from auth state) inside the comment input
- Pull-to-refresh on post content
- Related posts / next post suggestion at the bottom