import React from "react";
import styles from "./homeStaff.module.scss";
import Typography from "../../../common/Typography";
import { COLOR_PRIMARY } from "../../../../constants/colors";
import Card from "ccomponents/Card/Card";

import { HOME_STAFF, STAFF_IMAGE_PROPS } from "./constants";

const HomeStaff = () => {
  return (
    <div>
      <Typography
        color={COLOR_PRIMARY}
        fontFamily="fjallaOne"
        size="50px"
        variant="bold"
      >
        {HOME_STAFF}
      </Typography>
      <Card title="asdasd" imageProps={STAFF_IMAGE_PROPS}></Card>
    </div>
  );
};

export default HomeStaff;
