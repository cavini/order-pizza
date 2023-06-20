export interface Pizza {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

export interface IGetPizzaDTO {
  status: string;
  data: Pizza[];
}
