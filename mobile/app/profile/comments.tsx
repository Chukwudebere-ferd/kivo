import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { myComments } from "../../lib/mock-data";
import { useTheme, Theme } from "../../lib/theme";

export default function MyCommentsScreen() {
  const theme = useTheme();
  const s = st(theme);

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={[s.header, { backgroundColor: theme.bg }]}>
        <TouchableOpacity onPress={() => router.back()} style={s.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={[s.title, { color: theme.text }]}>Your Comments</Text>
        <View style={{ width: 40 }} />
      </View>

      {myComments.length === 0 ? (
        <View style={s.emptyState}>
          <Ionicons name="chatbubble-outline" size={32} color={theme.iconMuted} />
          <Text style={[s.emptyText, { color: theme.textMuted }]}>No comments yet</Text>
        </View>
      ) : (
        <ScrollView style={s.list} contentContainerStyle={s.listContent} showsVerticalScrollIndicator={false}>
          {myComments.map((item) => (
            <TouchableOpacity key={item.id} style={[s.card, { backgroundColor: theme.card }]} activeOpacity={0.7}>
              <View style={[s.commentAvatar, { backgroundColor: theme.accentBg }]}>
                <Ionicons name="person-outline" size={18} color={theme.accent} />
              </View>
              <View style={s.commentBody}>
                <View style={s.commentMetaRow}>
                  <Text style={[s.commentArticle, { color: theme.accent }]} numberOfLines={1}>{item.articleTitle}</Text>
                </View>
                <Text style={[s.commentContent, { color: theme.textSecondary }]}>{item.content}</Text>
                <View style={s.commentFooter}>
                  <Text style={[s.commentTime, { color: theme.textMuted }]}>{item.time}</Text>
                  <View style={s.commentLikes}>
                    <Ionicons name="heart-outline" size={12} color={theme.textMuted} />
                    <Text style={[s.commentLikesText, { color: theme.textMuted }]}>{item.likesCount}</Text>
                  </View>
                </View>
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
  card: { flexDirection: "row" as const, borderRadius: 12, padding: 12, gap: 14 },
  commentAvatar: { width: 40, height: 40, borderRadius: 20, justifyContent: "center" as const, alignItems: "center" as const },
  commentBody: { flex: 1, gap: 6 },
  commentMetaRow: { flexDirection: "row" as const, alignItems: "center" as const },
  commentArticle: { fontSize: 12, fontWeight: "600" as const, flex: 1 },
  commentContent: { fontSize: 14, lineHeight: 20 },
  commentFooter: { flexDirection: "row" as const, alignItems: "center" as const, gap: 12 },
  commentTime: { fontSize: 11 },
  commentLikes: { flexDirection: "row" as const, alignItems: "center" as const, gap: 4 },
  commentLikesText: { fontSize: 11 },
});
