import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function EducationSection() {
  const { education, certification } = resumeData;

  return (
    <section id="education" className="py-16 md:py-24 border-b border-[#e2e8f0] bg-[#fafaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
            Education &amp; Credentials
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Formal academic lineage spanning post-graduate business administration in Finance,
            commerce with computer science, and commercial economics.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6 mb-12">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#cbd5e1] rounded-xs shadow-2xs hover:border-[#065f46] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 mb-3 border-b border-[#f1f5f9]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xs bg-[#ecfdf5] text-[#065f46] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0f172a]">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#475569]">
                      <span className="font-medium text-[#0f172a]">
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <MapPin className="w-3 h-3 text-[#065f46]" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start md:self-auto">
                  {edu.grade && (
                    <span className="px-2.5 py-1 bg-[#f1f5f9] text-[#0f172a] font-mono text-xs font-semibold rounded-xs border border-[#e2e8f0]">
                      {edu.grade}
                    </span>
                  )}
                  <span
                    className={`px-2.5 py-1 font-mono text-xs font-semibold rounded-xs ${
                      edu.status === "Results Awaited"
                        ? "bg-[#ecfdf5] text-[#065f46] border border-[#a7f3d0]"
                        : "bg-[#0f2537] text-white"
                    }`}
                  >
                    {edu.year} • {edu.status}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certification Module (Compact, appropriate scale) */}
        <div className="p-6 bg-white border border-[#cbd5e1] rounded-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center text-[#065f46] shrink-0 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748b] block mb-0.5">
                  Verified Technical Certification
                </span>
                <h4 className="font-serif text-base font-bold text-[#0f172a]">
                  {certification.title}
                </h4>
                <p className="text-xs text-[#475569] mt-0.5">
                  {certification.institution}, {certification.location} &bull;{" "}
                  {certification.relevance}
                </p>
              </div>
            </div>

            <span className="px-3 py-1 bg-[#ecfdf5] text-[#065f46] font-mono text-xs font-semibold rounded-xs border border-[#a7f3d0] self-start sm:self-auto">
              Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
