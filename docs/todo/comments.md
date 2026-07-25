# Comments System

**Status:** ✅ Completed
**Date:** 2026-07-24

## Tasks

| # | Task | Status |
|---|---|---|
| 1 | Add `postComments` mock data to `lib/mock-data.ts` | ✅ |
| 2 | Add `myComments` mock data for profile comments page | ✅ |
| 3 | Add comments section inside post preview (`app/post/[id].tsx`) | ✅ |
| 4 | Wire search icon in feed to navigate to search tab | ✅ |
| 5 | Create profile sub-pages: Reading History, Liked Posts, Comments, About | ✅ |
| 6 | Register new routes in root `_layout.tsx` | ✅ |
| 7 | Wire profile menu items to navigate to sub-pages | ✅ |

## New Routes

| Route | File | Description |
|---|---|---|
| `/profile/reading-history` | `app/profile/reading-history.tsx` | List of previously read articles |
| `/profile/liked-posts` | `app/profile/liked-posts.tsx` | List of liked articles |
| `/profile/comments` | `app/profile/comments.tsx` | User's comment history |
| `/profile/about` | `app/profile/about.tsx` | App info, version, terms, privacy, contact |

## Post Preview Comments

- Comments section added below article content, above input area
- Each comment: avatar (Ionicons person-circle), author name, timestamp, content, heart count
- Comments data from `postComments` mock data in `lib/mock-data.ts`
- Like count is a counter, no user list shown (as requested)

## Feed Search Icon

- Search icon in header now navigates to `/(tabs)/search` on press

## Files Modified

| File | Action |
|---|---|
| `app/(tabs)/feed.tsx` | Search icon wired to navigate to search |
| `app/_layout.tsx` | Registered 4 new profile routes |
| `app/post/[id].tsx` | Added comments section |
| `app/(tabs)/profile.tsx` | Wired menu items to sub-pages |
| `lib/mock-data.ts` | Added `postComments`, `myComments`, `likedPosts`, `readingHistory` |
| `app/profile/reading-history.tsx` | **Created** |
| `app/profile/liked-posts.tsx` | **Created** |
| `app/profile/comments.tsx` | **Created** |
| `app/profile/about.tsx` | **Created** |

## What's Next

- Wire comment send button to backend API
- Wire like buttons on comments to backend
- Connect all mock data to real API calls
