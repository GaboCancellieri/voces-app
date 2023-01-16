export const SET_WINDOW_SIZE_STATE = "SET_WINDOW_SIZE_STATE";

export const setWindowSizeState = (windowWidth: number) => ({
  action: SET_WINDOW_SIZE_STATE,
  payload: { windowWidth },
});
