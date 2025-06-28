'use client';

import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/cart-context';
import Link from 'next/link';
import StarRating from './star-rating';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, updateQuantity, cartItems } = useCart();
  const cartItem = cartItems.find((item) => item.id === product.id);
  const inCart = !!cartItem;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
  }

  const handleQuantityChange = (e: React.MouseEvent, amount: number) => {
    e.stopPropagation();
    e.preventDefault();
    if (cartItem) {
      updateQuantity(product.id, cartItem.quantity + amount);
    }
  };

  return (
    <Link href={`/products/${product.id}`} className="block w-full max-w-[17rem]">
      <Card className={cn(
        "flex flex-col text-center items-center p-6 rounded-3xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-visible h-full",
        product.highlighted ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground"
      )}>
        <div className="relative w-full h-36">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={220}
            height={220}
            className="object-contain drop-shadow-lg absolute -top-28 left-1/2 -translate-x-1/2"
            data-ai-hint={product.dataAiHint}
          />
        </div>
        
        <CardContent className="p-0 flex flex-col items-center flex-grow w-full">
          <h3 className="font-headline text-xl font-bold">{product.name}</h3>
          <p className={cn("text-sm mt-2 flex-grow", product.highlighted ? "text-primary-foreground/80" : "text-muted-foreground")}>
            {product.description}
          </p>
          
          {product.rating && product.reviewCount && (
            <div className="flex items-center justify-center gap-2 mt-2">
              <StarRating rating={product.rating} />
              <span className={cn("text-xs", product.highlighted ? "text-primary-foreground/80" : "text-muted-foreground")}>({product.reviewCount})</span>
            </div>
          )}

          <div className="flex justify-between items-center w-full mt-auto pt-4">
            <span className="text-2xl font-bold font-mono">
              {formatPrice(product.price)}
            </span>
            {inCart ? (
              <div className="flex items-center border rounded-full">
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full" onClick={(e) => handleQuantityChange(e, -1)}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-4 text-center font-bold text-sm">{cartItem.quantity}</span>
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full" onClick={(e) => handleQuantityChange(e, 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button size="icon" className={cn("rounded-full w-10 h-10", product.highlighted ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-white hover:bg-primary/90")} onClick={handleAddClick}>
                <Plus className="h-6 w-6" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
