export type ThemeMode = "light" | "dark";

export const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "light";

  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};