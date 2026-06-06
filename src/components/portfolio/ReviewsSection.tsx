'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
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
  const [transform, setTransform] = useState('');
  const isEven = index % 2 === 0;

  const calcTransform = useCallback(() => {
    if (!ref.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight;

    // Start: card just entering view from below
    const startScroll = el.offsetTop + 150 - viewportH;
    // End: card has scrolled past the top
    const endScroll = el.offsetTop + 150 + viewportH;

    const scrollY = window.scrollY;
    let progress = (scrollY - startScroll) / (endScroll - startScroll);
    progress = Math.max(0, Math.min(1, progress));

    // easeOutBack easing for bounce effect
    const c1 = 1.70158;
    const c3 = c1 + 1;
    const eased = 1 + c3 * Math.pow(progress - 1, 3) + c1 * Math.pow(progress - 1, 2);

    const maxTranslate = 110; // percentage
    const maxRotate = 4; // degrees

    if (isEven) {
      // Even: slides from right
      const tx = maxTranslate * (1 - eased);
      const rot = maxRotate * (1 - eased);
      setTransform(`translateX(${tx}%) rotate(${rot}deg)`);
    } else {
      // Odd: slides from left
      const tx = -maxTranslate * (1 - eased);
      const rot = -maxRotate * (1 - eased);
      setTransform(`translateX(${tx}%) rotate(${rot}deg)`);
    }
  }, [isEven]);

  useEffect(() => {
    calcTransform(); // Initial calculation

    const handleScroll = () => {
      requestAnimationFrame(calcTransform);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [calcTransform]);

  return (
    <div
      ref={ref}
      className={`p-6 rounded-lg ${isEven ? 'self-end' : 'self-start'}`}
      style={{
        backgroundColor: isEven ? 'var(--themeColor1)' : 'var(--themeColor2)',
        color: isEven ? 'var(--themeColor3)' : 'var(--themeColor1)',
        border: '1px solid var(--themeColor2)',
        maxWidth: '90%',
        transform,
        willChange: 'transform',
        transition: 'background-color 1s cubic-bezier(0.18, 0.89, 0.32, 1.28), color 0.3s ease, border-color 0.3s ease',
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
        <div className="mb-16" data-aos="zoom-in-right">
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
