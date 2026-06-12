
'use client';


import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="Tech Minds IT Solutions"
                width={32}
                height={32}
                className="h-8 w-auto rounded-lg"
              />
              <span className="font-bold text-foreground">
                Tech Minds IT Solutions
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Transforming ideas into powerful digital solutions. Your trusted IT partner in Nellore, Andhra Pradesh.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="p-2 rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Careers & Internships', path: '/careers' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors inline-block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: 'Web Development', id: 1 },
                { label: 'App Development', id: 2 },
                { label: 'Digital Marketing', id: 3 },
                { label: 'CRM Products', id: 4 },
              ].map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors inline-block py-1"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <address className="not-italic space-y-3 text-sm text-muted-foreground">
              <p>
                <a href="mailto:info@techmindsit.com" className="hover:text-primary transition-colors">
                  info@techmindsit.com
                </a>
              </p>
              <p>
                <a href="tel:+918886269665" className="hover:text-primary transition-colors">
                  +91 88862 69665
                </a>
              </p>
              <p>Srinivasa Agraharam, Nellore, AP 524002</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Tech Minds IT Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

