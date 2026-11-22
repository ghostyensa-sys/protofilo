"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => applyTheme(media.matches ? "dark" : "light");
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    window.localStorage.setItem("theme", next);
    applyTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
