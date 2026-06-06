'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Mail, MapPin, Github } from 'lucide-react';

export default function ContactSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const checkVisibility = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 100 && rect.bottom > 100;
    setIsVisible(inView);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
      checkVisibility();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    checkVisibility();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [checkVisibility]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="view-element py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden"
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
        fill="var(--themeColor4)"
      >
        <path d="M100 20L130 80H70L100 20Z" />
        <path d="M100 80L130 140H70L100 80Z" />
        <path d="M100 140L130 180H70L100 140Z" />
      </svg>

      <div className="max-w-6xl mx-auto">
        <div
          style={{
            backgroundColor: 'var(--themeColor2)',
            borderRadius: '8px',
            overflow: 'hidden',
            transition: 'background-color 1s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
          }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - text */}
            <div
              className="p-8 sm:p-12"
              data-aos="fade-right"
            >
              <p
                className="text-sm font-semibold mb-3"
                style={{
                  color: 'var(--themeColor4)',
                  fontFamily: 'var(--font-montserrat)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                }}
              >
                Get in touch
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--themeColor3)', transition: 'color 0.3s ease' }}
              >
                Let&apos;s Work <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>Together</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{
                  color: 'var(--themeColor3)',
                  fontFamily: 'var(--font-quicksand)',
                  opacity: 0.85,
                  transition: 'color 0.3s ease',
                }}
              >
                I&apos;m always open to new opportunities and collaborations. Whether you have a project
                in mind, need help with your web application, or just want to say hello — feel free to
                reach out!
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <a
                  href="mailto:parthboricha.dev@gmail.com"
                  className="flex items-center gap-2 text-sm hover:gap-3"
                  style={{
                    color: 'var(--themeColor3)',
                    fontFamily: 'var(--font-source-code-pro)',
                    transition: 'color 0.3s ease, gap 0.3s ease',
                  }}
                >
                  <Mail size={16} style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }} />
                  parthboricha.dev@gmail.com
                </a>
                <span
                  className="flex items-center gap-2 text-sm"
                  style={{ color: 'var(--themeColor3)', fontFamily: 'var(--font-source-code-pro)', transition: 'color 0.3s ease' }}
                >
                  <MapPin size={16} style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }} />
                  India
                </span>
              </div>

              <a
                href="mailto:parthboricha.dev@gmail.com"
                className="tk-button inline-flex items-center gap-2 px-8 py-3 rounded font-semibold text-base animate-shadow-pulse"
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  border: '2px solid var(--themeColor4)',
                  color: 'var(--themeColor4)',
                  backgroundColor: 'transparent',
                  transition: 'color 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
                }}
              >
                Get in touch
              </a>
            </div>

            {/* Right side - slide-in GitHub profile */}
            <div
              className="p-8 sm:p-12 flex flex-col items-center justify-center text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
                transition: 'transform 0.4s ease, opacity 0.4s ease',
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
            >
              <div
                className="mb-6"
                style={{
                  padding: '20px',
                  borderRadius: '50%',
                  border: '2px solid var(--themeColor4)',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <Github size={40} style={{ color: 'var(--themeColor3)', transition: 'color 0.3s ease' }} />
              </div>
              <a
                href="https://github.com/parthboricha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold flex items-center gap-2 hover:gap-3"
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  color: 'var(--themeColor3)',
                  transition: 'color 0.3s ease, gap 0.3s ease',
                }}
              >
                <Github size={16} style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }} />
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
