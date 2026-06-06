'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
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

function BrowserMockup({ url, category }: { url: string; category: string }) {
  const categoryIcons: Record<string, string> = {
    Restaurant: '🍽️',
    School: '🎓',
    Hotel: '🏨',
    Hospital: '🏥',
  };

  return (
    <div className="browser-frame">
      {/* Taskbar with dots */}
      <div className="browser-dots">
        <span className="browser-dot" style={{ backgroundColor: '#ef4444' }} />
        <span className="browser-dot" style={{ backgroundColor: '#f59e0b' }} />
        <span className="browser-dot" style={{ backgroundColor: '#22c55e' }} />
      </div>
      {/* URL bar */}
      <div className="browser-address">
        <div className="browser-address-bar">{url.replace('https://', '')}</div>
      </div>
      {/* Content area */}
      <div
        className="browser-content"
        style={{
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '12px',
          opacity: 0.6,
        }}
      >
        <span style={{ fontSize: '48px' }}>{categoryIcons[category] || '🌐'}</span>
        <span
          style={{
            fontFamily: 'var(--font-montserrat)',
            color: 'var(--themeColor3)',
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  const checkVisibility = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 100 && rect.bottom > 100;
    setIsVisible(inView);
  }, []);

  useEffect(() => {
    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [checkVisibility]);

  return (
    <div
      ref={ref}
      className="project-card-wrapper"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.98)',
        transition: isVisible
          ? 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'
          : 'all 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335)',
        willChange: 'transform, opacity',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Desktop: alternating layout */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          alignItems: 'center',
          direction: isEven ? 'ltr' : 'rtl',
        }}
      >
        {/* Image side */}
        <div style={{ direction: 'ltr' }}>
          <div
            style={{
              transform: isHovered ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: isHovered
                ? '0 20px 50px -10px rgba(0,0,0,0.3)'
                : '0 10px 30px -15px rgba(0,0,0,0.1)',
              transitionProperty: 'transform, box-shadow',
              transitionDuration: '0.4s',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <BrowserMockup url={project.url} category={project.category} />
          </div>
        </div>

        {/* Text side */}
        <div
          style={{
            direction: 'ltr',
            padding: '24px',
            backgroundColor: 'var(--themeColor2)',
            borderRadius: '8px',
            boxShadow: isHovered
              ? '0 20px 50px -15px rgba(0,0,0,0.2)'
              : '0 10px 30px -15px var(--themeColor2)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <span
            data-aos="zoom-in-left"
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
            data-aos="zoom-in-left"
            className="text-lg font-bold mb-3"
            style={{
              color: 'var(--themeColor4)',
              fontFamily: 'var(--font-montserrat)',
              textShadow: isHovered ? '0 0 15px rgba(207, 70, 71, 0.2)' : 'none',
              transition: 'text-shadow 0.3s ease, color 0.3s ease',
            }}
          >
            {project.title}
          </h3>

          <p
            data-aos="zoom-in-left"
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
            data-aos="zoom-in-left"
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
            data-aos="zoom-in-left"
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
        <BrowserMockup url={project.url} category={project.category} />
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
            Things I&apos;ve <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>Worked on</span>
          </h2>
          <div className="section-title-line" />
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
