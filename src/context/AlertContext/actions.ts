import { IShowAlertProps } from "./types";

export const SHOW_ALERT = "SHOW_ALERT";
export const CLOSE_ALERT = "CLOSE_ALERT";

export const showAlert = ({ type, variant, message }: IShowAlertProps) => ({
  action: SHOW_ALERT,
  payload: { type, variant, message },
});

export const closeAlert = () => ({
  action: CLOSE_ALERT,
});
