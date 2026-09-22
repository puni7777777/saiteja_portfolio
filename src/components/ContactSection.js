"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowRight } from "lucide-react";
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
    <section id="contact" className="py-16 md:py-24 border-b border-[#e2e8f0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
            Direct Professional Contact
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Reach out directly for discussions on accounting roles, financial analysis
            positions, operations management, or statutory compliance opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Verified Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#fafaf7] border border-[#cbd5e1] rounded-xs">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#065f46]">
                  Candidate Status
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0f172a] mb-2">
                {personal.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Available for opportunities across Finance, Accounting, Financial Operations,
                Risk, or Business Analysis.
              </p>
              <div className="text-xs font-mono text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] p-2.5 rounded-xs">
                Base Location: {personal.location}
              </div>
            </div>

            {/* Email Contact Card */}
            <div className="p-5 bg-white border border-[#e2e8f0] rounded-xs flex items-center justify-between shadow-2xs hover:border-[#065f46] transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xs bg-[#f1f5f9] flex items-center justify-center text-[#065f46] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-[#64748b] block">
                    Direct Email
                  </span>
                  <a
                    href={personal.emailHref}
                    className="font-mono text-sm font-medium text-[#0f172a] hover:text-[#065f46] transition-colors truncate block"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 text-[#64748b] hover:text-[#065f46] hover:bg-[#f1f5f9] rounded-xs transition-colors shrink-0 cursor-pointer"
                title="Copy Email"
                aria-label="Copy Email Address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-[#059669]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Contact Card */}
            <div className="p-5 bg-white border border-[#e2e8f0] rounded-xs flex items-center justify-between shadow-2xs hover:border-[#065f46] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xs bg-[#f1f5f9] flex items-center justify-center text-[#065f46] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#64748b] block">
                    Mobile Phone
                  </span>
                  <a
                    href={personal.phoneHref}
                    className="font-mono text-sm font-medium text-[#0f172a] hover:text-[#065f46] transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2 text-[#64748b] hover:text-[#065f46] hover:bg-[#f1f5f9] rounded-xs transition-colors shrink-0 cursor-pointer"
                title="Copy Phone Number"
                aria-label="Copy Phone Number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-[#059669]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 bg-white border border-[#e2e8f0] rounded-xs flex items-center gap-3 shadow-2xs">
              <div className="w-9 h-9 rounded-xs bg-[#f1f5f9] flex items-center justify-center text-[#065f46] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#64748b] block">
                  Location Coordinates
                </span>
                <span className="font-mono text-sm font-medium text-[#0f172a]">
                  {personal.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Dispatcher Form */}
          <div className="lg:col-span-7 bg-[#fafaf7] border border-[#cbd5e1] rounded-xs p-6 sm:p-8">
            <h3 className="font-serif text-xl font-bold text-[#0f172a] mb-2">
              Send Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
              Fill in your details to launch a pre-addressed email message directly to{" "}
              <strong>{personal.email}</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-[#334155] mb-1 font-medium"
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
                    placeholder="e.g. John Doe / Hiring Lead"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#cbd5e1] rounded-xs focus:border-[#065f46] focus:outline-hidden text-[#0f172a]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-org"
                    className="block text-xs font-mono text-[#334155] mb-1 font-medium"
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
                    placeholder="e.g. Finance Division / Firm"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#cbd5e1] rounded-xs focus:border-[#065f46] focus:outline-hidden text-[#0f172a]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono text-[#334155] mb-1 font-medium"
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
                  placeholder="e.g. Career Discussion: Finance / Accounting Analyst Role"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#cbd5e1] rounded-xs focus:border-[#065f46] focus:outline-hidden text-[#0f172a]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-[#334155] mb-1 font-medium"
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
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#cbd5e1] rounded-xs focus:border-[#065f46] focus:outline-hidden text-[#0f172a] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#065f46] hover:bg-[#044e39] text-white text-xs sm:text-sm font-medium rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email Client &rarr;</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
