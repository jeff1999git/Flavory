import { products } from '@/lib/data';
import ProductCard from '@/components/product-card';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main>
        <section className="relative h-[60vh] flex items-center justify-center text-center">
          <Image
            src="https://res.cloudinary.com/doelglurk/image/upload/v1751110126/pexels-prithiviraj-19212126_tifrab.jpg"
            alt="Fresh vegetables background"
            fill
            className="object-cover"
            priority
            data-ai-hint="vegetables background"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 px-4 text-white">
            <h1 className="font-headline text-5xl md:text-7xl font-black mb-4 tracking-tight">
              Start Fresh, Start Pure  
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Crafted from handpicked, vegetables — our powders bring you the rich flavors, vibrant colors, and natural goodness of real farm-fresh produce. Wholesome, aromatic, and always pure.
            </p>
          </div>
        </section>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-24">
            <div className="flex justify-center">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
