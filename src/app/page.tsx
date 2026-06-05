'use client';

import ThemeProvider from '@/components/portfolio/ThemeProvider';
import AOSProvider from '@/components/portfolio/AOSProvider';
import Preloader from '@/components/portfolio/Preloader';
import CustomCursor from '@/components/portfolio/CustomCursor';
import ScrollProgress from '@/components/portfolio/ScrollProgress';
import CursorLine from '@/components/portfolio/CursorLine';
import GoldenBlob from '@/components/portfolio/GoldenBlob';
import MobileChatButtons from '@/components/portfolio/MobileChatButtons';
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
    <ThemeProvider>
      <AOSProvider>
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <CursorLine />
        <GoldenBlob />
        <Header />
        <SidebarNav />
        <SocialSidebar />
        <MobileChatButtons />

        <main className="relative min-h-screen">
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
      </AOSProvider>
    </ThemeProvider>
  );
}
