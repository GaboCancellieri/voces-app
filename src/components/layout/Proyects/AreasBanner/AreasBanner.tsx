import React from "react";
import Card from "ccomponents/Card";
import Typography from "ccomponents/Typography";
import { COLOR_PRIMARY } from "constants/colors";
import styles from "./areasBanner.module.scss";
import {
  AREAS_BANNER_TITLE,
  BANNER_DEPRODUCCION,
  BANNER_DEPROYECTOS,
  BANNER_FORMATIVAS,
  BANNER_RECREATIVA,
  EXAMPLE_PARAGRAPH,
  IMAGEN_DEPRODUCCION,
  IMAGEN_DEPROYECTOS,
  IMAGEN_FORMATIVAS,
  IMAGEN_RECREATIVA,
} from "./constants";

const AreasBanner = () => {
  return (
    <div>
      <div className={styles.title}>
        <Typography
          color={COLOR_PRIMARY}
          fontFamily="fjallaOne"
          size="50px"
          variant="bold"
        >
          {AREAS_BANNER_TITLE}
        </Typography>
      </div>
      <div>
        <Card
          isStatic
          title={BANNER_FORMATIVAS}
          imageProps={IMAGEN_FORMATIVAS}
          description={EXAMPLE_PARAGRAPH}
        ></Card>
        <Card
          isStatic
          title={BANNER_RECREATIVA}
          imageProps={IMAGEN_RECREATIVA}
          description={EXAMPLE_PARAGRAPH}
        ></Card>

        <Card
          isStatic
          title={BANNER_DEPROYECTOS}
          imageProps={IMAGEN_DEPROYECTOS}
          description={EXAMPLE_PARAGRAPH}
        ></Card>

        <Card
          isStatic
          title={BANNER_DEPRODUCCION}
          imageProps={IMAGEN_DEPRODUCCION}
          description={EXAMPLE_PARAGRAPH}
        ></Card>
      </div>
    </div>
  );
};

export default AreasBanner;
