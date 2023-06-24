import { redirect } from 'react-router-dom';
import { createOrder } from '../../services/ApiRestaurant';
import { validateForm } from '../../utils';
import { ActionOrder, Priority } from './@types';
import store from '../../store';
import { clearCart } from '../../context/cart/cartSlice';

export const action = async ({ request }: any) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const order: ActionOrder = {
    ...data,
    phone: data.phone,
    cart: JSON.parse(data.cart),
    priority: data.priority === Priority.ON,
  };

  const formErrors = validateForm(order);
  if (formErrors) {
    return formErrors;
  }

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
};
