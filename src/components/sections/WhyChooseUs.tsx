import Image from 'next/image';
import { Award, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Fully Insured & Compliant',
      description: 'Comprehensive liability coverage and strict adherence to Uganda\'s workplace safety regulations.',
    },
    {
      icon: Award,
      title: 'Vetted Professionals',
      description: 'Every staff member undergoes rigorous background checks and continuous professional training.',
    },
    {
      icon: Clock,
      title: 'Seamless Operations',
      description: 'Flexible scheduling including after-hours service to ensure zero disruption to your business.',
    },
    {
      icon: CheckCircle2,
      title: 'Quality Assurance',
      description: 'Dedicated account managers and regular site audits to maintain our strict standard of excellence.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <AnimatedSection className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-1xl slide-in-left">
            <Image 
              src="/team-trust.jpg" 
              alt="NeatFlow Professional Cleaning Team" 
              fill 
              className="object-cover"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-8 left-8 bg-background/95 backdrop-blur-md p-6 rounded-xl border border-border max-w-xs shadow-xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                  <Award size={24} />
                </div>
                <div>
                  <div className="font-bold text-foreground text-xl">100%</div>
                  <div className="text-sm text-foreground/70 font-medium">Client Retention</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <div className="space-y-10">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Why Top Organizations Trust NeatFlow
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We don&rsquo;t just clean; we manage your facility&rsquo;s hygiene ecosystem. Partnering with us means transferring the operational headache of cleanliness to experts who guarantee results.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={index}
                    className="slide-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-4 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}