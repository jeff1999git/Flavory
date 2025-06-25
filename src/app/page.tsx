import { products } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { User } from 'lucide-react';
import Link from 'next/link';

function Navbar() {
  return (
    <header className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <nav className="flex items-center justify-end py-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8 text-sm font-bold">
           <Link href="#" className="hover:text-primary transition-colors">Menu</Link>
           <Link href="/" className="font-headline text-4xl font-black italic">Flavory</Link>
           <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#" className="flex items-center gap-2 hover:text-foreground">
            <User className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}


export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-black mb-4 tracking-tight">
            Wake Up Early,
            <br />
            Eat Fresh & Healthy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Aside from their natural good taste and great crunchy texture alongside wonderful colors and fragrances, eating a large serving of fresh.
          </p>
        </header>

        <section className="mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center mt-16 py-8 border-t">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Bell. Fresh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
