"use client";

import { motion } from "motion/react";
import { Download, ExternalLink, CheckCircle2, Shield } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function ResumeSection() {
  const { personal } = resumeData;

  return (
    <section id="resume-download" className="py-16 md:py-24 border-b border-[#1e2a3d] bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-[#141c2c] border border-[#2a3b54] rounded-xs shadow-2xl p-6 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Information */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10b981]/15 border border-[#10b981]/30 rounded-xs text-xs font-mono text-[#10b981] mb-4">
                <Shield className="w-3.5 h-3.5" />
                <span>Primary Document &amp; Single Source of Truth</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#f1f5f9] mb-4">
                Official Resume &amp; Credential Archive
              </h2>

              <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed mb-6 max-w-2xl">
                Download the official, unabridged curriculum vitae of S. Venkata Sai Teja in PDF format.
                Contains full verification of professional accounting experience at Mahasai Aluminium
                Profiles Pvt Ltd, statutory GST responsibilities, BRS methodologies, and education.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#cbd5e1] mb-2 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>Verified Contact Details &amp; Location</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>Full General Ledger &amp; Tax Scope</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>MBA &amp; B.Com Academic Transcripts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>Typing Certification Record</span>
                </div>
              </div>
            </div>

            {/* Right Column: Actions */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={personal.resumePdfUrl}
                download="SAITEJA_RESUME.pdf"
                className="w-full py-3.5 px-6 bg-[#059669] hover:bg-[#047857] text-white text-xs sm:text-sm font-medium rounded-xs transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personal.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#090d16] hover:bg-[#182236] text-[#f1f5f9] border border-[#2a3b54] hover:border-[#10b981] text-xs sm:text-sm font-medium rounded-xs transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 text-[#10b981]" />
                <span>View Resume in Browser</span>
              </a>

              <div className="text-center mt-2">
                <span className="text-[11px] font-mono text-[#94a3b8]">
                  Document: SAITEJA_RESUME.pdf (Original)
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
