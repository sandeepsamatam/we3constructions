import PageLayout from '@/components/PageLayout';
import FAQ from '@/components/FAQ';

export default function FAQPage() {
  return (
    <PageLayout
      title="Frequently Asked Questions"
      description="Find answers to common questions about our construction process, government approvals, timelines, and material quality."
      heroSubtitle="Everything you need to know before starting your project."
    >
      <FAQ />
    </PageLayout>
  );
}
