import { Navigate, Outlet } from "react-router-dom";
import { useAuthUser } from "@/features/auth/hooks/useAuthUser";
import Loader from "@/components/common/Loader";
import type { Role } from "@/features/auth/roles";

interface Props {
  allowedRoles: Role[];
}

export default function RoleProtectedRoute({ allowedRoles }: Props) {
  const { data: user, isLoading } = useAuthUser();

  if (isLoading) return <Loader />;

  if (!user) return <Navigate to="/login" replace />;

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
