"use client";

import { motion } from "motion/react";
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
    <section className="py-16 md:py-24 border-b border-[#1e2a3d] bg-[#0d131f]">
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
            Accounting Software &amp; Financial Information Systems
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            Proficient across core enterprise accounting software, database management, and
            spreadsheet analysis required for high-velocity commercial finance operations.
          </p>
        </motion.div>

        {/* Tools Cards with Subtle In-View Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.tools.map((tool, idx) => {
            const Icon = ICONS[tool.name] || FileSpreadsheet;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.08 * idx }}
                className="p-6 bg-[#141c2c] border border-[#2a3b54] rounded-xs flex flex-col justify-between hover:border-[#10b981]/50 transition-colors shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1e2a3d]">
                    <div className="w-9 h-9 rounded-xs bg-[#090d16] border border-[#1e2a3d] flex items-center justify-center text-[#10b981]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#94a3b8] bg-[#090d16] px-2 py-0.5 rounded-xs border border-[#1e2a3d]">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#f1f5f9] mb-2">
                    {tool.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    {tool.context}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#1e2a3d] flex items-center justify-between text-[11px] font-mono text-[#10b981]">
                  <span>Operational Standard</span>
                  <span className="font-bold">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Excel Analytical Functions Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-6 bg-[#141c2c] border border-[#2a3b54] rounded-xs shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#f1f5f9] mb-1">
                Advanced MS Excel Analytical Capabilities
              </h4>
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                Applied in daily reconciliation: <strong className="text-[#f1f5f9]">VLOOKUP</strong> for cross-referencing
                multi-thousand row bank statements with general ledgers, and{" "}
                <strong className="text-[#f1f5f9]">Pivot Tables</strong> for summarizing account balances, vendor aging,
                and tax liability breakdowns.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="px-3 py-1.5 bg-[#090d16] border border-[#2a3b54] rounded-xs font-mono text-xs text-[#10b981] font-semibold">
                VLOOKUP
              </span>
              <span className="px-3 py-1.5 bg-[#090d16] border border-[#2a3b54] rounded-xs font-mono text-xs text-[#10b981] font-semibold">
                Pivot Tables
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
