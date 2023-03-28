import {
  COLOR_BLACK,
  COLOR_TRANSPARENT,
  COLOR_WHITE,
  COLOR_DANGER,
  COLOR_HELP,
  COLOR_INFO,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_SUCCESS,
  COLOR_WARNING,
  COLOR_GREY,
} from "constants/colors";

export const buttonVariant = {
  primary: COLOR_PRIMARY,
  secondary: COLOR_SECONDARY,
  success: COLOR_SUCCESS,
  info: COLOR_INFO,
  warning: COLOR_WARNING,
  help: COLOR_HELP,
  danger: COLOR_DANGER,
  blank: COLOR_TRANSPARENT,
  disabled: COLOR_GREY,
};

export const textColorVariant = {
  primary: COLOR_WHITE,
  secondary: COLOR_BLACK,
  success: COLOR_WHITE,
  info: COLOR_WHITE,
  warning: COLOR_WHITE,
  help: COLOR_WHITE,
  danger: COLOR_WHITE,
  blank: COLOR_BLACK,
};

export const BUTTON_SIZE_VARIANTS = {
  tiny: "tiny",
  small: "small",
  normal: "normal",
  large: "large",
  fit: "fit",
  full: "full",
};
