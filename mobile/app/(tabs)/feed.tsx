import { useState, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const categories = [
  { id: "for-you", label: "For You", icon: "sparkles" },
  { id: "tech", label: "Tech", icon: "hardware-chip" },
  { id: "science", label: "Science", icon: "flask" },
  { id: "design", label: "Design", icon: "color-palette" },
  { id: "business", label: "Business", icon: "briefcase" },
  { id: "health", label: "Health", icon: "fitness" },
  { id: "culture", label: "Culture", icon: "globe" },
  { id: "sports", label: "Sports", icon: "football" },
];

type FeedItem = {
  id: string;
  category: string;
  categoryIcon: string;
  time: string;
  title: string;
  subtitle: string;
  mediaUrl?: string;
  likes: string;
  comments: string;
};

const feedItems: FeedItem[] = [
  {
    id: "1",
    category: "For You",
    categoryIcon: "sparkles",
    time: "3 min ago",
    title: "How AI is transforming the way we discover knowledge",
    subtitle: "The intersection of machine learning and information retrieval is creating a new paradigm for how we consume content.",
    mediaUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    likes: "2.4K",
    comments: "142",
  },
  {
    id: "2",
    category: "Tech",
    categoryIcon: "hardware-chip",
    time: "1 hour ago",
    title: "The future of quantum computing in 2026",
    subtitle: "Major breakthroughs in qubit stability are bringing us closer to practical quantum computers.",
    likes: "1.8K",
    comments: "89",
  },
  {
    id: "3",
    category: "Science",
    categoryIcon: "flask",
    time: "2 hours ago",
    title: "New study reveals the hidden structure of dark matter",
    subtitle: "Astrophysicists have mapped the largest-ever survey of dark matter distribution across the universe, revealing unexpected patterns that challenge existing models of cosmic evolution and structure formation.",
    likes: "3.1K",
    comments: "215",
  },
  {
    id: "4",
    category: "Design",
    categoryIcon: "color-palette",
    time: "5 hours ago",
    title: "Minimalism is not just a style — it is a philosophy",
    subtitle: "How reducing visual clutter can improve comprehension and user engagement in digital products.",
    likes: "956",
    comments: "67",
  },
];

export default function FeedScreen() {
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState("for-you");
  const [currentIndex, setCurrentIndex] = useState(0);

  const item = feedItems[currentIndex];
  const hasMedia = !!item.mediaUrl;

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <Text style={styles.logo}>Kivo</Text>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesRow}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[
              styles.categoryPill,
              activeCategory === cat.id && styles.categoryPillActive,
            ]}
            onPress={() => setActiveCategory(cat.id)}
          >
            <Ionicons
              name={cat.icon as any}
              size={16}
              color={activeCategory === cat.id ? "#FFFFFF" : "#9CA3AF"}
            />
            <Text
              style={[
                styles.categoryLabel,
                activeCategory === cat.id && styles.categoryLabelActive,
              ]}
            >
              {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.card}>
        {hasMedia ? (
          <Image
            source={item.mediaUrl!}
            style={styles.mediaImage}
            contentFit="cover"
            transition={300}
          />
        ) : (
          <View style={styles.textOnlyCard}>
            <View style={styles.textOnlyContent}>
              <Text style={styles.textOnlyTitle}>{item.title}</Text>
              <Text style={styles.textOnlySubtitle}>{item.subtitle}</Text>
            </View>
          </View>
        )}

        <View style={styles.overlayGradient} />

        <View style={styles.mediaInfo}>
          <View style={styles.categoryBadge}>
            <Ionicons name={item.categoryIcon as any} size={12} color="#FFFFFF" />
            <Text style={styles.categoryBadgeText}>{item.category}</Text>
          </View>
          <Text style={styles.mediaTime}>{item.time}</Text>
          <Text style={styles.mediaTitle} numberOfLines={2}>
            {item.title}
          </Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.followRing}>
              <Ionicons name="person-add-outline" size={22} color="#FFFFFF" />
            </View>
            <Text style={styles.actionLabel}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="heart-outline" size={28} color="#FFFFFF" />
            <Text style={styles.actionLabel}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={28} color="#FFFFFF" />
            <Text style={styles.actionLabel}>{item.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="bookmark-outline" size={28} color="#FFFFFF" />
            <Text style={styles.actionLabel}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="share-outline" size={28} color="#FFFFFF" />
            <Text style={styles.actionLabel}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F1A",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  logo: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: -0.5,
  },
  categoriesRow: {
    flexGrow: 0,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 8,
  },
  categoryPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#1A1A2E",
  },
  categoryPillActive: {
    backgroundColor: "#000000",
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#9CA3AF",
  },
  categoryLabelActive: {
    color: "#FFFFFF",
  },
  card: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
  },
  mediaImage: {
    flex: 1,
    width: "100%",
  },
  textOnlyCard: {
    flex: 1,
    backgroundColor: "#1A1A2E",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  textOnlyContent: {
    gap: 16,
  },
  textOnlyTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
    lineHeight: 30,
  },
  textOnlySubtitle: {
    fontSize: 15,
    color: "#9CA3AF",
    lineHeight: 22,
  },
  overlayGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.35,
    backgroundColor: "transparent",
  },
  mediaInfo: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 80,
    gap: 4,
  },
  categoryBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    alignSelf: "flex-start",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryBadgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  mediaTime: {
    fontSize: 12,
    color: "#D1D5DB",
  },
  mediaTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    lineHeight: 22,
  },
  actions: {
    position: "absolute",
    right: 12,
    bottom: 40,
    alignItems: "center",
    gap: 16,
  },
  actionButton: {
    alignItems: "center",
    gap: 2,
  },
  followRing: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  actionLabel: {
    fontSize: 11,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
