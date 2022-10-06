import React from "react";
import { ImageProps } from "./types";

const Image = ({ url, altText, width, height }: ImageProps) => {
  return <img style={{ width, height }} src={url} alt={altText} />;
};

export default Image;
