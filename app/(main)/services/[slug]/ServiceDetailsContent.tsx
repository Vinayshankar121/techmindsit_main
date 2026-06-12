'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  stats: { value: string; label: string }[];
}

export default function ServiceDetailsContent({ service }: { service: Service }) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-background" aria-label="Service header">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">{service.title}</h1>
            <p className="text-muted-foreground max-w-2xl">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-card" aria-label="Service details">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-foreground mb-6">What We Offer</h2>
              <div className="space-y-4">
                {service.features.map((f, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 bg-background border border-border rounded-xl p-4">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{f}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits + Stats */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-foreground mb-6">What You Get</h2>
              <div className="gradient-stats rounded-2xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="bg-primary-foreground/10 backdrop-blur rounded-xl p-4">
                      <div className="text-primary-foreground text-sm font-semibold">{b}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {service.stats.map((s, i) => (
                  <div key={i} className="bg-background border border-border rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero" aria-label="Call to action">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Interested in {service.title}?
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground rounded-2xl font-semibold hover:opacity-90 transition-opacity">
              Get Started <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

