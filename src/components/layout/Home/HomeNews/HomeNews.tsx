import React from "react";
import Typography from "../../../common/Typography";
import { COLOR_PRIMARY } from "../../../../constants/colors";
import { HOME_NEWS_TITLE } from "./constants";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "ccomponents/Carousel";

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
      <Carousel></Carousel>
    </div>
  );
};

export default HomeNews;
