'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '@/lib/data/servicesData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function ServicesContent() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background" aria-label="Services hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs — from web and mobile development to digital marketing and CRM systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card" aria-label="Service offerings">
        <div className="container mx-auto px-4">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-background border border-border rounded-2xl p-8 hover:shadow-card-hover transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{service.icon}</div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{service.statsLabel}</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.featureTags.map((tag) => (
                    <span key={tag} className="text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-lg">{tag}</span>
                  ))}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Explore Service <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}


