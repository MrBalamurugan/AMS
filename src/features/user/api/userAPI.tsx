import apiClient from "../../../services/apiClient";

// Get all users
export const fetchUsers = async () => {
  const response = await apiClient.get("/users");
  return response.data || [];
};

// Get user by ID
export const fetchUserById = async (id: string | number) => {
  const response = await apiClient.get(`/users/${id}`);
  return response.data;
};

// Create new user
export const createUser = async (data: any) => {
  const response = await apiClient.post("/users", data);
  return response.data;
};

// Update user
export const updateUser = async (id: string | number, data: any) => {
  const response = await apiClient.put(`/users/${id}`, data);
  return response.data;
};

// Delete user
export const deleteUser = async (id: string | number) => {
  const response = await apiClient.delete(`/users/${id}`);
  return response.data;
};
