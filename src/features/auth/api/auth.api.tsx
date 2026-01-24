import type { LoginRequest, AuthUser } from "../types";
import { ROLES } from "../roles";

export const login = async (payload: LoginRequest): Promise<AuthUser> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (payload.email === "admin" && payload.password === "12345") {
    return {
      id: 1,
      name: "Admin User",
      email: "admin",
      role: ROLES.ADMIN,
      token: "mock-admin-token",
    };
  }

  if (payload.email === "user" && payload.password === "12345") {
    return {
      id: 2,
      name: "Normal User",
      email: "user",
      role: ROLES.USER,
      token: "mock-user-token",
    };
  }

  if (payload.email === "viewer" && payload.password === "12345") {
    return {
      id: 3,
      name: "View Only",
      email: "viewer",
      role: ROLES.VIEWER,
      token: "mock-viewer-token",
    };
  }
  throw new Error("Invalid username or password");
};

export const getMe = async (): Promise<AuthUser> => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Unauthorized");
  }

  return {
    id: 1,
    email: "admin",
    role: ROLES.ADMIN,
    name: "Administrator",
    token,
  };
};

export const logout = async (): Promise<void> => {
  return;
};
