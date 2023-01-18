import React from "react";
import Card from "ccomponents/Card/Card";
import { PROYECTSBANNER_TITLE } from "./constants";
import { COLOR_PRIMARY } from "constants/colors";
import Typography from "ccomponents/Typography";
import { PROYECTS_BANNER_P1, PROYECTS_BANNER_P2 } from "./constants";
import styles from "./proyectsBanner.module.scss";

const ProyectsBanner = () => {
  return (
    <div className={styles.title}>
      <Typography
        color={COLOR_PRIMARY}
        fontFamily="fjallaOne"
        size="50px"
        variant="bold"
      >
        {PROYECTSBANNER_TITLE}
      </Typography>
      <div className={styles.proyectsBannerContainer}>
        <Typography align="center">
          <p>{PROYECTS_BANNER_P1}</p>
          <p>{PROYECTS_BANNER_P2}</p>
        </Typography>
      </div>
    </div>
  );
};

export default ProyectsBanner;
