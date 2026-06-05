'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ExperienceData {
  company: string;
  title: string;
  duration: string;
  bullets: string[];
}

const experiences: ExperienceData[] = [
  {
    company: 'TechVerse Solutions',
    title: 'Senior Full Stack Developer @ TechVerse Solutions',
    duration: 'Remote - Full Time | Jan 2024 - Present',
    bullets: [
      'Led development of 5+ client-facing SaaS platforms using React, Next.js, and Node.js',
      'Architected RESTful APIs and GraphQL endpoints serving 10K+ daily active users',
      'Implemented CI/CD pipelines with Docker and GitHub Actions reducing deployment time by 60%',
      'Collaborated with design and product teams to deliver pixel-perfect responsive interfaces',
      'Optimized application performance achieving 95+ Lighthouse scores across all projects',
      'Mentored 3 junior developers and conducted weekly code review sessions',
    ],
  },
  {
    company: 'CodeCraft Studios',
    title: 'Full Stack Developer @ CodeCraft Studios',
    duration: 'Onsite - Full Time | Jun 2022 - Dec 2023',
    bullets: [
      'Built and maintained 10+ web applications using MERN stack for diverse industries',
      'Developed custom CMS solutions and e-commerce platforms with Stripe integration',
      'Migrated 4 WordPress websites to modern React/Next.js applications',
      'Integrated third-party APIs including payment gateways, analytics, and social platforms',
      'Reduced page load times by 70% through code splitting and lazy loading strategies',
      'Wrote comprehensive unit and integration tests achieving 85%+ code coverage',
    ],
  },
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="experience"
      className="py-24 px-6 sm:px-12 lg:px-24"
      data-aos="fade-down-left"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16" data-aos="zoom-in-right">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Where I&apos;ve <span style={{ color: '#FFD369' }}>Worked</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-0">
          {/* Tabs */}
          <div className="flex md:flex-col gap-0 overflow-x-auto md:overflow-visible mb-6 md:mb-0 md:mr-8 shrink-0">
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(i)}
                className="px-5 py-3 text-sm font-semibold whitespace-nowrap text-left transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  backgroundColor: activeTab === i ? '#FFD369' : 'transparent',
                  color: activeTab === i ? '#222831' : '#a8b2d1',
                  borderLeft: '3px solid',
                  borderColor: activeTab === i ? '#FFD369' : 'rgba(248,246,246,0.1)',
                  borderRadius: 0,
                  transitionTimingFunction: 'cubic-bezier(0.645,0.045,0.355,1)',
                }}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="flex-1"
              data-aos="zoom-in-right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
            >
              <h3
                className="text-xl sm:text-2xl font-bold mb-2"
                style={{
                  color: '#FFD369',
                  fontFamily: 'var(--font-montserrat)',
                }}
              >
                {experiences[activeTab].title}
              </h3>
              <p
                className="text-sm mb-6"
                style={{
                  color: '#a8b2d1',
                  fontFamily: 'var(--font-source-code-pro)',
                }}
              >
                {experiences[activeTab].duration}
              </p>
              <ul className="space-y-3">
                {experiences[activeTab].bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                    style={{
                      color: '#a8b2d1',
                      fontFamily: 'var(--font-quicksand)',
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.05,
                      ease: [0.645, 0.045, 0.355, 1],
                    }}
                  >
                    <span
                      className="shrink-0 mt-1.5"
                      style={{ color: '#FFD369', fontSize: '10px' }}
                    >
                      &#9656;
                    </span>
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
