import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/sections/CTA';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'About Us | NeatFlow Cleaning Solutions',
  description: 'Learn about NeatFlow Cleaning Solutions, our mission, values, and commitment to excellence.',
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/90 to-primary py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About NeatFlow
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Trusted cleaning partner for over a decade
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                NeatFlow Cleaning Solutions was founded in 2014 with a simple mission: to provide exceptional cleaning services that exceed customer expectations. What started as a small team of dedicated professionals has grown into a trusted cleaning partner for over 5,000 satisfied customers.
              </p>
              <p>
                We believe that a clean environment is essential for health, happiness, and productivity. Whether it&apos;s a cozy home or a bustling office, we approach every project with the same level of care, attention to detail, and professionalism.
              </p>
              <p>
                Our success is built on three core pillars: quality service, reliable employees, and customer satisfaction. We invest in training our team, using eco-friendly cleaning products, and maintaining the highest standards in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-foreground/70">
                To deliver professional cleaning solutions that transform spaces, improve lives, and exceed expectations with integrity and care.
              </p>
            </div>
            <div className="slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-foreground/70">
                To be the most trusted and respected cleaning service provider in the region, known for excellence, reliability, and customer commitment.
              </p>
            </div>
            <div className="slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Values</h3>
              <p className="text-foreground/70">
                Quality, Integrity, Reliability, Customer Focus, Environmental Responsibility, and Team Excellence. These values guide every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
