# Screen Map & Navigation Architecture

## Core Philosophy

- **No barrier to entry** — land on feed instantly, no sign-up required
- **TikTok paradigm** — one post per swipe, full focus, vertical discovery
- **Auth gated only for actions** — read freely, engage only when signed in

---

## Screen Map

```
📱 App
 ├── 🏠 Feed (default landing)
 │    ├── Top: Category chips (horizontal scroll)
 │    ├── Main: Vertical swipe (1 post at a time)
 │    │    ├── DID YOU KNOW? headline
 │    │    ├── Summary / hook
 │    │    ├── Quick facts preview
 │    │    └── Right-side action bar: [💬] [❤️] [🔖] [↗️]
 │    │                                              │
 │    └── Tap post → ────────────────────────────────┘
 │                   
 ├── 📄 Article Detail (full article + comments)
 │    ├── Full content
 │    ├── Sources
 │    └── Comments section (auth required to post)
 │
 ├── 🔍 Search
 │    ├── Search bar
 │    ├── Trending topics
 │    └── Results (vertical feed, same card style)
 │
 ├── 📂 Categories
 │    ├── Grid of category cards
 │    └── Tap → filtered feed of that category
 │
 ├── 🔖 Bookmarks (auth required)
 │    └── Saved posts (vertical feed, same card style)
 │
 └── 👤 Profile (auth required)
      ├── Reading history
      ├── Saved bookmarks
      ├── Activity / liked posts
      └── Settings (theme toggle, etc.)
```

---

## Navigation Architecture

| Pattern | Detail |
|---|---|
| **Feed** | Vertical swipe pager — no tabs, full focus |
| **Categories** | Chips at top of feed OR dedicated screen from icon |
| **Article Detail** | Push navigation from feed tap |
| **Search** | Modal or push from feed icon |
| **Bookmarks / Profile** | 2 bottom tabs: **Feed** + **Profile** (bookmarks, history, settings nested under Profile) |

---

## Auth Strategy

| Action | Sign-in Required |
|---|---|
| Browse feed, scroll | ❌ No |
| Read full article | ❌ No |
| Search | ❌ No |
| Like | ✅ Yes |
| Comment | ✅ Yes |
| Bookmark | ✅ Yes |
| Profile access | ✅ Yes |

---

## Notes

- Right-side action bar on feed cards keeps the TikTok feel
- Auth is lightweight — can start with email/password or magic link, expand later
- Profile tab serves as the hub for all personalized features
