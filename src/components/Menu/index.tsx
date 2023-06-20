import React from 'react';
import { getMenu } from '../../services/ApiRestaurant';
import { useLoaderData } from 'react-router-dom';
import { Pizza } from '../../interfaces/pizza';
import MenuItem from '../MenuItem';

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

const Menu = () => {
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((pizza: Pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

export default Menu;
