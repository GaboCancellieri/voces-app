import { ImageProps } from "ccomponents/Image/types";
import { ReactNode } from "react";

export interface CardProps {
  title?: string;
  description?: string;
  imageProps: ImageProps;
  children?: ReactNode;
}
