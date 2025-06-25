import { products } from '@/lib/data';
import ProductList from '@/components/product-list';
import ProductCard from '@/components/product-card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-black mb-4 tracking-tight">
            Flavory
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover a world of fresh, artisanal, and locally sourced foods,
            delivered right to your kitchen.
          </p>
        </header>

        <section className="mb-20">
          <h2 className="font-headline text-4xl font-bold mb-8">
            Featured Products
          </h2>
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-6 pb-4">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="w-[300px] flex-shrink-0">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </section>

        <section>
          <h2 className="font-headline text-4xl font-bold mb-8 text-center">
            All Our Delights
          </h2>
          <ProductList products={products} />
        </section>
      </main>

      <footer className="text-center mt-16 py-8 border-t border-border/50">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Flavory. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
