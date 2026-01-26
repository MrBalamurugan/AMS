import { createTheme } from "@mui/material";
import type { PaletteMode } from "@mui/material";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,

    primary: {
      main: "#6366F1",
    },

    background: {
      default: mode === "dark" ? "#0F172A" : "#F7F8FC",
      paper: mode === "dark" ? "#020617" : "#FFFFFF",
    },

    text: {
      primary: mode === "dark" ? "#E5E7EB" : "#111827",
      secondary: mode === "dark" ? "#9CA3AF" : "#6B7280",
    },

    divider: mode === "dark" ? "#1E293B" : "#E5E7EB",
  },

  typography: {
    fontFamily: "Inter, Roboto, system-ui, Arial",
  },

  shape: {
    borderRadius: 8,
  },
});

export const getTheme = (mode: PaletteMode) =>
  createTheme(getDesignTokens(mode));
