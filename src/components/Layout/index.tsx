import React from 'react';
import Header from '../Header';
import CartOverview from '../CartOverview';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};

export default Layout;
