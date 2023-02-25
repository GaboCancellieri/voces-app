import { IHomeNews } from "src/api/types";

export const SET_NEWS = "SET_NEWS";
export const SET_SELECTED_NEWS = "SET_SELECTED_NEWS";
export const ADD_NEWS = "ADD_NEWS";
export const EDIT_NEWS = "EDIT_NEWS";
export const DELETE_NEWS = "DELETE_NEWS";

export const TOGGLE_NEWS_CREATE = "TOGGLE_NEWS_CREATE";

export const setNews = (news: IHomeNews[]) => ({
  action: SET_NEWS,
  payload: { news },
});

export const setSelectedNews = (news: IHomeNews | null) => ({
  action: SET_SELECTED_NEWS,
  payload: { news },
});

export const addNews = (news: IHomeNews) => ({
  action: ADD_NEWS,
  payload: { news },
});

export const editNews = (news: IHomeNews) => ({
  action: EDIT_NEWS,
  payload: { news },
});

export const deleteNews = (id: string) => ({
  action: DELETE_NEWS,
  payload: { id },
});

export const toggleNewsCreate = () => ({ action: TOGGLE_NEWS_CREATE });
