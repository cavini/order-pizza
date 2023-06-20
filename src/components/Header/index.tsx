import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../SearchOrder';
import User from '../User';

const Header = () => {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link className="tracking-widest" to={'/'}>
        Red Hot Oven Pizza Co.
      </Link>
      <SearchOrder />
      <User />
    </header>
  );
};

export default Header;
