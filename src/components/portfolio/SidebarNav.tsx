'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', label: 'HOME' },
  { id: 'myself', label: 'MYSELF' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'my-work', label: 'MY WORK' },
  { id: 'reviews', label: 'REVIEWS' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'github', label: 'GITHUB' },
  { id: 'contact', label: 'CONTACT' },
];

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-5">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className="group flex items-center gap-2 cursor-pointer bg-transparent border-none"
            aria-label={`Navigate to ${section.label}`}
          >
            {/* Active indicator dot */}
            <span
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: isActive ? '#FFD369' : 'transparent',
                border: isActive ? 'none' : '1px solid rgba(248,246,246,0.3)',
                transform: isActive ? 'scale(1.3)' : 'scale(1)',
              }}
            />
            {/* 3D Letter navigation */}
            <span
              className="text-xs tracking-[0.2em] font-bold flex"
              style={{
                fontFamily: 'var(--font-montserrat)',
                color: isActive ? '#FFD369' : 'rgba(248,246,246,0.3)',
                perspective: '200px',
              }}
            >
              {section.label.split('').map((letter, idx) => (
                <span
                  key={idx}
                  className="nav-letter inline-block"
                  style={{
                    transform: isActive
                      ? `rotateY(${-8 + idx * 2}deg)`
                      : 'rotateY(0deg)',
                    transformStyle: 'preserve-3d',
                    transitionDelay: `${idx * 15}ms`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
