import React from "react";
import { motion } from "framer-motion";
import { MotionWrapperProps } from "./types";

const MotionWrapper = ({
  classname = "",
  scale = 1.05,
  isActive = true,
  children,
  onClick,
}: MotionWrapperProps) => {
  if (!isActive) return <>{children}</>;

  return (
    <motion.div
      whileHover={{ scale }}
      onMouseUp={onClick}
      className={classname}
      whileTap={{ scale: 0.9 }}
      whileInView={{ opacity: 1 }}
      initial={{ x: "-300px", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      style={{
        width: "30rem",
        position: "relative",
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
