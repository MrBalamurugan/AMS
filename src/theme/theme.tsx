import { createTheme } from "@mui/material";
import type { PaletteMode } from "@mui/material";

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#6366F1",
      },
    },
    typography: {
      fontFamily: "Inter, Roboto, system-ui, Arial",
    },
    shape: {
      borderRadius: 8,
    },
  });
