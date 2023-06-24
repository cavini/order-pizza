import React from 'react';
import { formatCurrency } from '../../../utils';
import { CartItemProps } from './@types';
import DeleteItem from '../../../components/DeleteItem';
import UpdateItemQuantity from '../../../components/UpdateItemQuantity';
import { useSelector } from 'react-redux';
import { getCurrentQuantityById } from '../../../context/cart/cartSlice';

const CartItem = ({ item }: CartItemProps) => {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          currentQuantity={currentQuantity}
          pizzaId={pizzaId}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};

export default CartItem;
