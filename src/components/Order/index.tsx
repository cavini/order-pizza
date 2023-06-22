import React from 'react';
import { calcMinutesLeft, formatCurrency, formatDate } from '../../utils';
import { useLoaderData } from 'react-router-dom';
import { OrderInterface } from '../../interfaces/pizza';
import OrderItem from '../OrderItem';

const Order = () => {
  const order = useLoaderData() as OrderInterface;
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
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold ">
          Order #{id} {status}
        </h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium ">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={false}
          />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600 ">
          Gross price: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600 ">
            Priority fee: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          Total: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
};

export default Order;
