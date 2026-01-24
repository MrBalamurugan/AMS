import DashboardIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory2";
import TaskIcon from "@mui/icons-material/CheckCircleOutline";
import BugReportIcon from "@mui/icons-material/BugReport";
import SpeedIcon from "@mui/icons-material/Speed";
import BuildIcon from "@mui/icons-material/Build";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupsIcon from "@mui/icons-material/Groups";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BusinessIcon from "@mui/icons-material/Business";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";

import { ROLES } from "@/features/auth/roles";
import type { NavItem } from "./nav.types";

export const navItems: NavItem[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
    roles: [ROLES.ADMIN, ROLES.USER, ROLES.VIEWER],
  },

  {
    label: "Assets",
    // path: "/assets",
    icon: <InventoryIcon />,
    roles: [ROLES.ADMIN, ROLES.USER],
  },

  {
    label: "Tasks",
    // path: "/tasks",
    icon: <TaskIcon />,
    roles: [ROLES.ADMIN, ROLES.USER],
  },

  {
    label: "Issues",
    // path: "/issues",
    icon: <BugReportIcon />,
    roles: [ROLES.ADMIN],
  },

  {
    label: "Meters",
    // path: "/meters",
    icon: <SpeedIcon />,
    roles: [ROLES.ADMIN],
  },

  {
    label: "Services",
    icon: <BuildIcon />,
    roles: [ROLES.ADMIN],
    children: [
      {
        label: "Facilities",
        // path: "/facilities",
        icon: <ApartmentIcon />,
        roles: [ROLES.ADMIN],
      },
      {
        label: "Vendors",
        // path: "/vendors",
        icon: <GroupsIcon />,
        roles: [ROLES.ADMIN],
      },
    ],
  },

  {
    label: "Reports",
    icon: <AssessmentIcon />,
    roles: [ROLES.ADMIN, ROLES.USER],
    children: [
      {
        label: "Usage Reports",
        // path: "/reports",
        roles: [ROLES.ADMIN, ROLES.USER],
      },
    ],
  },

  {
    label: "Organization",
    icon: <BusinessIcon />,
    roles: [ROLES.ADMIN],
    children: [
      {
        label: "Departments",
        // path: "/organization",
        roles: [ROLES.ADMIN],
      },
    ],
  },

  {
    label: "Settings",
    icon: <SettingsIcon />,
    roles: [ROLES.ADMIN],
    children: [
      {
        label: "Preferences",
        // path: "/settings",
        roles: [ROLES.ADMIN],
      },
    ],
  },

  {
    label: "Help",
    icon: <HelpIcon />,
    roles: [ROLES.ADMIN, ROLES.USER, ROLES.VIEWER],
    children: [
      {
        label: "Support",
        // path: "/help",
        roles: [ROLES.ADMIN, ROLES.USER, ROLES.VIEWER],
      },
    ],
  },
];
