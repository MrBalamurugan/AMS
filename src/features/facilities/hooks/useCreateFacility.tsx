import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFacility } from "../api/facilities.api";
import { FACILITIES_QUERY_KEY } from "./useFacilities";

export const useCreateFacility = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createFacility,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FACILITIES_QUERY_KEY });
    },
  });
};
