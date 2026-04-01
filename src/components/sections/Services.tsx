import Image from 'next/image';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { services } from '@/data/services';

export function Services() {
  return (
    <section className="py-20 md:py-32 bg-secondary/20" id="services">
      <div className="container px-4">
        {/* Section Header optimized for Corporate SEO */}
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Tailored Facility Solutions
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            From high-traffic corporate headquarters in Nakasero to premium residences in Kololo, 
            our systematic approach ensures world-class hygiene standards across every square meter.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="slide-up group overflow-hidden border-border/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Header with Overlay */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={`/${service.image}`} // Prepends / to ensure it pulls from the public folder root
                  alt={service.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Sophisticated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Icon & Title Overlay */}
                <div className="absolute bottom-5 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl bg-accent/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                      {service.icon}
                    </span>
                    <CardTitle className="text-white text-xl md:text-2xl font-bold tracking-wide">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </div>

              <CardContent className="pt-8 px-6 pb-8">
                <CardDescription className="text-base text-foreground/70 mb-6 leading-relaxed min-h-[3rem]">
                  {service.description}
                </CardDescription>
                
                {/* Feature List */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="text-accent font-bold text-xs">✓</span>
                      </div>
                      <span className="text-foreground/80 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Localized Price/CTA Tag */}
                {service.price && (
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm font-bold text-primary uppercase tracking-widest flex justify-between items-center">
                      <span>Service Tier</span>
                      <span className="text-accent">{service.price}</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}