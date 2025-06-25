export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'Bakery' | 'Produce' | 'Dairy' | 'Meat' | 'Pantry';
  featured?: boolean;
  dataAiHint: string;
}
