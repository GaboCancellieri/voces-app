import React from "react";
import { LogoProps } from "./types";
import logoImage from "../../../assets/img/logos/Logo.png";

const Logo = ({ height, width, variant = "primary" }: LogoProps) => {
  return <img src={logoImage} alt="" style={{ width, height }} />;
};

export default Logo;
