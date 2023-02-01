import { IReducerOptions } from "src/types/reducerTypes";
import { IShowState } from "./types";
import * as Actions from "./actions";

export const showsInitialState: IShowState = {
  shows: null,
  selectedShow: null,
  showCreate: false,
};

export const showsReducer = (state: IShowState, options: IReducerOptions) => {
  const { action, payload } = options;
  switch (action.toUpperCase()) {
    case Actions.SET_SHOWS:
      return { ...state, shows: payload.shows };
    case Actions.SET_SELECTED_SHOW:
      return { ...state, selectedShow: payload.show };
    case Actions.ADD_SHOW:
      if (state.shows) {
        return { ...state, shows: [...state.shows, payload.show] };
      } else {
        return { ...state, shows: [payload.show] };
      }
    case Actions.EDIT_SHOW:
      const { show } = payload;
      const indexEdit = state.shows?.findIndex(
        (stateShow) => stateShow.id === show.id
      );
      if (indexEdit && indexEdit !== -1 && state.shows) {
        const newShowsArray = Object.assign(state.shows);
        newShowsArray.splice(indexEdit, 1, show);
        return { ...state, shows: [...newShowsArray] };
      } else {
        return state;
      }
    case Actions.DELETE_SHOW:
      const { id } = payload;
      const indexDelete = state.shows?.findIndex(
        (stateShow) => stateShow.id === id
      );
      if (indexDelete && indexDelete !== -1 && state.shows) {
        const newShowsArray = Object.assign(state.shows);
        newShowsArray.splice(indexDelete, 1);
        return { ...state, shows: [...newShowsArray] };
      } else {
        return state;
      }
    case Actions.TOGGLE_SHOW_CREATE:
      return { ...state, showCreate: !state.showCreate };
    default:
      return state;
  }
};
