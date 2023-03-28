import React from "react";
import { buttonVariant } from "./constants";
import { ButtonProps } from "./types";
import styles from "./button.module.scss";
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
  if (disabled) {
    variant = "disabled";
  }
  return (
    <button
      className={classNames(styles.underline, styles.button, styles[size], {
        [styles.rounded]: rounded,
        [styles.enableHover]: hoverEffect,
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
