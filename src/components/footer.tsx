import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube, Phone, Mail, Facebook } from 'lucide-react';
import { MessageSquare } from 'lucide-react';

const socialLinks = [
  { icon: <Instagram className="h-6 w-6" />, href: 'https://www.instagram.com/flavory.in_?igsh=MTIzNWoxNTV0aHhz', name: 'Instagram' },
  { icon: <Youtube className="h-6 w-6" />, href: 'https://www.youtube.com/channel/UCujQT3WjJ2rpmTIf9GVktog', name: 'Youtube' },
  { icon: <Facebook className="h-6 w-6" />, href: 'https://www.facebook.com/share/16ij7MKNVa/', name: 'Facebook' },
];

const linkSections = [
  {
    title: 'Contact Us',
    links: [
      { name: 'contactflavory@gmail.com', href: 'mailto:contactflavory@gmail.com', icon: <Mail className="h-4 w-4" /> },
      { name: '+91 88486 61154', href: 'tel:+918848661154', icon: <Phone className="h-4 w-4" /> },
      { name: 'Queries and Feedbacks', href: '/contact', icon: <MessageSquare className="h-4 w-4" /> },
    ],
  },
];

const policyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Privacy Policy', href: '/about#privacy-policy' },
    { name: 'Refund & Return Policy', href: '/about#refund-policy' },
    { name: 'Shipping Policy', href: '/about#shipping-policy' },
    { name: 'Terms Of Service', href: '/about#terms-of-service' },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <Image src="https://res.cloudinary.com/doelglurk/image/upload/v1751048180/icon_zpammo.png" alt="Flavory logo" width={100} height={100} />
            </Link>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary" aria-label={social.name} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            {linkSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="flex items-center justify-center md:justify-end text-muted-foreground hover:text-primary text-sm">
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
