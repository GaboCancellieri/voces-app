import { IHomeStaff } from "src/api/types";

export const SET_STAFF = "SET_STAFF";
export const SET_SELECTED_STAFF = "SET_SELECTED_STAFF";
export const ADD_STAFF = "ADD_STAFF";
export const EDIT_STAFF = "EDIT_STAFF";
export const DELETE_STAFF = "DELETE_STAFF";

export const TOGGLE_STAFF_CREATE = "TOGGLE_STAFF_CREATE";

export const setStaff = (staff: IHomeStaff[]) => ({
  action: SET_STAFF,
  payload: { staff },
});

export const setSelectedStaff = (staff: IHomeStaff | null) => ({
  action: SET_SELECTED_STAFF,
  payload: { staff },
});

export const addStaff = (staff: IHomeStaff) => ({
  action: ADD_STAFF,
  payload: { staff },
});

export const editStaff = (staff: IHomeStaff) => ({
  action: EDIT_STAFF,
  payload: { staff },
});

export const deleteStaff = (id: string) => ({
  action: DELETE_STAFF,
  payload: { id },
});

export const toggleStaffCreate = () => ({ action: TOGGLE_STAFF_CREATE });
