export interface Pizza {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

export interface CartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface OrderInterface {
  id: string;
  status: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: CartItem[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
}

export interface OrderDto extends OrderInterface {
  createdAt: string;
}

export interface DTO<T> {
  status: string;
  data: T[];
}

export type IGetOrderDTO = DTO<OrderDto>;
export type IGetPizzaDTO = DTO<Pizza>;
