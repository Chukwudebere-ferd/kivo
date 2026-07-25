import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { likedPosts } from "../../lib/mock-data";
import { useTheme, Theme } from "../../lib/theme";
import { Image } from "expo-image";

export default function LikedPostsScreen() {
  const theme = useTheme();
  const s = st(theme);

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={[s.header, { backgroundColor: theme.bg }]}>
        <TouchableOpacity onPress={() => router.back()} style={s.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={[s.title, { color: theme.text }]}>Liked Posts</Text>
        <View style={{ width: 40 }} />
      </View>

      {likedPosts.length === 0 ? (
        <View style={s.emptyState}>
          <Ionicons name="heart-outline" size={32} color={theme.iconMuted} />
          <Text style={[s.emptyText, { color: theme.textMuted }]}>No liked posts yet</Text>
        </View>
      ) : (
        <ScrollView style={s.list} contentContainerStyle={s.listContent} showsVerticalScrollIndicator={false}>
          {likedPosts.map((item) => (
            <TouchableOpacity key={item.id} style={[s.card, { backgroundColor: theme.card }]} activeOpacity={0.7}>
              {item.imageUrl ? (
                <Image source={item.imageUrl} style={s.cardImage} contentFit="cover" transition={200} />
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
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const st = (t: Theme) => ({
  header: { flexDirection: "row" as const, alignItems: "center" as const, justifyContent: "space-between" as const, paddingTop: 60, paddingHorizontal: 16, paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: t.borderLight },
  backButton: { width: 40, height: 40, justifyContent: "center" as const, alignItems: "center" as const },
  title: { fontSize: 20, fontWeight: "700" as const },
  emptyState: { alignItems: "center" as const, paddingTop: 80, gap: 12 },
  emptyText: { fontSize: 14 },
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
});
