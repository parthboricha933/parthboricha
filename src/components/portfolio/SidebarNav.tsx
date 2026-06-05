'use client';

import { useState, useEffect } from 'react';

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
                backgroundColor: isActive ? 'var(--themeColor4)' : 'transparent',
                border: isActive ? 'none' : '1px solid var(--themeColor3)',
                opacity: isActive ? 1 : 0.3,
                transform: isActive ? 'scale(1.3)' : 'scale(1)',
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
              }}
            />
            {/* 3D Letter navigation */}
            <span
              className="text-xs tracking-[0.2em] font-bold flex"
              style={{
                fontFamily: 'var(--font-montserrat)',
                color: isActive ? 'var(--themeColor4)' : 'var(--themeColor3)',
                opacity: isActive ? 1 : 0.3,
                perspective: '200px',
                transition: 'color 0.3s ease',
              }}
            >
              {section.label.split('').map((letter, idx) => (
                <span
                  key={idx}
                  className="nav-letter inline-block"
                  style={{
                    transform: isActive
                      ? `rotateY(${-15 + idx * 3}deg) translateZ(5px)`
                      : 'rotateY(0deg) translateZ(0)',
                    transformStyle: 'preserve-3d',
                    transitionDelay: `${idx * 20}ms`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </button>
        );
      })}

      {/* Connecting line */}
      <div
        className="w-px h-12"
        style={{ backgroundColor: 'var(--themeColor3)', opacity: 0.3, transition: 'background-color 0.3s ease' }}
      />
    </nav>
  );
}
