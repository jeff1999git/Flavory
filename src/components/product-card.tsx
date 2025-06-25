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
      "w-full max-w-[17rem] flex flex-col text-center items-center p-6 pt-10 rounded-3xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 relative",
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
        <h3 className="font-headline text-xl font-bold mt-20">{product.name}</h3>
        <p className={cn("text-sm mt-2", product.highlighted ? "text-primary-foreground/80" : "text-muted-foreground")}>
          {product.calories} calories • {product.servings} persons
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
