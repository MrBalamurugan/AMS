import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";

import { queryClient } from "./api/queryClient";
import App from "./App";
import { ColorModeContext } from "./theme/ColorModeContext";
import { getTheme } from "./theme/theme";

export function Main() {
  const [mode, setMode] = React.useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "light",
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          const next = prev === "light" ? "dark" : "light";
          localStorage.setItem("theme", next);
          return next;
        });
      },
    }),
    [],
  );

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/*  GLOBAL TRANSPARENT SCROLLBAR */}
        <GlobalStyles
          styles={{
            /* Chrome, Edge, Safari */
            "*::-webkit-scrollbar": {
              width: "6px",
              height: "6px",
            },
            "*::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor: "transparent",
            },

            /* Firefox */
            "*": {
              scrollbarWidth: "thin",
              scrollbarColor: "transparent transparent",
            },
          }}
        />

        <QueryClientProvider client={queryClient}>
          <App />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
