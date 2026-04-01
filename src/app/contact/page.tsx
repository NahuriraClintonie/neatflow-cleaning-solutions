import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | NeatFlow Cleaning Solutions',
  description: 'Get in touch with NeatFlow. Contact us for a free quote or to discuss your cleaning needs.',
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/90 to-primary py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-primary-foreground/90">
              We&apos;re here to help. Reach out to us with any questions or to schedule your cleaning service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
