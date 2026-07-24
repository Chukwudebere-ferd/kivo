import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
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

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const HERO_HEIGHT = 220;
const CONTENT_PADDING = 20;

export default function PostPreviewScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const item = feedItems.find((i) => i.id === id);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Post not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerSide}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.logo}>Kivo</Text>
        <TouchableOpacity style={styles.headerSide}>
          <Ionicons name="ellipsis-vertical" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {item.mediaUrl && (
            <Image
              source={item.mediaUrl}
              style={styles.heroImage}
              contentFit="cover"
              transition={300}
            />
          )}

          <View style={styles.bodySection}>
            <View style={styles.metaRow}>
              <View style={styles.categoryBadge}>
                <Ionicons name={item.categoryIcon as any} size={12} color="#FFFFFF" />
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
              <View style={styles.metaDot} />
              <Text style={styles.timeText}>{item.time}</Text>
            </View>

            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.divider} />

            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.contentBody}>{item.content}</Text>

            <View style={styles.divider} />

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Ionicons name="chatbubble-outline" size={20} color="#9CA3AF" />
                <Text style={styles.statCount}>{formatCount(item.commentsCount)}</Text>
                <Text style={styles.statLabel}>comments</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="heart-outline" size={20} color="#9CA3AF" />
                <Text style={styles.statCount}>{formatCount(item.likesCount)}</Text>
                <Text style={styles.statLabel}>likes</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="bookmark-outline" size={20} color="#9CA3AF" />
                <Text style={styles.statCount}>{formatCount(item.bookmarksCount)}</Text>
                <Text style={styles.statLabel}>saves</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="share-outline" size={20} color="#9CA3AF" />
                <Text style={styles.statCount}>{formatCount(item.sharesCount)}</Text>
                <Text style={styles.statLabel}>shares</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <Ionicons name="person-circle" size={32} color="#6B7280" />
            <TextInput
              style={styles.input}
              placeholder="Write a comment..."
              placeholderTextColor="#6B7280"
              multiline
            />
            <TouchableOpacity style={styles.sendButton} activeOpacity={0.7}>
              <Ionicons name="send" size={20} color="#4F46E5" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F1A",
  },
  errorText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 100,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: "#0F0F1A",
    borderBottomWidth: 1,
    borderBottomColor: "#1F1F2E",
  },
  headerSide: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: -0.5,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 16,
  },
  heroImage: {
    width: SCREEN_WIDTH,
    height: HERO_HEIGHT,
  },
  bodySection: {
    paddingHorizontal: CONTENT_PADDING,
    paddingTop: 20,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  categoryBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(79, 70, 229, 0.15)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4F46E5",
  },
  metaDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: "#6B7280",
  },
  timeText: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    lineHeight: 32,
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#1F1F2E",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 15,
    color: "#D1D5DB",
    lineHeight: 22,
    fontWeight: "500",
    marginBottom: 16,
  },
  contentBody: {
    fontSize: 14,
    color: "#9CA3AF",
    lineHeight: 22,
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  statItem: {
    alignItems: "center",
    gap: 4,
    flex: 1,
  },
  statCount: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  statLabel: {
    fontSize: 11,
    color: "#6B7280",
    fontWeight: "500",
  },
  keyboardAvoid: {
    flex: 1,
  },
  inputContainer: {
    borderTopWidth: 1,
    borderTopColor: "#1F1F2E",
    backgroundColor: "#0F0F1A",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#1A1A2E",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: "#FFFFFF",
    maxHeight: 80,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(79, 70, 229, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
  },
});
