import { Navigate, Outlet } from "react-router-dom";
import { useAuthUser } from "@/features/auth/hooks/useAuthUser";
import Loader from "@/components/common/Loader";

export default function ProtectedRoute() {
  const { data: user, isLoading } = useAuthUser();

  if (isLoading) return <Loader />;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
