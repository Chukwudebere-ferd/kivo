import { Stack } from "expo-router";
import { useTheme } from "../../lib/theme";

export default function AuthLayout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.bg },
        headerTintColor: theme.text,
        headerTitleStyle: { fontWeight: "600" },
        contentStyle: { backgroundColor: theme.bg },
      }}
    >
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen
        name="sign-in"
        options={{ title: "Sign In", presentation: "card" }}
      />
      <Stack.Screen
        name="sign-up"
        options={{ title: "Create Account", presentation: "card" }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{ title: "Reset Password", presentation: "card" }}
      />
    </Stack>
  );
}
