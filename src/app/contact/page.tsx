
'use client';

import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Contact Us</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            We'd love to hear from you! Reach out through any of the channels below.
          </p>

          <div className="flex flex-col gap-4">
            <Button asChild size="lg">
              <Link href="https://wa.me/919567110457" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat with us on WhatsApp
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline">
              <Link href="mailto:contactflavory@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Mail us
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="https://www.instagram.com/flavory.in_?igsh=MTIzNWoxNTV0aHhz" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Connect on Instagram
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
