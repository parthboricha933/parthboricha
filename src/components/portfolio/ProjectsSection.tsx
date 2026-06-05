'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'TaskFlow Pro',
    description:
      'Project management SaaS platform with real-time collaboration, Kanban boards, and team analytics. Built with React, Node.js, and WebSocket.',
    tech: 'React Js | Next.js | TypeScript | PostgreSQL | Socket.io | Tailwind CSS',
    featured: true,
  },
  {
    title: 'ShopEase',
    description:
      'Full-featured e-commerce platform with Stripe payments, inventory management, and admin dashboard. Supports 1000+ products.',
    tech: 'Next.js | TypeScript | Stripe | Prisma | PostgreSQL | Tailwind CSS',
    featured: true,
  },
  {
    title: 'HealthHub',
    description:
      'Healthcare booking platform connecting patients with doctors. Features video consultations, prescription management, and real-time notifications.',
    tech: 'React Js | Node.js | WebRTC | MongoDB | Firebase | Tailwind CSS',
  },
  {
    title: 'DevBlog CMS',
    description:
      'Modern headless CMS for developer blogs with markdown support, SEO optimization, and analytics dashboard.',
    tech: 'Next.js | MDX | TypeScript | PostgreSQL | AWS S3 | Tailwind CSS',
  },
  {
    title: 'FinTrack AI',
    description:
      'AI-powered personal finance tracker with expense categorization, budget forecasting, and investment portfolio insights.',
    tech: 'React Js | Python | TensorFlow | Node.js | PostgreSQL | Chart.js',
  },
  {
    title: 'EduLearn Platform',
    description:
      'Online learning platform with video courses, quizzes, progress tracking, and certificate generation.',
    tech: 'Next.js | TypeScript | Stripe | MongoDB | AWS | Tailwind CSS',
  },
];

export default function ProjectsSection() {
  return (
    <section id="my-work" className="py-24 px-6 sm:px-12 lg:px-24">
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
            Some Things I&apos;ve <span style={{ color: '#FFD369' }}>Built</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="browser-frame transition-transform duration-300 hover:-translate-y-1"
              style={{ backgroundColor: '#2A363B' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Browser top bar */}
              <div className="browser-dots">
                <span
                  className="browser-dot"
                  style={{ backgroundColor: '#CF4647' }}
                />
                <span
                  className="browser-dot"
                  style={{ backgroundColor: '#FFD369' }}
                />
                <span
                  className="browser-dot"
                  style={{ backgroundColor: '#64FFDA' }}
                />
              </div>
              <div className="browser-address">
                <div className="browser-address-bar">
                  http://localhost:3000
                </div>
              </div>

              {/* Content */}
              <div className="browser-content">
                {project.featured && (
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                    style={{
                      backgroundColor: 'rgba(255,211,105,0.15)',
                      color: '#FFD369',
                      fontFamily: 'var(--font-montserrat)',
                    }}
                  >
                    Featured Project
                  </span>
                )}

                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    color: '#F8F6F6',
                    fontFamily: 'var(--font-montserrat)',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    color: '#a8b2d1',
                    fontFamily: 'var(--font-quicksand)',
                  }}
                >
                  {project.description}
                </p>

                <p
                  className="text-xs mb-4"
                  style={{
                    color: '#a8b2d1',
                    fontFamily: 'var(--font-source-code-pro)',
                  }}
                >
                  {project.tech}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300"
                  style={{
                    color: '#FFD369',
                    fontFamily: 'var(--font-montserrat)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#CF4647';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#FFD369';
                  }}
                >
                  View Live Demo <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
