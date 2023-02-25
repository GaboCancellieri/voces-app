import { IReducerOptions } from "src/types/reducerTypes";
import { INewsState } from "./types";
import * as Actions from "./actions";

export const newsInitialState: INewsState = {
  news: null,
  selectedNews: null,
  newsCreate: false,
};

export const newsReducer = (state: INewsState, options: IReducerOptions) => {
  const { action, payload } = options;
  switch (action.toUpperCase()) {
    case Actions.SET_NEWS:
      return { ...state, news: payload.news };
    case Actions.SET_SELECTED_NEWS:
      return { ...state, selectedNews: payload.news };
    case Actions.ADD_NEWS:
      if (state.news) {
        return { ...state, news: [...state.news, payload.news] };
      } else {
        return { ...state, news: [payload.news] };
      }
    case Actions.EDIT_NEWS:
      const { news } = payload;
      const indexEdit = state.news?.findIndex(
        (stateNews) => stateNews.id === news.id
      );
      if (indexEdit && indexEdit !== -1 && state.news) {
        const newNewsArray = Object.assign(state.news);
        newNewsArray.splice(indexEdit, 1, news);
        return { ...state, news: [...newNewsArray] };
      } else {
        return state;
      }
    case Actions.DELETE_NEWS:
      const { id } = payload;
      const indexDelete = state.news?.findIndex(
        (stateNews) => stateNews.id === id
      );
      if (indexDelete && indexDelete !== -1 && state.news) {
        const newNewsArray = Object.assign(state.news);
        newNewsArray.splice(indexDelete, 1);
        return { ...state, news: [...newNewsArray] };
      } else {
        return state;
      }
    case Actions.TOGGLE_NEWS_CREATE:
      return { ...state, newsCreate: !state.newsCreate };
    default:
      return state;
  }
};
