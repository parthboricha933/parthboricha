'use client';

import { motion } from 'framer-motion';
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

export default function AboutSection() {
  return (
    <section id="myself" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            About <span style={{ color: '#FFD369' }}>Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text content */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-base sm:text-lg leading-relaxed mb-6"
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
              {techStack.map((tech) => (
                <div
                  key={tech}
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
          </motion.div>

          {/* Profile photo */}
          <motion.div
            className="md:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative border */}
              <div
                className="absolute -top-3 -left-3 w-full h-full rounded-lg"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
