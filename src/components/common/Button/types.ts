import { MouseEventHandler, ReactNode } from "react";
import { buttonVariant, BUTTON_SIZE_VARIANTS } from "./constants";

export interface ButtonProps {
  align?: "right" | "left" | "center";
  children: ReactNode;
  hoverEffect?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
  size?: keyof typeof BUTTON_SIZE_VARIANTS;
  type?: "button" | "submit";
  variant?: keyof typeof buttonVariant;
  disabled?: boolean;
}
