'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/sections/CTA';
import { jobs } from '@/data/jobs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { JobApplicationForm } from '@/components/forms/JobApplicationForm';
import { X } from 'lucide-react';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/90 to-primary py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Be part of a growing cleaning company that values quality, integrity, and team excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Work at NeatFlow?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Competitive Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  We offer competitive salaries and benefits packages that recognize your value and hard work.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Professional Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Opportunities for advancement and ongoing training to develop your skills and advance your career.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Positive Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Work in a supportive team environment where your contributions are valued and respected.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Open Positions</h2>
          <div className="max-w-3xl mx-auto">
            {jobs.map((job, index) => (
              <Card key={job.id} className="slide-up mb-4" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm mr-3">
                          {job.type}
                        </span>
                        <span className="inline-block text-foreground/70">📍 {job.location}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground/80 text-sm">
                          <span className="text-accent mt-1">▪</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {job.salary && (
                    <p className="text-sm font-semibold text-primary mb-4 pb-4 border-b border-border">
                      💰 {job.salary}
                    </p>
                  )}

                  <Button
                    onClick={() => setSelectedJob(job.id)}
                    className="w-full"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background flex justify-between items-center p-6 border-b border-border">
              <h3 className="text-2xl font-bold">
                {jobs.find((j) => j.id === selectedJob)?.title}
              </h3>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <JobApplicationForm jobTitle={jobs.find((j) => j.id === selectedJob)?.title || ''} />
            </div>
          </div>
        </div>
      )}

      <CTA />
      <Footer />
    </main>
  );
}
