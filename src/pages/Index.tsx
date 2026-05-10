import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Tips from '@/components/Tips';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <PageLayout
      title="Top Construction Company in Rajam, Andhra Pradesh"
      description="We3 Constructions & Interiors is a premier building contractor in Rajam, AP. We handle government approvals, civil construction, and premium interior design."
      showMiniHero={false}
    >
      <Hero />
      <Services />
      
      {/* Quick CTA to learn more about the process */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Want to know how we work?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            From getting government approvals to handing over the keys, our transparent process ensures peace of mind.
          </p>
          <Link to="/process" className="btn-primary bg-white text-primary hover:bg-white/90">
            View Our Process <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <Testimonials />
      <Tips />
    </PageLayout>
  );
};

export default Index;
