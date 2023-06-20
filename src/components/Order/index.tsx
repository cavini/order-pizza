import React from 'react';
import { calcMinutesLeft, formatCurrency, formatDate } from '../../utils';
import { getOrder } from '../../services/ApiRestaurant';
import { useLoaderData } from 'react-router-dom';
import { LoaderParams } from './@types';
import { OrderInterface } from '../../interfaces/pizza';

export const loader = async ({ params }: LoaderParams) => {
  const order = await getOrder(params.orderId);
  return order;
};

const Order = () => {
  const order = useLoaderData() as OrderInterface;
  console.log(order);
  const {
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    status,
    id,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
};

export default Order;
