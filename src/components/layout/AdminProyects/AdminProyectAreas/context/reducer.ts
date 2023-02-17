import { IReducerOptions } from "src/types/reducerTypes";
import { IAreaState } from "./types";
import * as Actions from "./actions";

export const areasInitialState: IAreaState = {
  areas: null,
  selectedArea: null,
  areaCreate: false,
};

export const areasReducer = (state: IAreaState, options: IReducerOptions) => {
  const { action, payload } = options;
  switch (action.toUpperCase()) {
    case Actions.SET_AREAS:
      return { ...state, areas: payload.areas };
    case Actions.SET_SELECTED_AREA:
      return { ...state, selectedArea: payload.area };
    case Actions.ADD_AREA:
      if (state.areas) {
        return { ...state, areas: [...state.areas, payload.area] };
      } else {
        return { ...state, areas: [payload.area] };
      }
    case Actions.EDIT_AREA:
      const { area } = payload;
      const indexEdit = state.areas?.findIndex(
        (stateArea) => stateArea.id === area.id
      );
      if (indexEdit && indexEdit !== -1 && state.areas) {
        const newAreasArray = Object.assign(state.areas);
        newAreasArray.splice(indexEdit, 1, area);
        return { ...state, areas: [...newAreasArray] };
      } else {
        return state;
      }
    case Actions.DELETE_AREA:
      const { id } = payload;
      const indexDelete = state.areas?.findIndex(
        (stateArea) => stateArea.id === id
      );
      if (indexDelete && indexDelete !== -1 && state.areas) {
        const newAreasArray = Object.assign(state.areas);
        newAreasArray.splice(indexDelete, 1);
        return { ...state, areas: [...newAreasArray] };
      } else {
        return state;
      }
    case Actions.TOGGLE_AREA_CREATE:
      return { ...state, areaCreate: !state.areaCreate };
    default:
      return state;
  }
};
