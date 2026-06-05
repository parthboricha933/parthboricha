'use client';

import { motion } from 'framer-motion';
import { GitBranch, Star, GitFork, Users, Github } from 'lucide-react';

const stats = [
  { icon: GitBranch, label: 'Public Repos', value: '25' },
  { icon: Star, label: 'Total Stars', value: '120' },
  { icon: GitFork, label: 'Total Forks', value: '45' },
  { icon: Users, label: 'Followers', value: '80' },
];

const languages = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'SCSS/CSS',
  'Tailwind CSS',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
  'AWS',
  'Docker',
  'GraphQL',
];

export default function GithubSection() {
  return (
    <section id="github" className="py-24 px-6 sm:px-12 lg:px-24">
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
            My <span style={{ color: '#FFD369' }}>GitHub</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 rounded-lg text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#2A363B',
                  border: '1px solid rgba(248,246,246,0.05)',
                }}
              >
                <Icon
                  size={28}
                  className="mx-auto mb-3"
                  style={{ color: '#FFD369' }}
                />
                <p
                  className="text-2xl font-bold mb-1"
                  style={{
                    color: '#F8F6F6',
                    fontFamily: 'var(--font-montserrat)',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: '#a8b2d1',
                    fontFamily: 'var(--font-quicksand)',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Language badges */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="text-lg font-bold mb-4"
            style={{ fontFamily: 'var(--font-montserrat)', color: '#F8F6F6' }}
          >
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255,211,105,0.1)',
                  color: '#FFD369',
                  fontFamily: 'var(--font-source-code-pro)',
                  border: '1px solid rgba(255,211,105,0.2)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,211,105,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,211,105,0.1)';
                }}
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>

        {/* GitHub profile button */}
        <motion.a
          href="https://github.com/parthboricha"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all duration-300"
          style={{
            fontFamily: 'var(--font-montserrat)',
            border: '2px solid #FFD369',
            color: '#FFD369',
            backgroundColor: 'transparent',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#FFD369';
            (e.currentTarget as HTMLElement).style.color = '#222831';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            (e.currentTarget as HTMLElement).style.color = '#FFD369';
          }}
        >
          <Github size={18} />
          View GitHub Profile
        </motion.a>
      </div>
    </section>
  );
}
