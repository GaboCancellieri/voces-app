import { IReducerOptions } from "src/types/reducerTypes";
import { IStaffState } from "./types";
import * as Actions from "./actions";

export const staffInitialState: IStaffState = {
  staff: null,
  selectedStaff: null,
  staffCreate: false,
};

export const staffReducer = (state: IStaffState, options: IReducerOptions) => {
  const { action, payload } = options;
  switch (action.toUpperCase()) {
    case Actions.SET_STAFF:
      return { ...state, staff: payload.staff };
    case Actions.SET_SELECTED_STAFF:
      return { ...state, selectedStaff: payload.staff };
    case Actions.ADD_STAFF:
      if (state.staff) {
        return { ...state, staff: [...state.staff, payload.staff] };
      } else {
        return { ...state, staff: [payload.staff] };
      }
    case Actions.EDIT_STAFF:
      const { staff } = payload;
      const indexEdit = state.staff?.findIndex(
        (stateStaff) => stateStaff.id === staff.id
      );
      if (indexEdit && indexEdit !== -1 && state.staff) {
        const newStaffArray = Object.assign(state.staff);
        newStaffArray.splice(indexEdit, 1, staff);
        return { ...state, staff: [...newStaffArray] };
      } else {
        return state;
      }
    case Actions.DELETE_STAFF:
      const { id } = payload;
      const indexDelete = state.staff?.findIndex(
        (stateStaff) => stateStaff.id === id
      );
      if (indexDelete && indexDelete !== -1 && state.staff) {
        const newStaffArray = Object.assign(state.staff);
        newStaffArray.splice(indexDelete, 1);
        return { ...state, staff: [...newStaffArray] };
      } else {
        return state;
      }
    case Actions.TOGGLE_STAFF_CREATE:
      return { ...state, staffCreate: !state.staffCreate };
    default:
      return state;
  }
};
