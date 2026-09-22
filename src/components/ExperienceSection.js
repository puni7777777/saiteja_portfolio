"use client";

import { motion } from "motion/react";
import { Building2, Calendar, MapPin, CheckCircle } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function ExperienceSection() {
  const exp = resumeData.experience[0];

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-[#1e2a3d] bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mb-12"
        >
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#f1f5f9] mb-4">
            Professional Accounting Experience
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            Practical, full-time accounting responsibility managing general ledgers, statutory
            filings, and reconciliation operations in the manufacturing industry.
          </p>
        </motion.div>

        {/* Experience Editorial Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-[#141c2c] border border-[#2a3b54] rounded-xs shadow-xl overflow-hidden"
        >
          {/* Company & Role Header Strip */}
          <div className="p-6 sm:p-8 bg-[#0d131f] border-b border-[#1e2a3d]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#94a3b8] block mb-1">
                  {exp.type}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f1f5f9] mb-2">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#cbd5e1]">
                  <span className="flex items-center gap-1.5 font-medium text-[#f1f5f9]">
                    <Building2 className="w-4 h-4 text-[#10b981]" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-[#94a3b8]">
                    <MapPin className="w-3.5 h-3.5 text-[#10b981]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141c2c] border border-[#2a3b54] rounded-xs text-xs font-mono text-[#10b981]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
                <span className="text-xs text-[#94a3b8] mt-1 font-mono">
                  Active Commercial Practice
                </span>
              </div>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed max-w-4xl border-t border-[#1e2a3d] pt-4">
              {exp.overview}
            </p>
          </div>

          {/* Detailed Responsibilities Matrix with subtle stagger */}
          <div className="p-6 sm:p-8">
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#f1f5f9] mb-6 pb-2 border-b border-[#1e2a3d]">
              Operational Responsibilities &amp; Impact Hierarchy
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {exp.responsibilities.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: 0.08 * idx }}
                  className="p-5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs flex flex-col justify-between hover:border-[#10b981]/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#10b981] font-semibold">
                        {item.category}
                      </span>
                    </div>

                    <h5 className="font-serif text-sm sm:text-base font-bold text-[#f1f5f9] mb-2.5">
                      {item.heading}
                    </h5>

                    <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-4">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1e2a3d] flex items-center gap-1.5 text-xs text-[#10b981] font-medium font-mono">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Verified in Daily Accounting Routine</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools & Systems Used in this Role */}
            <div className="mt-8 pt-6 border-t border-[#1e2a3d] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#94a3b8]">
                <span>Systems Deployed:</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {exp.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#0d131f] text-[#f1f5f9] text-xs font-mono font-medium rounded-xs border border-[#1e2a3d]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
