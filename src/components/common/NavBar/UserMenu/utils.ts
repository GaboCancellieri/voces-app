import { logoutUser } from "src/context/UserContext/actions";

export const logout = (dispatch: any) => {
  dispatch(logoutUser());
};
