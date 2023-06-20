import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../SearchOrder';
import User from '../User';

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-500 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link className="tracking-widest" to={'/'}>
        Red Hot Oven Pizza Co.
      </Link>
      <SearchOrder />
      <User />
    </header>
  );
};

export default Header;
