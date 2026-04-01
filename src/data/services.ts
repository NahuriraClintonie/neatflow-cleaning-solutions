import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Residential Cleaning',
    description: 'Comprehensive cleaning services for your home, from regular maintenance to deep cleaning.',
    icon: '🏠',
    features: [
      'Weekly, bi-weekly, or monthly schedules',
      'Deep cleaning and move-in/out cleaning',
      'Eco-friendly cleaning products',
      'Fully insured and bonded staff',
    ],
    price: 'From $150/visit',
  },
  {
    id: '2',
    title: 'Commercial Cleaning',
    description: 'Professional cleaning solutions tailored for businesses of all sizes.',
    icon: '🏢',
    features: [
      'Customized cleaning plans',
      'After-hours service available',
      'Office, retail, and industrial spaces',
      'Trained and professional staff',
    ],
    price: 'Custom quotes',
  },
  {
    id: '3',
    title: 'Post-Construction Cleaning',
    description: 'Specialized cleaning for newly built or renovated properties.',
    icon: '🔨',
    features: [
      'Dust and debris removal',
      'Window and floor cleaning',
      'Detailed touch-up cleaning',
      'Move-ready properties',
    ],
    price: 'Custom quotes',
  },
  {
    id: '4',
    title: 'Carpet & Upholstery Care',
    description: 'Professional carpet and upholstery cleaning to extend the life of your furnishings.',
    icon: '🧹',
    features: [
      'Steam cleaning technology',
      'Stain removal services',
      'Odor elimination',
      'Safe for all fabric types',
    ],
    price: 'From $1.50/sq ft',
  },
  {
    id: '5',
    title: 'Window Cleaning',
    description: 'Crystal-clear windows inside and out with our professional window cleaning service.',
    icon: '✨',
    features: [
      'Interior and exterior cleaning',
      'Professional equipment',
      'Gutter cleaning available',
      'Streak-free results',
    ],
    price: 'From $200/service',
  },
  {
    id: '6',
    title: 'Pressure Washing',
    description: 'High-pressure cleaning for driveways, patios, decks, and exterior surfaces.',
    icon: '💨',
    features: [
      'Driveway and patio cleaning',
      'Deck and fence cleaning',
      'Building exterior washing',
      'Eco-friendly solutions',
    ],
    price: 'From $300/service',
  },
];
