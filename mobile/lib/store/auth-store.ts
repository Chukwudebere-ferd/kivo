import { create } from "zustand";

interface User {
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: false,

  signIn: async (email) => {
    set({ isLoading: true });
    await new Promise((r) => setTimeout(r, 800));
    set({ isAuthenticated: true, user: { email }, isLoading: false });
  },

  signUp: async (email) => {
    set({ isLoading: true });
    await new Promise((r) => setTimeout(r, 800));
    set({ isAuthenticated: true, user: { email }, isLoading: false });
  },

  signOut: () => {
    set({ isAuthenticated: false, user: null });
  },
}));
