import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../SearchOrder';

const Header = () => {
  return (
    <header>
      <Link to={'/'}>Red Hot Oven Pizza Co.</Link>
      <SearchOrder />
      <p>test</p>
    </header>
  );
};

export default Header;
