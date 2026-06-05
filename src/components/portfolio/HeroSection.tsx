'use client';

import { motion } from 'framer-motion';
import DencryptText from './DencryptText';

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
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{
            backgroundColor: 'rgba(100, 255, 218, 0.1)',
            border: '1px solid rgba(100, 255, 218, 0.3)',
          }}
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
        </div>

        {/* Greeting */}
        <div data-aos="fade-up" data-aos-delay="100">
          <p
            className="text-lg sm:text-xl mb-2"
            style={{
              color: '#a8b2d1',
              fontFamily: 'var(--font-quicksand)',
            }}
          >
            G&apos;day, I&apos;m
          </p>
        </div>

        {/* Name */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          <span style={{ color: '#F8F6F6' }}>Parth </span>
          <span style={{ color: '#FFD369' }}>Boricha,</span>
        </h1>

        {/* Subtitle with dencrypt effect */}
        <div data-aos="fade-up" data-aos-delay="300" className="mb-6">
          <DencryptText />
        </div>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-base sm:text-lg max-w-2xl mb-8 leading-relaxed"
          style={{
            color: '#a8b2d1',
            fontFamily: 'var(--font-quicksand)',
          }}
        >
          I specialize in building exceptional digital experiences. From{' '}
          {services.map((s, i) => (
            <span key={s}>
              <span style={{ color: '#FFD369' }}>{s}</span>
              {i < services.length - 1 && ' — '}
            </span>
          ))}
          , I bring ideas to life with clean code and modern technologies.
        </p>

        {/* CTA Button with bouncy sweep */}
        <a
          href="#contact"
          data-aos="fade-up"
          data-aos-delay="500"
          className="tk-button inline-flex items-center gap-2 px-8 py-3 rounded font-semibold text-base animate-glow"
          style={{
            fontFamily: 'var(--font-montserrat)',
            border: '2px solid #FFD369',
            color: '#FFD369',
            backgroundColor: 'transparent',
          }}
        >
          Contact me!
        </a>
      </div>
    </section>
  );
}
