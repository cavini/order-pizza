import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Cart from './components/Cart';
import Menu, { loader as menuLoader } from './components/Menu';
import './App.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
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
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
