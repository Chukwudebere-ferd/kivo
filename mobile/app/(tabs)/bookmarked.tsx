import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../../lib/store/auth-store";
import { bookmarkedItems } from "../../lib/mock-data";
import { useTheme, Theme } from "../../lib/theme";

export default function BookmarkedScreen() {
  const { isAuthenticated } = useAuthStore();
  const theme = useTheme();
  const s = st(theme);

  if (!isAuthenticated) {
    return <LoggedOutBookmarks />;
  }

  if (bookmarkedItems.length === 0) {
    return <EmptyBookmarks />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={[s.header, { backgroundColor: theme.bg }]}>
        <Text style={[s.logo, { color: theme.text }]}>Kivo</Text>
      </View>

      <Text style={[s.pageTitle, { color: theme.text }]}>Bookmarks</Text>
      <Text style={[s.pageSubtitle, { color: theme.textMuted }]}>
        {bookmarkedItems.length} saved article{bookmarkedItems.length !== 1 ? "s" : ""}
      </Text>

      <ScrollView
        style={s.list}
        contentContainerStyle={s.listContent}
        showsVerticalScrollIndicator={false}
      >
        {bookmarkedItems.map((item) => (
          <TouchableOpacity key={item.id} style={[s.card, { backgroundColor: theme.card }]} activeOpacity={0.7}>
            {item.imageUrl ? (
              <Image
                source={item.imageUrl}
                style={s.cardImage}
                contentFit="cover"
                transition={200}
              />
            ) : (
              <View style={[s.cardImage, s.cardImagePlaceholder, { backgroundColor: theme.border }]}>
                <Ionicons name="document-text-outline" size={24} color={theme.textMuted} />
              </View>
            )}
            <View style={s.cardInfo}>
              <View style={s.cardCategory}>
                <Ionicons name={item.categoryIcon as any} size={10} color={theme.accent} />
                <Text style={[s.cardCategoryText, { color: theme.accent }]}>{item.category}</Text>
              </View>
              <Text style={[s.cardTitle, { color: theme.text }]} numberOfLines={2}>{item.title}</Text>
              <Text style={[s.cardDate, { color: theme.textMuted }]}>{item.date}</Text>
            </View>
            <Ionicons name="bookmark" size={18} color={theme.accent} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function LoggedOutBookmarks() {
  const theme = useTheme();
  const s = st(theme);

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={[s.header, { backgroundColor: theme.bg }]}>
        <Text style={[s.logo, { color: theme.text }]}>Kivo</Text>
      </View>
      <View style={s.center}>
        <View style={[s.iconCircle, { backgroundColor: theme.card }]}>
          <Ionicons name="bookmark-outline" size={36} color={theme.textMuted} />
        </View>
        <Text style={[s.promptTitle, { color: theme.text }]}>Save articles for later</Text>
        <Text style={[s.promptSubtitle, { color: theme.textSecondary }]}>
          Sign in to bookmark your favorite articles and access them anytime.
        </Text>
        <View style={s.featureList}>
          {["Save articles offline", "Build your reading list", "Never lose a story"].map(
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

function EmptyBookmarks() {
  const theme = useTheme();
  const s = st(theme);

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={[s.header, { backgroundColor: theme.bg }]}>
        <Text style={[s.logo, { color: theme.text }]}>Kivo</Text>
      </View>
      <View style={s.center}>
        <View style={[s.iconCircle, { backgroundColor: theme.card }]}>
          <Ionicons name="bookmark-outline" size={36} color={theme.iconMuted} />
        </View>
        <Text style={[s.emptyTitle, { color: theme.text }]}>No saved articles yet</Text>
        <Text style={[s.emptySubtitle, { color: theme.textMuted }]}>
          Tap the bookmark icon on any article to save it here.
        </Text>
      </View>
    </View>
  );
}

const st = (t: Theme) => ({
  header: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 12 },
  logo: { fontSize: 24, fontWeight: "800" as const, letterSpacing: -0.5 },
  pageTitle: { fontSize: 28, fontWeight: "700" as const, paddingHorizontal: 20 },
  pageSubtitle: { fontSize: 14, paddingHorizontal: 20, marginTop: 4, marginBottom: 20 },
  list: { flex: 1 },
  listContent: { paddingHorizontal: 16, paddingBottom: 24, gap: 10 },
  card: { flexDirection: "row" as const, alignItems: "center" as const, borderRadius: 12, padding: 12, gap: 14 },
  cardImage: { width: 60, height: 60, borderRadius: 10 },
  cardImagePlaceholder: { justifyContent: "center" as const, alignItems: "center" as const },
  cardInfo: { flex: 1, gap: 4 },
  cardCategory: { flexDirection: "row" as const, alignItems: "center" as const, gap: 4, alignSelf: "flex-start" as const },
  cardCategoryText: { fontSize: 11, fontWeight: "600" as const },
  cardTitle: { fontSize: 14, fontWeight: "600" as const, lineHeight: 20 },
  cardDate: { fontSize: 12 },
  center: { flex: 1, justifyContent: "center" as const, alignItems: "center" as const, paddingHorizontal: 32 },
  iconCircle: { width: 80, height: 80, borderRadius: 40, justifyContent: "center" as const, alignItems: "center" as const, marginBottom: 20 },
  promptTitle: { fontSize: 22, fontWeight: "700" as const, marginBottom: 8, textAlign: "center" as const },
  promptSubtitle: { fontSize: 14, textAlign: "center" as const, lineHeight: 20, marginBottom: 28 },
  emptyTitle: { fontSize: 18, fontWeight: "700" as const, marginBottom: 8 },
  emptySubtitle: { fontSize: 14, textAlign: "center" as const, lineHeight: 20 },
  featureList: { width: "100%", gap: 14, marginBottom: 36 },
  featureRow: { flexDirection: "row" as const, alignItems: "center" as const, gap: 12 },
  featureText: { fontSize: 15 },
  primaryButton: { width: "100%", paddingVertical: 16, borderRadius: 12, alignItems: "center" as const, marginBottom: 12 },
  primaryButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" as const },
  secondaryButton: { width: "100%", paddingVertical: 16, borderRadius: 12, alignItems: "center" as const, borderWidth: 1 },
  secondaryButtonText: { fontSize: 16, fontWeight: "600" as const },
});
