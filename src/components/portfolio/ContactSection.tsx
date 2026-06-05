'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
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
      id="contact"
      className="py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden"
      data-aos="fade-left"
    >
      {/* Arrow SVG with parallax */}
      <svg
        className="absolute pointer-events-none"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        style={{
          right: '5%',
          top: '20%',
          transform: `translateX(${scrollY * 0.1 - 100}px) rotate(45deg)`,
          opacity: 0.1,
        }}
        fill="#CF4647"
      >
        <path d="M100 20L130 80H70L100 20Z" />
        <path d="M100 80L130 140H70L100 80Z" />
        <path d="M100 140L130 180H70L100 140Z" />
      </svg>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section title */}
        <div className="mb-6" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Get In <span style={{ color: '#FFD369' }}>Touch</span>
          </h2>
          <p
            className="text-xl sm:text-2xl font-semibold"
            style={{
              color: '#F8F6F6',
              fontFamily: 'var(--font-montserrat)',
            }}
          >
            Let&apos;s Work Together
          </p>
        </div>

        <p
          className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            color: '#a8b2d1',
            fontFamily: 'var(--font-quicksand)',
          }}
        >
          I&apos;m always open to new opportunities and collaborations. Whether you have a project
          in mind, need help with your web application, or just want to say hello — feel free to
          reach out!
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <a
            href="mailto:parthboricha.dev@gmail.com"
            className="flex items-center gap-2 text-sm"
            style={{
              color: '#a8b2d1',
              fontFamily: 'var(--font-source-code-pro)',
            }}
          >
            <Mail size={16} style={{ color: '#FFD369' }} />
            parthboricha.dev@gmail.com
          </a>
          <span className="flex items-center gap-2 text-sm" style={{ color: '#a8b2d1', fontFamily: 'var(--font-source-code-pro)' }}>
            <MapPin size={16} style={{ color: '#FFD369' }} />
            India
          </span>
        </div>

        <a
          href="mailto:parthboricha.dev@gmail.com"
          data-aos="fade-up"
          data-aos-delay="200"
          className="tk-button inline-flex items-center gap-2 px-8 py-3 rounded font-semibold text-base animate-shadow-pulse"
          style={{
            fontFamily: 'var(--font-montserrat)',
            border: '2px solid #FFD369',
            color: '#FFD369',
            backgroundColor: 'transparent',
          }}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
