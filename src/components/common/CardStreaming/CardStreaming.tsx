import React from "react";
import styles from "./cardModal.module.scss";
import { Typography, Image, Button } from "ccomponents/index";
import { COLOR_BLACK, COLOR_PRIMARY, COLOR_WHITE } from "constants/colors";
import { CardProps } from "./types";
import Modal from "./Modal";

const CardStreaming = ({ title, description, imageProps }: CardProps) => {
  return (
    <div className={styles.cardModal}>
      <div>
        {imageProps && (
          <Image
            className={styles.img}
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
          size={"30px"}
          color={COLOR_PRIMARY}
          align={"center"}
        >
          {title}
        </Typography>
        <div className={styles.buttons}>
          <Button variant="warning"> COMPRAR </Button>

          <Modal>
            <div>
              {imageProps && (
                <Image
                  className={styles.img}
                  url={imageProps.url}
                  altText={imageProps.altText}
                  width={imageProps.width}
                  height={imageProps.height}
                />
              )}
            </div>
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
              color={COLOR_BLACK}
            >
              {description}
            </Typography>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CardStreaming;
