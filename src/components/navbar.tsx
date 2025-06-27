'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import { Badge } from '@/components/ui/badge';

export default function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <nav className="flex items-center justify-between py-6">
        <div>
          <Button asChild variant="outline" className="font-bold">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
           <Link href="/">
            <Image
              src="https://res.cloudinary.com/doelglurk/image/upload/v1751048180/icon_zpammo.png"
              alt="Flavory Logo"
              width={150}
              height={150}
              data-ai-hint="logo"
            />
           </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="Shopping cart" className="relative">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge variant="default" className="absolute -top-2 -right-2 h-5 w-5 justify-center p-0">{cartCount}</Badge>
              )}
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
