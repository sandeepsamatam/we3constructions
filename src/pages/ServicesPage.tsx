import PageLayout from '@/components/PageLayout';
import Services from '@/components/Services';

export default function ServicesPage() {
  return (
    <PageLayout
      title="Our Services"
      description="From architectural design and civil construction to interior design and government plan sanctions. We are the builders who will construct your properties from start to finish."
      heroSubtitle="End-to-end construction and interior solutions tailored for you."
    >
      <Services />
    </PageLayout>
  );
}
