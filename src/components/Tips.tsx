import { Lightbulb, ArrowRight, TestTube, Wallet, FileCheck } from 'lucide-react';

const tips = [
  {
    icon: TestTube,
    title: 'Why Soil Testing Matters',
    excerpt: 'Before laying the first brick, understanding your soil composition is crucial. Soil testing determines the load-bearing capacity of your land and helps engineers design the right foundation. Skipping this step can lead to structural issues, cracks, and costly repairs down the line. At We3, we always begin with comprehensive soil analysis to ensure your home stands strong for generations.',
    category: 'Foundation',
  },
  {
    icon: Wallet,
    title: 'Smart Budgeting for Interiors',
    excerpt: 'Many homeowners underestimate interior costs, leading to compromises on finishes. A good rule of thumb: allocate 25-35% of your total construction budget for interiors. Prioritize high-impact areas like the living room and kitchen. Consider phased execution—complete essentials first, then add luxuries. Our team helps you create a realistic budget that balances quality with affordability.',
    category: 'Planning',
  },
  {
    icon: FileCheck,
    title: 'The Importance of Plan Sanctions',
    excerpt: 'Building without proper plan sanctions isn\'t just illegal—it\'s risky. Unapproved constructions face demolition threats, loan rejections, and resale problems. The sanction process ensures your building meets safety codes, setback requirements, and zoning regulations. We3 handles the entire approval process, saving you time and ensuring complete legal compliance from day one.',
    category: 'Legal',
  },
];

export default function Tips() {
  return (
    <section id="tips" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Knowledge Hub</span>
            <h2 className="section-title mt-2">
              Construction Tips{' '}
              <span className="text-gradient">for You</span>
            </h2>
            <p className="section-subtitle mt-4">
              Expert insights to help you make informed decisions about your construction project.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-accent" />
            <span className="text-sm text-muted-foreground">From our experience</span>
          </div>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <article
              key={tip.title}
              className="card-elevated card-hover overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <tip.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{tip.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary font-serif group-hover:text-accent transition-colors">
                  {tip.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tip.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Have questions about your project?</p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Get Expert Advice
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
