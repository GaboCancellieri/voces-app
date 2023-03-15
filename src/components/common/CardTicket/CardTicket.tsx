import React from "react";
import styles from "./cardTicket.module.scss";

import { Typography, Image } from "ccomponents/index";
import { COLOR_PRIMARY, COLOR_WHITE } from "constants/colors";
import { CardProps } from "./types";

const CardTicket = ({ title, description, imageProps }: CardProps) => {
  return (
    <div className={styles.cardTicket}>
      <div>
        {imageProps && (
          <Image
            className={styles.img}
            url={imageProps.url}
            altText={imageProps.altText}
            width="250px"
            height="200px"
          />
        )}
      </div>

      <div className={styles.textContainer}>
        <Typography
          fontFamily="fjallaOne"
          size={"30px"}
          color={COLOR_PRIMARY}
          align={"center"}
        >
          {title}
        </Typography>

        <Typography
          className={styles.description}
          align={"justify"}
          fontFamily="fjallaOne"
          size={"20px"}
          color={COLOR_WHITE}
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default CardTicket;
