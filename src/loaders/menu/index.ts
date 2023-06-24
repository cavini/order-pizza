import { getMenu } from '../../services/ApiRestaurant';

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};
