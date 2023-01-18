import React from "react";
import {
  LEADER_NAME,
  HOME_LEADER_TITLE,
  LEADER_PARAGRAPH,
  LEADER_IMAGE_PROPS,
} from "./constants";
import { COLOR_PRIMARY } from "../../../../constants/colors";
import { Card, Typography } from "ccomponents/index";

const HomeLeader = () => {
  return (
    <div>
      <Typography
        color={COLOR_PRIMARY}
        fontFamily="fjallaOne"
        size="50px"
        variant="bold"
      >
        {HOME_LEADER_TITLE}
      </Typography>

      <Card
        isStatic
        title={LEADER_NAME}
        description={LEADER_PARAGRAPH}
        imageProps={LEADER_IMAGE_PROPS}
      ></Card>
    </div>
  );
};

export default HomeLeader;
