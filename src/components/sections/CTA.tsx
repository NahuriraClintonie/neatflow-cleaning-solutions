import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ready for a Cleaner Space?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact us today for a free quote. Our team is ready to transform your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
