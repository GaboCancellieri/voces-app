import React from "react";
import { LEADER_NAME, HOME_LEADER_TITLE, LEADER_PARAGRAPH } from "./constants";
import CardStatic from "ccomponents/CardStatic/Card";
import Typography from "../../../common/Typography";
import { COLOR_PRIMARY } from "../../../../constants/colors";

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

      <CardStatic
        name={LEADER_NAME}
        paragraph={LEADER_PARAGRAPH}
        img="https://media.vogue.es/photos/6352698353125da362b5fa04/2:3/w_2560%2Cc_limit/68516004.jpeg"
      ></CardStatic>
    </div>
  );
};

export default HomeLeader;
