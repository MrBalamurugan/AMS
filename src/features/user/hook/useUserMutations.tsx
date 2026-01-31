import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser, updateUser } from "../api/userAPI";
import { customToast } from "@/utils/customToast";

export const useUserMutations = () => {
  const queryClient = useQueryClient();

  /* ---------- CREATE USER ---------- */
  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      customToast.success("User created successfully");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error: any) => {
      customToast.error(
        error?.response?.data?.message || "Failed to create user",
      );
    },
  });

  /* ---------- UPDATE USER ---------- */
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: any) => updateUser(id, data),
    onSuccess: () => {
      customToast.success("User updated successfully");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error: any) => {
      customToast.error(
        error?.response?.data?.message || "Failed to update user",
      );
    },
  });

  return {
    createUser: createMutation.mutate,
    updateUser: updateMutation.mutate,
    creating: createMutation.isPending,
    updating: updateMutation.isPending,
  };
};
