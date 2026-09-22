"use client";

import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, CalendarClock } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function ComplianceSection() {
  const gst = resumeData.gstSpotlight;

  return (
    <section id="gst" className="py-16 md:py-24 border-b border-[#1e2a3d] bg-[#0d131f]">
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
            {gst.title}
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            {gst.subtitle} Hands-on operational experience with statutory Goods and Services
            Tax return mechanisms, outward supply validation, and documentation hygiene.
          </p>
        </motion.div>

        {/* GST Filing Architecture Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {gst.components.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-[#141c2c] border border-[#2a3b54] rounded-xs p-5 sm:p-6 flex flex-col justify-between hover:border-[#10b981]/50 transition-colors shadow-xl"
            >
              <div>
                {/* Form Tag */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1e2a3d]">
                  <span className="px-2.5 py-1 bg-[#090d16] border border-[#1e2a3d] text-[#10b981] font-mono text-xs font-bold rounded-xs">
                    {comp.form}
                  </span>
                  <span className="text-[11px] font-mono text-[#10b981] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Statutory Requirement</span>
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-[#f1f5f9] mb-2">
                  {comp.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-5">
                  {comp.purpose}
                </p>

                {/* Core Tasks */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#94a3b8] block mb-2">
                    Key Execution Tasks:
                  </span>
                  {comp.coreTasks.map((task, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-[#cbd5e1]">
                      <span className="text-[#10b981] font-mono font-bold shrink-0 mt-0.5">&bull;</span>
                      <span className="leading-snug">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e2a3d] flex items-center justify-between text-[11px] text-[#94a3b8] font-mono">
                <span>Timely Compliance</span>
                <span className="text-[#10b981]">Active Practice</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Operational Standards Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-5 sm:p-6 bg-[#141c2c] border border-[#2a3b54] rounded-xs shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#f1f5f9] mb-1">
                  Statutory Documentation Rigor
                </h4>
                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                  Compliance is reinforced through complete verification trails: sales invoices,
                  purchase bills, delivery challans, e-way bills, and payment vouchers are
                  systematically archived to ensure rapid clearance during internal and statutory audits.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 bg-[#090d16] border border-[#1e2a3d] rounded-xs text-xs font-mono text-[#10b981] self-start md:self-auto">
              <CalendarClock className="w-3.5 h-3.5" />
              <span>Deadline Adherence</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
