import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="s/hero-bg.jpg" 
          alt="Pristine corporate office space" 
          fill 
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85 bg-blend-multiply" />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/50 bg-accent/10 backdrop-blur-sm text-accent font-medium text-sm slide-in-left">
              Uganda&rsquo;s Premier Facility Cleaning Partner
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
              Elevating Workplace <br className="hidden md:block"/> Hygiene & Standards
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              We deliver spotless, compliant, and consistently immaculate environments for Uganda&rsquo;s leading corporate offices and premium residences. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-8 text-lg">
                <Link href="/contact">Request Corporate Bid</Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-lg backdrop-blur-sm">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 pt-10 border-t border-primary-foreground/20">
            {[
              { value: '50+', label: 'Corporate Clients' },
              { value: '100%', label: 'Vetted Staff' },
              { value: '24/7', label: 'Support Available' },
              { value: 'ISO', label: 'Standard Methods' },
            ].map((stat, i) => (
              <div key={i} className="fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <p className="text-sm md:text-base text-primary-foreground/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}