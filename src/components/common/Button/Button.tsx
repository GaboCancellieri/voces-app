import React from "react";
import { buttonVariant } from "./constants";
import { ButtonProps } from "./types";
import style from "./button.module.scss";
import classNames from "classnames";

const Button = ({
  rounded = true,
  size = "normal",
  variant = "primary",
  type = "button",
  align = "center",
  hoverEffect = false,
  disabled = false,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classNames(style.underline, style.button, style[size], {
        [style.rounded]: rounded,
        [style.enableHover]: hoverEffect,
      })}
      type={type}
      style={{ backgroundColor: buttonVariant[variant], justifySelf: align }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
