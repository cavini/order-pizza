import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Cart from './components/Cart';
import Menu, { loader as menuLoader } from './components/Menu';
import Order, { loader as orderLoader } from './components/Order';
import './App.css';
import Error from './components/Error';

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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
