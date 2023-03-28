import React, { useState } from "react";
import styles from "./cardStreaming.module.scss";
import { Typography, Image, Button } from "ccomponents/index";
import { COLOR_ALMOST_WHITE, COLOR_PRIMARY } from "constants/colors";
import { CardProps } from "./types";
import classnames from "classnames";

const CardStreaming = ({
  isOpen = false,
  title,
  description,
  imageProps,
  children,
}: CardProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("DETALLES");
  const handleClick = () => {
    toggle();
    changeName();
  };
  const changeName = () => {
    if (!open) {
      setName("VER MENOS");
    } else {
      setName("DETALLES");
    }
  };
  const toggle = () => {
    setOpen(!open);
  };
  if (open) {
    isOpen = true;
  }

  return (
    <div
      className={classnames({
        [styles.card_open]: open,
      })}
    >
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
          <div>
            {open && (
              <div>
                <Typography
                  className={styles.toggle}
                  align={"justify"}
                  fontFamily="fjallaOne"
                  size={"20px"}
                  color={COLOR_ALMOST_WHITE}
                >
                  {description}
                </Typography>
              </div>
            )}
            <div className={styles.buttons}>
              <Button hoverEffect variant="warning">
                COMPRAR
              </Button>

              <Button
                hoverEffect
                variant="info"
                size="normal"
                onClick={handleClick}
              >
                {name}
              </Button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStreaming;
