import React from "react";
import { COLOR_WHITE } from "constants/colors";
import { ICON_DESIGN_VARIANTS, ICON_SIZE_NORMAL } from "constants/icon";
import { IconProps } from "./types";
import { ICON_SIZE_VARIANTS } from "./constants";

const Icon = ({
  iconId,
  iconDesign,
  size = ICON_SIZE_NORMAL,
  color = COLOR_WHITE,
}: IconProps) => {
  const design: any = ICON_DESIGN_VARIANTS[iconDesign];
  const Icon = design[iconId] ?? undefined;
  if (!Icon) return <></>;
  return <Icon style={{ color }} size={ICON_SIZE_VARIANTS[size]} />;
};

export default Icon;
