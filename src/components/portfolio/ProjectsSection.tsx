'use client';

import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string;
  category: string;
  url: string;
}

const projects: Project[] = [
  {
    title: 'Bawarchi Restaurant',
    description:
      'A modern restaurant website for Bawarchi Restaurant in Diu, featuring an interactive menu, online table reservations, food gallery, and contact information. Designed to provide a seamless dining experience from browsing to booking.',
    tech: 'React Js | Next.js | Tailwind CSS | MongoDB',
    category: 'Restaurant',
    url: 'https://bawarchirestaurantdiu.com',
  },
  {
    title: 'Saint Mary School',
    description:
      'A comprehensive school management website for Saint Mary School, offering student enrollment information, academic programs, faculty details, event calendar, and parent portal. Built to streamline school communications and administration.',
    tech: 'Next.js | TypeScript | Tailwind CSS | Vercel',
    category: 'School',
    url: 'https://saint-mary.vercel.app',
  },
  {
    title: 'Hotel Holiston',
    description:
      'A premium hotel booking website for Hotel Holiston, featuring room listings with photo galleries, online reservation system, amenity showcases, guest reviews, and location maps. Crafted to deliver a luxury browsing experience.',
    tech: 'React Js | Next.js | Tailwind CSS | MongoDB',
    category: 'Hotel',
    url: 'https://hotel-holiston.vercel.app',
  },
  {
    title: 'Sparsh Hospital',
    description:
      'A professional healthcare website for Sparsh Hospital in Rajula, providing doctor profiles, department information, appointment booking, patient resources, and emergency contact details. Designed for accessibility and trust.',
    tech: 'React Js | Next.js | Tailwind CSS | MongoDB',
    category: 'Hospital',
    url: 'https://sparshhospitalrajula.com',
  },
];

function ProjectImage({ category }: { category: string }) {
  const categoryIcons: Record<string, string> = {
    Restaurant: '🍽️',
    School: '🎓',
    Hotel: '🏨',
    Hospital: '🏥',
  };

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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          opacity: 0.6,
        }}
      >
        <span style={{ fontSize: '48px' }}>{categoryIcons[category] || '🌐'}</span>
        <span
          style={{
            fontFamily: 'var(--font-montserrat)',
            color: 'var(--themeColor1)',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {category}
        </span>
      </div>
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
            const isEven = i % 2 === 0;
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
                    <ProjectImage category={project.category} />
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
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '2px 10px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        backgroundColor: 'var(--themeColor4)',
                        color: 'var(--themeColor1)',
                        marginBottom: '12px',
                        fontFamily: 'var(--font-montserrat)',
                      }}
                    >
                      {project.category}
                    </span>

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
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-demo-btn text-sm font-semibold"
                      style={{
                        fontFamily: 'var(--font-montserrat)',
                      }}
                    >
                      Visit Website <ExternalLink size={14} />
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
                  <ProjectImage category={project.category} />
                  <div
                    style={{
                      padding: '24px',
                      backgroundColor: 'var(--themeColor2)',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '2px 10px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        backgroundColor: 'var(--themeColor4)',
                        color: 'var(--themeColor1)',
                        marginBottom: '12px',
                        fontFamily: 'var(--font-montserrat)',
                      }}
                    >
                      {project.category}
                    </span>

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
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-demo-btn text-sm font-semibold"
                      style={{
                        fontFamily: 'var(--font-montserrat)',
                      }}
                    >
                      Visit Website <ExternalLink size={14} />
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
