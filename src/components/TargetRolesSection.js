import { Compass, Briefcase, ArrowUpRight } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function TargetRolesSection() {
  const { targetRoles } = resumeData;

  return (
    <section id="target-roles" className="py-16 md:py-24 border-b border-[#e2e8f0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
            Target Career Trajectory &amp; Roles
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Prospective career directions identified in the resume where practical accounting
            experience, GST compliance knowledge, and MBA Finance analytical training create
            immediate organizational value.
          </p>
        </div>

        {/* Roles Grid (6 exact roles from resume) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {targetRoles.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#fafaf7] border border-[#cbd5e1] rounded-xs flex flex-col justify-between hover:border-[#065f46] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#e2e8f0]">
                  <span className="font-mono text-xs text-[#065f46] font-semibold">
                    ROLE FOCUS 0{idx + 1}
                  </span>
                  <Compass className="w-4 h-4 text-[#64748b]" />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0f172a] mb-2">
                  {item.role}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.rationale}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#e2e8f0] flex items-center justify-between text-[11px] font-mono text-[#64748b]">
                <span>Target Focus</span>
                <span className="text-[#065f46]">Open for Opportunities</span>
              </div>
            </div>
          ))}
        </div>

        {/* Explicit Disclosure & Integrity Note */}
        <div className="p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs text-xs text-[#64748b] leading-relaxed">
          <strong className="text-[#0f172a]">Note on Professional Status:</strong> The roles
          listed above represent career directions targeted through active MBA studies and
          practical accounting foundations at Mahasai Aluminium Profiles Pvt Ltd. Current active
          professional role is Junior Accountant.
        </div>
      </div>
    </section>
  );
}
