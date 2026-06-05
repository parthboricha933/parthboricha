'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const CHARS = ['-', '.', '/', '^', '*', '!', '}', '<', '~', '$', '0', '1', '2', '3', '4', '5', 'a', 'b', 'c', 'd', 'e', 'f'];

const TEXTS = [
  'A Full Stack Developer',
  'WordPress Migration Expert',
  'Bug Fixing Specialist',
  'React & Next.js Developer',
  'API Development Pro',
];

function useDencrypt(texts: string[], interval = 50, timeout = 5000) {
  const [output, setOutput] = useState(texts[0]);
  const index = useRef(0);

  const decrypt = useCallback(() => {
    let currentText = texts[index.current];
    const nextIndex = (index.current + 1) % texts.length;
    const nextText = texts[nextIndex];
    const maxLength = Math.max(currentText.length, nextText.length);
    let iteration = 0;

    const timer = setInterval(() => {
      setOutput(() => {
        const result: string[] = [];
        for (let i = 0; i < maxLength; i++) {
          if (i < iteration) {
            result.push(nextText[i] || '');
          } else {
            if (i < currentText.length) {
              result.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
            } else if (i < nextText.length) {
              result.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
            }
          }
        }
        return result.join('');
      });

      iteration += 1 / 3;

      if (iteration >= maxLength) {
        clearInterval(timer);
        index.current = nextIndex;
      }
    }, interval);
  }, [texts, interval]);

  useEffect(() => {
    const timer = setInterval(() => {
      decrypt();
    }, timeout);

    return () => clearInterval(timer);
  }, [decrypt, timeout]);

  return output;
}

export default function DencryptText() {
  const result = useDencrypt(TEXTS, 50, 5000);

  return (
    <h2
      className="dencrypt-text text-2xl sm:text-3xl md:text-4xl font-bold shimmer-text"
      style={{ fontFamily: 'var(--font-montserrat)', minHeight: '1.5em' }}
    >
      {result}
    </h2>
  );
}
