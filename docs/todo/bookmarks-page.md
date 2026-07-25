# Bookmarks Page

**Status:** ✅ Completed
**Date:** 2026-07-24

## Tasks

| # | Task | Status |
|---|---|---|
| 1 | Add `bookmarkedItems` mock data to `lib/mock-data.ts` | ✅ |
| 2 | Build **logged out** state — icon, feature list, auth CTAs | ✅ |
| 3 | Build **logged in, empty** state — bookmark icon, helpful message | ✅ |
| 4 | Build **logged in, with items** — card list (image, category, title, date, bookmark icon) | ✅ |

## States

- **Logged Out**: bookmark icon in circle, "Save articles for later" prompt, feature list, Create Account / Sign In buttons
- **Logged In, Empty**: larger bookmark icon, "No saved articles yet" + subtitle
- **Logged In, Has Items**: list of cards matching search result card style, filled bookmark indicator on right

## Files Modified

| File | Action |
|------|--------|
| `app/(tabs)/bookmarked.tsx` | **Rewritten** from placeholder with full 3-state layout |
| `lib/mock-data.ts` | **Extended** with `bookmarkedItems` array (3 mock saved articles) |
| `docs/todo/bookmarks-page.md` | **Created** |

## Key Decisions

- Card design matches search result cards for visual consistency
- Filled `bookmark` icon (indigo) on each card vs outline on feed
- Uses `useAuthStore` same as profile for auth state
- Subtitle shows count: "3 saved articles"
