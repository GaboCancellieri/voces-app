import { ReactNode } from "react";

export interface IUser {
  name: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
}

export interface IUserState {
  currentUser: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}

export interface UserProviderProps {
  children: ReactNode;
}
