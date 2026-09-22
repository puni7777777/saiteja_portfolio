"use client";

import { useState } from "react";
import {
  Scale,
  Search,
  CheckCircle,
  FileSpreadsheet,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function ReconciliationSection() {
  const [activeStep, setActiveStep] = useState(2); // Start at discrepancy identification
  const engine = resumeData.reconciliationEngine;

  return (
    <section id="reconciliation" className="py-16 md:py-24 border-b border-[#e2e8f0] bg-[#fafaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
            Bank &amp; Ledger Reconciliation Architecture
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            A core operational domain at Mahasai Aluminium Profiles: systematically harmonizing
            internal cash books with commercial bank records, isolating variances, and
            guaranteeing financial truth.
          </p>
        </div>

        {/* 5-Stage Reconciliation Methodology Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {engine.stages.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 text-left rounded-xs border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#065f46] text-white border-[#065f46] shadow-sm"
                    : "bg-white text-[#0f172a] border-[#e2e8f0] hover:border-[#cbd5e1]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded-xs ${
                      isSelected
                        ? "bg-white/20 text-[#a7f3d0]"
                        : "bg-[#f1f5f9] text-[#64748b]"
                    }`}
                  >
                    Phase {idx + 1}
                  </span>
                  {idx < 4 && (
                    <span className="text-xs opacity-50 hidden lg:inline">&rarr;</span>
                  )}
                </div>
                <div className="font-serif font-bold text-sm mb-1">{item.stage}</div>
                <div
                  className={`text-xs ${
                    isSelected ? "text-[#d1fae5]" : "text-[#64748b]"
                  }`}
                >
                  {item.action}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Reconciliation Phase Detail */}
        <div className="bg-white border border-[#cbd5e1] rounded-xs p-6 sm:p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#e2e8f0]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xs bg-[#ecfdf5] text-[#065f46] flex items-center justify-center font-mono font-bold text-sm">
                0{activeStep + 1}
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#0f172a]">
                  {engine.stages[activeStep].stage}: {engine.stages[activeStep].action}
                </h3>
                <span className="text-xs font-mono text-[#64748b]">
                  Operational Protocol • Mahasai Aluminium Profiles Pvt Ltd
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs text-xs font-mono text-[#334155]">
              <ShieldCheck className="w-4 h-4 text-[#065f46]" />
              <span>Internal Accounting Control Standard</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#334155] leading-relaxed pt-4 max-w-3xl">
            {engine.stages[activeStep].detail}
          </p>
        </div>

        {/* Conceptual Dual Ledger Visual: Cash Book vs Bank Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cash Book (Internal Records) */}
          <div className="bg-white border border-[#cbd5e1] rounded-xs p-6">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e2e8f0]">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-[#065f46]" />
                <h4 className="font-serif font-bold text-base text-[#0f172a]">
                  Internal Cash &amp; Bank Book (ERP)
                </h4>
              </div>
              <span className="text-xs font-mono bg-[#f1f5f9] text-[#475569] px-2 py-0.5 rounded-xs">
                General Ledger
              </span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs flex justify-between items-center">
                <div>
                  <span className="text-[#0f172a] font-medium block">
                    Recorded Sales Receipts (AR)
                  </span>
                  <span className="text-[10px] text-[#64748b]">
                    Customer RTGS &amp; Cheques Logged
                  </span>
                </div>
                <span className="text-[#065f46] font-semibold">Matched</span>
              </div>

              <div className="p-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs flex justify-between items-center">
                <div>
                  <span className="text-[#0f172a] font-medium block">
                    Vendor Payments Issued (AP)
                  </span>
                  <span className="text-[10px] text-[#64748b]">
                    Cheques Dispatched to Aluminium Suppliers
                  </span>
                </div>
                <span className="text-[#065f46] font-semibold">Matched</span>
              </div>

              <div className="p-2.5 bg-[#fffbeb] border border-[#fde68a] rounded-xs flex justify-between items-center">
                <div>
                  <span className="text-[#92400e] font-medium block flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#d97706]" />
                    <span>Unpresented Cheques (Timing Variance)</span>
                  </span>
                  <span className="text-[10px] text-[#b45309]">
                    Issued in books; pending payee clearing at bank
                  </span>
                </div>
                <span className="text-[#b45309] font-semibold text-[11px]">
                  Pending Clearing
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#f1f5f9] text-[11px] text-[#64748b] flex justify-between">
              <span>Source: Tally Prime &amp; Internal ERP</span>
              <span className="font-mono">Daily Maintenance</span>
            </div>
          </div>

          {/* Bank Passbook Statement (Commercial Banking) */}
          <div className="bg-white border border-[#cbd5e1] rounded-xs p-6">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e2e8f0]">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#065f46]" />
                <h4 className="font-serif font-bold text-base text-[#0f172a]">
                  Commercial Bank Statement
                </h4>
              </div>
              <span className="text-xs font-mono bg-[#f1f5f9] text-[#475569] px-2 py-0.5 rounded-xs">
                Bank External
              </span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs flex justify-between items-center">
                <div>
                  <span className="text-[#0f172a] font-medium block">
                    Customer Inward Remittances
                  </span>
                  <span className="text-[10px] text-[#64748b]">
                    Direct NEFT/RTGS Bank Credits
                  </span>
                </div>
                <span className="text-[#065f46] font-semibold">Verified</span>
              </div>

              <div className="p-2.5 bg-[#fffbeb] border border-[#fde68a] rounded-xs flex justify-between items-center">
                <div>
                  <span className="text-[#92400e] font-medium block flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#d97706]" />
                    <span>Direct Bank Debits / Service Charges</span>
                  </span>
                  <span className="text-[10px] text-[#b45309]">
                    Bank charges posted on passbook; journal voucher required
                  </span>
                </div>
                <span className="text-[#b45309] font-semibold text-[11px]">
                  Entry Posted
                </span>
              </div>

              <div className="p-2.5 bg-[#ecfdf5] border border-[#a7f3d0] rounded-xs flex justify-between items-center">
                <div>
                  <span className="text-[#065f46] font-medium block flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Reconciled Closing Balance</span>
                  </span>
                  <span className="text-[10px] text-[#047857]">
                    Adjusted Cash Book matches Bank Statement exactly
                  </span>
                </div>
                <span className="text-[#065f46] font-semibold text-[11px]">
                  Equilibrium
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#f1f5f9] text-[11px] text-[#64748b] flex justify-between">
              <span>Source: Commercial Bank Portal</span>
              <span className="font-mono">Monthly BRS Complete</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
