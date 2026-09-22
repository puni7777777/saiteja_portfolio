"use client";

import { motion } from "motion/react";
import { Compass } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function TargetRolesSection() {
  const { targetRoles } = resumeData;

  return (
    <section id="target-roles" className="py-16 md:py-24 border-b border-[#1e2a3d] bg-[#0d131f]">
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
            Target Career Trajectory &amp; Roles
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            Prospective career directions identified in the resume where practical accounting
            experience, GST compliance knowledge, and MBA Finance analytical training create
            immediate organizational value.
          </p>
        </motion.div>

        {/* Roles Grid (6 exact roles from resume) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {targetRoles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: 0.08 * idx }}
              className="p-6 bg-[#141c2c] border border-[#2a3b54] rounded-xs flex flex-col justify-between hover:border-[#10b981]/50 transition-colors shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1e2a3d]">
                  <span className="font-mono text-xs text-[#10b981] font-semibold">
                    ROLE FOCUS 0{idx + 1}
                  </span>
                  <Compass className="w-4 h-4 text-[#94a3b8]" />
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-[#f1f5f9] mb-2">
                  {item.role}
                </h3>

                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {item.rationale}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1e2a3d] flex items-center justify-between text-[11px] font-mono text-[#94a3b8]">
                <span>Target Focus</span>
                <span className="text-[#10b981]">Open for Opportunities</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explicit Disclosure & Integrity Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 bg-[#141c2c] border border-[#1e2a3d] rounded-xs text-xs text-[#94a3b8] leading-relaxed"
        >
          <strong className="text-[#f1f5f9]">Note on Professional Status:</strong> The roles
          listed above represent career directions targeted through active MBA studies and
          practical accounting foundations at Mahasai Aluminium Profiles Pvt Ltd. Current active
          professional role is Junior Accountant.
        </motion.div>
      </div>
    </section>
  );
}
