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
  // as much as it breaks my heart to use an any as the return type, specially for an official react-router-dom hook, I have no other choice but to use it here
  // since using "@typescript-eslint/no-implicit-any-catch" is not recommended because the rule is deprecated, and should be available out of the box with typescript >= 4.0.0
  // but it doesnt. Tried adding useUnknownInCatchVariables in my tsconfig file but it does not work.
  // Also had to add "@typescript-eslint/no-explicit-any" to my typescript config file, which is something that I never do, because it was bouncing back and forth between errors with any and unknown.
  const menu: any = useLoaderData();
  return (
    <ul>
      {menu.map((pizza: Pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

export default Menu;
