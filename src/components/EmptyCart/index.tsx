import React from 'react';
import LinkButton from '../Buttons/LinkButton';
import { ButtonType } from '../Buttons/Button/@types';

const EmptyCart = () => {
  return (
    <div className="px-4 py-3">
      <LinkButton type={ButtonType.LINK} to="/menu">
        &larr; Back to menu
      </LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas 😃
      </p>
    </div>
  );
};

export default EmptyCart;
