import { ReactNode } from "react";
import { IUser } from "src/context/UserContext/types";

export interface AdminWrapperProps {
  children: ReactNode;
  currentUser: IUser | null;
}
