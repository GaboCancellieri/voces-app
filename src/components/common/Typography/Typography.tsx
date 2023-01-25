import React from "react";
import { COLOR_ALMOST_WHITE } from "../../../constants/colors";
import { typographyVariant } from "./constants";
import { TypographyProps } from "./types";

const Typography = ({
  className = "",
  align = "center",
  color = COLOR_ALMOST_WHITE,
  children,
  fontFamily = "sourceSans",
  size = "16px",
  variant = "regular",
}: TypographyProps) => {
  return (
    <div
      className={className}
      style={{
        color,
        fontSize: size,
        fontFamily: typographyVariant[fontFamily][variant],
        textAlign: align,
        cursor: "default",
      }}
    >
      {children}
    </div>
  );
};

export default Typography;
