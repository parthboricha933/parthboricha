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
      fill="#CF4647"
      style={{
        top: '10%',
        right: '-5%',
        transform: `translateY(${offset}px) rotate(${scrollY * 0.05}deg)`,
      }}
    >
      <path d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z" fill="none" stroke="#CF4647" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="12" fill="none" stroke="#CF4647" strokeWidth="1.5" />
      <circle cx="50" cy="22" r="4" fill="#CF4647" />
      <circle cx="74" cy="36" r="4" fill="#CF4647" />
      <circle cx="74" cy="64" r="4" fill="#CF4647" />
      <circle cx="50" cy="78" r="4" fill="#CF4647" />
      <circle cx="26" cy="64" r="4" fill="#CF4647" />
      <circle cx="26" cy="36" r="4" fill="#CF4647" />
      <line x1="50" y1="38" x2="50" y2="26" stroke="#CF4647" strokeWidth="1" />
      <line x1="61" y1="44" x2="72" y2="38" stroke="#CF4647" strokeWidth="1" />
      <line x1="61" y1="56" x2="72" y2="62" stroke="#CF4647" strokeWidth="1" />
      <line x1="50" y1="62" x2="50" y2="74" stroke="#CF4647" strokeWidth="1" />
      <line x1="39" y1="56" x2="28" y2="62" stroke="#CF4647" strokeWidth="1" />
      <line x1="39" y1="44" x2="28" y2="38" stroke="#CF4647" strokeWidth="1" />
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
      className="py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden"
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
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            About <span style={{ color: '#FFD369' }}>Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text content */}
          <div className="md:col-span-3">
            <p
              className="text-base sm:text-lg leading-relaxed mb-6"
              data-aos="zoom-in-left"
              data-aos-delay="0"
              style={{
                color: '#a8b2d1',
                fontFamily: 'var(--font-quicksand)',
              }}
            >
              Hello! I&apos;m <span style={{ color: '#FFD369' }}>Parth Boricha</span>, a passionate
              full stack web developer with over 3 years of experience building modern, scalable web
              applications. I specialize in crafting responsive, user-friendly interfaces with{' '}
              <span style={{ color: '#FFD369' }}>React</span> and{' '}
              <span style={{ color: '#FFD369' }}>Next.js</span>, and building robust, efficient
              backend systems with <span style={{ color: '#FFD369' }}>Node.js</span> and{' '}
              <span style={{ color: '#FFD369' }}>Express.js</span>.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed mb-6"
              data-aos="zoom-in-left"
              data-aos-delay="100"
              style={{
                color: '#a8b2d1',
                fontFamily: 'var(--font-quicksand)',
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
                color: '#a8b2d1',
                fontFamily: 'var(--font-quicksand)',
              }}
            >
              Besides coding, I&apos;m a passionate{' '}
              <span style={{ color: '#FFD369' }}>gamer</span> and{' '}
              <span style={{ color: '#FFD369' }}>music lover</span>. I believe these hobbies fuel
              my creativity and help me think outside the box when building digital experiences.
            </p>

            {/* Tech stack */}
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-montserrat)', color: '#F8F6F6' }}
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
                    color: '#a8b2d1',
                    fontFamily: 'var(--font-source-code-pro)',
                  }}
                >
                  <span style={{ color: '#FFD369' }}>&#9656;</span>
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
                style={{ border: '2px solid #FFD369', zIndex: 0 }}
              />
              <div
                className="relative rounded-lg overflow-hidden w-64 h-80 sm:w-72 sm:h-96"
                style={{ border: '3px solid #F8F6F6', zIndex: 1 }}
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
                  border: '2px solid #FFD369',
                  borderRadius: '4px',
                  opacity: 0.5,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
