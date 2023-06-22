import React from 'react';
import { Link } from 'react-router-dom';
import { LinkButtonProps } from './@types';
import { ButtonType } from '../Button/@types';

const LinkButton = ({ children, to, type }: LinkButtonProps) => {
  return (
    <Link
      className={`${
        type === ButtonType.PRIMARY
          ? 'button px-4 py-3 md:px-6 md:py-4'
          : type === ButtonType.SMALL
          ? 'button px-4 py-2 text-xs md:px-5 md:py-2.5'
          : type === ButtonType.LINK
          ? 'link-button'
          : ''
      }`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
