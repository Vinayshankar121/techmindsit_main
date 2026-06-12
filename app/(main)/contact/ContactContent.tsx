'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, MessageSquare, Send, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { submitContact } from '@/lib/api';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactContent() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContact(formData);
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-background" aria-label="Contact hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Have a project in mind? We&apos;d love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card" aria-label="Contact form and information">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name', label: 'Full Name', type: 'text' },
                  { name: 'email', label: 'Email Address', type: 'email' },
                  { name: 'subject', label: 'Subject', type: 'text' },
                ].map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="text-sm font-medium text-foreground mb-1 block">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      type={field.type}
                      required
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-1 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 gradient-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              {[
                { icon: <Mail size={20} />, label: 'Email', value: 'info@techmindsit.com', href: 'mailto:info@techmindsit.com' },
                { icon: <Phone size={20} />, label: 'Phone', value: '+91 88862 69665', href: 'tel:+918886269665' },
                { icon: <MapPin size={20} />, label: 'Address', value: 'Srinivasa Agraharam, Nellore, AP 524002', href: null },
              ].map((info, i) => (
                <div key={i} className="flex items-start gap-4 bg-background border border-border rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center flex-shrink-0">{info.icon}</div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="text-foreground font-medium hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-background border border-border rounded-2xl p-5 text-center">
                  <Clock size={24} className="text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground text-sm">Quick Response</div>
                  <div className="text-xs text-muted-foreground">Within 24 hours</div>
                </div>
                <div className="bg-background border border-border rounded-2xl p-5 text-center">
                  <MessageSquare size={24} className="text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground text-sm">Free Consultation</div>
                  <div className="text-xs text-muted-foreground">No obligation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-background" aria-label="Location map">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Find Us</h2>
          </motion.div>
          <div className="rounded-2xl overflow-hidden border border-border h-[400px]">
            <iframe
              title="Tech minds IT Solutions Location"
              src="https://www.google.com/maps?q=Tech+minds,+Nellore,+Andhra+Pradesh&output=embed"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=14.4508553,79.9880129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              🚗 Get Directions
            </a>
            <a
              href="https://www.google.com/maps/place/Tech+minds/@14.4346802,69.962226,5z/data=!4m10!1m2!2m1!1stechminds!3m6!1s0x3a4c8d472299d6b3:0x6a7c9bb5ea6358df!8m2!3d14.4508553!4d79.9880129!15sCgl0ZWNobWluZHOSARJhZHZlcnRpc2luZ19hZ2VuY3ngAQA!16s%2Fg%2F11n56r6pz8?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
            >
              🗺️ View on Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


