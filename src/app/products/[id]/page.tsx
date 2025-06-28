'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import { Check, Plus, Minus, Package, Sprout, Soup, Info, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import StarRating from '@/components/star-rating';

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params;
  const { addToCart, updateQuantity, cartItems } = useCart();

  const product = products.find((p) => p.id === id);
  const cartItem = cartItems.find((item) => item.id === id);
  const inCart = !!cartItem;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);
  };

  const handleAddClick = () => {
    if (product) {
      addToCart(product);
    }
  }

  const handleQuantityChange = (amount: number) => {
    if (cartItem && product) {
      updateQuantity(product.id, cartItem.quantity + amount);
    }
  };

  if (!product || !product.details) {
    return (
      <div className="bg-background text-foreground min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold">Product not found</h1>
          <p className="mt-4 text-muted-foreground">The product you are looking for does not exist.</p>
          <Button asChild className="mt-8">
            <Link href="/">Go back to shopping</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const { details } = product;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-card shadow-lg">
              <Image
                src={details.detailImageUrl}
                alt={product.name}
                fill
                className="object-cover"
                data-ai-hint="indian food"
              />
            </div>
            
            <div className="flex items-center justify-between p-6 bg-card rounded-2xl shadow-md">
              <span className="text-4xl font-bold font-mono text-primary">
                {formatPrice(product.price)}
              </span>
              <div className="flex items-center gap-4">
                {inCart ? (
                  <div className="flex items-center border rounded-full">
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full" onClick={() => handleQuantityChange(-1)}>
                      <Minus className="h-5 w-5" />
                    </Button>
                    <span className="w-8 text-center font-bold text-lg">{cartItem.quantity}</span>
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full" onClick={() => handleQuantityChange(1)}>
                      <Plus className="h-5 w-5" />
                    </Button>
                  </div>
                ) : (
                  <Button size="lg" className="rounded-full h-12 text-lg" onClick={handleAddClick}>
                    Add to Cart
                  </Button>
                )}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                  <Sprout className="text-primary"/> Why Choose Flavory?
                </CardTitle>
              </CardHeader>
              <CardContent>
                 <ul className="space-y-2 text-muted-foreground">
                  {details.whyChoose.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                       <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                       <span>{point}</span>
                    </li>
                  ))}
                 </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-sm text-muted-foreground space-y-4">
                <div className="flex items-center gap-2"><Truck/> <b>Shipping & Returns:</b> {details.shipping}</div>
                <div className="flex items-start gap-2"><Info/> <b>Disclaimer:</b> {details.disclaimer}</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h1 className="text-4xl font-extrabold font-headline leading-tight">{details.title}</h1>
                {product.rating && product.reviewCount && (
                  <div className="flex items-center gap-2">
                    <StarRating rating={product.rating} />
                    <span className="text-sm text-muted-foreground mt-1">({product.reviewCount} reviews)</span>
                  </div>
                )}
              </div>
              <p className="text-xl text-muted-foreground mt-2 font-semibold">{details.tagline}</p>
              <p className="text-lg mt-4 leading-relaxed">{details.description}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                  <Check className="text-primary"/> Key Health Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-center gap-2">
                    <Package /> Product Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {details.productDetails.map((detail, index) => <li key={index}>{detail}</li>)}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-center gap-2">
                    <Soup /> Usage Suggestions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {details.usage.map((use, index) => <li key={index}>{use}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
