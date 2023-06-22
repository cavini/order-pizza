import { ReactNode } from 'react';

export enum ButtonType {
  SMALL = 'small',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LINK = 'link',
}

export interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  type?: ButtonType;
}
