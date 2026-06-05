'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const techStack = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'Firebase',
  'AWS',
  'Docker',
  'Git',
  'REST APIs',
  'GraphQL',
  'Framer Motion',
];

// Kubernetes wheel SVG
function KubernetesIcon({ scrollY }: { scrollY: number }) {
  const offset = scrollY * 0.15;
  return (
    <svg
      className="k8s-icon"
      width="300"
      height="300"
      viewBox="0 0 100 100"
      style={{
        top: '10%',
        right: '-5%',
        transform: `translateY(${offset}px) rotate(${scrollY * 0.05}deg)`,
        color: 'var(--themeColor4)',
      }}
    >
      <path d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z" fill="none" stroke="var(--themeColor4)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="12" fill="none" stroke="var(--themeColor4)" strokeWidth="1.5" />
      <circle cx="50" cy="22" r="4" fill="var(--themeColor4)" />
      <circle cx="74" cy="36" r="4" fill="var(--themeColor4)" />
      <circle cx="74" cy="64" r="4" fill="var(--themeColor4)" />
      <circle cx="50" cy="78" r="4" fill="var(--themeColor4)" />
      <circle cx="26" cy="64" r="4" fill="var(--themeColor4)" />
      <circle cx="26" cy="36" r="4" fill="var(--themeColor4)" />
      <line x1="50" y1="38" x2="50" y2="26" stroke="var(--themeColor4)" strokeWidth="1" />
      <line x1="61" y1="44" x2="72" y2="38" stroke="var(--themeColor4)" strokeWidth="1" />
      <line x1="61" y1="56" x2="72" y2="62" stroke="var(--themeColor4)" strokeWidth="1" />
      <line x1="50" y1="62" x2="50" y2="74" stroke="var(--themeColor4)" strokeWidth="1" />
      <line x1="39" y1="56" x2="28" y2="62" stroke="var(--themeColor4)" strokeWidth="1" />
      <line x1="39" y1="44" x2="28" y2="38" stroke="var(--themeColor4)" strokeWidth="1" />
    </svg>
  );
}

export default function AboutSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="myself"
      className="view-element py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden"
      data-aos="fade-down-left"
    >
      {/* Kubernetes parallax icon */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <KubernetesIcon scrollY={scrollY} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <div className="mb-16" data-aos="zoom-in-right">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--themeColor3)', transition: 'color 0.3s ease' }}
          >
            About <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>Me</span>
          </h2>
          <div className="section-title-line" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text content */}
          <div className="md:col-span-3">
            <p
              className="text-base sm:text-lg leading-relaxed mb-6"
              data-aos="zoom-in-left"
              data-aos-delay="0"
              style={{
                color: 'var(--themeColor3)',
                fontFamily: 'var(--font-quicksand)',
                transition: 'color 0.3s ease',
              }}
            >
              Hello! I&apos;m <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>Parth Boricha</span>, a passionate
              full stack web developer with over 3 years of experience building modern, scalable web
              applications. I specialize in crafting responsive, user-friendly interfaces with{' '}
              <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>React</span> and{' '}
              <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>Next.js</span>, and building robust, efficient
              backend systems with <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>Node.js</span> and{' '}
              <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>Express.js</span>.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed mb-6"
              data-aos="zoom-in-left"
              data-aos-delay="100"
              style={{
                color: 'var(--themeColor3)',
                fontFamily: 'var(--font-quicksand)',
                transition: 'color 0.3s ease',
              }}
            >
              I love turning complex problems into simple, elegant solutions. Whether it&apos;s
              building a SaaS platform from scratch, migrating legacy WordPress sites to modern
              React/Next.js applications, or developing RESTful and GraphQL APIs — I approach every
              project with dedication and a keen eye for detail.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed mb-8"
              data-aos="zoom-in-left"
              data-aos-delay="200"
              style={{
                color: 'var(--themeColor3)',
                fontFamily: 'var(--font-quicksand)',
                transition: 'color 0.3s ease',
              }}
            >
              Besides coding, I&apos;m a passionate{' '}
              <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>gamer</span> and{' '}
              <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>music lover</span>. I believe these hobbies fuel
              my creativity and help me think outside the box when building digital experiences.
            </p>

            {/* Tech stack */}
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--themeColor3)', transition: 'color 0.3s ease' }}
            >
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {techStack.map((tech, i) => (
                <div
                  key={tech}
                  data-aos="zoom-in-left"
                  data-aos-delay={i * 30}
                  className="flex items-center gap-2 text-sm"
                  style={{
                    color: 'var(--themeColor4)',
                    fontFamily: 'var(--font-source-code-pro)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>&#9656;</span>
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Profile photo */}
          <div
            className="md:col-span-2 flex justify-center"
            data-aos="zoom-in-right"
            data-aos-delay="100"
          >
            <div className="relative profile-img-wrapper">
              {/* Decorative border offset */}
              <div
                className="profile-border-offset absolute -top-3 -left-3 w-full h-full rounded-lg"
                style={{ border: '2px solid var(--themeColor4)', zIndex: 0, transition: 'border-color 0.3s ease' }}
              />
              <div
                className="relative rounded-lg overflow-hidden w-64 h-80 sm:w-72 sm:h-96"
                style={{ border: '3px solid var(--themeColor3)', zIndex: 1, transition: 'border-color 0.3s ease' }}
              >
                <Image
                  src="/assets/profile.jpg"
                  alt="Parth Boricha"
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative element */}
              <div
                className="absolute -bottom-4 -right-4 w-16 h-16 animate-subtle-float"
                style={{
                  border: '2px solid var(--themeColor4)',
                  borderRadius: '4px',
                  opacity: 0.5,
                  transition: 'border-color 0.3s ease',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
