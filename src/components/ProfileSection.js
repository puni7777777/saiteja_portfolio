"use client";

import { motion } from "motion/react";
import { FileCheck, Landmark, Calculator } from "lucide-react";

export default function ProfileSection() {
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
            Professional Profile &amp; Core Operating Principles
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            Practical accounting practitioner combining commercial ledger operations,
            statutory tax compliance, and academic rigor in MBA Finance.
          </p>
        </motion.div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-5 text-[#cbd5e1] leading-relaxed text-sm sm:text-base"
          >
            <p>
              As a Junior Accountant at <strong className="text-[#f1f5f9]">Mahasai Aluminium Profiles Pvt Ltd</strong> since
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
              <strong className="text-[#f1f5f9]">GSTR-1</strong> and <strong className="text-[#f1f5f9]">GSTR-3B</strong>, while maintaining
              thorough supporting audit documentation. Utilizing tools like{" "}
              <strong className="text-[#f1f5f9]">Tally Prime</strong>, enterprise <strong className="text-[#f1f5f9]">ERP systems</strong>, and{" "}
              <strong className="text-[#f1f5f9]">MS Excel (VLOOKUP, Pivot Tables)</strong>, I translate raw
              commercial activity into structured financial visibility for management.
            </p>

            <div className="pt-4 border-t border-[#1e2a3d]">
              <h3 className="font-serif text-base sm:text-lg font-semibold text-[#f1f5f9] mb-2">
                Academic &amp; Professional Trajectory
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Currently pursuing an <strong className="text-[#f1f5f9]">MBA in Finance</strong> at Narasimha Reddy
                Engineering College (2026, Results Awaited), building upon a solid{" "}
                <strong className="text-[#f1f5f9]">B.Com in Computers</strong> degree from Fortune School of Business
                (CGPA: 7.63). This unique intersection of business commerce, computing,
                and hands-on ledger accounting prepares me for analytical roles across
                Finance, Accounting, Financial Operations, Risk, and Tax Analysis.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Three Structured Operational Focus Areas */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-5 sm:p-6 bg-[#141c2c] border border-[#1e2a3d] rounded-xs hover:border-[#10b981]/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-xs bg-[#10b981]/10 flex items-center justify-center text-[#10b981] shrink-0">
                  <Landmark className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#f1f5f9]">
                  Reconciliation &amp; General Ledger
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-normal mb-3">
                Execution of Bank Reconciliation Statements (BRS), resolving timing
                differences, investigating discrepancies in accounts payable/receivable,
                and maintaining double-entry ledger accuracy.
              </p>
              <div className="text-xs font-mono text-[#10b981] flex flex-wrap gap-2">
                <span className="bg-[#10b981]/10 px-2 py-0.5 rounded-xs border border-[#10b981]/20">• BRS</span>
                <span className="bg-[#10b981]/10 px-2 py-0.5 rounded-xs border border-[#10b981]/20">• AP / AR Aging</span>
                <span className="bg-[#10b981]/10 px-2 py-0.5 rounded-xs border border-[#10b981]/20">• Sub-Ledger Balancing</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-5 sm:p-6 bg-[#141c2c] border border-[#1e2a3d] rounded-xs hover:border-[#10b981]/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-xs bg-[#10b981]/10 flex items-center justify-center text-[#10b981] shrink-0">
                  <FileCheck className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#f1f5f9]">
                  Statutory GST &amp; Tax Compliance
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-normal mb-3">
                Preparation, verification, and timely filing of GSTR-1 and GSTR-3B
                returns with systematic maintenance of physical and digital audit
                supporting documentation.
              </p>
              <div className="text-xs font-mono text-[#10b981] flex flex-wrap gap-2">
                <span className="bg-[#10b981]/10 px-2 py-0.5 rounded-xs border border-[#10b981]/20">• GSTR-1</span>
                <span className="bg-[#10b981]/10 px-2 py-0.5 rounded-xs border border-[#10b981]/20">• GSTR-3B</span>
                <span className="bg-[#10b981]/10 px-2 py-0.5 rounded-xs border border-[#10b981]/20">• Audit Trail</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="p-5 sm:p-6 bg-[#141c2c] border border-[#1e2a3d] rounded-xs hover:border-[#10b981]/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-xs bg-[#10b981]/10 flex items-center justify-center text-[#10b981] shrink-0">
                  <Calculator className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#f1f5f9]">
                  Finance Operations &amp; Systems
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-normal mb-3">
                Day-to-day invoicing, commercial billing, vendor/customer statement
                clarifications, and data processing via Tally Prime, ERP, and MS Excel.
              </p>
              <div className="text-xs font-mono text-[#10b981] flex flex-wrap gap-2">
                <span className="bg-[#10b981]/10 px-2 py-0.5 rounded-xs border border-[#10b981]/20">• Tally Prime</span>
                <span className="bg-[#10b981]/10 px-2 py-0.5 rounded-xs border border-[#10b981]/20">• ERP Systems</span>
                <span className="bg-[#10b981]/10 px-2 py-0.5 rounded-xs border border-[#10b981]/20">• VLOOKUP &amp; Pivot</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
