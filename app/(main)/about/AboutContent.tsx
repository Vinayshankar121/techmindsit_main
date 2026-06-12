'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import TextType from '@/components/ui/TextType';
import CountUp from '@/components/ui/CountUp';
import { ArrowRight, Rocket, Handshake, CheckCircle, Eye, Target } from 'lucide-react';

import { servicesData } from '@/lib/data/servicesData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function AboutContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-background" aria-label="About hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              <TextType 
                text={["Our Story", "Our Vision", "Our Journey", "Our Mission"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                as="span"
              />
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Born from a passion for technology and a desire to make premium IT solutions accessible to businesses in Nellore and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-card" aria-label="Our story">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">How It All Started</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Tech minds IT Solutions was founded in 2026 with a simple mission: deliver world-class IT solutions at startup speed. Based in Nellore, Andhra Pradesh, we&apos;re a team of passionate developers, designers, and marketers.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We believe that every business — whether a local shop or a growing startup — deserves modern, beautiful, and effective digital solutions. That&apos;s why we combine cutting-edge technology with personal attention.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: 4, suffix: '', label: 'Core Services' },
                  { num: 8, suffix: '+', label: 'Internship Programs' },
                  { num: 10, suffix: '+', label: 'Team Members' },
                  { num: 100, suffix: '%', label: 'Dedication' },
                ].map((s) => (
                  <div key={s.label} className="bg-background border border-border rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary flex items-center justify-center">
                      <CountUp from={0} to={s.num} duration={2} />
                      {s.suffix}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Image
                src="/office.png"
                alt="Tech minds IT Solutions office workspace"
                width={600}
                height={400}
                className="rounded-3xl shadow-card w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background" aria-label="What we offer">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">What We Offer</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((s) => (
              <motion.div
                key={s.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-background border border-border rounded-2xl overflow-hidden transition-all hover:shadow-card-hover flex flex-col group relative hover:border-primary/50 text-left"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={`/services/${s.slug.replace(/-/g, '_')}.png`}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
                  <div className="absolute bottom-[-1px] left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/60 backdrop-blur-md flex items-center justify-center text-xl shadow-lg border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </div>
                </div>
                <div className="p-6 pt-2 flex-1 flex flex-col relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">{s.shortDesc}</p>
                  <Link href={`/services/${s.slug}`} className="text-primary text-sm font-semibold hover:opacity-80 inline-flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card" aria-label="Core values">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Core Values</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Rocket size={24} />, title: 'Innovation', desc: 'We embrace new ideas and cutting-edge technology to solve problems.' },
              { icon: <Handshake size={24} />, title: 'Transparency', desc: 'Open communication and honest collaboration with every client.' },
              { icon: <CheckCircle size={24} />, title: 'Quality First', desc: 'No shortcuts — every line of code and pixel is crafted with care.' },
            ].map((v, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-background border border-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">{v.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 gradient-hero" aria-label="Mission and vision">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border border-primary-foreground/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target size={24} className="text-primary" />
                <h3 className="text-xl font-bold text-primary-foreground">Our Mission</h3>
              </div>
              <p className="text-primary-foreground/70 leading-relaxed">
                To empower businesses with affordable, modern, and effective IT solutions — from web and mobile apps to CRM products and digital marketing — while nurturing the next generation of tech talent through our internship programs.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border border-primary-foreground/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye size={24} className="text-primary" />
                <h3 className="text-xl font-bold text-primary-foreground">Our Vision</h3>
              </div>
              <p className="text-primary-foreground/70 leading-relaxed">
                To become the most trusted IT partner for SMBs and startups in Andhra Pradesh, known for innovation, quality, and our commitment to building a thriving tech community in Nellore.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background" aria-label="Call to action">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Let&apos;s Work Together</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground rounded-2xl font-semibold hover:opacity-90 transition-opacity">
                Get In Touch <ArrowRight size={18} />
              </Link>
              <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-2xl font-semibold hover:bg-secondary transition-colors">
                View Careers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


