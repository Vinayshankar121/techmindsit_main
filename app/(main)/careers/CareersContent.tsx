'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Clock, DollarSign, X, Loader2, Upload } from 'lucide-react';
import toast from 'react-hot-toast';
import { jobsData, internshipsData } from '@/lib/data/careersData';
import { submitApplication } from '@/lib/api';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function CareersContent() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'internships'>('jobs');
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <section className="py-20 bg-background" aria-label="Careers hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Join Our Team</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">Careers & Internships</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join Tech minds IT Solutions and be part of a team that&apos;s shaping the future of IT in Nellore.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card" aria-label="Open positions">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-background border border-border rounded-2xl p-1" role="tablist">
              {[
                { key: 'jobs' as const, label: 'Full-Time Jobs', icon: <Briefcase size={16} /> },
                { key: 'internships' as const, label: 'Internships', icon: <GraduationCap size={16} /> },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    activeTab === tab.key ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 gradient-primary rounded-xl"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">{tab.icon} {tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'jobs' ? (
              <motion.div
                key="jobs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div variants={stagger} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-6">
                  {jobsData.map((job) => (
                    <motion.div key={job.id} variants={fadeUp} className="bg-background border border-border rounded-2xl p-6">
                      <h2 className="text-xl font-bold text-foreground mb-2">{job.title}</h2>
                      <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock size={14} /> {job.experience}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((s) => (
                          <span key={s} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-lg font-medium">{s}</span>
                        ))}
                      </div>
                      <details className="mb-4">
                        <summary className="text-sm font-semibold text-foreground cursor-pointer">View Details</summary>
                        <div className="mt-3 space-y-3">
                          <div>
                            <h3 className="text-sm font-semibold text-foreground mb-1">Responsibilities</h3>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {job.responsibilities.map((r, i) => (
                                <li key={i}>• {r}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-foreground mb-1">Benefits</h3>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {job.benefits.map((b, i) => (
                                <li key={i}>• {b}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </details>
                      <button
                        onClick={() => setSelectedPosition(job.title)}
                        className="w-full px-6 py-3 gradient-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                      >
                        Apply Now
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="internships"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div variants={stagger} initial="hidden" animate="visible" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {internshipsData.map((intern) => (
                    <motion.div key={intern.id} variants={fadeUp} className="bg-background border border-border rounded-2xl p-6">
                      <h2 className="text-lg font-bold text-foreground mb-2">{intern.role}</h2>
                      <div className="flex flex-wrap gap-3 mb-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock size={14} /> {intern.duration}</span>
                        <span className="flex items-center gap-1"><DollarSign size={14} /> {intern.stipend}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{intern.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {intern.skills.map((s) => (
                          <span key={s} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-lg font-medium">{s}</span>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedPosition(intern.role)}
                        className="w-full px-6 py-3 gradient-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                      >
                        Apply
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {selectedPosition && (
          <ApplyModal position={selectedPosition} onClose={() => setSelectedPosition(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function ApplyModal({ position, onClose }: { position: string; onClose: () => void }) {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    experience: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resume) {
      toast.error('Please upload your resume.');
      return;
    }
    setLoading(true);
    try {
      await submitApplication({ ...formData, position, cover_letter: '' }, resume);
      toast.success('Application submitted successfully!');
      onClose();
    } catch {
      toast.error('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-background border border-border rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 id="apply-modal-title" className="text-xl font-bold text-foreground">Apply for {position}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { name: 'full_name', label: 'Full Name', type: 'text' },
            { name: 'email', label: 'Email', type: 'email' },
            { name: 'phone', label: 'Phone', type: 'tel' },
            { name: 'experience', label: 'Experience', type: 'text', placeholder: 'e.g. Fresher / 1 year' },
          ].map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="text-sm font-medium text-foreground mb-1 block">
                {field.label}
              </label>
              <input
                id={field.name}
                type={field.type}
                required
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          ))}
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Upload Resume (PDF/DOC/DOCX)</label>
            <label className="flex items-center justify-center gap-2 w-full px-4 py-4 rounded-xl bg-card border-2 border-dashed border-border text-muted-foreground hover:border-primary/50 hover:text-foreground cursor-pointer transition-colors">
              <Upload size={18} />
              <span className="text-sm">{resume ? resume.name : 'Click to upload resume'}</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => setResume(e.target.files?.[0] || null)}
              />
            </label>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 gradient-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : null}
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}


