import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ProductCard({ product }: { product: Product }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Card className="w-full h-full flex flex-col overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-in fade-in zoom-in-95">
      <div className="relative w-full h-48">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          data-ai-hint={product.dataAiHint}
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-xl font-bold font-headline leading-tight">{product.name}</CardTitle>
          <div className="text-lg font-bold text-primary flex-shrink-0">{formatPrice(product.price)}</div>
        </div>
        <Badge variant="secondary" className="mt-1 w-fit">{product.category}</Badge>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
