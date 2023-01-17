import React from "react";
import { ImageProps } from "./types";

const Image = ({ className, url, altText, width, height }: ImageProps) => {
  return (
    <img
      className={className}
      style={{ width, height }}
      src={url}
      alt={altText}
    />
  );
};

export default Image;
