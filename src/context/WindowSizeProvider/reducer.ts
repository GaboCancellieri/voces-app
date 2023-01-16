import { IReducerOptions } from "../Store/types";
import { SET_WINDOW_SIZE_STATE } from "./actions";
import { IWindowSizeState } from "./types";

export const windowSizeInitialState = {
  isMobile: window.innerWidth <= 739,
  isMobileOrTablet: window.innerWidth <= 1239,
  isTablet: window.innerWidth > 739 && window.innerWidth <= 1239,
  isDesktopOrTablet: window.innerWidth > 739,
  isDesktop: window.innerWidth > 1239,
};

export const windowSizeReducer = (
  state: IWindowSizeState,
  options: IReducerOptions
) => {
  const { action, payload } = options;
  if (action.toUpperCase() === SET_WINDOW_SIZE_STATE) {
    return {
      isMobile: payload.windowWidth <= 739,
      isMobileOrTablet: payload.windowWidth <= 1239,
      isTablet: payload.windowWidth > 739 && payload.windowWidth <= 1239,
      isDesktopOrTablet: payload.windowWidth > 739,
      isDesktop: payload.windowWidth > 1239,
    };
  } else {
    return state;
  }
};
