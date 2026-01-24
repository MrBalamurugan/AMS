import { apiClient } from "@/api/axios";
import type { Facility } from "../../../features/facilities/types";

export const getFacilities = async (): Promise<Facility[]> => {
  const response = await apiClient.get("/facilities");
  return response.data;
};

export const createFacility = async (
  payload: Partial<Facility>,
): Promise<Facility> => {
  const response = await apiClient.post("/facilities", payload);
  return response.data;
};

export const updateFacility = async (
  id: number,
  payload: Partial<Facility>,
): Promise<Facility> => {
  const response = await apiClient.put(`/facilities/${id}`, payload);
  return response.data;
};
