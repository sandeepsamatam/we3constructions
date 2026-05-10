import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'Do you handle government permissions and plan sanctions?',
    answer: 'Absolutely! We take care of all regulatory requirements including building permits, plan sanctions, and municipal approvals. Our team is well-versed in local regulations across Rajam and Andhra Pradesh. You won\'t have to visit any government office—we handle everything from documentation to approval tracking.',
  },
  {
    question: 'Do you provide material warranties?',
    answer: 'Yes, all materials we source come with manufacturer warranties. We work exclusively with verified suppliers and reputed brands. Additionally, we provide documentation for all materials used, so you have complete transparency and protection for your investment.',
  },
  {
    question: 'How do you ensure timeline adherence?',
    answer: 'We follow a rigorous project management system with detailed Gantt charts and milestone tracking. Before starting, we provide you with a realistic timeline that accounts for weather, material delivery, and unforeseen circumstances. Weekly progress reports keep you updated, and our buffer planning ensures we deliver on time—or even early!',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We currently operate across multiple locations in Andhra Pradesh, with our primary base in Rajam. We also serve surrounding areas. For projects outside our regular service areas, we evaluate on a case-by-case basis. Contact us to discuss your location.',
  },
  {
    question: 'What is your payment structure?',
    answer: 'We follow a milestone-based payment structure that protects both parties. Typically, this includes an initial booking amount, followed by payments at foundation, slab, finishing, and handover stages. The exact breakdown is customized based on your project scope and discussed transparently before we begin.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">FAQ</span>
            <h2 className="section-title mt-2">
              Questions?{' '}
              <span className="text-gradient">We've Got Answers</span>
            </h2>
            <p className="section-subtitle mt-4">
              We believe in complete transparency. Here are answers to the most common questions 
              we receive from clients like you.
            </p>

            <div className="mt-8 p-6 rounded-xl bg-primary text-white">
              <h3 className="font-semibold text-lg mb-2 font-serif">Still have questions?</h3>
              <p className="text-white/80 text-sm mb-4">
                Our team is here to help. Reach out for a free consultation and get all your queries answered.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                Contact us
                <span>→</span>
              </a>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-elevated px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent hover:no-underline py-6 font-serif">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
