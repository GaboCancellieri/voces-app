import { IReducerOptions } from "src/types/reducerTypes";
import { IShowState } from "./types";
import * as Actions from "./actions";

export const showsInitialState: IShowState = {
  shows: null,
  showCreate: false,
};

export const showsReducer = (state: IShowState, options: IReducerOptions) => {
  const { action, payload } = options;
  switch (action.toUpperCase()) {
    case Actions.SET_SHOWS:
      return { ...state, shows: payload.shows };
    case Actions.ADD_SHOW:
      console.log({ payload });
      if (state.shows) {
        return { ...state, shows: [...state.shows, payload.show] };
      } else {
        return { ...state, shows: [payload.show] };
      }
    case Actions.TOGGLE_SHOW_CREATE:
      return { ...state, showCreate: !state.showCreate };
    default:
      return state;
  }
};
