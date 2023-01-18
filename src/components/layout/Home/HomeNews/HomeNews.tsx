import React from "react";
import Image from "../../../common/Image";
import styles from "./homeNews.module.scss";
import Typography from "../../../common/Typography";
import { COLOR_PRIMARY } from "../../../../constants/colors";
import Card from "ccomponents/Card/Card";
import { HOME_NEWS_TITLE } from "./constants";

const HomeNews = () => {
  return (
    <div>
      <Typography
        color={COLOR_PRIMARY}
        fontFamily="fjallaOne"
        size="50px"
        variant="bold"
      >
        {HOME_NEWS_TITLE}
      </Typography>
    </div>
  );
};

export default HomeNews;
