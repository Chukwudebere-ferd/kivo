# Missing `react-native-safe-area-context`

**Status:** ✅ Fixed
**Date:** 2026-07-24

## Root Cause

`expo-router` requires `react-native-safe-area-context` as a dependency, but it was not included in the initial `package.json` when the Expo project was scaffolded.

## Error

```
Unable to resolve "react-native-safe-area-context" from "node_modules\expo-router\build\ExpoRoot.js"
```

## Fix

Ran `npx expo install react-native-safe-area-context` in `mobile/`. This installed the SDK 57.0.0 compatible version via npm.

## Prevention

When scaffolding an Expo Router project, always run the full install command for all expo-router peer dependencies:

```
npx expo install react-native-safe-area-context react-native-screens
```

`react-native-screens` was already installed (pulled in transitively), but `react-native-safe-area-context` was missing.
