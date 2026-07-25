# Search Layout

**Status:** ✅ Completed
**Date:** 2026-07-24

## Tasks

| # | Task | Status |
|---|---|---|
| 1 | Add `trendingTopics` and `SearchResult` data to `lib/mock-data.ts` | ✅ |
| 2 | Build search header with Kivo logo | ✅ |
| 3 | Build search bar row (70% input + 30% filter icon button) | ✅ |
| 4 | Add trending topics horizontal scroll section | ✅ |
| 5 | Build results list with image-left + category/title/date-right cards | ✅ |
| 6 | Wire filtering: show trending when empty, results when typing | ✅ |
| 7 | Wrap screen in `KeyboardAvoidingView` + `keyboardShouldPersistTaps` | ✅ |

## Layout

```
┌──────────────────────────┐
│  Kivo                    │  Header
├──────────────────────────┤
│  [🔍 Search...     ] [🧴]│  Search row (70/30 split)
├──────────────────────────┤
│  Trending                │  Section header
│  [🔥AI] [🔥Quantum] ...  │  Horizontal pill scroll
│                          │
│  Results                 │  Section header (when typing)
│  ┌────┬────────────────┐ │
│  │ 🖼 │ ◎ Tech         │ │  Result card
│  │    │ Title here...  │ │
│  │    │ 2 hours ago    │ │
│  └────┴────────────────┘ │
│  ...                     │
└──────────────────────────┘
```

## Files Modified

| File | Action |
|------|--------|
| `app/(tabs)/search.tsx` | **Rewritten** from placeholder to full search layout |
| `lib/mock-data.ts` | **Extended** with `trendingTopics` array, `SearchResult` type, `searchResults` data |

## Key Decisions

- Search row uses `flex: 7` / `flex: 3` ratio for the 70/30 split
- Filter button uses `options-outline` Ionicons icon
- Trending pills tap to fill the search input with that topic's label
- Image uses `expo-image` with `contentFit="cover"` and fallback placeholder icon
- Empty states for "no recent searches" and "no results"
- All mock data — no backend connection yet

## What's Next

- Wire filter button to open filter modal/sheet
- Add real image loading from API results
- Add pull-to-refresh on results
- Implement infinite scroll pagination
