'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
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

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`p-6 rounded-lg ${
        isEven ? 'review-card-right' : 'review-card-left'
      } ${isInView ? 'in-view' : ''}`}
      style={{
        backgroundColor: isEven ? 'var(--themeColor1)' : 'var(--themeColor2)',
        color: isEven ? 'var(--themeColor3)' : 'var(--themeColor1)',
        border: '1px solid var(--themeColor2)',
        maxWidth: '90%',
        transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <Quote
        size={28}
        className="mb-4"
        style={{ color: 'var(--themeColor4)', opacity: 0.6, transition: 'color 0.3s ease' }}
      />
      <p
        className="text-sm leading-relaxed mb-6 italic"
        style={{
          color: isEven ? 'var(--themeColor3)' : 'var(--themeColor1)',
          fontFamily: 'var(--font-quicksand)',
          transition: 'color 0.3s ease',
        }}
      >
        {review.text}
      </p>
      <div>
        <p
          className="font-bold text-sm"
          style={{
            color: 'var(--themeColor3)',
            fontFamily: 'var(--font-montserrat)',
            transition: 'color 0.3s ease',
          }}
        >
          {review.name}
        </p>
        <p
          className="text-xs"
          style={{
            color: 'var(--themeColor4)',
            fontFamily: 'var(--font-quicksand)',
            transition: 'color 0.3s ease',
          }}
        >
          {review.company}
        </p>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="view-element py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--themeColor3)', transition: 'color 0.3s ease' }}
          >
            What Clients <span style={{ color: 'var(--themeColor4)', transition: 'color 0.3s ease' }}>Say</span>
          </h2>
          <div className="section-title-line" />
        </div>

        {/* Reviews - alternating flex layout */}
        <div className="flex flex-col gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
