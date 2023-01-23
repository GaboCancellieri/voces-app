import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  isActive?: boolean;
  width: string;
  height: string;
  onCancel: () => void;
}
