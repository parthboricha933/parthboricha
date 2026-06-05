'use client';

import { motion } from 'framer-motion';
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
    <section id="certifications" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Licenses & <span style={{ color: '#FFD369' }}>Certifications</span>
          </h2>
        </motion.div>

        {/* Certifications */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="p-6 rounded-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#2A363B',
                borderLeft: '4px solid #FFD369',
                borderRight: '1px solid rgba(248,246,246,0.05)',
                borderTop: '1px solid rgba(248,246,246,0.05)',
                borderBottom: '1px solid rgba(248,246,246,0.05)',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Award
                size={28}
                className="mb-4"
                style={{ color: '#FFD369' }}
              />
              <h3
                className="text-base font-bold mb-2"
                style={{
                  color: '#F8F6F6',
                  fontFamily: 'var(--font-montserrat)',
                }}
              >
                {cert.title}
              </h3>
              <p
                className="text-sm mb-1"
                style={{
                  color: '#FFD369',
                  fontFamily: 'var(--font-quicksand)',
                }}
              >
                {cert.issuer}
              </p>
              <p
                className="text-xs"
                style={{
                  color: '#a8b2d1',
                  fontFamily: 'var(--font-source-code-pro)',
                }}
              >
                {cert.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
