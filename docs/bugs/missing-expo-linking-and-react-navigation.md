# Missing expo-linking and @react-navigation packages

- **Date**: 2026-07-24
- **Root cause**: Installing `@expo/vector-icons` with `--legacy-peer-deps` to resolve a peer dependency conflict caused npm to remove 26 unrelated packages, including `expo-linking` and all `@react-navigation/*` packages.
- **Symptoms**: Android bundling failed with:
  - `Unable to resolve "expo-linking" from "node_modules/expo-router/build/views/Unmatched.js"`
  - Subsequent failures would occur for any `@react-navigation` imports used by `expo-router`.
- **Fix**: Reinstalled the missing packages:
  ```sh
  npx expo install expo-linking -- --legacy-peer-deps
  npx expo install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/elements -- --legacy-peer-deps
  ```
- **Prevention**: When using `--legacy-peer-deps`, always run `npx expo install --check` afterward and verify that previously installed packages remain. If packages are missing, reinstall them explicitly.
- **Status**: Fixed and verified. Bundling now succeeds.
