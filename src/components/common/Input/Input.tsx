import React from "react";
import styles from "./input.module.scss";
import classnames from "classnames";
import { INPUT_STATE_ERROR, INPUT_STATE_SUCCESS } from "./constants";
import { InputProps } from "./types";

const Input = ({
  className = "",
  placeholder = "",
  type = "text",
  state = "normal",
  value,
  onChange = () => {},
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={classnames(styles.inputBox, className, {
          [styles.onError]: state === INPUT_STATE_ERROR,
          [styles.onSuccess]: state === INPUT_STATE_SUCCESS,
        })}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
