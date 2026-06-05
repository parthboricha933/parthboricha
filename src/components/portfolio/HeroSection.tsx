'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const services = [
    'Website Development',
    'Full Stack Web Applications',
    'WordPress to React Migration',
    'API Development & Integration',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background decorative circle */}
      <div
        className="absolute animate-subtle-float"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,211,105,0.08) 0%, rgba(255,211,105,0.02) 50%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Smaller floating blob */}
      <div
        className="absolute animate-float hidden md:block"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(207,70,71,0.06) 0%, transparent 70%)',
          top: '20%',
          right: '15%',
          animationDelay: '1s',
        }}
      />

      <div className="relative z-10 max-w-4xl w-full">
        {/* Available badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{
            backgroundColor: 'rgba(100, 255, 218, 0.1)',
            border: '1px solid rgba(100, 255, 218, 0.3)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse-custom"
            style={{ backgroundColor: '#64FFDA' }}
          />
          <span
            className="text-sm font-medium"
            style={{ color: '#64FFDA', fontFamily: 'var(--font-quicksand)' }}
          >
            Available for work
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p
            className="text-lg sm:text-xl mb-2"
            style={{
              color: '#a8b2d1',
              fontFamily: 'var(--font-quicksand)',
            }}
          >
            G&apos;day, I&apos;m
          </p>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-montserrat)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span style={{ color: '#F8F6F6' }}>Parth </span>
          <span style={{ color: '#FFD369' }}>Boricha,</span>
        </motion.h1>

        {/* Subtitle with shimmer */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 shimmer-text"
          style={{ fontFamily: 'var(--font-montserrat)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Full Stack Web Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg max-w-2xl mb-8 leading-relaxed"
          style={{
            color: '#a8b2d1',
            fontFamily: 'var(--font-quicksand)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I specialize in building exceptional digital experiences. From{' '}
          {services.map((s, i) => (
            <span key={s}>
              <span style={{ color: '#FFD369' }}>{s}</span>
              {i < services.length - 1 && ' — '}
            </span>
          ))}
          , I bring ideas to life with clean code and modern technologies.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded font-semibold text-base transition-all duration-300 hover:shadow-lg animate-glow"
          style={{
            fontFamily: 'var(--font-montserrat)',
            border: '2px solid #FFD369',
            color: '#FFD369',
            backgroundColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#FFD369';
            (e.currentTarget as HTMLElement).style.color = '#222831';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            (e.currentTarget as HTMLElement).style.color = '#FFD369';
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Contact me!
        </motion.a>
      </div>
    </section>
  );
}
