import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import RoleProtectedRoute from "./RoleProtectedRoute";

import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import FacilitiesPage from "@/pages/FacilitiesPage";
import UnauthorizedPage from "@/pages/UnauthorizedPage";
import AppLayout from "@/components/layout/AppLayout";
import { ROLES } from "@/features/auth/roles";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Authenticated */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />

          {/* Admin only */}
          <Route element={<RoleProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>
            <Route path="facilities" element={<FacilitiesPage />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<UnauthorizedPage />} />
    </Routes>
  );
}
