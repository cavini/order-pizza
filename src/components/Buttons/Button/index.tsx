import React from 'react';
import { ButtonProps, ButtonType } from './@types';

const Button = ({ children, disabled, type }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`button ${
        type === ButtonType.PRIMARY
          ? 'bg-yellow-400 px-4 py-3 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 md:px-6 md:py-4'
          : type === ButtonType.SMALL
          ? 'bg-yellow-400 px-4 py-2 text-xs hover:bg-yellow-300 focus:bg-yellow-300  focus:ring-yellow-300 md:px-5 md:py-2.5'
          : type === ButtonType.SECONDARY
          ? 'border-2 border-stone-300 py-2.5 text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:ring-stone-200 md:py-3.5'
          : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
