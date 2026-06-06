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

function ProjectImage() {
  return (
    <div
      className="rounded-lg overflow-hidden w-full"
      style={{
        background: 'linear-gradient(135deg, var(--themeColor2), var(--themeColor4))',
        minHeight: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.3s ease',
      }}
    >
      <div
        style={{
          width: '60%',
          height: '60%',
          borderRadius: '8px',
          border: '2px solid var(--themeColor1)',
          opacity: 0.3,
          transition: 'border-color 0.3s ease',
        }}
      />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="my-work" className="view-element py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16" data-aos="zoom-in-right">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--themeColor3)', transition: 'color 0.3s ease' }}
          >
            Some Things I&apos;ve <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>Built</span>
          </h2>
          <div className="section-title-line" />
        </div>

        {/* Projects - alternating left/right layout */}
        <div className="flex flex-col gap-20">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0; // even = image left, text right
            return (
              <div
                key={project.title}
                className="project-card rounded-lg"
                data-aos={isEven ? 'fade-down-right' : 'fade-down-left'}
                data-aos-delay={i * 50}
              >
                {/* Desktop: alternating layout using CSS grid */}
                <div
                  className="hidden md:grid"
                  style={{
                    gridTemplateColumns: '1fr 1fr',
                    gap: '24px',
                    alignItems: 'center',
                    direction: isEven ? 'ltr' : 'rtl',
                    border: '1px solid var(--themeColor2)',
                    borderRadius: '8px',
                    transition: 'border-color 0.3s ease',
                  }}
                >
                  {/* Image side */}
                  <div style={{ direction: 'ltr' }}>
                    <ProjectImage />
                  </div>

                  {/* Text side */}
                  <div
                    style={{
                      direction: 'ltr',
                      padding: '24px',
                      backgroundColor: 'var(--themeColor2)',
                      borderRadius: '8px',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    {project.featured && (
                      <span className="featured-badge">
                        Featured Project
                      </span>
                    )}

                    <h3
                      className="text-lg font-bold mb-3"
                      style={{
                        color: 'var(--themeColor3)',
                        fontFamily: 'var(--font-montserrat)',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{
                        color: 'var(--themeColor3)',
                        fontFamily: 'var(--font-quicksand)',
                        opacity: 0.85,
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {project.description}
                    </p>

                    <p
                      className="text-xs mb-4"
                      style={{
                        color: 'var(--themeColor3)',
                        fontFamily: 'var(--font-source-code-pro)',
                        opacity: 0.6,
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {project.tech}
                    </p>

                    <a
                      href="#"
                      className="view-demo-btn text-sm font-semibold"
                      style={{
                        fontFamily: 'var(--font-montserrat)',
                      }}
                    >
                      View Live Demo <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Mobile: stacked layout */}
                <div
                  className="md:hidden"
                  style={{
                    border: '1px solid var(--themeColor2)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s ease',
                  }}
                >
                  <ProjectImage />
                  <div
                    style={{
                      padding: '24px',
                      backgroundColor: 'var(--themeColor2)',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    {project.featured && (
                      <span className="featured-badge">
                        Featured Project
                      </span>
                    )}

                    <h3
                      className="text-lg font-bold mb-3"
                      style={{
                        color: 'var(--themeColor3)',
                        fontFamily: 'var(--font-montserrat)',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{
                        color: 'var(--themeColor3)',
                        fontFamily: 'var(--font-quicksand)',
                        opacity: 0.85,
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {project.description}
                    </p>

                    <p
                      className="text-xs mb-4"
                      style={{
                        color: 'var(--themeColor3)',
                        fontFamily: 'var(--font-source-code-pro)',
                        opacity: 0.6,
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {project.tech}
                    </p>

                    <a
                      href="#"
                      className="view-demo-btn text-sm font-semibold"
                      style={{
                        fontFamily: 'var(--font-montserrat)',
                      }}
                    >
                      View Live Demo <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
