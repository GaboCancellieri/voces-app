import React from "react";
import { Typography } from "ccomponents/index";
import { COLOR_PRIMARY } from "constants/colors";

const StreamingBanner = () => {
  return (
    <div>
      <Typography color={COLOR_PRIMARY} fontFamily={"fjallaOne"} size={"50px"}>
        ESTRENOS
      </Typography>
    </div>
  );
};

export default StreamingBanner;
