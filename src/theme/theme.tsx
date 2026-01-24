import { createTheme } from "@mui/material";
import type { PaletteMode } from "@mui/material";

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#1976d2",
      },
    },
    typography: {
      fontFamily: "Inter, Roboto, system-ui, Arial",
    },
    shape: {
      borderRadius: 8,
    },
  });
