import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/90 to-primary py-20 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Your Home Deserves to Shine
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Professional cleaning services that go beyond expectations. From homes to offices, we deliver spotless results every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Book Your Cleaning</Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="fade-in">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">5000+</div>
              <p className="text-sm md:text-base text-primary-foreground/80">Happy Customers</p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10+</div>
              <p className="text-sm md:text-base text-primary-foreground/80">Years Experience</p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm md:text-base text-primary-foreground/80">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
