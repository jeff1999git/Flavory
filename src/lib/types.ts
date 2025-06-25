export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  calories: number;
  servings: number;
  highlighted?: boolean;
  dataAiHint: string;
}
