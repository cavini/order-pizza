import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Pizza } from '../../interfaces/pizza';
import MenuItem from '../MenuItem';

const Menu = () => {
  const menu = useLoaderData() as Pizza[];
  return (
    <ul>
      {menu.map((pizza: Pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

export default Menu;
