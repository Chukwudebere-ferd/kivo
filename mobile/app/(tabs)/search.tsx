import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { trendingTopics, searchResults } from "../../lib/mock-data";
import { useTheme, Theme } from "../../lib/theme";

export default function SearchScreen() {
  const theme = useTheme();
  const s = st(theme);
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? searchResults.filter((r) =>
        r.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.bg }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={[s.header, { backgroundColor: theme.bg }]}>
        <Text style={[s.logo, { color: theme.text }]}>Kivo</Text>
      </View>

      <View style={s.searchRow}>
        <View style={[s.inputWrapper, { backgroundColor: theme.inputBg, borderColor: theme.inputBorder }]}>
          <Ionicons name="search-outline" size={18} color={theme.placeholder} />
          <TextInput
            style={[s.input, { color: theme.text }]}
            placeholder="Search articles and topics"
            placeholderTextColor={theme.placeholder}
            value={query}
            onChangeText={setQuery}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
          />
        </View>
        <TouchableOpacity style={[s.filterButton, { backgroundColor: theme.card, borderColor: theme.border }]} activeOpacity={0.7}>
          <Ionicons name="options-outline" size={22} color={theme.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={s.scrollView}
        contentContainerStyle={s.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {!query.trim() ? (
          <>
            <Text style={[s.sectionTitle, { color: theme.text }]}>Trending</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={s.trendingRow}
              contentContainerStyle={s.trendingContent}
            >
              {trendingTopics.map((topic) => (
                <TouchableOpacity
                  key={topic.id}
                  style={[s.trendingPill, { backgroundColor: theme.pillBg, borderColor: theme.border }]}
                  activeOpacity={0.7}
                  onPress={() => setQuery(topic.label)}
                >
                  <Ionicons name="flame-outline" size={15} color="#F59E0B" />
                  <Text style={[s.trendingLabel, { color: theme.textSecondary }]}>{topic.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Text style={[s.sectionTitle, { color: theme.text }]}>Recent searches</Text>
            <View style={s.emptyState}>
              <Ionicons name="time-outline" size={32} color={theme.iconMuted} />
              <Text style={[s.emptyText, { color: theme.textMuted }]}>No recent searches</Text>
            </View>
          </>
        ) : filtered.length > 0 ? (
          <>
            <Text style={[s.sectionTitle, { color: theme.text }]}>Results</Text>
            <View style={s.resultsList}>
              {filtered.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={[s.resultCard, { backgroundColor: theme.card }]}
                  activeOpacity={0.7}
                >
                  {item.imageUrl ? (
                    <Image
                      source={item.imageUrl}
                      style={s.resultImage}
                      contentFit="cover"
                      transition={200}
                    />
                  ) : (
                    <View style={[s.resultImage, s.resultImagePlaceholder, { backgroundColor: theme.border }]}>
                      <Ionicons name="document-text-outline" size={24} color={theme.textMuted} />
                    </View>
                  )}
                  <View style={s.resultInfo}>
                    <View style={s.resultCategory}>
                      <Ionicons
                        name={item.categoryIcon as any}
                        size={10}
                        color={theme.accent}
                      />
                      <Text style={[s.resultCategoryText, { color: theme.accent }]}>
                        {item.category}
                      </Text>
                    </View>
                    <Text style={[s.resultTitle, { color: theme.text }]} numberOfLines={2}>
                      {item.title}
                    </Text>
                    <Text style={[s.resultDate, { color: theme.textMuted }]}>{item.date}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <View style={s.emptyState}>
            <Ionicons name="search-outline" size={32} color={theme.iconMuted} />
            <Text style={[s.emptyText, { color: theme.textMuted }]}>No results found</Text>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const st = (t: Theme) => ({
  header: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 12 },
  logo: { fontSize: 24, fontWeight: "800" as const, letterSpacing: -0.5 },
  searchRow: { flexDirection: "row" as const, paddingHorizontal: 16, gap: 10, marginBottom: 20 },
  inputWrapper: { flex: 7, flexDirection: "row" as const, alignItems: "center" as const, borderRadius: 12, borderWidth: 1, paddingHorizontal: 14, gap: 10 },
  input: { flex: 1, fontSize: 15, paddingVertical: 12 },
  filterButton: { flex: 3, borderRadius: 12, borderWidth: 1, justifyContent: "center" as const, alignItems: "center" as const },
  scrollView: { flex: 1 },
  scrollContent: { paddingBottom: 24 },
  sectionTitle: { fontSize: 16, fontWeight: "700" as const, paddingHorizontal: 20, marginBottom: 12 },
  trendingRow: { flexGrow: 0, marginBottom: 28 },
  trendingContent: { paddingHorizontal: 16, gap: 8, flexDirection: "row" as const },
  trendingPill: { flexDirection: "row" as const, alignItems: "center" as const, gap: 6, paddingHorizontal: 14, paddingVertical: 10, borderRadius: 20, borderWidth: 1 },
  trendingLabel: { fontSize: 14, fontWeight: "600" as const },
  resultsList: { paddingHorizontal: 16, gap: 10 },
  resultCard: { flexDirection: "row" as const, alignItems: "center" as const, borderRadius: 12, padding: 12, gap: 14 },
  resultImage: { width: 60, height: 60, borderRadius: 10 },
  resultImagePlaceholder: { justifyContent: "center" as const, alignItems: "center" as const },
  resultInfo: { flex: 1, gap: 4 },
  resultCategory: { flexDirection: "row" as const, alignItems: "center" as const, gap: 4, alignSelf: "flex-start" as const },
  resultCategoryText: { fontSize: 11, fontWeight: "600" as const },
  resultTitle: { fontSize: 14, fontWeight: "600" as const, lineHeight: 20 },
  resultDate: { fontSize: 12 },
  emptyState: { alignItems: "center" as const, paddingTop: 60, gap: 12 },
  emptyText: { fontSize: 14 },
});
