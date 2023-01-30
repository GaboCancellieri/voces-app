import { ChangeEventHandler, ReactNode } from "react";
import { TEXT_AREA_VARIANTS } from "./constants";

export interface TextAreaProps {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  style?: Object;
  value?: string;
  variant?: keyof typeof TEXT_AREA_VARIANTS;
}
