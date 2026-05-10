import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maheswararao Manam',
    role: 'Government Project',
    content: 'Built a sturdy stage for Govt Junior College, Rajam. The entire process was smooth from start to finish. Their attention to structural integrity and safety standards was impressive.',
    rating: 5,
  },
  {
    name: 'Sriharsha Grandhi',
    role: 'Homeowner',
    content: 'Communication was smooth throughout the project. What impressed me most was that they truly listened to what we wanted. Every concern was addressed promptly, and the final result exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Bhujanga V',
    role: 'Homeowner',
    content: 'They took care of construction start to end including demolition. The team treated our project like their own home. The dedication and care they showed was truly remarkable.',
    rating: 5,
  },
  {
    name: 'Bindu Sumala',
    role: 'Homeowner',
    content: 'Finished on time and within budget. In the construction industry, this is rare and We3 delivered exactly what they promised. No surprises, no delays, just quality work.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="section-title mt-2">
            What Our Clients{' '}
            <span className="text-gradient">Say About Us</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Real stories from real clients who trusted us with their dreams. Their satisfaction is our greatest achievement.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-elevated card-hover p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg font-serif">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-primary font-serif">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
