import { ReactNode } from 'react';

export enum ButtonType {
  SMALL = 'small',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LINK = 'link',
  ROUND = 'round',
}

export interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  type?: ButtonType;
  onClick?: () => void;
}
