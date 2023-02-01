import { IShow } from "src/api/types";

export const SET_SHOWS = "SET_SHOWS";
export const SET_SELECTED_SHOW = "SET_SELECTED_SHOW";
export const ADD_SHOW = "ADD_SHOW";
export const EDIT_SHOW = "EDIT_SHOW";
export const DELETE_SHOW = "DELETE_SHOW";

export const TOGGLE_SHOW_CREATE = "TOGGLE_SHOW_CREATE";

export const setShows = (shows: IShow[]) => ({
  action: SET_SHOWS,
  payload: { shows },
});

export const setSelectedShow = (show: IShow | null) => ({
  action: SET_SELECTED_SHOW,
  payload: { show },
});

export const addShow = (show: IShow) => ({
  action: ADD_SHOW,
  payload: { show },
});

export const editShow = (show: IShow) => ({
  action: EDIT_SHOW,
  payload: { show },
});

export const deleteShow = (id: string) => ({
  action: DELETE_SHOW,
  payload: { id },
});

export const toggleShowCreate = () => ({ action: TOGGLE_SHOW_CREATE });
