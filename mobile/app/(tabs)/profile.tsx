import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../../lib/store/auth-store";
import { useThemeStore } from "../../lib/store/theme-store";
import { useTheme, Theme } from "../../lib/theme";

type MenuItem = {
  icon: string;
  label: string;
  type: "link" | "toggle";
};

const menuSections: { title: string; items: MenuItem[] }[] = [
  {
    title: "Activity",
    items: [
      { icon: "time-outline", label: "Reading History", type: "link" },
      { icon: "bookmark-outline", label: "Bookmarks", type: "link" },
      { icon: "heart-outline", label: "Liked Posts", type: "link" },
      { icon: "chatbubble-outline", label: "Comments", type: "link" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: "moon-outline", label: "Dark Mode", type: "toggle" },
      { icon: "notifications-outline", label: "Email Notifications", type: "toggle" },
    ],
  },
  {
    title: "Info",
    items: [
      { icon: "information-circle-outline", label: "About Kivo", type: "link" },
    ],
  },
];

export default function ProfileScreen() {
  const { isAuthenticated, user, signOut } = useAuthStore();
  const { isDark, toggleTheme } = useThemeStore();
  const theme = useTheme();
  const [emailNotifs, setEmailNotifs] = useState(false);

  if (!isAuthenticated) {
    return <LoggedOutProfile />;
  }

  const s = st(theme);

  const handleToggle = (label: string) => {
    if (label === "Dark Mode") toggleTheme();
    if (label === "Email Notifications") setEmailNotifs((p) => !p);
  };

  return (
    <View style={[s.container, { backgroundColor: theme.bg }]}>
      <View style={[s.header, { backgroundColor: theme.bg }]}>
        <Text style={[s.logo, { color: theme.text }]}>Kivo</Text>
      </View>

      <ScrollView
        style={s.scroll}
        contentContainerStyle={s.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={s.profileHeader}>
          <View style={[s.avatar, { backgroundColor: theme.accent }]}>
            <Text style={s.avatarText}>
              {user?.email?.charAt(0).toUpperCase() ?? "?"}
            </Text>
          </View>
          <Text style={[s.email, { color: theme.textSecondary }]}>{user?.email}</Text>
        </View>

        {menuSections.map((section) => (
          <View key={section.title} style={s.section}>
            <Text style={[s.sectionTitle, { color: theme.textMuted }]}>{section.title}</Text>
            <View style={[s.menuCard, { backgroundColor: theme.card }]}>
              {section.items.map((item, idx) => {
                const toggleVal = item.label === "Dark Mode" ? isDark : emailNotifs;
                return (
                  <TouchableOpacity
                    key={item.label}
                    style={[
                      s.menuRow,
                      { borderBottomColor: theme.border },
                      idx === section.items.length - 1 && { borderBottomWidth: 0 },
                    ]}
                    activeOpacity={item.type === "toggle" ? 1 : 0.6}
                    onPress={() => {
                      if (item.type === "link") {
                        // handle navigation
                      } else {
                        handleToggle(item.label);
                      }
                    }}
                  >
                    <View style={s.menuLeft}>
                      <Ionicons name={item.icon as any} size={20} color={theme.textSecondary} />
                      <Text style={[s.menuLabel, { color: theme.text }]}>{item.label}</Text>
                    </View>
                    {item.type === "toggle" ? (
                      <Switch
                        value={toggleVal}
                        pointerEvents="none"
                        trackColor={{ false: theme.border, true: "rgba(79,70,229,0.4)" }}
                        thumbColor={toggleVal ? theme.accent : theme.textMuted}
                      />
                    ) : (
                      <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={[s.signOutButton, { borderColor: theme.errorBorder }]}
          onPress={signOut}
        >
          <Ionicons name="log-out-outline" size={20} color={theme.error} />
          <Text style={[s.signOutText, { color: theme.error }]}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function LoggedOutProfile() {
  const theme = useTheme();
  const s = st(theme);

  return (
    <View style={[s.container, { backgroundColor: theme.bg }]}>
      <View style={[s.header, { backgroundColor: theme.bg }]}>
        <Text style={[s.logo, { color: theme.text }]}>Kivo</Text>
      </View>

      <View style={s.center}>
        <View style={[s.avatarPlaceholder, { backgroundColor: theme.avatarBg }]}>
          <Ionicons name="person-outline" size={36} color={theme.textMuted} />
        </View>
        <Text style={[s.promptTitle, { color: theme.text }]}>Sign in to your account</Text>
        <Text style={[s.promptSubtitle, { color: theme.textSecondary }]}>
          Like, comment, bookmark, and track your reading history.
        </Text>

        <View style={s.featureList}>
          {["Bookmark articles", "Comment and discuss", "Reading history", "Personalized feed"].map(
            (feature) => (
              <View key={feature} style={s.featureRow}>
                <Ionicons name="checkmark-circle" size={20} color={theme.accent} />
                <Text style={[s.featureText, { color: theme.textSecondary }]}>{feature}</Text>
              </View>
            )
          )}
        </View>

        <TouchableOpacity
          style={[s.primaryButton, { backgroundColor: theme.accent }]}
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text style={s.primaryButtonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.secondaryButton, { borderColor: theme.border }]}
          onPress={() => router.push("/(auth)/sign-in")}
        >
          <Text style={[s.secondaryButtonText, { color: theme.text }]}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const st = (t: Theme) => ({
  container: { flex: 1 },
  header: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 12 },
  logo: { fontSize: 24, fontWeight: "800" as const, letterSpacing: -0.5 },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 40 },
  profileHeader: { alignItems: "center" as const, paddingVertical: 24, gap: 12 },
  avatar: { width: 72, height: 72, borderRadius: 36, justifyContent: "center" as const, alignItems: "center" as const },
  avatarText: { fontSize: 28, fontWeight: "700" as const, color: "#FFFFFF" },
  email: { fontSize: 16 },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 13, fontWeight: "600" as const, textTransform: "uppercase" as const, letterSpacing: 1, paddingHorizontal: 20, marginBottom: 10 },
  menuCard: { marginHorizontal: 16, borderRadius: 12, overflow: "hidden" as const },
  menuRow: { flexDirection: "row" as const, alignItems: "center" as const, justifyContent: "space-between" as const, paddingVertical: 14, paddingHorizontal: 16, borderBottomWidth: 1 },
  menuLeft: { flexDirection: "row" as const, alignItems: "center" as const, gap: 14 },
  menuLabel: { fontSize: 15, fontWeight: "500" as const },
  signOutButton: { flexDirection: "row" as const, alignItems: "center" as const, justifyContent: "center" as const, gap: 8, marginHorizontal: 16, paddingVertical: 16, borderRadius: 12, borderWidth: 1, marginTop: 8 },
  signOutText: { fontSize: 16, fontWeight: "600" as const },
  center: { flex: 1, justifyContent: "center" as const, alignItems: "center" as const, paddingHorizontal: 32 },
  avatarPlaceholder: { width: 80, height: 80, borderRadius: 40, justifyContent: "center" as const, alignItems: "center" as const, marginBottom: 20 },
  promptTitle: { fontSize: 22, fontWeight: "700" as const, marginBottom: 8, textAlign: "center" as const },
  promptSubtitle: { fontSize: 14, textAlign: "center" as const, lineHeight: 20, marginBottom: 28 },
  featureList: { width: "100%", gap: 14, marginBottom: 36 },
  featureRow: { flexDirection: "row" as const, alignItems: "center" as const, gap: 12 },
  featureText: { fontSize: 15 },
  primaryButton: { width: "100%", paddingVertical: 16, borderRadius: 12, alignItems: "center" as const, marginBottom: 12 },
  primaryButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" as const },
  secondaryButton: { width: "100%", paddingVertical: 16, borderRadius: 12, alignItems: "center" as const, borderWidth: 1 },
  secondaryButtonText: { fontSize: 16, fontWeight: "600" as const },
});
