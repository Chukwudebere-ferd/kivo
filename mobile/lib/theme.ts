import { useThemeStore } from "./store/theme-store";

export const dark = {
  bg: "#0F0F1A",
  card: "#1A1A2E",
  border: "#2A2A3E",
  borderLight: "#1F1F2E",
  text: "#FFFFFF",
  textSecondary: "#9CA3AF",
  textMuted: "#6B7280",
  accent: "#4F46E5",
  accentBg: "rgba(79, 70, 229, 0.15)",
  error: "#EF4444",
  errorBorder: "#EF4444",
  success: "#065F46",
  tabBarBg: "#0F0F1A",
  tabBarBorder: "#1F1F2E",
  tabActive: "#4F46E5",
  tabInactive: "#9CA3AF",
  pillBg: "#1A1A2E",
  pillActive: "#000000",
  inputBg: "#1A1A2E",
  inputBorder: "#2A2A3E",
  placeholder: "#6B7280",
  avatarBg: "#1F1F2E",
  iconMuted: "#3A3A4E",
  overlay: "rgba(0,0,0,0.5)",
  gradient: "transparent",
};

export const light = {
  bg: "#F9FAFB",
  card: "#FFFFFF",
  border: "#E5E7EB",
  borderLight: "#E5E7EB",
  text: "#111827",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",
  accent: "#4F46E5",
  accentBg: "rgba(79, 70, 229, 0.1)",
  error: "#EF4444",
  errorBorder: "#FCA5A5",
  success: "#065F46",
  tabBarBg: "#FFFFFF",
  tabBarBorder: "#E5E7EB",
  tabActive: "#4F46E5",
  tabInactive: "#9CA3AF",
  pillBg: "#F3F4F6",
  pillActive: "#111827",
  inputBg: "#FFFFFF",
  inputBorder: "#D1D5DB",
  placeholder: "#9CA3AF",
  avatarBg: "#F3F4F6",
  iconMuted: "#D1D5DB",
  overlay: "rgba(0,0,0,0.3)",
  gradient: "transparent",
};

export type Theme = typeof dark;

export function useTheme(): Theme {
  const isDark = useThemeStore((s) => s.isDark);
  return isDark ? dark : light;
}
