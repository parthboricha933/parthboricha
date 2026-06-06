'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Heart, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'MYSELF', href: '#myself' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'MY WORK', href: '#my-work' },
  { label: 'REVIEWS', href: '#reviews' },
  { label: 'GITHUB', href: '#github' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'var(--themeColor1)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--themeColor2)' : 'none',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Profile image */}
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full overflow-hidden border-2"
                style={{ borderColor: 'var(--themeColor4)', transition: 'border-color 0.3s ease' }}
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Parth Boricha"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Center-left: Views & Likes */}
            <div className="hidden sm:flex items-center gap-4">
              <div
                className="flex items-center gap-1.5 text-sm"
                style={{ color: 'var(--themeColor3)', transition: 'color 0.3s ease' }}
              >
                <Eye size={16} style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }} />
                <span>1.1K</span>
              </div>
              <button
                className={`like-btn-pill ${liked ? 'liked' : ''}`}
                onClick={() => setLiked(!liked)}
                aria-label="Like"
              >
                <Heart
                  size={16}
                  style={{ color: liked ? 'var(--themeColor4)' : 'var(--themeColor3)', transition: 'color 0.3s ease' }}
                  className={liked ? 'animate-heart-pulse' : ''}
                  fill={liked ? 'var(--themeColor4)' : 'none'}
                />
                <span>301</span>
              </button>
            </div>

            {/* Right: CV Button + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center px-4 py-1.5 text-sm font-medium rounded border tk-button transition-all duration-300"
                style={{
                  borderColor: 'var(--themeColor4)',
                  color: 'var(--themeColor4)',
                  fontFamily: 'var(--font-montserrat)',
                  transition: 'color 0.3s ease, border-color 0.3s ease',
                }}
              >
                Curriculum Vitae | CV
              </a>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 relative z-[101]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                style={{ color: 'var(--themeColor3)', transition: 'color 0.3s ease' }}
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[99] md:hidden"
            style={{ backgroundColor: 'var(--themeColor1)', transition: 'background-color 0.3s ease' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-bold tracking-wider"
                  style={{
                    color: 'var(--themeColor4)',
                    fontFamily: 'var(--font-montserrat)',
                    transition: 'color 0.3s ease',
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: mobileMenuOpen ? 0 : -10,
                  }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.4,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
