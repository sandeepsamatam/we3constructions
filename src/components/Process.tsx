import { MessageCircle, ClipboardList, Hammer, PartyPopper } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Understanding Your Dream',
    description: 'We begin with an in-depth consultation to understand your vision, requirements, and budget. Our team conducts thorough site studies to assess possibilities and constraints.',
    highlights: ['Free consultation', 'Site analysis', 'Vision mapping'],
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Clear Planning',
    description: 'Receive a detailed project roadmap with transparent cost breakdowns, realistic timelines, and no hidden surprises. We believe in clarity before commitment.',
    highlights: ['Detailed estimates', 'Timeline planning', 'Zero hidden costs'],
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Flawless Execution',
    description: 'Watch your dream take shape with our skilled craftsmen. Receive weekly progress updates with photos and reports, keeping you informed every step of the way.',
    highlights: ['Weekly updates', 'Quality checks', 'Progress photos'],
  },
  {
    number: '04',
    icon: PartyPopper,
    title: 'Joyful Handover',
    description: 'The moment you\'ve been waiting for! We hand over your beautifully completed project with full documentation, and our support continues long after.',
    highlights: ['Complete documentation', 'Walkthrough tour', 'Lifetime support'],
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-primary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">How We Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 mt-2 font-serif">
            Your Journey to a{' '}
            <span className="text-gradient">Dream Home</span>
          </h2>
          <p className="text-lg text-white/70">
            A simple, transparent 4-step process designed to keep you informed and stress-free throughout your construction journey.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Step Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors">
                  {/* Number & Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-bold text-accent/30 font-serif">{step.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 font-serif">{step.title}</h3>
                  <p className="text-white/70 mb-6 text-sm">{step.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {step.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-accent">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
