import { products } from '@/lib/data';
import ProductCard from '@/components/product-card';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-black mb-4 tracking-tight">
<<<<<<< HEAD
          Start Fresh, Start Pure  
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Crafted from handpicked, vegetables — our powders bring you the rich flavors, vibrant colors, and natural goodness of real farm-fresh produce. Wholesome, aromatic, and always pure.
=======
            Wake Up Early,
            <br />
            Eat Fresh & Healthy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Aside from their natural good taste and great crunchy texture alongside wonderful colors and fragrances, eating a large serving of fresh.
>>>>>>> 838c68f (make like this only four products required)
          </p>
        </header>

        <section className="mt-24">
<<<<<<< HEAD
          <div className="flex justify-center">
=======
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
>>>>>>> 838c68f (make like this only four products required)
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

<<<<<<< HEAD
      <Footer />
=======
      <footer className="text-center mt-16 py-8 border-t">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Bell. Fresh. All rights reserved.
        </p>
      </footer>
>>>>>>> 838c68f (make like this only four products required)
    </div>
  );
}
