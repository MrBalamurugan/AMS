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
    path: "/assets",
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
    path: "/issues",
    icon: <BugReportIcon />,
    roles: [ROLES.ADMIN],
  },

  {
    label: "Meters",
    path: "/meters",
    icon: <SpeedIcon />,
    roles: [ROLES.ADMIN],
  },

  {
    label: "Services",
    icon: <BuildIcon />,
    roles: [ROLES.ADMIN],
    children: [
      {
        label: "Records",
        path: "/records",
        icon: <ApartmentIcon />,
        roles: [ROLES.ADMIN],
      },
      {
        label: "Contracts",
        path: "/contracts",
        icon: <GroupsIcon />,
        roles: [ROLES.ADMIN],
      },
    ],
  },
  {
    label: "Facilities",
    path: "/facilities",
    icon: <SpeedIcon />,
    roles: [ROLES.ADMIN],
  },
  {
    label: "Vendors",
    path: "/vendors",
    icon: <SpeedIcon />,
    roles: [ROLES.ADMIN],
  },
  {
    label: "Reports",
    icon: <AssessmentIcon />,
    roles: [ROLES.ADMIN, ROLES.USER],
    children: [
      {
        label: "Assets",
        path: "/reportassets",
        roles: [ROLES.ADMIN, ROLES.USER],
      },
      {
        label: "Tasks",
        path: "/reporttasks",
        roles: [ROLES.ADMIN, ROLES.USER],
      },
      {
        label: "Issues",
        path: "/reportissues",
        roles: [ROLES.ADMIN, ROLES.USER],
      },
      {
        label: "Service Records",
        path: "/servicerecords",
        roles: [ROLES.ADMIN, ROLES.USER],
      },
      {
        label: "Service Contacts",
        path: "/servicecontracts",
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
        label: "Users",
        path: "/users",
        roles: [ROLES.ADMIN],
      },
      {
        label: "Teams",
        path: "/teams",
        roles: [ROLES.ADMIN],
      },
      {
        label: "Roles",
        path: "/roles",
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
        label: "Masters",
        // path: "/settings",
        roles: [ROLES.ADMIN],
      },
      {
        label: "Custom Fields",
        // path: "/settings",
        roles: [ROLES.ADMIN],
      },
      {
        label: "CheckLists",
        path: "/checklists",
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
        label: "About Us",
        path: "/aboutus",
        roles: [ROLES.ADMIN, ROLES.USER, ROLES.VIEWER],
      },
      {
        label: "Contact Us",
        path: "/contactus",
        roles: [ROLES.ADMIN, ROLES.USER, ROLES.VIEWER],
      },
    ],
  },
];
