'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload } from 'lucide-react';

interface JobApplicationFormProps {
  jobTitle: string;
}

export function JobApplicationForm({ jobTitle }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', experience: '' });
    setResumeFile(null);
    setIsLoading(false);

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Apply for {jobTitle}</CardTitle>
        <CardDescription>Fill out the form below to submit your application.</CardDescription>
      </CardHeader>
      <CardContent>
        {submitted && (
          <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg">
            <p className="text-accent font-semibold">Thank you for applying! We&apos;ll review your application and contact you soon.</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              required
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
              Relevant Experience
            </label>
            <Textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Tell us about your cleaning experience, certifications, or relevant skills..."
              rows={5}
              required
            />
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-foreground mb-2">
              Upload Resume (PDF, DOC, DOCX)
            </label>
            <div className="relative">
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="resume"
                className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-accent/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-foreground/60" />
                  <span className="text-foreground/70">
                    {resumeFile ? resumeFile.name : 'Click to upload or drag and drop'}
                  </span>
                </div>
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading || !resumeFile}>
            {isLoading ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
