import PageLayout from '@/components/PageLayout';
import Process from '@/components/Process';

export default function ProcessPage() {
  return (
    <PageLayout
      title="Our Construction Process"
      description="A transparent, step-by-step construction process. From initial consultation and government approvals to handing over the keys to your dream home."
      heroSubtitle="Clear communication and timely execution at every stage."
    >
      <Process />
    </PageLayout>
  );
}
