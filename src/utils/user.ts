import jwtDecode from "jwt-decode";
import { IUser } from "src/context/UserContext/types";

export const getUserFromAccessToken = (
  accessToken: string | null
): IUser | null => {
  return !accessToken ? null : jwtDecode(accessToken);
};
