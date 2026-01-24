import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from "./constants";

interface Props {
  collapsed: boolean;
}

export default function MainLayout({ collapsed }: Props) {
  const theme = useTheme();

  const drawerWidth = collapsed ? MINI_DRAWER_WIDTH : DRAWER_WIDTH;

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        mt: 8,

        ml: { md: `${drawerWidth}px` },
        width: { md: `calc(100% - ${drawerWidth}px)` },

        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.standard,
        }),
      }}
    >
      <Outlet />
    </Box>
  );
}
