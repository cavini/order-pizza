import { CartItemInterface, DTO } from '../pizza';

export interface OrderInterface {
  id: string;
  status: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: CartItemInterface[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
}

export interface OrderDto extends OrderInterface {
  createdAt: string;
}

export interface IPatchOrderDTO {
  priority: boolean;
}

export type IGetOrderDTO = DTO<OrderDto>;
