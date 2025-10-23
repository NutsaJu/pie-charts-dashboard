import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider, useSelector } from "react-redux";
import { store, type RootState } from "./store";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./assets/config/theme";
import { GlobalStyle } from "./assets/config/GlobalStyle";

const ThemedApp: React.FC = () => {
  const theme = useSelector((state: RootState) => state.app.theme);
  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  </React.StrictMode>
);