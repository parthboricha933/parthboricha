'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/parthboricha',
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
      {socialLinks.map((link, i) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="transition-all duration-300 hover:-translate-y-1"
            style={{ color: '#2A363B' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#CF4647';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#a8b2d1';
            }}
          >
            <Icon size={20} />
          </a>
        );
      })}

      {/* Connecting line */}
      <div
        className="w-px h-20"
        style={{ backgroundColor: '#a8b2d1' }}
      />

      {/* Email rotated */}
      <a
        href="mailto:parthboricha.dev@gmail.com"
        className="text-xs tracking-widest"
        style={{
          color: '#a8b2d1',
          writingMode: 'vertical-rl',
          fontFamily: 'var(--font-source-code-pro)',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = '#CF4647';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = '#a8b2d1';
        }}
      >
        parthboricha.dev@gmail.com
      </a>

      {/* Bottom line */}
      <div
        className="w-px h-16"
        style={{ backgroundColor: '#a8b2d1' }}
      />
    </div>
  );
}
