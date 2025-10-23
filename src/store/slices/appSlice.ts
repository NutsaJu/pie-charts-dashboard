import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getInitialTheme } from "../../utils/getInitialTheme";

export type ThemeMode = "light" | "dark";

interface AppState {
  theme: ThemeMode;
}

const initialState: AppState = {
  theme: getInitialTheme(),
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { toggleTheme, setTheme } = appSlice.actions;
export default appSlice.reducer;