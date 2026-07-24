import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { trendingTopics, searchResults } from "../../lib/mock-data";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? searchResults.filter((r) =>
        r.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <Text style={styles.logo}>Kivo</Text>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.inputWrapper}>
          <Ionicons name="search-outline" size={18} color="#6B7280" />
          <TextInput
            style={styles.input}
            placeholder="Search articles and topics"
            placeholderTextColor="#6B7280"
            value={query}
            onChangeText={setQuery}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
          />
        </View>
        <TouchableOpacity style={styles.filterButton} activeOpacity={0.7}>
          <Ionicons name="options-outline" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {!query.trim() ? (
          <>
            <Text style={styles.sectionTitle}>Trending</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.trendingRow}
              contentContainerStyle={styles.trendingContent}
            >
              {trendingTopics.map((topic) => (
                <TouchableOpacity
                  key={topic.id}
                  style={styles.trendingPill}
                  activeOpacity={0.7}
                  onPress={() => setQuery(topic.label)}
                >
                  <Ionicons name="flame-outline" size={15} color="#F59E0B" />
                  <Text style={styles.trendingLabel}>{topic.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Text style={styles.sectionTitle}>Recent searches</Text>
            <View style={styles.emptyState}>
              <Ionicons name="time-outline" size={32} color="#3A3A4E" />
              <Text style={styles.emptyText}>No recent searches</Text>
            </View>
          </>
        ) : filtered.length > 0 ? (
          <>
            <Text style={styles.sectionTitle}>Results</Text>
            <View style={styles.resultsList}>
              {filtered.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.resultCard}
                  activeOpacity={0.7}
                >
                {item.imageUrl ? (
                  <Image
                    source={item.imageUrl}
                    style={styles.resultImage}
                    contentFit="cover"
                    transition={200}
                  />
                ) : (
                  <View style={[styles.resultImage, styles.resultImagePlaceholder]}>
                    <Ionicons name="document-text-outline" size={24} color="#6B7280" />
                  </View>
                )}
                  <View style={styles.resultInfo}>
                    <View style={styles.resultCategory}>
                      <Ionicons
                        name={item.categoryIcon as any}
                        size={10}
                        color="#4F46E5"
                      />
                      <Text style={styles.resultCategoryText}>
                        {item.category}
                      </Text>
                    </View>
                    <Text style={styles.resultTitle} numberOfLines={2}>
                      {item.title}
                    </Text>
                    <Text style={styles.resultDate}>{item.date}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={32} color="#3A3A4E" />
            <Text style={styles.emptyText}>No results found</Text>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F1A",
  },
  header: {
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
  searchRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 10,
    marginBottom: 20,
  },
  inputWrapper: {
    flex: 7,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A2E",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2A2A3E",
    paddingHorizontal: 14,
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#FFFFFF",
    paddingVertical: 12,
  },
  filterButton: {
    flex: 3,
    backgroundColor: "#1A1A2E",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2A2A3E",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  trendingRow: {
    flexGrow: 0,
    marginBottom: 28,
  },
  trendingContent: {
    paddingHorizontal: 16,
    gap: 8,
    flexDirection: "row",
  },
  trendingPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#1A1A2E",
    borderWidth: 1,
    borderColor: "#2A2A3E",
  },
  trendingLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#D1D5DB",
  },
  resultsList: {
    paddingHorizontal: 16,
    gap: 10,
  },
  resultCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A2E",
    borderRadius: 12,
    padding: 12,
    gap: 14,
  },
  resultImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#2A2A3E",
  },
  resultImagePlaceholder: {
    justifyContent: "center",
    alignItems: "center",
  },
  resultInfo: {
    flex: 1,
    gap: 4,
  },
  resultCategory: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    alignSelf: "flex-start",
  },
  resultCategoryText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#4F46E5",
  },
  resultTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
    lineHeight: 20,
  },
  resultDate: {
    fontSize: 12,
    color: "#6B7280",
  },
  emptyState: {
    alignItems: "center",
    paddingTop: 60,
    gap: 12,
  },
  emptyText: {
    fontSize: 14,
    color: "#6B7280",
  },
});
