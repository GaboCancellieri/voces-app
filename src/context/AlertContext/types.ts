import { ALERT_TITLE_VARIANTS } from "ccomponents/Alert/constants";
import { ReactNode } from "react";

export interface IAlert {
  type: string;
  variant: keyof typeof ALERT_TITLE_VARIANTS;
  message: string;
}

export interface IAlertState {
  currentAlert: IAlert | null;
}

export interface IShowAlertProps {
  type: string;
  variant: keyof typeof ALERT_TITLE_VARIANTS;
  message: string;
}

export interface AlertProviderProps {
  children: ReactNode;
}
