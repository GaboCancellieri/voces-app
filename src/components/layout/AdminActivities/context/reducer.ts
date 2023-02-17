import { IReducerOptions } from "src/types/reducerTypes";
import { IActivitieState } from "./types";
import * as Actions from "./actions";

export const activitiesInitialState: IActivitieState = {
  activities: null,
  selectedActivitie: null,
  activitieCreate: false,
};

export const activitiesReducer = (
  state: IActivitieState,
  options: IReducerOptions
) => {
  const { action, payload } = options;
  switch (action.toUpperCase()) {
    case Actions.SET_ACTIVITIES:
      return { ...state, activities: payload.activities };
    case Actions.SET_SELECTED_ACTIVITIE:
      return { ...state, selectedActivitie: payload.activitie };
    case Actions.ADD_ACTIVITIE:
      if (state.activities) {
        return {
          ...state,
          activitie: [...state.activities, payload.activitie],
        };
      } else {
        return { ...state, activitie: [payload.activitie] };
      }
    case Actions.EDIT_ACTIVITIE:
      const { activitie } = payload;
      const indexEdit = state.activities?.findIndex(
        (stateActivitie) => stateActivitie.id === activitie.id
      );
      if (indexEdit && indexEdit !== -1 && state.activities) {
        const newActivitiesArray = Object.assign(state.activities);
        newActivitiesArray.splice(indexEdit, 1, activitie);
        return { ...state, activities: [...newActivitiesArray] };
      } else {
        return state;
      }
    case Actions.DELETE_ACTIVITIE:
      const { id } = payload;
      const indexDelete = state.activities?.findIndex(
        (stateActivitie) => stateActivitie.id === id
      );
      if (indexDelete && indexDelete !== -1 && state.activities) {
        const newActivitiesArray = Object.assign(state.activities);
        newActivitiesArray.splice(indexDelete, 1);
        return { ...state, activities: [...newActivitiesArray] };
      } else {
        return state;
      }
    case Actions.TOGGLE_ACTIVITIE_CREATE:
      return { ...state, activitieCreate: !state.activitieCreate };
    default:
      return state;
  }
};
