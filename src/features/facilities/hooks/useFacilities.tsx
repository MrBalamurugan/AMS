import { useQuery } from "@tanstack/react-query";
import { getFacilities } from "../api/facilities.api";

export const FACILITIES_QUERY_KEY = ["facilities"];

export const useFacilities = () =>
  useQuery({
    queryKey: FACILITIES_QUERY_KEY,
    queryFn: getFacilities,
  });
