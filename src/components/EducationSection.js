"use client";

import { motion } from "motion/react";
import { GraduationCap, Award, MapPin } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function EducationSection() {
  const { education, certification } = resumeData;

  return (
    <section id="education" className="py-16 md:py-24 border-b border-[#1e2a3d] bg-[#090d16]">
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
            Education &amp; Credentials
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            Formal academic lineage spanning post-graduate business administration in Finance,
            commerce with computer science, and commercial economics.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-5 sm:space-y-6 mb-10">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: 0.08 * idx }}
              className="p-5 sm:p-6 bg-[#141c2c] border border-[#2a3b54] rounded-xs shadow-xl hover:border-[#10b981]/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 mb-3 border-b border-[#1e2a3d]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xs bg-[#10b981]/10 text-[#10b981] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#f1f5f9]">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#94a3b8]">
                      <span className="font-medium text-[#cbd5e1]">
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <MapPin className="w-3 h-3 text-[#10b981]" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start md:self-auto">
                  {edu.grade && (
                    <span className="px-2.5 py-1 bg-[#090d16] text-[#cbd5e1] font-mono text-xs font-semibold rounded-xs border border-[#1e2a3d]">
                      {edu.grade}
                    </span>
                  )}
                  <span
                    className={`px-2.5 py-1 font-mono text-xs font-semibold rounded-xs ${
                      edu.status === "Results Awaited"
                        ? "bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30"
                        : "bg-[#090d16] text-[#f1f5f9] border border-[#1e2a3d]"
                    }`}
                  >
                    {edu.year} • {edu.status}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certification Module */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-5 sm:p-6 bg-[#141c2c] border border-[#2a3b54] rounded-xs shadow-lg"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#090d16] border border-[#1e2a3d] flex items-center justify-center text-[#10b981] shrink-0 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#94a3b8] block mb-0.5">
                  Verified Technical Certification
                </span>
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#f1f5f9]">
                  {certification.title}
                </h4>
                <p className="text-xs text-[#94a3b8] mt-0.5">
                  {certification.institution}, {certification.location} &bull;{" "}
                  {certification.relevance}
                </p>
              </div>
            </div>

            <span className="px-3 py-1 bg-[#10b981]/15 text-[#10b981] font-mono text-xs font-semibold rounded-xs border border-[#10b981]/30 self-start sm:self-auto">
              Certified
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
