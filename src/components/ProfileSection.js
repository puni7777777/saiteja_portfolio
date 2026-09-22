import { FileCheck, Landmark, Calculator, ArrowUpRight } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function ProfileSection() {
  return (
    <section className="py-16 md:py-24 border-b border-[#e2e8f0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading without eyebrow */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
            Professional Profile &amp; Core Operating Principles
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Practical accounting practitioner combining commercial ledger operations,
            statutory tax compliance, and academic rigor in MBA Finance.
          </p>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#334155] leading-relaxed text-base">
            <p>
              As a Junior Accountant at <strong>Mahasai Aluminium Profiles Pvt Ltd</strong> since
              2023, my day-to-day work centers on the integrity of books of accounts,
              ensuring commercial transactions are meticulously recorded, reconciled,
              and fully aligned with statutory requirements.
            </p>

            <p>
              My expertise spans the entire operational accounting spectrum—from
              invoicing, billing, cash handling, and banking operations to advanced
              Bank Reconciliation Statements (BRS), ledger reconciliations, and
              periodic accounts payable &amp; receivable maintenance.
            </p>

            <p>
              In statutory compliance, I prepare and file regular GST returns, including{" "}
              <strong>GSTR-1</strong> and <strong>GSTR-3B</strong>, while maintaining
              thorough supporting audit documentation. Utilizing tools like{" "}
              <strong>Tally Prime</strong>, enterprise <strong>ERP systems</strong>, and{" "}
              <strong>MS Excel (VLOOKUP, Pivot Tables)</strong>, I translate raw
              commercial activity into structured financial visibility for management.
            </p>

            <div className="pt-4 border-t border-[#e2e8f0]">
              <h3 className="font-serif text-lg font-semibold text-[#0f172a] mb-2">
                Academic &amp; Professional Trajectory
              </h3>
              <p className="text-sm text-[#475569]">
                Currently pursuing an <strong>MBA in Finance</strong> at Narasimha Reddy
                Engineering College (2026, Results Awaited), building upon a solid{" "}
                <strong>B.Com in Computers</strong> degree from Fortune School of Business
                (CGPA: 7.63). This unique intersection of business commerce, computing,
                and hands-on ledger accounting prepares me for analytical roles across
                Finance, Accounting, Financial Operations, Risk, and Tax Analysis.
              </p>
            </div>
          </div>

          {/* Right Column: Three Structured Operational Focus Areas */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 bg-[#fafaf7] border border-[#e2e8f0] rounded-xs">
              <div className="flex items-center gap-3 mb-3">
                <Landmark className="w-5 h-5 text-[#065f46]" />
                <h3 className="font-serif text-lg font-bold text-[#0f172a]">
                  Reconciliation &amp; General Ledger
                </h3>
              </div>
              <p className="text-sm text-[#475569] leading-normal mb-3">
                Execution of Bank Reconciliation Statements (BRS), resolving timing
                differences, investigating discrepancies in accounts payable/receivable,
                and maintaining double-entry ledger accuracy.
              </p>
              <div className="text-xs font-mono text-[#065f46] flex flex-wrap gap-2">
                <span>• BRS</span>
                <span>• AP / AR Aging</span>
                <span>• Sub-Ledger Balancing</span>
              </div>
            </div>

            <div className="p-6 bg-[#fafaf7] border border-[#e2e8f0] rounded-xs">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="w-5 h-5 text-[#065f46]" />
                <h3 className="font-serif text-lg font-bold text-[#0f172a]">
                  Statutory GST &amp; Tax Compliance
                </h3>
              </div>
              <p className="text-sm text-[#475569] leading-normal mb-3">
                Preparation, verification, and timely filing of GSTR-1 and GSTR-3B
                returns with systematic maintenance of physical and digital audit
                supporting documentation.
              </p>
              <div className="text-xs font-mono text-[#065f46] flex flex-wrap gap-2">
                <span>• GSTR-1</span>
                <span>• GSTR-3B</span>
                <span>• Audit Documentation</span>
              </div>
            </div>

            <div className="p-6 bg-[#fafaf7] border border-[#e2e8f0] rounded-xs">
              <div className="flex items-center gap-3 mb-3">
                <Calculator className="w-5 h-5 text-[#065f46]" />
                <h3 className="font-serif text-lg font-bold text-[#0f172a]">
                  Finance Operations &amp; Systems
                </h3>
              </div>
              <p className="text-sm text-[#475569] leading-normal mb-3">
                Day-to-day invoicing, commercial billing, vendor/customer statement
                clarifications, and data processing via Tally Prime, ERP, and MS Excel.
              </p>
              <div className="text-xs font-mono text-[#065f46] flex flex-wrap gap-2">
                <span>• Tally Prime</span>
                <span>• ERP Systems</span>
                <span>• VLOOKUP &amp; Pivot Tables</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
