import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formError, setFormError] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.contact.phoneClean);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in your name, email, and message.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    // Construct formatted mailto body
    const emailSubject = formData.subject.trim()
      ? `[Portfolio Contact] ${formData.subject.trim()}`
      : `[Portfolio Contact] Message from ${formData.name.trim()}`;

    const emailBody = `Hi Abhinav,\n\n${formData.message.trim()}\n\n---\nFrom: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`;

    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Trigger mail client
    window.location.href = mailtoUrl;
    setFormSent(true);
    setFormError('');
  };

  return (
    <section id="contact" className="py-12 md:py-20 scroll-mt-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Let's Connect & Collaborate
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Open to software engineering and AI/ML internship opportunities, applied research discussions, or technical inquiries.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Direct Contact & Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Direct Card */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Email</span>
                  <a
                    href={personalInfo.socialLinks.email}
                    className="block text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Direct Card */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Phone</span>
                  <a
                    href={`tel:${personalInfo.contact.phoneClean}`}
                    className="block text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate"
                  >
                    {personalInfo.contact.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                aria-label="Copy phone number"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Profiles & Location Grid */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Online Profiles
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={personalInfo.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-amber-500" />
                    <span>LeetCode</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.contact.location} • {personalInfo.institution}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Zero-Backend Mailto Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2 mb-5">
                <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-3.5 py-2 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-3.5 py-2 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / Collaboration"
                    className="w-full px-3.5 py-2 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                  />
                </div>

                {formError && (
                  <p className="text-xs text-rose-500 dark:text-rose-400 font-medium">
                    {formError}
                  </p>
                )}

                {formSent && (
                  <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0 text-emerald-500" />
                    <span>Your email client is opening with your formatted message.</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
