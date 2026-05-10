import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/we3-logo.jpeg';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Process', href: '/process' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="We3 Constructions & Interiors" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`nav-link text-foreground ${isActive ? 'text-accent' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919941992202" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              +91 99419 92202
            </a>
            <Link to="/contact" className="btn-primary text-sm">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-foreground hover:text-accent transition-colors font-medium ${isActive ? 'text-accent' : ''}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a href="tel:+919941992202" className="flex items-center gap-2 text-muted-foreground mt-2">
                <Phone className="w-4 h-4" />
                +91 99419 92202
              </a>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary text-center mt-2">
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
