import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../../lib/store/auth-store";

export default function ProfileScreen() {
  const { isAuthenticated, user, signOut } = useAuthStore();

  if (!isAuthenticated) {
    return <LoggedOutProfile />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Kivo</Text>
      </View>

      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.email?.charAt(0).toUpperCase() ?? "?"}
          </Text>
        </View>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reading History</Text>
        <View style={styles.emptyState}>
          <Ionicons name="time-outline" size={24} color="#6B7280" />
          <Text style={styles.emptyText}>No articles read yet</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bookmarks</Text>
        <View style={styles.emptyState}>
          <Ionicons name="bookmark-outline" size={24} color="#6B7280" />
          <Text style={styles.emptyText}>No saved articles</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

function LoggedOutProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Kivo</Text>
      </View>

      <View style={styles.center}>
        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person-outline" size={36} color="#6B7280" />
        </View>
        <Text style={styles.promptTitle}>Sign in to your account</Text>
        <Text style={styles.promptSubtitle}>
          Like, comment, bookmark, and track your reading history.
        </Text>

        <View style={styles.featureList}>
          {["Bookmark articles", "Comment and discuss", "Reading history", "Personalized feed"].map(
            (feature) => (
              <View key={feature} style={styles.featureRow}>
                <Ionicons name="checkmark-circle" size={20} color="#4F46E5" />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            )
          )}
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text style={styles.primaryButtonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/(auth)/sign-in")}
        >
          <Text style={styles.secondaryButtonText}>Sign In</Text>
        </TouchableOpacity>
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
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#1F1F2E",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  promptTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  promptSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 28,
  },
  featureList: {
    width: "100%",
    gap: 14,
    marginBottom: 36,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  featureText: {
    fontSize: 15,
    color: "#D1D5DB",
  },
  primaryButton: {
    width: "100%",
    backgroundColor: "#4F46E5",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButton: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2A2A3E",
  },
  secondaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 32,
    gap: 12,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#4F46E5",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  email: {
    fontSize: 16,
    color: "#9CA3AF",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#9CA3AF",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 12,
  },
  emptyState: {
    backgroundColor: "#1A1A2E",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    gap: 8,
  },
  emptyText: {
    fontSize: 14,
    color: "#6B7280",
  },
  signOutButton: {
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EF4444",
    marginTop: "auto",
    marginBottom: 40,
  },
  signOutText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "600",
  },
});
