import { MouseEventHandler } from "react";
import { buttonVariant } from "./constants";

export interface ButtonProps {
  rounded?: boolean;
  size?: "tiny" | "small" | "normal" | "large" | "fit";
  variant?: keyof typeof buttonVariant;
  type?: "button" | "submit";
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
