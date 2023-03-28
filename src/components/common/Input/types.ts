import { INPUT_STATE_VARIANTS, INPUT_TYPE_VARIANTS } from "./constants";

export interface InputProps {
  name?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: any) => void;
  onClick?: (event: any) => void;
  state?: keyof typeof INPUT_STATE_VARIANTS;
  type?: keyof typeof INPUT_TYPE_VARIANTS;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
}
