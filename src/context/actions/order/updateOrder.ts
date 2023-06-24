import { updateOrder } from '../../../services/ApiRestaurant';
import { ActionFunctionProps } from './@types';

export const action = async ({ request, params }: ActionFunctionProps) => {
  const data = { priority: true };

  const orderId = params.orderId ? params.orderId : '';
  await updateOrder(orderId, data);
  return null;
};
