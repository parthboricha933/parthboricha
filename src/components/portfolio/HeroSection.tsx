'use client';

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
      className="view-element relative min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background decorative circle */}
      <div
        className="absolute animate-subtle-float"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: `radial-gradient(circle, var(--themeColor2) 0%, transparent 70%)`,
          opacity: 0.08,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition: 'background 0.3s ease',
        }}
      />

      {/* Smaller floating blob */}
      <div
        className="absolute animate-float hidden md:block"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, var(--themeColor4) 0%, transparent 70%)`,
          opacity: 0.06,
          top: '20%',
          right: '15%',
          animationDelay: '1s',
          transition: 'background 0.3s ease',
        }}
      />

      <div className="relative z-10 max-w-4xl w-full">
        {/* Available badge */}
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{
            backgroundColor: 'var(--themeColor2)',
            opacity: 0.9,
            transition: 'background-color 0.3s ease',
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse-custom"
            style={{ backgroundColor: 'var(--themeColor4)', transition: 'background-color 0.3s ease' }}
          />
          <span
            className="text-sm font-medium"
            style={{ color: 'var(--themeColor3)', fontFamily: 'var(--font-quicksand)', transition: 'color 0.3s ease' }}
          >
            Available for work
          </span>
        </div>

        {/* Greeting */}
        <div data-aos="fade-up" data-aos-delay="100">
          <p
            className="text-lg sm:text-xl mb-2"
            style={{
              color: 'var(--themeColor3)',
              fontFamily: 'var(--font-quicksand)',
              transition: 'color 0.3s ease',
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
          <span style={{ color: 'var(--themeColor3)', transition: 'color 0.3s ease' }}>Parth </span>
          <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>Boricha,</span>
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
            color: 'var(--themeColor3)',
            fontFamily: 'var(--font-quicksand)',
            transition: 'color 0.3s ease',
          }}
        >
          I specialize in building exceptional digital experiences. From{' '}
          {services.map((s, i) => (
            <span key={s}>
              <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>{s}</span>
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
            border: '2px solid var(--themeColor4)',
            color: 'var(--themeColor4)',
            backgroundColor: 'transparent',
            transition: 'color 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
          }}
        >
          Contact me!
        </a>
      </div>
    </section>
  );
}
