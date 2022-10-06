import { ReactNode } from "react";

export interface TypographyProps {
  className?: string;
  align?: "left" | "right" | "center" | "justify";
  color?: string;
  children: ReactNode;
  fontFamily?: "fjallaOne" | "sourceSans";
  size?: string;
  variant?: "bold" | "regular" | "italic" | "black";
}
