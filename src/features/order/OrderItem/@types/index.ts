import { CartItemInterface } from '../../../../interfaces/pizza';

export interface OrderItemProps {
  item: CartItemInterface;
  isLoadingIngredients: boolean;
  ingredients?: string[];
}
