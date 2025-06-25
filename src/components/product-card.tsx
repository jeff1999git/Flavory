import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProductCard({ product }: { product: Product }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);
  };

  return (
    <Card className={cn(
      "w-full max-w-[17rem] flex flex-col text-center items-center p-6 rounded-3xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-visible",
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
          <Button size="icon" className={cn("rounded-full w-10 h-10", product.highlighted ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-white hover:bg-primary/90")}>
            <Plus className="h-6 w-6" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
