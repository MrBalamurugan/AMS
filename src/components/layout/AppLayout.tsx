import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
import { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import MainLayout from "./MainLayout";
import { ColorModeContext } from "@/theme/ColorModeContext";
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from "./constants";
import { useAuthUser } from "@/features/auth/hooks/useAuthUser";

export default function AppLayout() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { data: user } = useAuthUser();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const drawerWidth = collapsed ? MINI_DRAWER_WIDTH : DRAWER_WIDTH;

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          ml: { md: `${drawerWidth}px` },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
          backgroundColor: theme.palette.background.default,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 70 }, px: { xs: 2, md: 3 } }}>
          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{
              mr: 2,
              display: { md: "none" },
              color: theme.palette.text.primary,
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Page Title */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              fontSize: { xs: "18px", md: "20px" },
              color: theme.palette.text.primary,
            }}
          >
            Dashboard
          </Typography>

          {/* Right Side Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Search Button */}
            <IconButton
              sx={{
                width: 40,
                height: 40,
                color: theme.palette.text.secondary,
                "&:hover": {
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(99, 102, 241, 0.08)",
                },
              }}
            >
              <SearchIcon />
            </IconButton>

            {/* Notifications */}
            <IconButton
              sx={{
                width: 40,
                height: 40,
                color: theme.palette.mode === "dark" ? "#9CA3AF" : "#6B7280",
                "&:hover": {
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(99, 102, 241, 0.08)",
                },
              }}
            >
              <Badge badgeContent={3} color="error">
                <NotificationsOutlinedIcon />
              </Badge>
            </IconButton>

            {/* Dark Mode Toggle */}
            <IconButton
              onClick={colorMode.toggleColorMode}
              sx={{
                width: 40,
                height: 40,
                color: theme.palette.mode === "dark" ? "#9CA3AF" : "#6B7280",
                "&:hover": {
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(99, 102, 241, 0.08)",
                },
              }}
            >
              {theme.palette.mode === "dark" ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>

            {/* User Avatar */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 1.5,
                ml: 1,
                pl: 1.5,
                borderLeft: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box
                sx={{
                  textAlign: "right",
                  display: { xs: "none", md: "block" },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    color: theme.palette.mode === "dark" ? "#fff" : "#111827",
                    lineHeight: 1.2,
                  }}
                >
                  {user?.name || "User"}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "12px",
                    color:
                      theme.palette.mode === "dark" ? "#9CA3AF" : "#6B7280",
                  }}
                >
                  {user?.role || "Admin"}
                </Typography>
              </Box>
              <Avatar
                sx={{
                  width: 38,
                  height: 38,
                  bgcolor: "#6366F1",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.2)",
                  },
                }}
              >
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </Avatar>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />

      {/* Main Content */}
      <MainLayout collapsed={collapsed} />
    </Box>
  );
}
