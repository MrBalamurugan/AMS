import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Tooltip,
  Divider,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { navItems } from "./navConfig";
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from "./constants";
import { useAuthUser } from "@/features/auth/hooks/useAuthUser";
import { useLogout } from "@/features/auth/hooks/useLogout";
import type { NavItem } from "./nav.types";
import fullLogo from "@/assets/faciliteasylogo.png";
import miniLogo from "@/assets/titlebar.png";

interface Props {
  mobileOpen: boolean;
  onMobileClose: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({
  mobileOpen,
  onMobileClose,
  collapsed,
  onToggleCollapse,
}: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { data: user } = useAuthUser();

  const filterByRole = (items: NavItem[]): NavItem[] =>
    items
      .filter((item) => !item.roles || item.roles.includes(user!.role))
      .map((item) => ({
        ...item,
        children: item.children ? filterByRole(item.children) : undefined,
      }));

  const logout = useLogout();

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const drawerWidth = collapsed ? MINI_DRAWER_WIDTH : DRAWER_WIDTH;

  const handleToggle = (label: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const content = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#F7F8FC",
        color: "text.primary",
        position: "relative",
      }}
    >
      {/* ================= USER PROFILE / LOGO ================= */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "flex-start",
          gap: collapsed ? 0 : 1.25,
          px: collapsed ? 1 : 2,
          py: 1.5,
          mb: 1.5,
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: collapsed ? "100%" : "auto",
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src={collapsed ? miniLogo : fullLogo}
            alt="Logo"
            sx={{
              height: collapsed ? 50 : 40,
              width: collapsed ? 50 : "auto",
              transition: "all 0.3s ease",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
      {/* ===== Collapse toggle (attached to sidebar edge) ===== */}
      <Box
        sx={{
          position: "fixed",
          top: 24,
          left: collapsed ? MINI_DRAWER_WIDTH - 17 : DRAWER_WIDTH - 17,
          zIndex: 1300,
          display: { xs: "none", md: "block" },
          transition: "left 0.3s ease",
        }}
      >
        <IconButton
          onClick={onToggleCollapse}
          sx={{
            width: 34,
            height: 34,
            bgcolor: "#6366F1",
            color: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.18)",
            "&:hover": {
              bgcolor: "#4F46E5",
            },
          }}
        >
          <ChevronLeftIcon
            sx={{
              transform: collapsed ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </IconButton>
      </Box>

      {/* ================= NAVIGATION ================= */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          px: collapsed ? 0.5 : 2.5,

          "&::-webkit-scrollbar": {
            width: "3px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
          },

          scrollbarWidth: "thin",
          scrollbarColor: "transparent transparent",
        }}
      >
        <List sx={{ p: 0 }}>
          {filterByRole(navItems).map((item) => {
            const isActive = item.path && location.pathname === item.path;

            if (item.children) {
              return (
                <Box key={item.label}>
                  <ListItemButton
                    onClick={() => handleToggle(item.label)}
                    sx={{
                      borderRadius: 2,
                      mb: 1,
                      px: collapsed ? 1 : 2,
                      py: 1.25,
                      minHeight: 44,
                      justifyContent: collapsed ? "center" : "flex-start",
                      color: "#6B7280",
                      "&:hover": {
                        bgcolor: "rgba(99, 102, 241, 0.08)",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: collapsed ? "auto" : 40,
                        color: "#6B7280",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>

                    {!collapsed && (
                      <>
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: "15px",
                            fontWeight: 500,
                          }}
                        />
                        {openGroups[item.label] ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </>
                    )}
                  </ListItemButton>

                  <Collapse in={openGroups[item.label] && !collapsed}>
                    <List sx={{ pl: 4 }}>
                      {item.children.map((child: any) => (
                        <ListItemButton
                          key={child.path}
                          onClick={() => {
                            navigate(child.path!);
                            onMobileClose();
                          }}
                          sx={{
                            borderRadius: 2,
                            mb: 1,
                            py: 1,
                          }}
                        >
                          <ListItemText
                            primary={child.label}
                            primaryTypographyProps={{
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              );
            }

            return (
              <Tooltip
                key={item.label}
                title={collapsed ? item.label : ""}
                placement="right"
              >
                <ListItemButton
                  onClick={() => {
                    navigate(item.path!);
                    onMobileClose();
                  }}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    px: collapsed ? 1 : 2,
                    py: 1.25,
                    minHeight: 44,
                    justifyContent: collapsed ? "center" : "flex-start",
                    bgcolor: isActive ? "#6366F1" : "transparent",
                    color: isActive ? "#FFFFFF" : "#6B7280",
                    "&:hover": {
                      bgcolor: isActive
                        ? "#6366F1"
                        : "rgba(99, 102, 241, 0.08)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: collapsed ? "auto" : 40,
                      justifyContent: "center",
                      color: isActive ? "#FFFFFF" : "#6B7280",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>

                  {!collapsed && (
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: "15px",
                        fontWeight: 500,
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            );
          })}
        </List>
      </Box>

      {/* ================= LOGOUT ================= */}
      {/* ================= LOGOUT ================= */}
      <Box sx={{ p: collapsed ? 0.5 : 2.5, pt: 2 }}>
        {" "}
        {/* Adjusted padding */}
        <Divider sx={{ mb: 2, borderColor: "#E5E7EB" }} />
        <Tooltip title={collapsed ? "Logout" : ""} placement="right">
          <ListItemButton
            onClick={() => logout.mutate()}
            sx={{
              borderRadius: 2,
              px: collapsed ? 1 : 2, // Adjusted padding
              py: 1.25,
              minHeight: 44,
              justifyContent: collapsed ? "center" : "flex-start", // Center when collapsed
              color: "#6B7280",
              "&:hover": {
                bgcolor: "rgba(99, 102, 241, 0.08)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: collapsed ? "auto" : 40, // Remove minWidth when collapsed
                color: "#6B7280",
              }}
            >
              <LogoutIcon />
            </ListItemIcon>

            {!collapsed && (
              <ListItemText
                primary="Logout"
                primaryTypographyProps={{
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              />
            )}
          </ListItemButton>
        </Tooltip>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile */}
      <Drawer
        open={mobileOpen}
        onClose={onMobileClose}
        variant="temporary"
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            bgcolor: "#F7F8FC",
            border: "none",
          },
        }}
      >
        {content}
      </Drawer>

      {/* Desktop */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#F7F8FC",
            border: "none",
            boxShadow: "2px 0 8px rgba(0, 0, 0, 0.05)",
            overflowX: "hidden",
            transition: "width 0.3s",
          },
        }}
      >
        {content}
      </Drawer>
    </>
  );
}
