import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Linking } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme, Theme } from "../../lib/theme";

export default function AboutScreen() {
  const theme = useTheme();
  const s = st(theme);

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={[s.header, { backgroundColor: theme.bg }]}>
        <TouchableOpacity onPress={() => router.back()} style={s.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={[s.title, { color: theme.text }]}>About Kivo</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={s.scroll} contentContainerStyle={s.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={[s.logoContainer, { backgroundColor: theme.card }]}>
          <Text style={[s.logoText, { color: theme.text }]}>Kivo</Text>
          <Text style={[s.logoTagline, { color: theme.textSecondary }]}>Discover knowledge</Text>
        </View>

        <Text style={[s.description, { color: theme.textSecondary }]}>
          Kivo is a mobile-first knowledge platform that transforms the way people discover, consume, and engage with news and information. We deliver content through a clean, immersive vertical feed where users consume one story at a time.
        </Text>

        <View style={[s.section, { backgroundColor: theme.card }]}>
          <Text style={[s.sectionTitle, { color: theme.text }]}>Version</Text>
          <Text style={[s.sectionValue, { color: theme.textSecondary }]}>1.0.0</Text>
        </View>

        <TouchableOpacity style={[s.menuRow, { backgroundColor: theme.card, borderBottomColor: theme.border }]} activeOpacity={0.6}>
          <View style={s.menuLeft}>
            <Ionicons name="document-text-outline" size={20} color={theme.textSecondary} />
            <Text style={[s.menuLabel, { color: theme.text }]}>Terms of Service</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
        </TouchableOpacity>

        <TouchableOpacity style={[s.menuRow, { backgroundColor: theme.card, borderBottomColor: theme.border }]} activeOpacity={0.6}>
          <View style={s.menuLeft}>
            <Ionicons name="shield-checkmark-outline" size={20} color={theme.textSecondary} />
            <Text style={[s.menuLabel, { color: theme.text }]}>Privacy Policy</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
        </TouchableOpacity>

        <TouchableOpacity style={[s.menuRow, { backgroundColor: theme.card, borderBottomColor: theme.border }]} activeOpacity={0.6} onPress={() => Linking.openURL("mailto:support@kivo.app")}>
          <View style={s.menuLeft}>
            <Ionicons name="mail-outline" size={20} color={theme.textSecondary} />
            <Text style={[s.menuLabel, { color: theme.text }]}>Contact Us</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
        </TouchableOpacity>

        <View style={[s.section, { backgroundColor: theme.card, marginTop: 20 }]}>
          <Text style={[s.copyright, { color: theme.textMuted }]}>Built with care. Designed for clarity.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const st = (t: Theme) => ({
  header: { flexDirection: "row" as const, alignItems: "center" as const, justifyContent: "space-between" as const, paddingTop: 60, paddingHorizontal: 16, paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: t.borderLight },
  backButton: { width: 40, height: 40, justifyContent: "center" as const, alignItems: "center" as const },
  title: { fontSize: 20, fontWeight: "700" as const },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 40 },
  logoContainer: { alignItems: "center" as const, paddingVertical: 32, marginHorizontal: 16, marginBottom: 20, borderRadius: 12 },
  logoText: { fontSize: 42, fontWeight: "800" as const, letterSpacing: -1 },
  logoTagline: { fontSize: 16, marginTop: 4 },
  description: { fontSize: 14, lineHeight: 22, paddingHorizontal: 16, marginBottom: 20 },
  section: { paddingHorizontal: 16, paddingVertical: 14, borderRadius: 12, marginBottom: 8 },
  sectionTitle: { fontSize: 14, fontWeight: "600" as const, marginBottom: 4 },
  sectionValue: { fontSize: 14 },
  menuRow: { flexDirection: "row" as const, alignItems: "center" as const, justifyContent: "space-between" as const, paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1 },
  menuLeft: { flexDirection: "row" as const, alignItems: "center" as const, gap: 14 },
  menuLabel: { fontSize: 15, fontWeight: "500" as const },
  copyright: { fontSize: 13, textAlign: "center" as const },
});
