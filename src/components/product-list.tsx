'use client';

import { useState, useMemo } from 'react';
import type { Product } from '@/lib/types';
import { Input } from '@/components/ui/input';
import ProductCard from '@/components/product-card';
import { Search } from 'lucide-react';

export default function ProductList({ products }: { products: Product[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [products, searchTerm]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            aria-label="Search products"
            placeholder="Search products..."
            className="pl-11 rounded-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
            <h3 className="font-headline text-2xl font-semibold mb-2">No Products Found</h3>
            <p className="text-muted-foreground text-lg">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
}
