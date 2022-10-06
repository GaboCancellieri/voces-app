import React from "react";
import { buttonVariant, textColorVariant } from "./constants";
import { ButtonProps } from "./types";
import style from "./button.module.scss";
import classNames from "classnames";
import Typography from "../Typography";

const Button = ({
  rounded = true,
  size = "normal",
  variant = "primary",
  type = "button",
  text,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classNames(style.underline, style.button, style[size], {
        [style.rounded]: rounded,
      })}
      type={type}
      style={{ backgroundColor: buttonVariant[variant] }}
      onClick={onClick}
    >
      <Typography color={textColorVariant[variant]} fontFamily={"fjallaOne"}>
        {text}
      </Typography>
    </button>
  );
};

export default Button;
