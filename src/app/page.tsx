import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'NeatFlow Cleaning Solutions | Corporate & Residential Cleaning in Kampala',
  description: 'Uganda\'s premier commercial and residential cleaning service. We provide trusted, eco-friendly, and thorough cleaning for businesses and homes across Kampala and beyond.',
  keywords: 'commercial cleaning Kampala, office cleaning Uganda, professional cleaners, corporate facility management, residential cleaning services',
  openGraph: {
    title: 'NeatFlow Cleaning Solutions | Premium Cleaning in Uganda',
    description: 'Elevating workspace hygiene and home cleanliness with professional, vetted staff.',
    type: 'website',
    locale: 'en_UG',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}