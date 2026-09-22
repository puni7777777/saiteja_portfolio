import { Database, FileSpreadsheet, Monitor, FolderKanban, Table } from "lucide-react";
import { resumeData } from "@/data/resumeData";

const ICONS = {
  "Tally Prime": Database,
  "ERP Systems": Monitor,
  "MS Excel": FileSpreadsheet,
  "MS Office Suite": FolderKanban,
  "Data Management": Table,
};

export default function ToolsSection() {
  return (
    <section className="py-16 md:py-24 border-b border-[#e2e8f0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
            Accounting Software &amp; Financial Information Systems
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Proficient across core enterprise accounting software, database management, and
            spreadsheet analysis required for high-velocity commercial finance operations.
          </p>
        </div>

        {/* Tools Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.tools.map((tool, idx) => {
            const Icon = ICONS[tool.name] || FileSpreadsheet;
            return (
              <div
                key={idx}
                className="p-6 bg-[#fafaf7] border border-[#cbd5e1] rounded-xs flex flex-col justify-between hover:border-[#065f46] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e2e8f0]">
                    <div className="w-9 h-9 rounded-xs bg-white border border-[#e2e8f0] flex items-center justify-center text-[#065f46]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#64748b] bg-white px-2 py-0.5 rounded-xs border border-[#e2e8f0]">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#0f172a] mb-2">
                    {tool.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {tool.context}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#e2e8f0] flex items-center justify-between text-[11px] font-mono text-[#065f46]">
                  <span>Operational Standard</span>
                  <span className="font-bold">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Excel Analytical Functions Highlight */}
        <div className="mt-8 p-6 bg-[#f8fafc] border border-[#cbd5e1] rounded-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-base font-bold text-[#0f172a] mb-1">
                Advanced MS Excel Analytical Capabilities
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Applied in daily reconciliation: <strong>VLOOKUP</strong> for cross-referencing
                multi-thousand row bank statements with general ledgers, and{" "}
                <strong>Pivot Tables</strong> for summarizing account balances, vendor aging,
                and tax liability breakdowns.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="px-3 py-1.5 bg-white border border-[#cbd5e1] rounded-xs font-mono text-xs text-[#0f172a] font-semibold">
                VLOOKUP
              </span>
              <span className="px-3 py-1.5 bg-white border border-[#cbd5e1] rounded-xs font-mono text-xs text-[#0f172a] font-semibold">
                Pivot Tables
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
