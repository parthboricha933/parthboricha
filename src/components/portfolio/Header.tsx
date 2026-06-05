'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Heart, Menu, X } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'MYSELF', href: '#myself' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'MY WORK', href: '#my-work' },
  { label: 'REVIEWS', href: '#reviews' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'GITHUB', href: '#github' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          backgroundColor: scrolled ? 'rgba(34, 40, 49, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(248,246,246,0.05)' : 'none',
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Profile image */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#FFD369]">
                <Image
                  src="/assets/profile.jpg"
                  alt="Parth Boricha"
                  width={36}
                  height={36}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Center-left: Views & Likes */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-sm" style={{ color: '#a8b2d1' }}>
                <Eye size={16} style={{ color: '#FFD369' }} />
                <span>1.1K</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm" style={{ color: '#a8b2d1' }}>
                <Heart
                  size={16}
                  style={{ color: '#CF4647' }}
                  className="animate-heartbeat"
                />
                <span>301</span>
              </div>
            </div>

            {/* Right: CV Button + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center px-4 py-1.5 text-sm font-medium rounded border transition-all duration-300 hover:bg-[#FFD369] hover:text-[#222831] hover:border-[#FFD369]"
                style={{
                  borderColor: '#FFD369',
                  color: '#FFD369',
                  fontFamily: 'var(--font-montserrat)',
                }}
              >
                Curriculum Vitae | CV
              </a>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                style={{ color: '#FFD369' }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            style={{ backgroundColor: 'rgba(34, 40, 49, 0.98)' }}
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
                    color: '#FFD369',
                    fontFamily: 'var(--font-montserrat)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
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
