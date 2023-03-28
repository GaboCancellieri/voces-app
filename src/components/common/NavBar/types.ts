import { IUser } from "src/context/UserContext/types";

export interface NavBarProps {
  currentUser: IUser;
  isDesktop: boolean;
  isMobile: boolean;
}
