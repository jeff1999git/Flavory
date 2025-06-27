import Image from 'next/image';
import Link from 'next/link';
import { Instagram, AtSign, Youtube } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.174.199-.297.297-.497.099-.198.05-.371-.025-.52s-.67-.161-.916-.227c-.246-.067-1.633-.785-1.9-1.338-.267-.552-.533-.497-.67-.507-.137-.01-.297-.01-.457-.01-.16 0-.417.025-.667.174-.25.149-.666.63-.833 1.291-.167.662-.167 1.395.042 2.075.208.68.992 1.633 2.396 2.996 1.404 1.363 2.807 2.149 4.296 2.86.46.225.867.312 1.251.362.6.075 1.167.025 1.575-.125.408-.15.916-.467 1.25-1.25s.334-.75.234-1.25c-.1-.5-.25-.55-.45-.65zM20.5 3.4A10.4 10.4 0 0 0 12 0 10.5 10.5 0 0 0 1.5 10.5c0 3.116 1.378 5.918 3.606 7.915L0 24l5.586-1.556A10.45 10.45 0 0 0 12 24c5.798 0 10.5-4.702 10.5-10.5a10.4 10.4 0 0 0-2-6.6z" />
    </svg>
  );

const socialLinks = [
  { icon: <Instagram className="h-6 w-6" />, href: '#', name: 'Instagram' },
  { icon: <AtSign className="h-6 w-6" />, href: '#', name: 'Threads' },
  { icon: <Youtube className="h-6 w-6" />, href: '#', name: 'Youtube' },
];

const linkSections = [
  {
    title: 'Contact Us',
    links: [
      { name: 'contactflavory@gmail.com', href: 'mailto:contactflavory@gmail.com' },
      { name: '+91 95671 10457', href: 'https://wa.me/919567110457', icon: <WhatsAppIcon className="h-4 w-4" /> },
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
