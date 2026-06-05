'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Review {
  text: string;
  name: string;
  company: string;
}

const reviews: Review[] = [
  {
    text: 'PARTH IS AN EXCEPTIONAL DEVELOPER! HE DELIVERED OUR PROJECT AHEAD OF SCHEDULE WITH INCREDIBLE QUALITY. HIS ATTENTION TO DETAIL AND PROBLEM-SOLVING SKILLS ARE REMARKABLE.',
    name: 'Sarah Johnson',
    company: 'TechStartup Inc.',
  },
  {
    text: 'WORKING WITH PARTH WAS A FANTASTIC EXPERIENCE. HE TRANSFORMED OUR OUTDATED WEBSITE INTO A MODERN, FAST, AND BEAUTIFUL APPLICATION. HIGHLY RECOMMEND!',
    name: 'Michael Chen',
    company: 'Digital Agency Co.',
  },
  {
    text: 'PARTH EXCEEDED ALL EXPECTATIONS! HE BUILT OUR ENTIRE SAAS PLATFORM FROM SCRATCH AND IT\'S RUNNING FLAWLESSLY. A TRUE FULL STACK EXPERT.',
    name: 'Emily Rodriguez',
    company: 'CloudScale',
  },
  {
    text: 'THE BEST DEVELOPER I\'VE WORKED WITH! PARTH UNDERSTOOD OUR REQUIREMENTS PERFECTLY AND DELIVERED A SOLUTION THAT SURPASSED OUR VISION.',
    name: 'David Park',
    company: 'InnovateTech',
  },
  {
    text: 'PARTH\'S EXPERTISE IN REACT AND NODE.JS IS IMPRESSIVE. HE FIXED CRITICAL BUGS AND OPTIMIZED OUR APP PERFORMANCE SIGNIFICANTLY. 10/10 WOULD HIRE AGAIN!',
    name: 'Lisa Thompson',
    company: 'WebFlow Solutions',
  },
  {
    text: 'ABSOLUTELY BRILLIANT WORK! PARTH MIGRATED OUR WORDPRESS SITE TO NEXT.JS SEAMLESSLY. THE PERFORMANCE IMPROVEMENT WAS NIGHT AND DAY.',
    name: 'James Wilson',
    company: 'MediaGroup',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-6 sm:px-12 lg:px-24">
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
            What Clients <span style={{ color: '#FFD369' }}>Say</span>
          </h2>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="p-6 rounded-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#2A363B',
                border: '1px solid rgba(248,246,246,0.05)',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,211,105,0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(248,246,246,0.05)';
              }}
            >
              <Quote
                size={28}
                className="mb-4"
                style={{ color: '#FFD369', opacity: 0.5 }}
              />
              <p
                className="text-sm leading-relaxed mb-6 italic"
                style={{
                  color: '#a8b2d1',
                  fontFamily: 'var(--font-quicksand)',
                }}
              >
                {review.text}
              </p>
              <div>
                <p
                  className="font-bold text-sm"
                  style={{
                    color: '#F8F6F6',
                    fontFamily: 'var(--font-montserrat)',
                  }}
                >
                  {review.name}
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: '#FFD369',
                    fontFamily: 'var(--font-quicksand)',
                  }}
                >
                  {review.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
