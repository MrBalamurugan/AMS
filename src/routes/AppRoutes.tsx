import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import RoleProtectedRoute from "./RoleProtectedRoute";

import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import UnauthorizedPage from "@/pages/UnauthorizedPage";
import AppLayout from "@/components/layout/AppLayout";
import { ROLES } from "@/features/auth/roles";
import UserPage from "@/pages/user/UserPage";
import TeamPage from "@/pages/team/TeamPage";
import RolePage from "@/pages/role/RolePage";
import ReportTaskPage from "@/pages/reports/tasks/ReportTaskPage";
import ReportAssetsPage from "@/pages/reports/assets/ReportAssetsPage";
import ReportIssuePage from "@/pages/reports/issues/ReportIssuePage";
import ServiceRecordPage from "@/pages/reports/servicerecords/ServiceRecordPage";
import ServiceContractPage from "@/pages/reports/servicecontracts/ServiceContractPage";
import VendorPage from "@/pages/vendors/VendorPage";
import FacilitiesPage from "@/pages/facilities/FacilitiesPage";
import RecordPage from "@/pages/services/records/RecordPage";
import ContractPage from "@/pages/services/contracts/ContractPage";
import AssetsPage from "@/pages/assets/AssetsPage";
import IssuePage from "@/pages/issues/IssuePage";
import ChecklistPage from "@/pages/settings/checklists/ChecklistPage";
import AboutUs from "@/pages/helps/aboutus/AboutUs";
import ContactUs from "@/pages/helps/contactus/ContactUs";
import MeterPage from "@/pages/meter/MeterPage";

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
            <Route path="/users" element={<UserPage />} />
            <Route path="/teams" element={<TeamPage />} />
            <Route path="/roles" element={<RolePage />} />
            <Route path="/assets" element={<AssetsPage />} />
            <Route path="/meters" element={<MeterPage />} />
            <Route path="/issues" element={<IssuePage />} />
            <Route path="/records" element={<RecordPage />} />
            <Route path="/contracts" element={<ContractPage />} />
            <Route path="/vendors" element={<VendorPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            {/* Report */}-
            <Route path="/reporttasks" element={<ReportTaskPage />} />
            <Route path="/reportassets" element={<ReportAssetsPage />} />
            <Route path="/reportissues" element={<ReportIssuePage />} />
            <Route path="/servicerecords" element={<ServiceRecordPage />} />
            <Route path="/servicecontracts" element={<ServiceContractPage />} />
            {/* Settings */}
            <Route path="/checklists" element={<ChecklistPage />} />
            {/* Helps */}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<UnauthorizedPage />} />
    </Routes>
  );
}
