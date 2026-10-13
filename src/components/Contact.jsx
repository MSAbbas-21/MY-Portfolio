import React, { useState } from 'react';
import { contactData } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  AlertCircle, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'mailto_ready' | 'success' | 'error'

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a subject (at least 3 characters).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // If an external backend (e.g. Formspree) is configured
    if (contactData.formspreeEndpoint && contactData.formspreeEndpoint.startsWith('http')) {
      try {
        const res = await fetch(contactData.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setSubmissionStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmissionStatus('error');
        }
      } catch {
        setSubmissionStatus('error');
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    // Default authentic behavior: Since no third-party backend is connected out-of-the-box,
    // prepare a validated mailto action and open email modal/trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('mailto_ready');
    }, 400);
  };

  const openMailto = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Hi Mohammad Abbas,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact & Connect
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Have an open software engineering role, a collaboration opportunity, or want to discuss backend architecture? Let’s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="bg-[#0F1626] border border-slate-800 rounded-2xl p-5 sm:p-6 transition-all hover:border-indigo-500/40">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address</h3>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-indigo-300 transition-colors break-all"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(contactData.email, 'email')}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-[11px] text-emerald-400 font-mono mt-2">Copied to clipboard!</p>
              )}
            </div>

            {/* Phone Card */}
            <div className="bg-[#0F1626] border border-slate-800 rounded-2xl p-5 sm:p-6 transition-all hover:border-indigo-500/40">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phone / WhatsApp</h3>
                    <a
                      href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-indigo-300 transition-colors"
                    >
                      {contactData.displayPhone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(contactData.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedPhone && (
                <p className="text-[11px] text-emerald-400 font-mono mt-2">Copied to clipboard!</p>
              )}
            </div>

            {/* Location Card */}
            <div className="bg-[#0F1626] border border-slate-800 rounded-2xl p-5 sm:p-6 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location</h3>
                <p className="text-sm sm:text-base font-semibold text-white">{contactData.location}</p>
              </div>
            </div>

            {/* Social / Professional Profiles */}
            <div className="bg-[#0F1626] border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Professional Profiles
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={contactData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-all text-xs sm:text-sm font-semibold"
                >
                  <GithubIcon className="w-4 h-4 text-indigo-400" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
                </a>

                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-all text-xs sm:text-sm font-semibold"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0F1626] border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your details below. You can send directly via your email client or connect your preferred endpoint.
                </p>
              </div>

              {/* Success Banner if Mailto Ready */}
              {submissionStatus === 'mailto_ready' && (
                <div className="mb-6 p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/40 text-slate-200 space-y-3 animate-in fade-in">
                  <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span>Message Validated & Formatted!</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Since no third-party email backend is hosted yet, click below to launch this message pre-formatted directly into your default email application addressed to <strong className="text-white">{contactData.email}</strong>.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={openMailto}
                      className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Email App</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `From: ${formData.name} <${formData.email}>\nSubject: ${formData.subject}\n\n${formData.message}`
                        );
                        alert('Message draft copied to clipboard!');
                      }}
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                    >
                      Copy Draft to Clipboard
                    </button>
                  </div>
                </div>
              )}

              {/* Formspree Success state */}
              {submissionStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs leading-relaxed">
                  Thank you! Your message was transmitted successfully. I will get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-rose-500/80 focus:ring-rose-500/30'
                          : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-rose-500/80 focus:ring-rose-500/30'
                          : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Python / Django Software Engineer Opportunity"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-rose-500/80 focus:ring-rose-500/30'
                        : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Mohammad Abbas, we would like to speak regarding an engineering opportunity..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.message
                        ? 'border-rose-500/80 focus:ring-rose-500/30'
                        : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Validating...' : 'Submit Message'}</span>
                </button>
              </form>

              {/* Informative footnote */}
              <p className="text-[11px] text-slate-400 text-center mt-4">
                To connect a live form serverless backend, configure <code className="text-indigo-300">formspreeEndpoint</code> in <code className="text-indigo-300">src/data/portfolioData.js</code>.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
