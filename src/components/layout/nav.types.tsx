import type { ReactNode } from "react";
import type { Role } from "@/features/auth/roles";

export interface NavItem {
  label: string;
  path?: string;
  icon?: ReactNode;
  roles?: Role[];
  children?: NavItem[];
}
