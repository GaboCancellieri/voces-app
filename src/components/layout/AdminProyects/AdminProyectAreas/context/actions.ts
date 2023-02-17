import { IProyectAreas } from "src/api/types";

export const SET_AREAS = "SET_AREAS";
export const SET_SELECTED_AREA = "SET_SELECTED_AREA";
export const ADD_AREA = "ADD_AREA";
export const EDIT_AREA = "EDIT_AREA";
export const DELETE_AREA = "DELETE_AREA";

export const TOGGLE_AREA_CREATE = "TOGGLE_AREA_CREATE";

export const setAreas = (areas: IProyectAreas[]) => ({
  action: SET_AREAS,
  payload: { areas },
});

export const setSelectedArea = (area: IProyectAreas | null) => ({
  action: SET_SELECTED_AREA,
  payload: { area },
});

export const addArea = (area: IProyectAreas) => ({
  action: ADD_AREA,
  payload: { area },
});

export const editArea = (area: IProyectAreas) => ({
  action: EDIT_AREA,
  payload: { area },
});

export const deleteArea = (id: string) => ({
  action: DELETE_AREA,
  payload: { id },
});

export const toggleAreaCreate = () => ({ action: TOGGLE_AREA_CREATE });
