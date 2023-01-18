import React, { useReducer } from "react";
import styles from "./card.module.scss";
import classnames from "classnames";
import { MotionWrapper, Typography, Image } from "ccomponents/index";
import { COLOR_PRIMARY } from "constants/colors";
import { cardInitialState, cardReducer } from "./context/reducer";
import { toggleOpen } from "./context/actions";
import { CardProps } from "./types";

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
        <div className={styles.textContainer}>
          <Typography
            fontFamily="fjallaOne"
            size={"35px"}
            color={COLOR_PRIMARY}
            align={cardState.open || isStatic ? "left" : "center"}
          >
            {title}
          </Typography>
          {(cardState.open || isStatic) && (
            <Typography className={styles.p} align={"justify"}>
              {description}
            </Typography>
          )}
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Card;
