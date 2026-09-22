import { FileCheck, FileText, CheckCircle2, ShieldCheck, CalendarClock } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function ComplianceSection() {
  const gst = resumeData.gstSpotlight;

  return (
    <section id="gst" className="py-16 md:py-24 border-b border-[#e2e8f0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
            {gst.title}
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            {gst.subtitle} Hands-on operational experience with statutory Goods and Services
            Tax return mechanisms, outward supply validation, and documentation hygiene.
          </p>
        </div>

        {/* GST Filing Architecture Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {gst.components.map((comp, idx) => (
            <div
              key={idx}
              className="bg-[#fafaf7] border border-[#cbd5e1] rounded-xs p-6 flex flex-col justify-between hover:border-[#065f46] transition-colors"
            >
              <div>
                {/* Form Tag */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e2e8f0]">
                  <span className="px-2.5 py-1 bg-[#0f2537] text-white font-mono text-xs font-bold rounded-xs">
                    {comp.form}
                  </span>
                  <span className="text-[11px] font-mono text-[#065f46] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Statutory Requirement</span>
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0f172a] mb-2">
                  {comp.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                  {comp.purpose}
                </p>

                {/* Core Tasks */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748b] block mb-2">
                    Key Execution Tasks:
                  </span>
                  {comp.coreTasks.map((task, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-[#334155]">
                      <span className="text-[#065f46] font-mono font-bold shrink-0 mt-0.5">&bull;</span>
                      <span className="leading-snug">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e2e8f0] flex items-center justify-between text-[11px] text-[#64748b] font-mono">
                <span>Timely Compliance</span>
                <span>Active Practice</span>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Operational Standards Box */}
        <div className="p-6 bg-[#ecfdf5] border border-[#a7f3d0] rounded-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#065f46] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-base font-bold text-[#065f46] mb-1">
                  Statutory Documentation Rigor
                </h4>
                <p className="text-xs sm:text-sm text-[#044e39] leading-relaxed">
                  Compliance is reinforced through complete verification trails: sales invoices,
                  purchase bills, delivery challans, e-way bills, and payment vouchers are
                  systematically archived to ensure rapid clearance during internal and statutory audits.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 bg-white border border-[#a7f3d0] rounded-xs text-xs font-mono text-[#065f46]">
              <CalendarClock className="w-3.5 h-3.5" />
              <span>Deadline Adherence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
