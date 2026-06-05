'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section title */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Get In <span style={{ color: '#FFD369' }}>Touch</span>
          </h2>
          <p
            className="text-xl sm:text-2xl font-semibold"
            style={{
              color: '#F8F6F6',
              fontFamily: 'var(--font-montserrat)',
            }}
          >
            Let&apos;s Work Together
          </p>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{
            color: '#a8b2d1',
            fontFamily: 'var(--font-quicksand)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          I&apos;m always open to new opportunities and collaborations. Whether you have a project
          in mind, need help with your web application, or just want to say hello — feel free to
          reach out!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href="mailto:parthboricha.dev@gmail.com"
            className="flex items-center gap-2 text-sm"
            style={{
              color: '#a8b2d1',
              fontFamily: 'var(--font-source-code-pro)',
            }}
          >
            <Mail size={16} style={{ color: '#FFD369' }} />
            parthboricha.dev@gmail.com
          </a>
          <span className="flex items-center gap-2 text-sm" style={{ color: '#a8b2d1', fontFamily: 'var(--font-source-code-pro)' }}>
            <MapPin size={16} style={{ color: '#FFD369' }} />
            India
          </span>
        </motion.div>

        <motion.a
          href="mailto:parthboricha.dev@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded font-semibold text-base transition-all duration-300 animate-shadow-pulse"
          style={{
            fontFamily: 'var(--font-montserrat)',
            border: '2px solid #FFD369',
            color: '#FFD369',
            backgroundColor: 'transparent',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#FFD369';
            (e.currentTarget as HTMLElement).style.color = '#222831';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            (e.currentTarget as HTMLElement).style.color = '#FFD369';
          }}
        >
          Get in touch
        </motion.a>
      </div>
    </section>
  );
}
