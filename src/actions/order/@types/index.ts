import { CartItemInterface, OrderInterface } from '../../../interfaces/pizza';

export enum Priority {
  ON = 'on',
  OFF = 'off',
}

export interface ActionOrder extends Pick<OrderInterface, 'phone'> {
  cart: CartItemInterface[];
  priority: boolean;
}
