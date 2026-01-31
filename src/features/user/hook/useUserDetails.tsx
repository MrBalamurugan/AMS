import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "../api/userAPI";

export const useUserDetails = (id?: string | number) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => fetchUserById(id!),
    enabled: !!id,
  });
};
