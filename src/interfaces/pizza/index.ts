export interface Pizza {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

export interface CartItemInterface {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface DTO<T> {
  status: string;
  data: T[];
}

export type IGetPizzaDTO = DTO<Pizza>;
