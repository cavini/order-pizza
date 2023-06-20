import { LoaderParams } from '../../components/Order/@types';
import { getOrder } from '../../services/ApiRestaurant';

export const loader = async ({ params }: LoaderParams) => {
  if (params.orderId) {
    const order = await getOrder(params.orderId);
    return order;
  }
};
