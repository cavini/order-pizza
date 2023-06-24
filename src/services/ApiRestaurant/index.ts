import { ActionOrder } from '../../context/actions/order/@types';
import { IPatchOrderDTO, OrderDto } from '../../interfaces/order';
import { IGetPizzaDTO } from '../../interfaces/pizza';

const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export const getMenu = async (): Promise<IGetPizzaDTO> => {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();
  return data;
};

export const getOrder = async (id: string): Promise<OrderDto> => {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
};

export const createOrder = async (newOrder: ActionOrder): Promise<OrderDto> => {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
};

export const updateOrder = async (id: string, updateObj: IPatchOrderDTO) => {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
  } catch (error) {
    throw Error('Failed to update your order');
  }
};
