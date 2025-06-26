'use client';

import { User, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <header className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <nav className="flex items-center justify-between py-6">
        <div>
          <Button asChild variant="outline" className="font-bold">
            <Link href="#">Contact</Link>
          </Button>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
           <Link href="/" className="font-headline text-4xl font-black italic">Flavory</Link>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="Shopping cart">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" aria-label="User profile">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
