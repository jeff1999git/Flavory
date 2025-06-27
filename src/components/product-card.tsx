'use client';

import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/cart-context';
import Link from 'next/link';

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
<<<<<<< HEAD
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
          
          <div className="flex justify-between items-center w-full mt-8">
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
=======
    <Card className={cn(
      "w-full flex flex-col text-center items-center p-6 pt-10 rounded-3xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 relative",
      product.highlighted ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground"
    )}>
      <div className="absolute -top-12 w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={128}
          height={128}
          className="object-cover w-full h-full"
          data-ai-hint={product.dataAiHint}
        />
      </div>
      
      <CardContent className="p-0 flex flex-col items-center flex-grow w-full">
        <h3 className="font-headline text-xl font-bold mt-16">{product.name}</h3>
        <p className={cn("text-sm mt-2", product.highlighted ? "text-primary-foreground/80" : "text-muted-foreground")}>
          {product.calories} calories • {product.servings} persons
        </p>
        
        <div className="flex justify-between items-center w-full mt-6">
          <span className="text-2xl font-bold">
            {formatPrice(product.price)}
          </span>
          <Button size="icon" className={cn("rounded-full w-10 h-10", product.highlighted ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-white hover:bg-primary/90")}>
            <Plus className="h-6 w-6" />
          </Button>
        </div>
      </CardContent>
    </Card>
>>>>>>> 838c68f (make like this only four products required)
  );
}
