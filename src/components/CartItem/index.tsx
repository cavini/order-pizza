import React from 'react';
import { formatCurrency } from '../../utils';
import { CartItemProps } from './@types';
import Button from '../Buttons/Button';
import { ButtonType } from '../Buttons/Button/@types';

const CartItem = ({ item }: CartItemProps) => {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type={ButtonType.SMALL}>Delete</Button>
      </div>
    </li>
  );
};

export default CartItem;
