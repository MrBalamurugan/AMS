import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFacility } from "../api/facilities.api";
import { FACILITIES_QUERY_KEY } from "./useFacilities";

interface UpdatePayload {
  id: number;
  data: {
    name?: string;
    isActive?: boolean;
  };
}

export const useUpdateFacility = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdatePayload) => updateFacility(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FACILITIES_QUERY_KEY });
    },
  });
};
