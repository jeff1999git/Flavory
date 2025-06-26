import { products } from '@/lib/data';
import ProductCard from '@/components/product-card';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-black mb-4 tracking-tight">
          Start Fresh, Start Pure  
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Crafted from handpicked, vegetables — our powders bring you the rich flavors, vibrant colors, and natural goodness of real farm-fresh produce. Wholesome, aromatic, and always pure.
          </p>
        </header>

        <section className="mt-24">
          <div className="flex justify-center">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center mt-16 py-8 border-t">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Flavory All rights reserved.
        </p>
      </footer>
    </div>
  );
}
