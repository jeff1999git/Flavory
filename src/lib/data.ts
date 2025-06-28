import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Green chilli powder',
    price: 70,
    description: 'Rich in vitamin C, vitamin A, iron, and antioxidants.',
    imageUrl: 'https://res.cloudinary.com/doelglurk/image/upload/v1751051734/20250625_2359_Green_Chilli_Pouch_Design_remix_01jym5h04aev0b2vjg7ctdxcrv-removebg-preview_zkuuk0.png',
    dataAiHint: 'chilli powder',
    rating: 4.5,
    reviewCount: 132,
    details: {
      title: 'Green Chilli Powder',
      tagline: 'Pure. Spicy. Powerful.',
      description: 'Bring bold heat and natural health to your meals with Flavory’s premium Green Chilli Powder, made from farm-fresh green chillies — finely ground to preserve flavor, color, and potency.',
      detailImageUrl: 'https://res.cloudinary.com/doelglurk/image/upload/v1751058128/20250628_0230_Curry_with_Chilli_Powder_remix_01jysk0kxbfrx9hmz6qpvpe2ae_tze6fc.png',
      benefits: [
        'Rich in Antioxidants – Boosts immunity and helps fight free radicals',
        'Metabolism Booster – Naturally supports fat burning',
        'Aids Digestion – Promotes gut health and digestive efficiency',
        'Heart-Friendly – May help reduce cholesterol levels',
        'Glowing Skin – Stimulates collagen production',
        'Anti-Inflammatory – Helps soothe joints and muscles',
        'Natural Pain Relief – Contains capsaicin, known for reducing pain sensitivity',
        'Supports Eyesight – Rich in Vitamin A',
        'Mood Enhancer – Triggers “happy” hormones like serotonin',
      ],
      productDetails: [
        'Net Weight: 50g / 100g',
        'Ingredients: 100% Dehydrated Green Chilli (No additives or preservatives)',
        'Shelf Life: 12 months from the date of manufacturing',
        'Packaging: Air-tight, moisture-resistant zip pouch for maximum freshness',
        'Storage: Store in a cool, dry place away from sunlight',
      ],
      usage: [
        'Add a spicy kick to curries, soups, and marinades',
        'Use in masala blends or homemade spice mixes',
        'Great for instant noodles, chutneys, or dry rubs',
        'Mix in with dough, batters, or seasoning oils for added punch',
      ],
      whyChoose: [
        '100% Natural Ingredients',
        'No Artificial Colors or Preservatives',
        'Tested at Kerala Agricultural University Business Incubator, Thrissur',
        'Packed with care for purity, flavor & safety',
      ],
      shipping: 'Dispatched within 24 hours. Standard delivery: 2–5 business days (India). Secure payment options available. Easy return or replacement for damaged items.',
      disclaimer: 'This product is not intended to diagnose, treat, cure, or prevent any disease. Please consult a healthcare professional if pregnant or on medication.',
    },
  },
];
