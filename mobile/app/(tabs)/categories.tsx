import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { categoryList } from "../../lib/mock-data";
import { useTheme, Theme } from "../../lib/theme";

export default function CategoriesScreen() {
  const theme = useTheme();
  const s = st(theme);

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={[s.header, { backgroundColor: theme.bg }]}>
        <Text style={[s.logo, { color: theme.text }]}>Kivo</Text>
      </View>

      <Text style={[s.pageTitle, { color: theme.text }]}>Categories</Text>
      <Text style={[s.pageSubtitle, { color: theme.textMuted }]}>
        Browse articles by topic
      </Text>

      <ScrollView
        style={s.list}
        contentContainerStyle={s.listContent}
        showsVerticalScrollIndicator={false}
      >
        {categoryList.map((cat) => (
          <TouchableOpacity key={cat.id} style={[s.card, { backgroundColor: theme.card }]} activeOpacity={0.7}>
            <View style={s.cardLeft}>
              <View style={[s.iconBg, { backgroundColor: theme.accentBg }]}>
                <Ionicons name={cat.icon as any} size={22} color={theme.accent} />
              </View>
              <Text style={[s.cardLabel, { color: theme.text }]}>{cat.label}</Text>
            </View>
            <View style={s.cardRight}>
              <Text style={[s.cardCount, { color: theme.text }]}>{cat.count}</Text>
              <Text style={[s.cardCountLabel, { color: theme.textMuted }]}>articles</Text>
              <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const st = (t: Theme) => ({
  header: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 12 },
  logo: { fontSize: 24, fontWeight: "800" as const, letterSpacing: -0.5 },
  pageTitle: { fontSize: 28, fontWeight: "700" as const, paddingHorizontal: 20 },
  pageSubtitle: { fontSize: 14, paddingHorizontal: 20, marginTop: 4, marginBottom: 20 },
  list: { flex: 1 },
  listContent: { paddingHorizontal: 16, paddingBottom: 24, gap: 8 },
  card: { flexDirection: "row" as const, alignItems: "center" as const, justifyContent: "space-between" as const, borderRadius: 12, padding: 14 },
  cardLeft: { flexDirection: "row" as const, alignItems: "center" as const, gap: 14 },
  iconBg: { width: 44, height: 44, borderRadius: 12, justifyContent: "center" as const, alignItems: "center" as const },
  cardLabel: { fontSize: 15, fontWeight: "600" as const },
  cardRight: { flexDirection: "row" as const, alignItems: "center" as const, gap: 6 },
  cardCount: { fontSize: 16, fontWeight: "700" as const },
  cardCountLabel: { fontSize: 12 },
});
