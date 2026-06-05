'use client';

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
        <div className="mb-16" data-aos="zoom-in-right">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Some Things I&apos;ve <span style={{ color: '#FFD369' }}>Built</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="browser-frame project-card"
              data-aos={i % 2 === 0 ? 'fade-down-right' : 'fade-down-left'}
              data-aos-delay={i * 50}
              style={{ backgroundColor: '#2A363B' }}
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
              <div className="browser-content relative" style={{ zIndex: 2 }}>
                {project.featured && (
                  <span
                    className="featured-badge"
                    data-aos="fade-up"
                    data-aos-delay={i * 50 + 100}
                  >
                    Featured Project
                  </span>
                )}

                <h3
                  className="text-lg font-bold mb-3"
                  data-aos="fade-up"
                  data-aos-delay={i * 50 + 150}
                  style={{
                    color: '#F8F6F6',
                    fontFamily: 'var(--font-montserrat)',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-4"
                  data-aos="fade-up"
                  data-aos-delay={i * 50 + 200}
                  style={{
                    color: '#a8b2d1',
                    fontFamily: 'var(--font-quicksand)',
                  }}
                >
                  {project.description}
                </p>

                <p
                  className="text-xs mb-4"
                  data-aos="fade-up"
                  data-aos-delay={i * 50 + 250}
                  style={{
                    color: '#a8b2d1',
                    fontFamily: 'var(--font-source-code-pro)',
                  }}
                >
                  {project.tech}
                </p>

                <a
                  href="#"
                  className="view-demo-btn text-sm font-semibold"
                  style={{
                    color: '#FFD369',
                    fontFamily: 'var(--font-montserrat)',
                  }}
                >
                  View Live Demo <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
