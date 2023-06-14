import { useState } from 'react';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
function App() {
  const [count, setCount] = useState(200);

  return <RouterProvider router={router} />;
}

export default App;
