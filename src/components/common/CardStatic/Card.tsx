import React, { useReducer } from "react";
import styles from "./cardStatic.module.scss";
import classnames from "classnames";
import { Typography } from "ccomponents/index";
import { COLOR_PRIMARY } from "constants/colors";

const CardStatic = (props: any) => {
  return (
    <div className={styles.title}>
      <Typography
        color={COLOR_PRIMARY}
        fontFamily="fjallaOne"
        size="50px"
        variant="bold"
      >
        {props.title}
      </Typography>

      <div className={styles.card}>
        <img className={styles.img} src={props.img} alt="" />

        <div className={styles.textContainer}>
          <div className={styles.leader_name}>
            <Typography align="left" color={COLOR_PRIMARY} size="50px">
              {props.name}
            </Typography>
          </div>
          <Typography align="justify"> {props.paragraph} </Typography>
        </div>
      </div>
    </div>
  );
};

export default CardStatic;
