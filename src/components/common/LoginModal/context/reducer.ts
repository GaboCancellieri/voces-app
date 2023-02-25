import { IReducerOptions } from "src/types/reducerTypes";
import * as Actions from "./actions";
import { LoginState } from "./types";

export const loginInitialState: LoginState = {
  email: "",
  password: "",
  isSubmitted: false,
  isError: false,
};

export const loginReducer = (state: LoginState, options: IReducerOptions) => {
  const { action, payload } = options;

  switch (action.toUpperCase()) {
    case Actions.SET_LOGIN_EMAIL:
      return { ...state, email: payload.email };
    case Actions.SET_LOGIN_PASSWORD:
      return { ...state, password: payload.password };
    case Actions.SET_LOGIN_IS_SUBMITTED:
      return { ...state, isSubmitted: payload.isSubmitted };
    case Actions.SET_LOGIN_IS_ERROR:
      return { ...state, isError: payload.isError };
    case Actions.RESET_LOGIN_INPUTS:
      return { ...loginInitialState };
    default:
      return state;
  }
};
