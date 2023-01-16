import React, { useReducer } from "react";
import { motion } from "framer-motion";
import styles from "./card.module.scss";
import classnames from "classnames";
import { Typography } from "ccomponents/index";
import { COLOR_PRIMARY } from "constants/colors";
import { cardInitialState, cardReducer } from "./context/reducer";
import { toggleOpen } from "./context/actions";

const Card = () => {
  const [cardState, cardDispatch] = useReducer(cardReducer, cardInitialState);
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        layout
        onMouseUp={() => cardDispatch(toggleOpen())}
        className={classnames(styles.card, {
          [styles.extended]: cardState.open,
        })}
      >
        <div className={styles.img_contanier}>
          <img
            className={styles.img}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/800px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg"
            alt=""
            width={"330px"}
            height={"350px"}
          />
        </div>
        <div className={styles.textContainer}>
          <Typography
            fontFamily="fjallaOne"
            size={"50px"}
            color={COLOR_PRIMARY}
            align={cardState.open ? "left" : "center"}
          >
            CANTO
          </Typography>
          {cardState.open && (
            <Typography className={styles.p} align={"justify"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              luctus velit a vehicula tempus. Sed facilisis tempus metus, eget
              pellentesque odio. Suspendisse pellentesque, justo rutrum
              elementum vulputate, leo quam mollis leo, eu bibendum nulla justo
              a nisi. Etiam eleifend enim metus, vel condimentum neque fringilla
              in. Praesent nec posuere nunc. Proin in facilisis enim. Aliquam eu
              venenatis enim, ac mattis libero. Integer elit nisi, ornare nec
              lobortis nec, semper. Nullam ut libero quis neque fringilla
              pretium in dapibus mi. Suspendisse potenti. Nunc elementum viverra
              lacus, vel gravida neque venenatis nec.
            </Typography>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
