'use client';
import { useEffect, useState } from 'react';

const themes = [
  { color1: '#F8F6F6', color2: '#F5D061', color3: '#2A363B', color4: '#CF4647' }, // Home
  { color1: '#222831', color2: '#393E46', color3: '#00ADB5', color4: '#EEEEEE' }, // My Self
  { color1: '#222831', color2: '#393E46', color3: '#EEEEEE', color4: '#00ADB5' }, // Experience
  { color1: '#222831', color2: '#393E46', color3: '#00ADB5', color4: '#EEEEEE' }, // My Work
  { color1: '#222831', color2: '#393E46', color3: '#FFD369', color4: '#EEEEEE' }, // Reviews
  { color1: '#222831', color2: '#EEEEEE', color3: '#00ADB5', color4: '#393E46' }, // Certifications
  { color1: '#222831', color2: '#393E46', color3: '#00ADB5', color4: '#EEEEEE' }, // GitHub
  { color1: '#F8F8F8', color2: '#434343', color3: '#FAEBCD', color4: '#F7C873' }, // Contact
  { color1: '#F8F6F6', color2: '#F5D061', color3: '#2A363B', color4: '#CF4647' }, // After Contact
];

const sectionIds = ['home', 'myself', 'experience', 'my-work', 'reviews', 'certifications', 'github', 'contact'];

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportMid = window.pageYOffset + window.innerHeight / 2;

      let activeIndex = 0;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= viewportMid) {
          activeIndex = i;
          break;
        }
      }

      // After contact section (below all sections), use last theme
      const lastSection = document.getElementById(sectionIds[sectionIds.length - 1]);
      if (lastSection) {
        const lastSectionBottom = lastSection.offsetTop + lastSection.offsetHeight;
        if (viewportMid > lastSectionBottom) {
          activeIndex = themes.length - 1;
        }
      }

      setCurrentTheme(activeIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const theme = themes[currentTheme];
    const root = document.documentElement;
    root.style.setProperty('--themeColor1', theme.color1);
    root.style.setProperty('--themeColor2', theme.color2);
    root.style.setProperty('--themeColor3', theme.color3);
    root.style.setProperty('--themeColor4', theme.color4);

    // Update meta theme-color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme.color2);
    }
  }, [currentTheme]);

  return <>{children}</>;
}
