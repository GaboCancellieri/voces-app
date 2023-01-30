import React from "react";
import classNames from "classnames";
import { TextAreaProps } from "./types";
import styles from "./textArea.module.scss";

const TextArea = ({
  className = "",
  disabled = false,
  onChange = () => {},
  style = {},
  value = "",
  variant = "normal",
}: TextAreaProps) => {
  return (
    <textarea
      className={classNames(styles[variant], className)}
      onChange={onChange}
      style={style}
      value={value}
      disabled={disabled}
    />
  );
};

export default TextArea;
