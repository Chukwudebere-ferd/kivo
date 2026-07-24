import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { feedItems, categories, formatCount } from "../../lib/mock-data";
import { useTheme, Theme } from "../../lib/theme";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function FeedScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState("for-you");
  const [currentIndex, setCurrentIndex] = useState(0);

  const item = feedItems[currentIndex];
  const hasMedia = !!item.mediaUrl;
  const s = st(theme);

  return (
    <View style={[s.container, { backgroundColor: theme.bg }]}>
      <View style={[s.header, { paddingTop: insets.top + 12 }]}>
        <Text style={[s.logo, { color: theme.text }]}>Kivo</Text>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color={theme.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={s.categoriesRow}
        contentContainerStyle={s.categoriesContent}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[
              s.categoryPill,
              { backgroundColor: theme.pillBg },
              activeCategory === cat.id && { backgroundColor: theme.pillActive },
            ]}
            onPress={() => setActiveCategory(cat.id)}
          >
            <Ionicons
              name={cat.icon as any}
              size={16}
              color={activeCategory === cat.id ? "#FFFFFF" : theme.textSecondary}
            />
            <Text
              style={[
                s.categoryLabel,
                { color: theme.textSecondary },
                activeCategory === cat.id && { color: "#FFFFFF" },
              ]}
            >
              {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={s.card}
        activeOpacity={0.95}
        onPress={() => router.push(`/post/${item.id}`)}
      >
        {hasMedia ? (
          <Image
            source={item.mediaUrl!}
            style={s.mediaImage}
            contentFit="cover"
            transition={300}
          />
        ) : (
          <View style={[s.textOnlyCard, { backgroundColor: theme.card }]}>
            <View style={s.textOnlyContent}>
              <Text style={[s.textOnlyTitle, { color: theme.text }]}>{item.title}</Text>
              <Text style={[s.textOnlySubtitle, { color: theme.textSecondary }]}>{item.subtitle}</Text>
            </View>
          </View>
        )}

        <View style={s.overlayGradient} />

        <View style={s.mediaInfo}>
          <View style={[s.categoryBadge, { backgroundColor: theme.overlay }]}>
            <Ionicons name={item.categoryIcon as any} size={12} color="#FFFFFF" />
            <Text style={s.categoryBadgeText}>{item.category}</Text>
          </View>
          <Text style={s.mediaTime}>{item.time}</Text>
          <Text style={s.mediaTitle} numberOfLines={2}>
            {item.title}
          </Text>
        </View>

        <View style={s.actions}>
          <TouchableOpacity style={s.actionButton}>
            <View style={s.followRing}>
              <Ionicons name="person-add-outline" size={22} color="#FFFFFF" />
            </View>
            <Text style={s.actionLabel}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.actionButton}>
            <Ionicons name="heart-outline" size={28} color="#FFFFFF" />
            <Text style={s.actionLabel}>{formatCount(item.likesCount)}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.actionButton}>
            <Ionicons name="chatbubble-outline" size={28} color="#FFFFFF" />
            <Text style={s.actionLabel}>{formatCount(item.commentsCount)}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.actionButton}>
            <Ionicons name="bookmark-outline" size={28} color="#FFFFFF" />
            <Text style={s.actionLabel}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.actionButton}>
            <Ionicons name="share-outline" size={28} color="#FFFFFF" />
            <Text style={s.actionLabel}>Share</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const st = (t: Theme) => ({
  container: { flex: 1 },
  header: {
    flexDirection: "row" as const,
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  logo: { fontSize: 24, fontWeight: "800" as const, letterSpacing: -0.5 },
  categoriesRow: { flexGrow: 0 },
  categoriesContent: {
    paddingHorizontal: 16,
    gap: 8,
    flexDirection: "row" as const,
    alignItems: "center" as const,
    paddingBottom: 8,
  },
  categoryPill: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  categoryLabel: { fontSize: 13, fontWeight: "600" as const },
  card: { flex: 1, position: "relative" as const, overflow: "hidden" as const },
  mediaImage: { flex: 1, width: "100%" as const },
  textOnlyCard: { flex: 1, justifyContent: "center" as const, paddingHorizontal: 24 },
  textOnlyContent: { gap: 16 },
  textOnlyTitle: { fontSize: 22, fontWeight: "700" as const, lineHeight: 30 },
  textOnlySubtitle: { fontSize: 15, lineHeight: 22 },
  overlayGradient: {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.35,
  },
  mediaInfo: {
    position: "absolute" as const,
    bottom: 16,
    left: 16,
    right: 80,
    gap: 4,
  },
  categoryBadge: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 4,
    alignSelf: "flex-start" as const,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryBadgeText: { fontSize: 11, fontWeight: "600" as const, color: "#FFFFFF" },
  mediaTime: { fontSize: 12, color: "#D1D5DB" },
  mediaTitle: { fontSize: 16, fontWeight: "700" as const, color: "#FFFFFF", lineHeight: 22 },
  actions: {
    position: "absolute" as const,
    right: 12,
    bottom: 40,
    alignItems: "center" as const,
    gap: 16,
  },
  actionButton: { alignItems: "center" as const, gap: 2 },
  followRing: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  actionLabel: { fontSize: 11, color: "#FFFFFF", fontWeight: "500" as const },
});
