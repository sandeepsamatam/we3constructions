import { FileCheck, HardHat, Ruler, Package, Palette, HeartHandshake } from 'lucide-react';

const services = [
  {
    icon: FileCheck,
    title: 'Plan Sanction & Regulatory Approvals',
    description: 'Navigate the complex maze of permits, approvals, and government regulations with ease. We handle all the paperwork so you can focus on your vision.',
    features: ['Building permits', 'Municipal approvals', 'Document handling'],
  },
  {
    icon: HardHat,
    title: 'Civil Construction',
    description: 'Precision execution with strict safety protocols. Our skilled team ensures every foundation is rock-solid and every structure stands the test of time.',
    features: ['Foundation work', 'Structural engineering', 'Safety compliance'],
  },
  {
    icon: Ruler,
    title: 'Architectural Design',
    description: 'Where aesthetics meet functionality. Our architects create spaces that are not just beautiful, but perfectly suited to your lifestyle and needs.',
    features: ['3D visualization', 'Space planning', 'Vastu consultancy'],
  },
  {
    icon: Package,
    title: 'Material Sourcing',
    description: 'Premium quality materials from verified suppliers at competitive prices. Every material is tested and approved before reaching your site.',
    features: ['Quality verification', 'Trusted suppliers', 'Cost optimization'],
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Transform your space into a reflection of your personality. From modern minimalism to traditional elegance, we bring your interior dreams to life.',
    features: ['Custom furniture', 'Lighting design', 'Color consulting'],
  },
  {
    icon: HeartHandshake,
    title: 'Post-Handover Support',
    description: 'Our relationship doesn\'t end at handover. Enjoy peace of mind with our lifelong support for any maintenance or concerns that arise.',
    features: ['Warranty support', 'Maintenance guidance', 'Lifetime assistance'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">What We Offer</span>
          <h2 className="section-title mt-2">
            Complete Construction &{' '}
            <span className="text-gradient">Interior Solutions</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            From the first blueprint to the final polish, we're your single point of contact for a seamless, 
            stress-free building experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elevated card-hover p-8 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-primary mb-3 font-serif">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
