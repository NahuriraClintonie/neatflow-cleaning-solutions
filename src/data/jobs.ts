import { Job } from '@/types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Lead Facility Technician',
    type: 'Full-time',
    location: 'Nakasero Business District', 
    description: 'We are looking for an experienced cleaning technician to lead our team on corporate and commercial projects. You will be responsible for quality control, team supervision, and ensuring client satisfaction.', //
    requirements: [
      '3+ years of professional commercial cleaning experience', //
      'Leadership and team management skills', //
      'Knowledge of industrial cleaning chemicals and equipment', //
      'Valid Ugandan driver\'s license', //
      'Ability to pass a strict background check (Interpol Certificate)', //
    ],
    salary: 'UGX 1,200,000 - 1,800,000/month', 
  },
  {
    id: '2',
    title: 'Executive Residential Specialist',
    type: 'Full-time',
    location: 'Kololo / Bugolobi', 
    description: 'Join our growing team as an Executive Residential Specialist. You will be responsible for cleaning premium homes according to our high standards and building relationships with our VIP clients.', //
    requirements: [
      '2+ years of hospitality or premium cleaning experience', //
      'Exceptional attention to detail', //
      'Strong work ethic and reliability', //
      'Excellent English communication skills', 
      'Ability to maintain strict client confidentiality', 
    ],
    salary: 'UGX 800,000 - 1,200,000/month', 
  },
  {
    id: '3',
    title: 'Commercial Building Cleaner',
    type: 'Full-time',
    location: 'Kampala Industrial Area', 
    description: 'Maintain cleanliness and sanitation standards in large commercial buildings. This role involves evening and early morning shifts to ensure offices are spotless for business hours.', //
    requirements: [
      'Commercial cleaning experience required', //
      'Availability for evening/early morning shifts', //
      'Knowledge of commercial floor care and maintenance', //
      'Reliability and attention to detail', //
      'Team player attitude', //
    ],
    salary: 'UGX 600,000 - 900,000/month', 
  },
  {
    id: '4',
    title: 'Industrial Equipment Operator',
    type: 'Full-time',
    location: 'Central Hub', 
    description: 'Specialize in carpet, upholstery, and pressure cleaning using our state-of-the-art industrial equipment. Advanced training provided for all interested candidates.', //
    requirements: [
      'Physical capability to operate heavy cleaning equipment', //
      'Strong safety and compliance awareness', 
      'Ability to work independently on site', //
      'Valid driver\'s license for company vehicles', //
      'Willingness to learn new techniques', //
    ],
    salary: 'UGX 900,000 - 1,400,000/month', 
  },
  {
    id: '5',
    title: 'Operations & Quality Supervisor',
    type: 'Full-time',
    location: 'Kampala Headquarters', 
    description: 'Oversee daily commercial cleaning operations, manage staff schedules across multiple sites, and ensure ISO quality standards are met. This is a key leadership role in our organization.', //
    requirements: [
      '5+ years of facility management or cleaning industry experience', //
      '2+ years of supervisory experience managing large teams', //
      'Strong organizational and communication skills', //
      'Customer service excellence', //
      'Problem-solving abilities', //
    ],
    salary: 'UGX 2,000,000 - 3,000,000/month', 
  },
];