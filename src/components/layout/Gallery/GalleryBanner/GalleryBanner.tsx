import React from "react";
import {
  COLOR_ALMOST_WHITE,
  COLOR_PRIMARY,
  COLOR_WHITE,
} from "constants/colors";
import { Carousel, Typography, Image } from "ccomponents/index";
import styles from "./galleryBanner.module.scss";

const GalleryBanner = () => {
  return (
    <div>
      <div className={styles.title}>
        <Typography
          color={COLOR_PRIMARY}
          fontFamily="fjallaOne"
          size="50px"
          variant="bold"
        >
          GALERÍA
        </Typography>
      </div>
      <div className={styles.carousel_container}>
        <div className={styles.carousel_title}>
          <Typography
            color={COLOR_ALMOST_WHITE}
            fontFamily="fjallaOne"
            size="50px"
            variant="bold"
          >
            La historia de voces en fotos
          </Typography>
        </div>

        <div className={styles.carousel}>
          <Carousel>
            <div>
              <Image
                width={"700px"}
                height={"600px"}
                altText={""}
                url={
                  "https://img.freepik.com/vector-premium/nino-cantando-microfono-o-haciendo-presentacion_7710-130.jpg"
                }
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default GalleryBanner;
