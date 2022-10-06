import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { COLOR_PRIMARY } from "constants/colors";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <AiOutlineLoading3Quarters
      className={styles.iconSpin}
      style={{ color: COLOR_PRIMARY }}
    />
  );
};

export default Loader;
