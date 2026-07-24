import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSend = () => {
    setError("");

    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setSent(true);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.form}>
        {!sent ? (
          <>
            <Text style={styles.title}>Reset password</Text>
            <Text style={styles.subtitle}>
              Enter your email and we'll send you a reset link.
            </Text>

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#6B7280"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              autoComplete="email"
            />

            <TouchableOpacity style={styles.button} onPress={handleSend}>
              <Text style={styles.buttonText}>Send Reset Link</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.title}>Check your email</Text>
            <Text style={styles.subtitle}>
              If an account exists for{" "}
              <Text style={styles.emailHighlight}>{email}</Text>, we've sent a
              password reset link.
            </Text>

            <View style={styles.sentIcon}>
              <Text style={styles.sentIconText}>{'\u2713'}</Text>
            </View>
          </>
        )}

        <TouchableOpacity
          style={styles.switchLink}
          onPress={() => router.back()}
        >
          <Text style={styles.switchText}>
            <Text style={styles.switchHighlight}>Back to Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F1A",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    lineHeight: 22,
    marginBottom: 8,
  },
  error: {
    color: "#EF4444",
    fontSize: 14,
  },
  input: {
    backgroundColor: "#1A1A2E",
    borderWidth: 1,
    borderColor: "#2A2A3E",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#FFFFFF",
  },
  button: {
    backgroundColor: "#4F46E5",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  emailHighlight: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  sentIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#065F46",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 16,
  },
  sentIconText: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  switchLink: {
    alignItems: "center",
    paddingVertical: 16,
  },
  switchText: {
    fontSize: 14,
    color: "#6B7280",
  },
  switchHighlight: {
    color: "#4F46E5",
    fontWeight: "600",
  },
});
