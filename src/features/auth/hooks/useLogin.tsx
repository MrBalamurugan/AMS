import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/auth.api";
import type { AuthUser } from "../types";
import { AUTH_USER_QUERY_KEY } from "../auth.queryKeys";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: (user: AuthUser) => {
      localStorage.setItem("token", user.token);
      queryClient.setQueryData(AUTH_USER_QUERY_KEY, user);
    },
  });
};
