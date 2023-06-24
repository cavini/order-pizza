import React from 'react';
import Header from '../Header';
import CartOverview from '../../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import { NavigationStatus } from '../../interfaces/useNavigation';
import Loading from '../Loading';

const Layout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === NavigationStatus.LOADING;
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loading />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default Layout;
