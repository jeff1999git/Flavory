import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Youtube, Phone, Mail } from 'lucide-react';

const socialLinks = [
  { icon: <Instagram className="h-6 w-6" />, href: '#', name: 'Instagram' },
  { icon: <Youtube className="h-6 w-6" />, href: '#', name: 'Youtube' },
];

const linkSections = [
  {
    title: 'Contact Us',
    links: [
      { name: 'contactflavory@gmail.com', href: 'mailto:contactflavory@gmail.com', icon: <Mail className="h-4 w-4" /> },
      { name: '+91 95671 10457', href: 'tel:+919567110457', icon: <Phone className="h-4 w-4" /> },
    ],
  },
];

const policyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Refund & Return Policy', href: '#' },
    { name: 'Shipping Policy', href: '#' },
    { name: 'Terms Of Service', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
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

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {linkSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="flex items-center text-muted-foreground hover:text-primary text-sm">
                        {link.icon && <span className="mr-2">{link.icon}</span>}
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
