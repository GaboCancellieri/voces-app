import { IUser } from "src/context/UserContext/types";

export interface UserMenuProps {
  isActive?: boolean;
  currentUser: IUser;
  dispatchUser: any;
  onClose: () => void;
}
