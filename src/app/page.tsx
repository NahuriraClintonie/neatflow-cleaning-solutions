import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <main>
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
