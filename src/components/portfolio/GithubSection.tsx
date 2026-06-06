'use client';

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
    <section id="github" className="view-element py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--themeColor3)', transition: 'color 0.3s ease' }}
          >
            My <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>GitHub</span>
          </h2>
          <div className="section-title-line" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="github-stat-card p-6 rounded-lg text-center"
                data-aos="zoom-in"
                data-aos-delay={i * 50}
              >
                <Icon
                  size={28}
                  className="mx-auto mb-3"
                  style={{ color: 'var(--themeColor3)', transition: 'color 0.3s ease' }}
                />
                <p
                  className="text-2xl font-bold mb-1"
                  style={{
                    color: 'var(--themeColor3)',
                    fontFamily: 'var(--font-montserrat)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: 'var(--themeColor3)',
                    fontFamily: 'var(--font-quicksand)',
                    opacity: 0.7,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Language badges */}
        <div
          className="mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3
            className="text-lg font-bold mb-4"
            style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--themeColor3)', transition: 'color 0.3s ease' }}
          >
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="lang-tag px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-source-code-pro)',
                }}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub profile button */}
        <a
          href="https://github.com/parthboricha"
          target="_blank"
          rel="noopener noreferrer"
          className="tk-button inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            fontFamily: 'var(--font-montserrat)',
            border: '2px solid var(--themeColor4)',
            color: 'var(--themeColor4)',
            backgroundColor: 'transparent',
            transition: 'color 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
          }}
        >
          <Github size={18} />
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}
