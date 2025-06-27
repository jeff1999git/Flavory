
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Check } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div id="about-us">
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
          
          <Separator className="my-16" />

          <div id="privacy-policy" className="scroll-mt-20">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-12 text-center">
              Privacy Policy
            </h1>
            <div className="space-y-10">
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Data Collection</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Flavory, we collect customer information including names, contact details, and delivery addresses to facilitate the delivery of our products and enhance your overall experience. We do not store payment credentials, ensuring your financial data remains safe and secure.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Data Usage</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your data is used solely to provide you with our products and services. We utilize this information to process orders, arrange deliveries, and communicate effectively with you regarding your purchases.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Data Security</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We take data security seriously at Flavory. Robust measures are in place to protect your information from unauthorized access, loss, or alteration. Your data is stored securely, and we continuously review and strengthen our security protocols.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Data Sharing</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Flavory does not sell, rent, or disclose your data to third parties. We deeply value your trust and are committed to upholding your privacy at every step.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Cookies and Tracking</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience. These tools help us analyze website traffic, optimize content, and deliver personalized recommendations. You can manage or disable cookies through your browser settings at any time.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">User Rights</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a valued customer, you have the right to access, update, or request deletion of your personal data. If you have any concerns or requests regarding your information, please reach out to us using the contact details provided on our website.
                </p>
                <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                  At Flavory, your privacy is our priority. We are committed to handling your data responsibly and in accordance with the highest standards of privacy and security.
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-16" />

          <div id="refund-policy" className="scroll-mt-20">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-12 text-center">
              Refund & Return Policy
            </h1>
            <div className="space-y-10">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We have a no return policy. Once the refund request is approved , the refunded amount would be processed and credited to the original mode of payment within 5 business days
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-16" />

          <div id="shipping-policy" className="scroll-mt-20">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-12 text-center">
              Shipping Policy
            </h1>
            <div className="space-y-10">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Flavory, we are committed to providing fast, reliable, and safe shipping services to ensure your orders arrive on time and in excellent condition. Please review the details of our shipping policies below:
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Order Processing</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Orders are typically processed within 1–2 business days after payment confirmation, excluding weekends and public holidays.
                </p>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  During peak seasons or promotional campaigns, processing may take slightly longer due to higher order volumes.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Shipping Methods</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We offer multiple shipping options including standard, expedited, and international shipping, depending on your location and urgency.
                </p>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  Available shipping methods will be shown during the checkout process.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Shipping Rates</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Shipping charges are calculated based on the weight, delivery destination, and chosen shipping method.
                </p>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  You will see the estimated shipping cost before completing your order.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Delivery Timeframes</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Delivery times depend on your location and the shipping option selected.
                </p>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  Same-day or next-day delivery may be available for select PIN codes where our courier partners support expedited services.
                </p>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  Note: Home delivery is not guaranteed for all faster shipments.
                </p>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  Most orders are dispatched within 12–24 hours after processing.
                </p>
                 <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  Standard delivery via major couriers: 2–5 business days, excluding Sundays and public holidays.
                </p>
                 <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  Remote or rural areas serviced by India Post may experience a delivery window of 1–2 weeks.
                </p>
                 <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  While we strive for timely delivery, delays due to weather, courier issues, or other unforeseen events may occur.
                </p>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed font-semibold">
                  ⚠️ Please note: Flavory is not liable for damages incurred during transit. Refunds or replacements for such cases may not be possible.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Order Tracking</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Once shipped, you will receive a shipping confirmation email with your tracking number.
                </p>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  You can monitor your order status using the tracking link provided or directly on the courier's website.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Shipping Restrictions</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Certain locations or products may be subject to shipping restrictions.
                </p>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  For more details, feel free to contact our customer support team.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Policy Updates</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Flavory reserves the right to change this shipping policy at any time without prior notice.
                </p>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  Any changes will be reflected on this page, so we recommend checking back regularly for updates.
                </p>
              </div>
               <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you have any questions or need further support, please <Link href="/contact" className="text-primary hover:underline">Contact Us</Link>. We're here to help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
