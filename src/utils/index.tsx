import { ActionOrder } from '../context/actions/order/@types';

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
};

export const calcMinutesLeft = (dateStr: string) => {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
};

export const formatDate = (dateStr: string) => {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateStr));
};

interface Errors {
  phone?: string;
}

export const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

export const validateForm = (order: ActionOrder): Errors | null => {
  const errors: Errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      'The phone number provided is incorrect. Please provide a valid phone number.';
  }

  if (Object.keys(errors).length > 0) return errors;

  return null;
};
