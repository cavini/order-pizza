import React from 'react';
import LinkButton from '../../../components/Buttons/LinkButton';
import { ButtonType } from '../../../components/Buttons/Button/@types';
import CartItem from '../CartItem';
import Button from '../../../components/Buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from '../../../context/cart/cartSlice';
import { getUser } from '../../../context/user/userSlice';
import EmptyCart from '../EmptyCart';

const Cart = () => {
  const username = useSelector(getUser);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton type={ButtonType.LINK} to="/menu">
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <LinkButton type={ButtonType.PRIMARY} to="/order/new">
          Order pizzas
        </LinkButton>
        <Button
          onClick={() => dispatch(clearCart())}
          type={ButtonType.SECONDARY}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
