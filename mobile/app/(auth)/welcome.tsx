import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme, Theme } from "../../lib/theme";

export default function WelcomeScreen() {
  const theme = useTheme();
  const s = st(theme);

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <TouchableOpacity
        style={s.dismissArea}
        onPress={() => router.back()}
      >
        <Ionicons name="close" size={24} color={theme.textMuted} />
      </TouchableOpacity>

      <View style={s.content}>
        <View style={s.logoContainer}>
          <Text style={[s.logo, { color: theme.text }]}>Kivo</Text>
          <Text style={[s.tagline, { color: theme.textSecondary }]}>Discover knowledge</Text>
        </View>

        <Text style={[s.title, { color: theme.text }]}>Join the conversation</Text>
        <Text style={[s.subtitle, { color: theme.textSecondary }]}>
          Sign up to like, comment, bookmark articles, and personalize your feed.
        </Text>

        <TouchableOpacity
          style={[s.primaryButton, { backgroundColor: theme.accent }]}
          onPress={() => router.replace("/(auth)/sign-up")}
        >
          <Text style={s.primaryButtonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.secondaryButton, { borderColor: theme.border }]}
          onPress={() => router.push("/(auth)/sign-in")}
        >
          <Text style={[s.secondaryButtonText, { color: theme.text }]}>I already have an account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.skipButton}
          onPress={() => router.back()}
        >
          <Text style={[s.skipText, { color: theme.textMuted }]}>Maybe later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const st = (t: Theme) => ({
  dismissArea: { alignSelf: "flex-end" as const, padding: 20, paddingTop: 60 },
  content: { flex: 1, justifyContent: "center" as const, paddingHorizontal: 32, paddingBottom: 60 },
  logoContainer: { alignItems: "center" as const, marginBottom: 40 },
  logo: { fontSize: 42, fontWeight: "800" as const, letterSpacing: -1 },
  tagline: { fontSize: 16, marginTop: 4 },
  title: { fontSize: 24, fontWeight: "700" as const, textAlign: "center" as const, marginBottom: 12 },
  subtitle: { fontSize: 15, textAlign: "center" as const, lineHeight: 22, marginBottom: 40 },
  primaryButton: { paddingVertical: 16, borderRadius: 12, alignItems: "center" as const, marginBottom: 12 },
  primaryButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" as const },
  secondaryButton: { paddingVertical: 16, borderRadius: 12, alignItems: "center" as const, borderWidth: 1, marginBottom: 16 },
  secondaryButtonText: { fontSize: 16, fontWeight: "600" as const },
  skipButton: { alignItems: "center" as const, paddingVertical: 8 },
  skipText: { fontSize: 14 },
});
