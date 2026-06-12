'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import TextType from '@/components/ui/TextType';
import CountUp from '@/components/ui/CountUp';
import BorderGlow from '@/components/ui/BorderGlow';
import {
  ArrowRight,
  ChevronDown,
  Monitor,
  Smartphone,
  BarChart3,
  Settings,
  Star,
  Code,
  Rocket,
  IndianRupee,
  Target,
  Handshake,
  Lightbulb,
  GraduationCap,
} from 'lucide-react';

import { servicesData } from '@/lib/data/servicesData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const projects = [
  { title: 'E-Commerce Platform', category: 'Web Development', tech: ['React', 'Node.js', 'MongoDB'], color: 'bg-primary' },
  { title: 'Restaurant Ordering App', category: 'App Development', tech: ['React Native', 'Firebase', 'Stripe'], color: 'bg-primary' },
  { title: 'Business CRM Suite', category: 'CRM Products', tech: ['React', 'Node.js', 'PostgreSQL'], color: 'bg-primary' },
  { title: 'Clinic Management App', category: 'App Development', tech: ['Flutter', 'Firebase', 'REST API'], color: 'bg-primary' },
  { title: 'Brand Growth Campaign', category: 'Digital Marketing', tech: ['Google Ads', 'SEO', 'Social Media'], color: 'bg-primary' },
  { title: 'EdTech Learning Portal', category: 'Web Development', tech: ['Next.js', 'WebRTC', 'MongoDB'], color: 'bg-primary' },
];

const whyUs = [
  { icon: <Rocket size={24} />, title: 'Startup Energy', desc: 'Fresh ideas, fast execution, young & hungry team.' },
  { icon: <IndianRupee size={24} />, title: 'Affordable Pricing', desc: 'Competitive rates without compromising quality.' },
  { icon: <Target size={24} />, title: 'Result Oriented', desc: 'ROI, conversions, and growth metrics that matter.' },
  { icon: <Handshake size={24} />, title: 'Personal Attention', desc: 'Direct team access, no middlemen, fast communication.' },
  { icon: <Lightbulb size={24} />, title: 'Modern Tech Stack', desc: 'React, Node.js, Flutter, AI tools — always up-to-date.' },
  { icon: <GraduationCap size={24} />, title: 'Internship Programs', desc: 'Java, Python, Data Analytics, Web & App Development.' },
];

const internships = [
  { icon: <Code size={16} />, title: 'Java Development' },
  { icon: <Code size={16} />, title: 'Python Development' },
  { icon: <BarChart3 size={16} />, title: 'Data Analytics' },
  { icon: <Monitor size={16} />, title: 'Web Development' },
  { icon: <Smartphone size={16} />, title: 'App Development' },
  { icon: <Settings size={16} />, title: 'MERN Stack' },
  { icon: <BarChart3 size={16} />, title: 'Digital Marketing' },
  { icon: <Monitor size={16} />, title: 'UI/UX Design' },
];

const testimonials = [
  { name: 'Rajesh Kumar', role: 'Startup Founder', initials: 'RK', quote: 'Tech minds IT Solutions built our website from scratch. The young, energetic team delivered beyond our expectations with their creativity and dedication.' },
  { name: 'Priya Sharma', role: 'Business Owner', initials: 'PS', quote: 'Their CRM solution completely transformed our sales pipeline. We saw a 40% improvement in efficiency within the first month.' },
  { name: 'Anil Reddy', role: 'Restaurant Chain Owner', initials: 'AR', quote: 'The mobile app they built was a game changer. Our online orders increased by 60% and customer satisfaction soared.' },
];

export default function HomeContent() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Hero"
        style={{
          backgroundImage: 'url(/landing-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, hsl(0 0% 40%) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-blob" style={{ animationDelay: '4s' }} />

        <div className="container mx-auto px-4 text-center relative z-10 pt-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now Open — Accepting New Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Your Vision
            <br />
            <span className="text-gradient-primary">
              <TextType 
                text={["Our Technology", "Our Design", "Our Strategy", "Your Success"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                as="span"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
            style={{ color: 'hsl(215 20% 65%)' }}
          >
            We&apos;re a passionate IT company in Nellore, building modern web apps, mobile solutions, CRM products, and digital marketing campaigns.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground rounded-2xl font-semibold hover:opacity-90 transition-opacity">
              Our Services <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground rounded-2xl font-semibold hover:bg-primary-foreground/5 transition-colors">
              Get Free Quote
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-6 text-sm"
            style={{ color: 'hsl(215 20% 65%)' }}
          >
            {['Web & App Development', 'CRM Products', 'Digital Marketing', 'Internships Available'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-primary">✓</span> {item}
              </span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-16 flex justify-center">
            <ChevronDown size={24} className="text-primary-foreground/40 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-background" aria-label="About preview">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Transforming Ideas Into Digital Reality</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Tech minds IT Solutions is a freshly launched IT company based in Nellore, Andhra Pradesh. We bring startup energy, modern tech, and relentless dedication to every project.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { num: 4, suffix: '', label: 'Core Services' },
                  { num: 8, suffix: '+', label: 'Internship Programs' },
                  { num: 10, suffix: '+', label: 'Team Members' },
                  { num: 100, suffix: '%', label: 'Client Focus' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card border border-border rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary flex items-center justify-center">
                      <CountUp from={0} to={stat.num} duration={2} />
                      {stat.suffix}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
              <Image
                src="/office.png"
                alt="Tech minds IT Solutions modern office in Nellore"
                width={600}
                height={400}
                className="rounded-3xl w-full object-cover shadow-card"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold animate-float">
                🚀 Freshly Launched
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card" aria-label="Our services">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Services</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((s) => (
              <motion.div
                key={s.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-background border border-border rounded-2xl overflow-hidden transition-all hover:shadow-card-hover flex flex-col group relative hover:border-primary/50"
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

      {/* Stats */}
      <section className="py-16 gradient-stats relative overflow-hidden" aria-label="Company stats">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: 4, suffix: '', label: 'Core Services' },
              { num: 8, suffix: '+', label: 'Internship Programs' },
              { num: 10, suffix: '+', label: 'Growing Team' },
              { num: 0, special: '∞', label: 'Ambition & Energy' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-primary-foreground">
                <div className="text-4xl md:text-5xl font-bold flex items-center justify-center">
                  {stat.special ? stat.special : (
                    <>
                      <CountUp from={0} to={stat.num} duration={2} />
                      {stat.suffix}
                    </>
                  )}
                </div>
                <div className="text-sm mt-2 opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-background" aria-label="Portfolio">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">What We Build</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="h-full transition-shadow hover:shadow-card-hover rounded-2xl">
                <BorderGlow
                  edgeSensitivity={25}
                  glowColor="350 82% 51%"
                  backgroundColor="hsl(var(--card))"
                  borderRadius={16}
                  glowRadius={40}
                  glowIntensity={0.8}
                  colors={['#ef4444', '#f43f5e', '#ec4899']}
                  className="h-full"
                >
                  <div className={`h-2 ${p.color}`} />
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{p.category}</span>
                    <h3 className="text-lg font-bold text-foreground mt-3 mb-2">{p.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-lg">{t}</span>
                      ))}
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card" aria-label="Why choose us">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Why Choose Tech minds IT Solutions</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="bg-background border border-border rounded-2xl p-6 hover:shadow-card-hover transition-shadow">
                <div className="w-12 h-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Internships Highlight */}
      <section className="py-24 bg-background" aria-label="Internship programs">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Learn & Grow</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Internship Programs</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {internships.map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -4, scale: 1.02 }} className="bg-card border border-border rounded-2xl p-5 flex items-center gap-3 cursor-pointer hover:shadow-card-hover transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">{item.icon}</div>
                <span className="text-sm font-semibold text-foreground">{item.title}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-10">
            <Link href="/careers" className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-primary-foreground rounded-2xl font-semibold hover:opacity-90 transition-opacity">
              View All Internships <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card" aria-label="Client testimonials">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">What Our Clients Say</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-background border border-border rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-sm font-bold">{t.initials}</div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero relative overflow-hidden" aria-label="Call to action">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-blob" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Let&apos;s Build Something <span className="text-gradient-primary">Amazing Together</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground rounded-2xl font-semibold hover:opacity-90 transition-opacity">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground rounded-2xl font-semibold hover:bg-primary-foreground/5 transition-colors">
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

