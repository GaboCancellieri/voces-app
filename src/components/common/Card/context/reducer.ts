import { IReducerOptions } from "src/types/reducerTypes";
import { CardState } from "./types";
import * as Actions from "./actions";

export const cardInitialState = {
  open: false,
};

export const cardReducer = (state: CardState, options: IReducerOptions) => {
  const { action, payload } = options;

  switch (action) {
    case Actions.TOGGLE_OPEN:
      return { ...state, open: !state.open };
    default:
      return state;
  }
};
