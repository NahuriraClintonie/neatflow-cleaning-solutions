import { Award, Shield, Clock, Users } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Professional Team',
      description: 'Trained, certified, and experienced cleaning professionals dedicated to excellence.',
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Complete protection and peace of mind with our comprehensive insurance coverage.',
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'Punctual, consistent service you can count on, every single time.',
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We tailor services to your specific needs.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Why Choose NeatFlow?</h2>
          <p className="text-lg text-foreground/70">
            We&apos;re committed to delivering exceptional results with professionalism and integrity.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="slide-up flex gap-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-foreground/70">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
