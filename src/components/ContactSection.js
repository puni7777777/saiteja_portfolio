"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Copy, Check, Send } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function ContactSection() {
  const { personal } = resumeData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personal.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Inquiry regarding ${personal.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Hello Sai Teja,\n\nName: ${formData.name}\nOrganization: ${formData.organization}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-[#1e2a3d] bg-[#0d131f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Stronger Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mb-12"
        >
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#f1f5f9] mb-4">
            Direct Professional Contact
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            Reach out directly for discussions on accounting roles, financial analysis
            positions, operations management, or statutory compliance opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Verified Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="p-6 bg-[#141c2c] border border-[#2a3b54] rounded-xs shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#10b981]">
                  Candidate Status
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f1f5f9] mb-2">
                {personal.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-4">
                Available for opportunities across Finance, Accounting, Financial Operations,
                Risk, or Business Analysis.
              </p>
              <div className="text-xs font-mono text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/25 p-2.5 rounded-xs">
                Base Location: {personal.location}
              </div>
            </div>

            {/* Email Contact Card */}
            <div className="p-4 sm:p-5 bg-[#141c2c] border border-[#1e2a3d] rounded-xs flex items-center justify-between shadow-lg hover:border-[#10b981]/50 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xs bg-[#090d16] border border-[#1e2a3d] flex items-center justify-center text-[#10b981] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-[#94a3b8] block">
                    Direct Email
                  </span>
                  <a
                    href={personal.emailHref}
                    className="font-mono text-xs sm:text-sm font-medium text-[#f1f5f9] hover:text-[#10b981] transition-colors truncate block"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 text-[#94a3b8] hover:text-[#10b981] hover:bg-[#090d16] rounded-xs transition-colors shrink-0 cursor-pointer"
                title="Copy Email"
                aria-label="Copy Email Address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-[#10b981]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Contact Card */}
            <div className="p-4 sm:p-5 bg-[#141c2c] border border-[#1e2a3d] rounded-xs flex items-center justify-between shadow-lg hover:border-[#10b981]/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xs bg-[#090d16] border border-[#1e2a3d] flex items-center justify-center text-[#10b981] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#94a3b8] block">
                    Mobile Phone
                  </span>
                  <a
                    href={personal.phoneHref}
                    className="font-mono text-xs sm:text-sm font-medium text-[#f1f5f9] hover:text-[#10b981] transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2 text-[#94a3b8] hover:text-[#10b981] hover:bg-[#090d16] rounded-xs transition-colors shrink-0 cursor-pointer"
                title="Copy Phone Number"
                aria-label="Copy Phone Number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-[#10b981]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-5 bg-[#141c2c] border border-[#1e2a3d] rounded-xs flex items-center gap-3 shadow-lg">
              <div className="w-9 h-9 rounded-xs bg-[#090d16] border border-[#1e2a3d] flex items-center justify-center text-[#10b981] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#94a3b8] block">
                  Location Coordinates
                </span>
                <span className="font-mono text-xs sm:text-sm font-medium text-[#f1f5f9]">
                  {personal.location}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Email Dispatcher Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 bg-[#141c2c] border border-[#2a3b54] rounded-xs p-6 sm:p-8 shadow-2xl"
          >
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f1f5f9] mb-2">
              Send Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-6">
              Fill in your details to launch a pre-addressed email message directly to{" "}
              <strong className="text-[#f1f5f9]">{personal.email}</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-[#cbd5e1] mb-1 font-medium"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Hiring Manager"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#090d16] border border-[#2a3b54] rounded-xs focus:border-[#10b981] focus:outline-hidden text-[#f1f5f9] placeholder-[#64748b]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-org"
                    className="block text-xs font-mono text-[#cbd5e1] mb-1 font-medium"
                  >
                    Company / Organization
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    placeholder="e.g. Finance Division"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#090d16] border border-[#2a3b54] rounded-xs focus:border-[#10b981] focus:outline-hidden text-[#f1f5f9] placeholder-[#64748b]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono text-[#cbd5e1] mb-1 font-medium"
                >
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Career Discussion: Finance / Accounting Role"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#090d16] border border-[#2a3b54] rounded-xs focus:border-[#10b981] focus:outline-hidden text-[#f1f5f9] placeholder-[#64748b]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-[#cbd5e1] mb-1 font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write message details or interview invitation..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#090d16] border border-[#2a3b54] rounded-xs focus:border-[#10b981] focus:outline-hidden text-[#f1f5f9] placeholder-[#64748b] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#059669] hover:bg-[#047857] text-white text-xs sm:text-sm font-medium rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email Client &rarr;</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
