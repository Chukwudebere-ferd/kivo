import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { categoryList } from "../../lib/mock-data";

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Kivo</Text>
      </View>

      <Text style={styles.pageTitle}>Categories</Text>
      <Text style={styles.pageSubtitle}>
        Browse articles by topic
      </Text>

      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {categoryList.map((cat) => (
          <TouchableOpacity key={cat.id} style={styles.card} activeOpacity={0.7}>
            <View style={styles.cardLeft}>
              <View style={styles.iconBg}>
                <Ionicons name={cat.icon as any} size={22} color="#4F46E5" />
              </View>
              <Text style={styles.cardLabel}>{cat.label}</Text>
            </View>
            <View style={styles.cardRight}>
              <Text style={styles.cardCount}>{cat.count}</Text>
              <Text style={styles.cardCountLabel}>articles</Text>
              <Ionicons name="chevron-forward" size={18} color="#6B7280" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
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
  pageTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    paddingHorizontal: 20,
  },
  pageSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    paddingHorizontal: 20,
    marginTop: 4,
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 8,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1A1A2E",
    borderRadius: 12,
    padding: 14,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  iconBg: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "rgba(79, 70, 229, 0.12)",
    justifyContent: "center",
    alignItems: "center",
  },
  cardLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  cardRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  cardCount: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  cardCountLabel: {
    fontSize: 12,
    color: "#9CA3AF",
  },
});
