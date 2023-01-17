import React from "react";
import { motion } from "framer-motion";
import { MotionWrapperProps } from "./types";

const MotionWrapper = ({
  classname = "",
  scale = 1.1,
  isActive = true,
  children,
  onClick,
}: MotionWrapperProps) => {
  if (!isActive) return <>{children}</>;

  return (
    <motion.div
      whileHover={{ scale }}
      layout
      onMouseUp={onClick}
      className={classname}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
