'use client';

import { Award } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
}

const certifications: Certification[] = [
  {
    title: 'Certified Full Stack Web Developer',
    issuer: 'Udemy',
    date: 'Issued Mar 2024',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Issued Jan 2024',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Coursera',
    date: 'Issued Sep 2023',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-0">
      {/* Dark top background */}
      <div style={{ height: '400px', backgroundColor: '#1B2028' }} />

      {/* Certifications content overlapping */}
      <div className="px-6 sm:px-12 lg:px-24 -mt-80 relative z-10 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="mb-16" data-aos="zoom-in-right">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Licenses & <span style={{ color: '#FFD369' }}>Certifications</span>
            </h2>
          </div>

          {/* Certifications */}
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className="cert-card-gold p-6 rounded-lg transition-all duration-300 hover:-translate-y-1"
                data-aos="zoom-out-right"
                data-aos-delay={i * 100}
              >
                <Award
                  size={28}
                  className="cert-icon mb-4"
                  style={{ color: '#222831' }}
                />
                <h3
                  className="cert-title text-base font-bold mb-2"
                  style={{
                    fontFamily: 'var(--font-montserrat)',
                  }}
                >
                  {cert.title}
                </h3>
                <p
                  className="text-sm mb-1"
                  style={{
                    fontFamily: 'var(--font-quicksand)',
                  }}
                >
                  {cert.issuer}
                </p>
                <p
                  className="text-xs opacity-70"
                  style={{
                    fontFamily: 'var(--font-source-code-pro)',
                  }}
                >
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
