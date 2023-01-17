import { ReactNode } from "react";

export interface MotionWrapperProps {
  classname?: string;
  scale?: number;
  isActive?: boolean;
  children: ReactNode;
  onClick?: () => void;
}
