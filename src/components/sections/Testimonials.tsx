import { testimonials } from '@/data/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-lg text-foreground/70">
            Real feedback from satisfied clients who trust NeatFlow with their cleaning needs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
