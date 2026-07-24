import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { feedItems, formatCount } from "../../lib/mock-data";
import { useTheme, Theme } from "../../lib/theme";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const HERO_HEIGHT = 220;
const CONTENT_PADDING = 20;

export default function PostPreviewScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const s = st(theme);

  const item = feedItems.find((i) => i.id === id);

  if (!item) {
    return (
      <View style={{ flex: 1, backgroundColor: theme.bg, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: theme.text, fontSize: 16 }}>Post not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={[s.header, { paddingTop: insets.top + 8, backgroundColor: theme.bg, borderBottomColor: theme.borderLight }]}>
        <TouchableOpacity onPress={() => router.back()} style={s.headerSide}>
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={[s.logo, { color: theme.text }]}>Kivo</Text>
        <TouchableOpacity style={s.headerSide}>
          <Ionicons name="ellipsis-vertical" size={22} color={theme.text} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollView
          style={s.scrollView}
          contentContainerStyle={s.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {item.mediaUrl && (
            <Image
              source={item.mediaUrl}
              style={s.heroImage}
              contentFit="cover"
              transition={300}
            />
          )}

          <View style={s.bodySection}>
            <View style={s.metaRow}>
              <View style={[s.categoryBadge, { backgroundColor: theme.accentBg }]}>
                <Ionicons name={item.categoryIcon as any} size={12} color={theme.accent} />
                <Text style={[s.categoryText, { color: theme.accent }]}>{item.category}</Text>
              </View>
              <View style={[s.metaDot, { backgroundColor: theme.textMuted }]} />
              <Text style={[s.timeText, { color: theme.textMuted }]}>{item.time}</Text>
            </View>

            <Text style={[s.title, { color: theme.text }]}>{item.title}</Text>

            <View style={[s.divider, { backgroundColor: theme.borderLight }]} />

            <Text style={[s.subtitle, { color: theme.textSecondary }]}>{item.subtitle}</Text>
            <Text style={[s.contentBody, { color: theme.textSecondary }]}>{item.content}</Text>

            <View style={[s.divider, { backgroundColor: theme.borderLight }]} />

            <View style={s.statsRow}>
              <View style={s.statItem}>
                <Ionicons name="chatbubble-outline" size={20} color={theme.textMuted} />
                <Text style={[s.statCount, { color: theme.text }]}>{formatCount(item.commentsCount)}</Text>
                <Text style={[s.statLabel, { color: theme.textMuted }]}>comments</Text>
              </View>
              <View style={s.statItem}>
                <Ionicons name="heart-outline" size={20} color={theme.textMuted} />
                <Text style={[s.statCount, { color: theme.text }]}>{formatCount(item.likesCount)}</Text>
                <Text style={[s.statLabel, { color: theme.textMuted }]}>likes</Text>
              </View>
              <View style={s.statItem}>
                <Ionicons name="bookmark-outline" size={20} color={theme.textMuted} />
                <Text style={[s.statCount, { color: theme.text }]}>{formatCount(item.bookmarksCount)}</Text>
                <Text style={[s.statLabel, { color: theme.textMuted }]}>saves</Text>
              </View>
              <View style={s.statItem}>
                <Ionicons name="share-outline" size={20} color={theme.textMuted} />
                <Text style={[s.statCount, { color: theme.text }]}>{formatCount(item.sharesCount)}</Text>
                <Text style={[s.statLabel, { color: theme.textMuted }]}>shares</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={[s.inputContainer, { borderTopColor: theme.borderLight, backgroundColor: theme.bg }]}>
          <View style={s.inputRow}>
            <Ionicons name="person-circle" size={32} color={theme.textMuted} />
            <TextInput
              style={[s.input, { backgroundColor: theme.card, color: theme.text }]}
              placeholder="Write a comment..."
              placeholderTextColor={theme.placeholder}
              multiline
            />
            <TouchableOpacity style={[s.sendButton, { backgroundColor: theme.accentBg }]} activeOpacity={0.7}>
              <Ionicons name="send" size={20} color={theme.accent} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const st = (t: Theme) => ({
  header: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    justifyContent: "space-between" as const,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  headerSide: { width: 40, height: 40, justifyContent: "center" as const, alignItems: "center" as const },
  logo: { fontSize: 22, fontWeight: "800" as const, letterSpacing: -0.5 },
  scrollView: { flex: 1 },
  scrollContent: { paddingBottom: 16 },
  heroImage: { width: SCREEN_WIDTH, height: HERO_HEIGHT },
  bodySection: { paddingHorizontal: CONTENT_PADDING, paddingTop: 20 },
  metaRow: { flexDirection: "row" as const, alignItems: "center" as const, gap: 8, marginBottom: 12 },
  categoryBadge: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: { fontSize: 12, fontWeight: "600" as const },
  metaDot: { width: 3, height: 3, borderRadius: 1.5 },
  timeText: { fontSize: 12, fontWeight: "500" as const },
  title: { fontSize: 24, fontWeight: "700" as const, lineHeight: 32, marginBottom: 16 },
  divider: { height: 1, marginBottom: 16 },
  subtitle: { fontSize: 15, lineHeight: 22, fontWeight: "500" as const, marginBottom: 16 },
  contentBody: { fontSize: 14, lineHeight: 22, marginBottom: 16 },
  statsRow: { flexDirection: "row" as const, justifyContent: "space-between" as const, paddingVertical: 8 },
  statItem: { alignItems: "center" as const, gap: 4, flex: 1 },
  statCount: { fontSize: 16, fontWeight: "700" as const },
  statLabel: { fontSize: 11, fontWeight: "500" as const },
  inputContainer: {
    borderTopWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },
  inputRow: { flexDirection: "row" as const, alignItems: "flex-end" as const, gap: 10 },
  input: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    maxHeight: 80,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    marginBottom: 2,
  },
});
