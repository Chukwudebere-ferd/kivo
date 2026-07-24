# Auth UI — Wireframe

**Status:** ✅ Completed
**Date:** 2026-07-24

## Screens Built

| Screen | File | Description |
|---|---|---|
| Welcome | `app/(auth)/welcome.tsx` | Gate screen — "Create Account" / "Sign In" / "Maybe Later" |
| Sign In | `app/(auth)/sign-in.tsx` | Email + password login with validation |
| Sign Up | `app/(auth)/sign-up.tsx` | Email + password + confirm with validation |
| Forgot Password | `app/(auth)/forgot-password.tsx` | Email input + confirmation state |
| Profile (logged out) | `app/(tabs)/profile.tsx` | Shows feature list + auth CTAs |
| Profile (logged in) | `app/(tabs)/profile.tsx` | Avatar, email, reading history, bookmarks, sign out |
| Feed | `app/(tabs)/feed.tsx` | Placeholder shell with Kivo header |

## Navigation Structure

```
Root Stack
├── (tabs)              # Bottom tab navigator
│   ├── Feed            # Default tab
│   └── Profile         # Auth-gated tab
└── (auth)              # Modal stack
    ├── Welcome
    ├── Sign In
    ├── Sign Up
    └── Forgot Password
```

## Mock Store

| File | Description |
|---|---|
| `lib/store/auth-store.ts` | Zustand store — `signIn`, `signUp`, `signOut` (simulated delay, no real API) |

## App Icon

- `assets/logo.png` copied to: `icon.png`, `favicon.png`, `android-icon-foreground.png`, `splash-icon.png`
- `app.json` updated with scheme `kivo`, name `Kivo`, dark-themed adaptive icon background

## Validation (mock JS only)

| Screen | Validations |
|---|---|
| Sign In | Empty fields, invalid email format |
| Sign Up | Empty fields, invalid email, password < 6 chars, password mismatch |
| Forgot Password | Empty/invalid email |

## What's Next

- Wire Feed screen with real content (infinite scroll, cards)
- Add icons (Lucide) to tab bar and action buttons
- Connect auth to real backend API
