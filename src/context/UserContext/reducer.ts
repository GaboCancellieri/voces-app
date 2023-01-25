import { getUserFromAccessToken } from "src/utils/user";
import { IReducerOptions } from "../Store/types";
import { IUserState } from "./types";
import * as Actions from "./actions";

export const userInitialState: IUserState = {
  currentUser: getUserFromAccessToken(localStorage.getItem("accessToken")),
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
};

export const userReducer = (state: IUserState, options: IReducerOptions) => {
  const { action, payload } = options;

  switch (action.toUpperCase()) {
    case Actions.LOGIN_USER:
      return {
        ...state,
        currentUser: payload.user,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
      };
    case Actions.LOGOUT_USER:
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return {
        ...state,
        currentUser: null,
        accessToken: null,
        refreshToken: null,
      };
    default:
      return state;
  }
};
