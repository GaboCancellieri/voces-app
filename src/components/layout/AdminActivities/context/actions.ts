import { IActivitiesCards } from "src/api/types";

export const SET_ACTIVITIES = "SET_ACTIVITIES";
export const SET_SELECTED_ACTIVITIE = "SET_SELECTED_ACTIVITIES";
export const ADD_ACTIVITIE = "ADD_ACTIVITIE";
export const EDIT_ACTIVITIE = "EDIT_ACTIVITIE";
export const DELETE_ACTIVITIE = "DELETE_ACTIVITIE";

export const TOGGLE_ACTIVITIE_CREATE = "TOGGLE_ACTIVITIE_CREATE";

export const setActivities = (activities: IActivitiesCards[]) => ({
  action: SET_ACTIVITIES,
  payload: { activities },
});

export const setSelectedActivitie = (activitie: IActivitiesCards | null) => ({
  action: SET_SELECTED_ACTIVITIE,
  payload: { activitie },
});

export const addActivitie = (activitie: IActivitiesCards) => ({
  action: ADD_ACTIVITIE,
  payload: { activitie },
});

export const editActivitie = (activitie: IActivitiesCards) => ({
  action: EDIT_ACTIVITIE,
  payload: { activitie },
});

export const deleteActivitie = (id: string) => ({
  action: DELETE_ACTIVITIE,
  payload: { id },
});

export const toggleActivitieCreate = () => ({
  action: TOGGLE_ACTIVITIE_CREATE,
});
