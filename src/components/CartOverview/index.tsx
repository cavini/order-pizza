import React from 'react';
import { Link } from 'react-router-dom';

const CartOverview = () => {
  return (
    <div className="bg-stone-800 uppercase text-stone-200">
      <p className="font-semibold text-stone-300">
        <span>78 pizzas</span>
        <span>$200.18</span>
      </p>
      <Link to={'/cart'}>Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
