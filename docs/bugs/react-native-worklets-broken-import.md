# react-native-worklets broken internal import

- **Date**: 2026-07-24
- **Root cause**: The `@expo/vector-icons` install with `--legacy-peer-deps` corrupted the dependency tree, leaving `react-native-worklets` at version 0.10.2 which had a broken internal import path. The file `src/featureFlags/featureFlags.native.ts` imports `../debug/logger` which existed but Metro could not resolve it, likely due to version incompatibility with Expo SDK 57.
- **Symptoms**: Android bundling failed with:
  ```
  Unable to resolve "../debug/logger" from "node_modules/react-native-worklets/src/featureFlags/featureFlags.native.ts"
  ```
- **Fix**: Reinstalled the correct SDK 57-compatible version:
  ```sh
  npx expo install react-native-worklets -- --legacy-peer-deps
  ```
  This downgraded from 0.10.2 to 0.10.0, which resolved the import issue.
- **Prevention**: After any `--legacy-peer-deps` install, always run `npx expo install --check` to detect version mismatches. If a dependency was published with a broken release, pin to the last known working version.
- **Status**: Fixed. Version 0.10.0 installed and import resolves correctly.
