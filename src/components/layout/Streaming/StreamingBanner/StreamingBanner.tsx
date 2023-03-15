import React from "react";
import { Carousel, Typography, Image } from "ccomponents/index";
import { COLOR_PRIMARY } from "constants/colors";
import styles from "./streamingBanner.module.scss";

const StreamingBanner = () => {
  return (
    <div className={styles.title}>
      <Typography color={COLOR_PRIMARY} fontFamily={"fjallaOne"} size={"50px"}>
        ESTRENOS
      </Typography>
    </div>
  );
};

export default StreamingBanner;
