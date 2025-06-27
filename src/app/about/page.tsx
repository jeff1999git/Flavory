
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Check } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-12 text-center">
            About Us
          </h1>
          
          <div className="space-y-10">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">How Flavory Works</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Flavory is a brand born from a passion for purity, health, and natural taste. We specialize in dehydrated powders made from fresh, locally sourced ingredients like green chilli, onion, mixed vegetables (ABC), and baby nutrition blends. Our mission is to make everyday cooking easier, healthier, and more flavorful — without compromising on quality or authenticity.
              </p>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                Every product is crafted with care, preserving nutrients and taste through advanced dehydration methods. Whether you're a home cook, health-conscious parent, or food manufacturer, Flavory brings convenience and nutrition to your kitchen in its most natural form.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">Why Flavory is the Best Choice for You</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Flavory, we go beyond just selling powders — we deliver nature in a pack.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Authentic Taste:</span> Made from real vegetables and spices with no additives or preservatives.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Nutrient-Rich:</span> Our gentle dehydration method locks in essential nutrients.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Versatile Use:</span> Perfect for home cooking, baby food, ready-to-eat meals, and bulk food applications.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Trusted Quality:</span> Crafted at the Kerala Agricultural University Business Incubator with a focus on hygiene and consistency.
                  </span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                Whether it’s a spicy green chilli kick, onion flavor boost, or a nutritious baby blend — Flavory is your go-to partner for clean, natural, and delicious food powders.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
