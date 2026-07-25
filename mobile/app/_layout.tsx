import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../lib/theme";
import { useThemeStore } from "../lib/store/theme-store";

export default function RootLayout() {
  const theme = useTheme();
  const isDark = useThemeStore((s) => s.isDark);

  return (
    <View style={[styles.root, { backgroundColor: theme.bg }]}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack screenOptions={{ contentStyle: { backgroundColor: theme.bg } }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="post/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="profile/reading-history" options={{ headerShown: false }} />
      <Stack.Screen name="profile/liked-posts" options={{ headerShown: false }} />
      <Stack.Screen name="profile/comments" options={{ headerShown: false }} />
      <Stack.Screen name="profile/about" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
