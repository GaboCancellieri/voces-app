import { INPUT_STATE_VARIANTS, INPUT_TYPE_VARIANTS } from "./constants";

export interface InputProps {
  className?: string;
  placeholder?: string;
  value: string;
  onChange?: (event: any) => void;
  state?: keyof typeof INPUT_STATE_VARIANTS;
  type?: keyof typeof INPUT_TYPE_VARIANTS;
}
