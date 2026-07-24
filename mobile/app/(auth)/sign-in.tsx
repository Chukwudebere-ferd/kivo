import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import { useAuthStore } from "../../lib/store/auth-store";
import { useTheme, Theme } from "../../lib/theme";

export default function SignInScreen() {
  const theme = useTheme();
  const s = st(theme);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn, isLoading } = useAuthStore();

  const handleSignIn = async () => {
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    await signIn(email.trim(), password);
    router.replace("/(tabs)/feed");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.bg }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={s.form}>
        <Text style={[s.title, { color: theme.text }]}>Welcome back</Text>
        <Text style={[s.subtitle, { color: theme.textSecondary }]}>Sign in to continue</Text>

        {error ? <Text style={{ color: theme.error, fontSize: 14 }}>{error}</Text> : null}

        <TextInput
          style={[s.input, { backgroundColor: theme.inputBg, borderColor: theme.inputBorder, color: theme.text }]}
          placeholder="Email"
          placeholderTextColor={theme.placeholder}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="email"
        />

        <TextInput
          style={[s.input, { backgroundColor: theme.inputBg, borderColor: theme.inputBorder, color: theme.text }]}
          placeholder="Password"
          placeholderTextColor={theme.placeholder}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoComplete="password"
        />

        <TouchableOpacity onPress={() => router.push("/(auth)/forgot-password")}>
          <Text style={{ color: theme.textMuted, fontSize: 14, textAlign: "right" }}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.button, { backgroundColor: theme.accent }, isLoading && { opacity: 0.6 }]}
          onPress={handleSignIn}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={s.buttonText}>Sign In</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={s.switchLink}
          onPress={() => router.replace("/(auth)/sign-up")}
        >
          <Text style={{ fontSize: 14, color: theme.textMuted }}>
            Don't have an account?{" "}
            <Text style={{ color: theme.accent, fontWeight: "600" }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const st = (t: Theme) => ({
  form: { flex: 1, justifyContent: "center" as const, paddingHorizontal: 24, gap: 16 },
  title: { fontSize: 28, fontWeight: "700" as const },
  subtitle: { fontSize: 15, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center" as const,
    marginTop: 8,
  },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" as const },
  switchLink: { alignItems: "center" as const, paddingVertical: 8 },
});
