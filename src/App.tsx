import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Cart from './components/Cart';
import Menu from './components/Menu';
import Order from './components/Order';
import './App.css';
import Error from './components/Error';
import { action as createOrderAction } from './actions/order/index';
import { loader as orderLoader } from './loaders/order/index';
import { loader as menuLoader } from './loaders/menu/index';
import CreateOrder from './components/CreateOrder';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },

      {
        path: '/order/new',
        element: <CreateOrder />,
        errorElement: <Error />,
        action: createOrderAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
