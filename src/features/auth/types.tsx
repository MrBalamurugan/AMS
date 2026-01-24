import type { Role } from "./roles";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthUser {
  id: number;
  email: string;
  name: string;
  token: string;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: Role;
  token: string;
}
