import React from 'react';
import { Link } from 'react-router-dom';

const CartOverview = () => {
  return (
    <div>
      <p>
        <span>78 pizzas</span>
        <span>$200.18</span>
      </p>
      <Link to={'/cart'}>Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
