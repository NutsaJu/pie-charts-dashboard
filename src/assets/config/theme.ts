export const lightTheme = {
  name: "light",
  PrimaryBaseWhite: "#FFFFFF",
  PrimaryGray300: "#D2D5DA",
  PrimaryBaseBlack: "#000000",
  PrimaryBlue600: "#2563EB",
  SecondaryPurple400: "#C084FC",
  PrimaryGray600: "#4B5563",
  SecondaryOrange400: "#FB923C",
  SupportingGreen500: "#22C55E",
};

export const darkTheme = {
  name: "dark",
  PrimaryBaseWhite: "#111827",
  PrimaryGray300: "#6B7280",
  PrimaryBaseBlack: "#F9FAFB",
  PrimaryBlue600: "#3B82F6",
  SecondaryPurple400: "#A78BFA",
  PrimaryGray600: "#9CA3AF",
  SecondaryOrange400: "#F97316",
  SupportingGreen500: "#34D399",
};

export type ThemeType = typeof lightTheme;
