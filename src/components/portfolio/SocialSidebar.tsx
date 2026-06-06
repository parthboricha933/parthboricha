'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/parthboricha933',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/parthboricha',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/parthboricha',
    label: 'Twitter',
  },
  {
    icon: Mail,
    href: 'mailto:parthboricha.dev@gmail.com',
    label: 'Email',
  },
];

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 bottom-0 z-50 hidden lg:flex flex-col items-center gap-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="transition-all duration-300 hover:-translate-y-1"
            style={{ color: 'var(--themeColor3)', transition: 'color 0.3s ease, transform 0.3s ease' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--themeColor4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--themeColor3)';
            }}
          >
            <Icon size={20} />
          </a>
        );
      })}

      {/* Connecting line */}
      <div
        className="w-px h-20"
        style={{ backgroundColor: 'var(--themeColor3)', opacity: 0.3, transition: 'background-color 0.3s ease' }}
      />

      {/* Email rotated */}
      <a
        href="mailto:parthboricha.dev@gmail.com"
        className="text-xs tracking-widest"
        style={{
          color: 'var(--themeColor3)',
          writingMode: 'vertical-rl',
          fontFamily: 'var(--font-source-code-pro)',
          textDecoration: 'none',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = 'var(--themeColor4)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = 'var(--themeColor3)';
        }}
      >
        parthboricha.dev@gmail.com
      </a>

      {/* Bottom line */}
      <div
        className="w-px h-16"
        style={{ backgroundColor: 'var(--themeColor3)', opacity: 0.3, transition: 'background-color 0.3s ease' }}
      />
    </div>
  );
}
