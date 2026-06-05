'use client';

import CustomCursor from '@/components/portfolio/CustomCursor';
import ScrollProgress from '@/components/portfolio/ScrollProgress';
import Header from '@/components/portfolio/Header';
import SidebarNav from '@/components/portfolio/SidebarNav';
import SocialSidebar from '@/components/portfolio/SocialSidebar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ReviewsSection from '@/components/portfolio/ReviewsSection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import GithubSection from '@/components/portfolio/GithubSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <main
      className="relative min-h-screen"
      style={{ backgroundColor: '#222831', color: '#F8F6F6' }}
    >
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <SidebarNav />
      <SocialSidebar />

      <div className="max-w-6xl mx-auto">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ReviewsSection />
        <CertificationsSection />
        <GithubSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
