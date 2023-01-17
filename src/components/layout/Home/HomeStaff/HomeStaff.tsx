import React from "react";
import styles from "./homeStaff.module.scss";
import Typography from "../../../common/Typography";
import { COLOR_PRIMARY } from "../../../../constants/colors";
import Card from "ccomponents/Card/Card";
import CardStatic from "ccomponents/CardStatic/Card";

const HomeStaff = () => {
  return (
    <div className={styles.staff_container}>
      <div className={styles.staff_cards}></div>
      <div className={styles.staff_cards}></div>
      <div className={styles.staff_cards}></div>
      <div className={styles.staff_cards}></div>
      <div className={styles.staff_cards}></div>
    </div>
  );
};

export default HomeStaff;
