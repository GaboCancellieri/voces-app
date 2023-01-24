import { IAlertState } from "./types";
import * as Actions from "./actions";
import { IReducerOptions } from "../Store/types";

export const alertInitialState: IAlertState = {
  currentAlert: null,
};

export const alertReducer = (state: IAlertState, options: IReducerOptions) => {
  const { action, payload } = options;
  console.log({ action, payload });
  switch (action.toUpperCase()) {
    case Actions.SHOW_ALERT:
      return {
        ...state,
        currentAlert: {
          type: payload.type,
          variant: payload.variant,
          message: payload.message,
        },
      };
    case Actions.CLOSE_ALERT:
      return {
        ...state,
        currentAlert: null,
      };
    default:
      return state;
  }
};
