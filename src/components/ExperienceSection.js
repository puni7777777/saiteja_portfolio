import { Building2, Calendar, MapPin, CheckCircle } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function ExperienceSection() {
  const exp = resumeData.experience[0];

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-[#e2e8f0] bg-[#fafaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
            Professional Accounting Experience
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Practical, full-time accounting responsibility managing general ledgers, statutory
            filings, and reconciliation operations in the manufacturing industry.
          </p>
        </div>

        {/* Experience Editorial Container */}
        <div className="bg-white border border-[#cbd5e1] rounded-xs shadow-xs overflow-hidden">
          {/* Company & Role Header Strip */}
          <div className="p-6 sm:p-8 bg-[#0f2537] text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#94a3b8] block mb-1">
                  {exp.type}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#cbd5e1]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Building2 className="w-4 h-4 text-[#34d399]" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#34d399]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-xs text-xs font-mono text-white">
                  <Calendar className="w-3.5 h-3.5 text-[#34d399]" />
                  <span>{exp.period}</span>
                </div>
                <span className="text-xs text-[#94a3b8] mt-1 font-mono">
                  Active Commercial Practice
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base text-[#e2e8f0] leading-relaxed max-w-4xl border-t border-white/10 pt-4">
              {exp.overview}
            </p>
          </div>

          {/* Detailed Responsibilities Matrix */}
          <div className="p-6 sm:p-8">
            <h4 className="font-serif text-lg font-bold text-[#0f172a] mb-6 pb-2 border-b border-[#e2e8f0]">
              Operational Responsibilities &amp; Impact Hierarchy
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exp.responsibilities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#fafaf7] border border-[#e2e8f0] rounded-xs flex flex-col justify-between hover:border-[#065f46] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#065f46] font-semibold">
                        {item.category}
                      </span>
                    </div>

                    <h5 className="font-serif text-base font-bold text-[#0f172a] mb-2.5">
                      {item.heading}
                    </h5>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#e2e8f0]/80 flex items-center gap-1.5 text-xs text-[#065f46] font-medium">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Verified in Daily Accounting Routine</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools & Systems Used in this Role */}
            <div className="mt-8 pt-6 border-t border-[#e2e8f0] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#64748b]">
                <span>Systems Deployed:</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {exp.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#f1f5f9] text-[#0f172a] text-xs font-mono font-medium rounded-xs border border-[#cbd5e1]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
