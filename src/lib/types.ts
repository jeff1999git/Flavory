export interface ProductDetails {
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  productDetails: string[];
  usage: string[];
  whyChoose: string[];
  shipping: string;
  disclaimer: string;
  detailImageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  highlighted?: boolean;
  dataAiHint: string;
  details?: ProductDetails;
  rating?: number;
  reviewCount?: number;
}
