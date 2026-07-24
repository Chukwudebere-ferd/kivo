import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#0F0F1A" },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { fontWeight: "600" },
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
