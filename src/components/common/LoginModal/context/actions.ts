export const SET_LOGIN_EMAIL = "SET_LOGIN_EMAIL";
export const SET_LOGIN_PASSWORD = "SET_LOGIN_PASSWORD";
export const SET_LOGIN_IS_SUBMITTED = "SET_LOGIN_IS_SUBMITTED";
export const SET_LOGIN_IS_ERROR = "SET_LOGIN_IS_ERROR";
export const RESET_LOGIN_INPUTS = "RESET_LOGIN_INPUTS";

export const setLoginEmail = (email: string) => ({
  action: SET_LOGIN_EMAIL,
  payload: { email },
});
export const setLoginPassword = (password: string) => ({
  action: SET_LOGIN_PASSWORD,
  payload: { password },
});
export const setLoginIsSubmitted = (isSubmitted: boolean) => ({
  action: SET_LOGIN_IS_SUBMITTED,
  payload: { isSubmitted },
});
export const setLoginIsError = (isError: boolean) => ({
  action: SET_LOGIN_IS_ERROR,
  payload: { isError },
});
export const resetLoginInputs = () => ({ action: RESET_LOGIN_INPUTS });
