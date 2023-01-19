import React from "react";
import Card from "ccomponents/Card/Card";
import { COLOR_PRIMARY } from "constants/colors";
import Typography from "ccomponents/Typography";

import styles from "./activitiesBanner.module.scss";
import { ACTIVITIES_TITLE } from "./constants";

const ActivitiesBanner = () => {
  return (
    <div className={styles.title}>
      <Typography
        color={COLOR_PRIMARY}
        fontFamily="fjallaOne"
        size="50px"
        variant="bold"
      >
        {ACTIVITIES_TITLE}
      </Typography>
    </div>
  );
};

export default ActivitiesBanner;
