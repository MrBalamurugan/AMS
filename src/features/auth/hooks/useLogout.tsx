import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../api/auth.api";
import { AUTH_USER_QUERY_KEY } from "../auth.queryKeys";

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem("token");
      queryClient.removeQueries({
        queryKey: AUTH_USER_QUERY_KEY,
      });
    },
  });
};
