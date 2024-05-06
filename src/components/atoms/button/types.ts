import { ReactNode } from "react";

export type TypeButton = "normal" | "outline";
export interface IButtonProps {
  children: ReactNode | ReactNode[];
  isFull?: boolean;
  onClick?: () => void;
  variant?: TypeButton;
}
