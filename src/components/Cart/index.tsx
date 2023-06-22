import React from 'react';
import LinkButton from '../Buttons/LinkButton';
import { ButtonType } from '../Buttons/Button/@types';
import { fakeCart } from './mock';
import CartItem from '../CartItem';
import Button from '../Buttons/Button';

const Cart = () => {
  const cart = fakeCart;
  return (
    <div className="px-4 py-3">
      <LinkButton type={ButtonType.LINK} to="/menu">
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <LinkButton type={ButtonType.PRIMARY} to="/order/new">
          Order pizzas
        </LinkButton>
        <Button type={ButtonType.SECONDARY}>Clear cart</Button>
      </div>
    </div>
  );
};

export default Cart;
