import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh and Health Salad',
    price: 2.65,
    calories: 60,
    servings: 4,
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'health salad',
  },
  {
    id: '2',
    name: 'Cashewnut Chicken Salad',
    price: 2.65,
    calories: 60,
    servings: 4,
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'chicken salad',
    highlighted: true,
  },
  {
    id: '3',
    name: 'Crunchy Cashew Salad',
    price: 2.65,
    calories: 60,
    servings: 4,
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'cashew salad',
  },
  {
    id: '4',
    name: 'Sesame Dressing Salad',
    price: 2.65,
    calories: 60,
    servings: 4,
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'sesame salad',
  },
];
