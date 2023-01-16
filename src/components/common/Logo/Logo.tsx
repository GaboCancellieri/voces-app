import React from "react";
import { LogoProps } from "./types";

const Logo = ({ height, width, variant = "primary" }: LogoProps) => {
  return (
    <img src="src/assets/img/logos/Logo.png" alt="" style={{ width, height }} />
  );
};

export default Logo;
