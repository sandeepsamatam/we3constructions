import { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  heroTitle?: string;
  heroSubtitle?: string;
  showMiniHero?: boolean;
}

export default function PageLayout({ 
  children, 
  title, 
  description, 
  heroTitle, 
  heroSubtitle,
  showMiniHero = true 
}: PageLayoutProps) {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{title} | We3 Constructions & Interiors</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {showMiniHero && (
          <div className="bg-navy pt-32 pb-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('@/assets/hero-bg.jpg')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10 container-custom">
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 animate-fade-up opacity-0">
                {heroTitle || title}
              </h1>
              {heroSubtitle && (
                <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-up opacity-0 stagger-1">
                  {heroSubtitle}
                </p>
              )}
            </div>
          </div>
        )}
        {children}
      </main>

      <Footer />
    </div>
  );
}
