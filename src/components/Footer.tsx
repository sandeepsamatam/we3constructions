import { Phone, Mail, Instagram, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/we3-logo.jpeg';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Process', href: '/process' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  'Plan Sanction',
  'Civil Construction',
  'Architectural Design',
  'Interior Design',
  'Material Sourcing',
  'Post-Handover Support',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="We3 Constructions & Interiors" className="h-24 md:h-32 w-auto object-contain mb-6 rounded-lg" />
            <p className="text-white/70 text-sm mb-6">
              Building dreams with transparency and trust since 2019. Your one-stop solution for construction and interiors in Andhra Pradesh.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/we3_constructions_interiors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:we3constructions.interiors@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+919941992202"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 font-serif">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 font-serif">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+919941992202" className="text-white/70 hover:text-accent transition-colors text-sm">
                  +91 99419 92202
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:we3constructions.interiors@gmail.com" className="text-white/70 hover:text-accent transition-colors text-sm break-all">
                  we3constructions.interiors@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/ZLfTSz1NSAcb9Uz89" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Rajam, Andhra Pradesh, India
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>
              © {currentYear} We3 Constructions & Interiors. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-accent fill-accent" /> for your dream home
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
