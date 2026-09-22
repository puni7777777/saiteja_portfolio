"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Scale,
  FileSpreadsheet,
  AlertCircle,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function ReconciliationSection() {
  const [activeStep, setActiveStep] = useState(2); // Start at discrepancy identification
  const engine = resumeData.reconciliationEngine;

  return (
    <section id="reconciliation" className="py-16 md:py-24 border-b border-[#1e2a3d] bg-[#090d16]">
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
            Bank &amp; Ledger Reconciliation Architecture
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            A core operational domain at Mahasai Aluminium Profiles: systematically harmonizing
            internal cash books with commercial bank records, isolating variances, and
            guaranteeing financial truth.
          </p>
        </motion.div>

        {/* 5-Stage Reconciliation Methodology Flow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10"
        >
          {engine.stages.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 text-left rounded-xs border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#10b981]/15 text-[#f1f5f9] border-[#10b981] shadow-lg"
                    : "bg-[#141c2c] text-[#cbd5e1] border-[#1e2a3d] hover:border-[#2a3b54]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded-xs ${
                      isSelected
                        ? "bg-[#10b981] text-white"
                        : "bg-[#090d16] text-[#94a3b8] border border-[#1e2a3d]"
                    }`}
                  >
                    Phase {idx + 1}
                  </span>
                  {idx < 4 && (
                    <span className="text-xs text-[#94a3b8] opacity-50 hidden lg:inline">&rarr;</span>
                  )}
                </div>
                <div className="font-serif font-bold text-sm mb-1 text-[#f1f5f9]">{item.stage}</div>
                <div
                  className={`text-xs ${
                    isSelected ? "text-[#10b981]" : "text-[#94a3b8]"
                  }`}
                >
                  {item.action}
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Active Reconciliation Phase Detail */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#141c2c] border border-[#2a3b54] rounded-xs p-6 sm:p-8 mb-10 shadow-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1e2a3d]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xs bg-[#10b981]/10 border border-[#10b981]/25 text-[#10b981] flex items-center justify-center font-mono font-bold text-sm">
                0{activeStep + 1}
              </span>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f1f5f9]">
                  {engine.stages[activeStep].stage}: {engine.stages[activeStep].action}
                </h3>
                <span className="text-xs font-mono text-[#94a3b8]">
                  Operational Protocol • Mahasai Aluminium Profiles Pvt Ltd
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#090d16] border border-[#1e2a3d] rounded-xs text-xs font-mono text-[#cbd5e1] self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4 text-[#10b981]" />
              <span>Internal Accounting Control Standard</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed pt-4 max-w-3xl">
            {engine.stages[activeStep].detail}
          </p>
        </motion.div>

        {/* Conceptual Dual Ledger Visual: Cash Book vs Bank Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Cash Book (Internal Records) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-[#141c2c] border border-[#2a3b54] rounded-xs p-5 sm:p-6 shadow-xl"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1e2a3d]">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-[#10b981]" />
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#f1f5f9]">
                  Internal Cash &amp; Bank Book (ERP)
                </h4>
              </div>
              <span className="text-xs font-mono bg-[#090d16] border border-[#1e2a3d] text-[#94a3b8] px-2 py-0.5 rounded-xs">
                General Ledger
              </span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs flex justify-between items-center">
                <div>
                  <span className="text-[#f1f5f9] font-medium block">
                    Recorded Sales Receipts (AR)
                  </span>
                  <span className="text-[10px] text-[#94a3b8]">
                    Customer RTGS &amp; Cheques Logged
                  </span>
                </div>
                <span className="text-[#10b981] font-semibold">Matched</span>
              </div>

              <div className="p-2.5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs flex justify-between items-center">
                <div>
                  <span className="text-[#f1f5f9] font-medium block">
                    Vendor Payments Issued (AP)
                  </span>
                  <span className="text-[10px] text-[#94a3b8]">
                    Cheques Dispatched to Aluminium Suppliers
                  </span>
                </div>
                <span className="text-[#10b981] font-semibold">Matched</span>
              </div>

              <div className="p-2.5 bg-[#f59e0b]/10 border border-[#f59e0b]/25 rounded-xs flex justify-between items-center">
                <div>
                  <span className="text-[#fcd34d] font-medium block flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#f59e0b]" />
                    <span>Unpresented Cheques (Timing Variance)</span>
                  </span>
                  <span className="text-[10px] text-[#fbbf24]">
                    Issued in books; pending payee clearing at bank
                  </span>
                </div>
                <span className="text-[#fcd34d] font-semibold text-[11px]">
                  Pending Clearing
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1e2a3d] text-[11px] text-[#94a3b8] flex justify-between">
              <span>Source: Tally Prime &amp; Internal ERP</span>
              <span className="font-mono text-[#10b981]">Daily Maintenance</span>
            </div>
          </motion.div>

          {/* Bank Passbook Statement (Commercial Banking) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-[#141c2c] border border-[#2a3b54] rounded-xs p-5 sm:p-6 shadow-xl"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1e2a3d]">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#10b981]" />
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#f1f5f9]">
                  Commercial Bank Statement
                </h4>
              </div>
              <span className="text-xs font-mono bg-[#090d16] border border-[#1e2a3d] text-[#94a3b8] px-2 py-0.5 rounded-xs">
                Bank External
              </span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs flex justify-between items-center">
                <div>
                  <span className="text-[#f1f5f9] font-medium block">
                    Customer Inward Remittances
                  </span>
                  <span className="text-[10px] text-[#94a3b8]">
                    Direct NEFT/RTGS Bank Credits
                  </span>
                </div>
                <span className="text-[#10b981] font-semibold">Verified</span>
              </div>

              <div className="p-2.5 bg-[#f59e0b]/10 border border-[#f59e0b]/25 rounded-xs flex justify-between items-center">
                <div>
                  <span className="text-[#fcd34d] font-medium block flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#f59e0b]" />
                    <span>Direct Bank Debits / Service Charges</span>
                  </span>
                  <span className="text-[10px] text-[#fbbf24]">
                    Bank charges posted on passbook; journal voucher required
                  </span>
                </div>
                <span className="text-[#fcd34d] font-semibold text-[11px]">
                  Entry Posted
                </span>
              </div>

              <div className="p-2.5 bg-[#10b981]/10 border border-[#10b981]/25 rounded-xs flex justify-between items-center">
                <div>
                  <span className="text-[#34d399] font-medium block flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>Reconciled Closing Balance</span>
                  </span>
                  <span className="text-[10px] text-[#10b981]">
                    Adjusted Cash Book matches Bank Statement exactly
                  </span>
                </div>
                <span className="text-[#10b981] font-semibold text-[11px]">
                  Equilibrium
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1e2a3d] text-[11px] text-[#94a3b8] flex justify-between">
              <span>Source: Commercial Bank Portal</span>
              <span className="font-mono text-[#10b981]">Monthly BRS Complete</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
