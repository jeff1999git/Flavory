import Image from 'next/image';
import Link from 'next/link';
import { Instagram, AtSign, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: <Instagram className="h-6 w-6" />, href: '#', name: 'Instagram' },
  { icon: <AtSign className="h-6 w-6" />, href: '#', name: 'Threads' },
  { icon: <Facebook className="h-6 w-6" />, href: '#', name: 'Facebook' },
  { icon: <Twitter className="h-6 w-6" />, href: '#', name: 'X' },
  { icon: <Youtube className="h-6 w-6" />, href: '#', name: 'Youtube' },
  { icon: <Linkedin className="h-6 w-6" />, href: '#', name: 'LinkedIn' },
];

const linkSections = [
  {
    title: 'Categories',
    links: [
      { name: 'Powders', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Contact Us', href: '#' },
      { name: 'About Us', href: '#' },
      { name: 'Shipping Policy', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '#' },
    ],
  },
];

const policyLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Refund & Return Policy', href: '#' },
    { name: 'Shipping Policy', href: '#' },
    { name: 'Terms Of Service', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="md:col-span-1 lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="https://res.cloudinary.com/doelglurk/image/upload/v1751048180/icon_zpammo.png"
                alt="Flavory Logo"
                width={120}
                height={40}
                data-ai-hint="logo"
              />
            </Link>
            <div className="flex flex-wrap gap-4 mt-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary" aria-label={social.name}>
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Flavory. All rights reserved.</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 sm:mt-0">
                  {policyLinks.map((link) => (
                      <Link key={link.name} href={link.href} className="hover:text-primary">
                          {link.name}
                      </Link>
                  ))}
              </div>
          </div>
      </div>
    </footer>
  );
}
