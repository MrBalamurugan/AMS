import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/auth.api";
import { AUTH_USER_QUERY_KEY } from "../auth.queryKeys";

export const useAuthUser = () =>
  useQuery({
    queryKey: AUTH_USER_QUERY_KEY,
    queryFn: getMe,
    retry: false,
  });
