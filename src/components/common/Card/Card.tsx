import React, { useReducer, useState } from "react";
import styles from "./card.module.scss";
import classnames from "classnames";
import { MotionWrapper, Typography, Image } from "ccomponents/index";
import { COLOR_PRIMARY, COLOR_WHITE } from "constants/colors";
import { cardInitialState, cardReducer } from "./context/reducer";
import { toggleOpen } from "./context/actions";
import { CardProps } from "./types";
/*const variants = {
  active: {
    width: 320,
    height: 800,
    borderRadius: 0,
    overflow: "visible",
    left: 28,
    right: 0,
    y: 0,
    transition: { duration: 0.125, type: "spring", damping: 10, mass: 0.6 },
  },
};*/

const Card = ({
  isStatic = false,
  title,
  description,
  imageProps,
}: CardProps) => {
  const [cardState, cardDispatch] = useReducer(cardReducer, cardInitialState);
  const handleOpen = () => cardDispatch(toggleOpen());
  const cardClassName = classnames(styles.card, {
    [styles.isStatic]: isStatic || cardState.open,
  });

  return (
    <MotionWrapper isActive={!isStatic} onClick={handleOpen}>
      <div className={cardClassName}>
        <div
          className={classnames(styles.img_contanier, {
            [styles.isStatic]: isStatic,
          })}
        >
          {imageProps && (
            <Image
              className={classnames(styles.img, {
                [styles.isStatic]: isStatic,
              })}
              url={imageProps.url}
              altText={imageProps.altText}
              width={imageProps.width}
              height={imageProps.height}
            />
          )}
        </div>

        <div
          className={classnames(styles.textContainer, {
            [styles.isStatic]: isStatic,
          })}
        >
          <Typography
            fontFamily="fjallaOne"
            size={"30px"}
            color={COLOR_PRIMARY}
            align={cardState.open || isStatic ? "left" : "center"}
          >
            {title}
          </Typography>
          {(cardState.open || isStatic) && (
            <Typography
              className={styles.p}
              align={"justify"}
              fontFamily="fjallaOne"
              size={"20px"}
              color={COLOR_WHITE}
            >
              {description}
            </Typography>
          )}
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Card;
