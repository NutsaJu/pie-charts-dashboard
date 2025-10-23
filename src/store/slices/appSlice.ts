import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getInitialTheme } from "../../utils/getInitialTheme";
import type { DataSet, ThemeMode } from "../../types/types";

interface AppState {
  theme: ThemeMode;
  selectedDataset: DataSet;
}

const initialState: AppState = {
  theme: getInitialTheme(),
  selectedDataset: "visitors",
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
    setSelectedDataset: (state, action: PayloadAction<DataSet>) => {
      state.selectedDataset = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, setSelectedDataset } = appSlice.actions;
export default appSlice.reducer;
