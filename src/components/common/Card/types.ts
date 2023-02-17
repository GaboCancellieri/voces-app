import { ImageProps } from "ccomponents/Image/types";

export interface CardProps {
  isStatic?: boolean;
  title?: string;
  description?: string;
  imageProps: ImageProps;
}
