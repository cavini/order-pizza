import React from 'react';
import Header from '../Header';
import CartOverview from '../CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import { NavigationStatus } from '../../interfaces/useNavigation';
import Loading from '../Loading';

const Layout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === NavigationStatus.LOADING;
  return (
    <div className="layout">
      {isLoading && <Loading />}
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
