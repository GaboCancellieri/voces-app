import { ICON_DESIGN_VARIANTS } from "constants/icon";
import { ICON_SIZE_VARIANTS } from "./constants";

export interface IconProps {
  iconId: string;
  iconDesign: keyof typeof ICON_DESIGN_VARIANTS;
  size?: keyof typeof ICON_SIZE_VARIANTS;
  color?: string;
}
