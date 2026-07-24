import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme, Theme } from "../../lib/theme";

export default function ForgotPasswordScreen() {
  const theme = useTheme();
  const s = st(theme);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSend = () => {
    setError("");

    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setSent(true);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.bg }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={s.form}>
        {!sent ? (
          <>
            <Text style={[s.title, { color: theme.text }]}>Reset password</Text>
            <Text style={[s.subtitle, { color: theme.textSecondary }]}>
              Enter your email and we'll send you a reset link.
            </Text>

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

            <TouchableOpacity style={[s.button, { backgroundColor: theme.accent }]} onPress={handleSend}>
              <Text style={s.buttonText}>Send Reset Link</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={[s.title, { color: theme.text }]}>Check your email</Text>
            <Text style={[s.subtitle, { color: theme.textSecondary }]}>
              If an account exists for{" "}
              <Text style={{ color: theme.text, fontWeight: "600" }}>{email}</Text>, we've sent a
              password reset link.
            </Text>

            <View style={[s.sentIcon, { backgroundColor: theme.success }]}>
              <Ionicons name="checkmark" size={28} color="#FFFFFF" />
            </View>
          </>
        )}

        <TouchableOpacity
          style={s.switchLink}
          onPress={() => router.back()}
        >
          <Text style={{ fontSize: 14, color: theme.textMuted }}>
            <Text style={{ color: theme.accent, fontWeight: "600" }}>Back to Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const st = (t: Theme) => ({
  form: { flex: 1, justifyContent: "center" as const, paddingHorizontal: 24, gap: 16 },
  title: { fontSize: 28, fontWeight: "700" as const },
  subtitle: { fontSize: 15, lineHeight: 22, marginBottom: 8 },
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
  sentIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    alignSelf: "center" as const,
    marginTop: 16,
  },
  switchLink: { alignItems: "center" as const, paddingVertical: 16 },
});
