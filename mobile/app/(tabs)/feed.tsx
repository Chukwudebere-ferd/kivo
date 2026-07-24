import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

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

export default function FeedScreen() {
  const [activeCategory, setActiveCategory] = useState("for-you");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
        <View style={styles.mediaArea}>
          <View style={styles.mediaPlaceholder}>
            <Ionicons name="image-outline" size={64} color="#2A2A3E" />
          </View>

          <View style={styles.mediaOverlay} />

          <View style={styles.mediaInfo}>
            <View style={styles.categoryBadge}>
              <Ionicons name="sparkles" size={12} color="#FFFFFF" />
              <Text style={styles.categoryBadgeText}>For You</Text>
            </View>
            <Text style={styles.mediaTime}>3 min ago</Text>
            <Text style={styles.mediaTitle} numberOfLines={2}>
              How AI is transforming the way we discover knowledge
            </Text>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.followRing}>
                <Ionicons name="person-add-outline" size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.actionLabel}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="heart-outline" size={28} color="#FFFFFF" />
              <Text style={styles.actionLabel}>2.4K</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="chatbubble-outline" size={28} color="#FFFFFF" />
              <Text style={styles.actionLabel}>142</Text>
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
    paddingTop: 60,
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
    marginBottom: 8,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
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
    paddingHorizontal: 0,
  },
  mediaArea: {
    flex: 1,
    borderRadius: 0,
    overflow: "hidden",
    position: "relative",
  },
  mediaPlaceholder: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#1A1A2E",
    justifyContent: "center",
    alignItems: "center",
  },
  mediaOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "transparent",
  },
  mediaInfo: {
    position: "absolute",
    bottom: 100,
    left: 16,
    right: 80,
    gap: 6,
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
    bottom: 120,
    alignItems: "center",
    gap: 20,
  },
  actionButton: {
    alignItems: "center",
    gap: 2,
  },
  followRing: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
