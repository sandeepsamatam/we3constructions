import { Shield, Clock, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Transparency First',
    description: 'Weekly progress updates, clear pricing, no hidden costs. You always know where your project stands.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your timeline. Our meticulous planning ensures projects are completed when promised.',
  },
  {
    icon: Users,
    title: 'One-Stop Solution',
    description: 'From design to handover, we handle everything. No need to coordinate multiple vendors.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Premium materials from verified suppliers, skilled craftsmen, and rigorous quality checks.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Story</span>
            <h2 className="section-title mt-2">
              Born from Experience,{' '}
              <span className="text-gradient">Driven by Purpose</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground mt-6">
              <p className="text-lg">
                <span className="font-semibold text-foreground">We3 Constructions & Interiors</span> was founded in 2019 
                by a team who experienced firsthand the frustrations of building a home—delayed timelines, 
                unexpected costs, poor communication, and subpar workmanship.
              </p>
              <p>
                Those challenging experiences became our driving force. We asked ourselves: 
                <em className="text-primary font-medium"> "What if construction could be different? 
                What if it could be transparent, reliable, and even enjoyable?"</em>
              </p>
              <p>
                That vision became We3. Today, with <strong>30+ homes</strong> and <strong>10+ commercial projects</strong> completed 
                across <strong>3 locations</strong>, we've proven that building your dream space doesn't have to be stressful. 
                Our mission is simple: deliver peace of mind at every step of your construction journey.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Start Your Journey
              </a>
              <a href="#process" className="btn-outline">
                See Our Process
              </a>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-elevated card-hover p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2 font-serif">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
