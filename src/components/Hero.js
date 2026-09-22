"use client";

import { useState } from "react";
import {
  Download,
  ArrowDownRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  FileCheck2,
  Scale,
  Building2,
  ArrowRight,
} from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("balance");

  return (
    <section
      id="overview"
      className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-[#e2e8f0]"
    >
      {/* Subtle architectural ledger grid background */}
      <div
        className="absolute inset-0 ledger-grid-bg pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authoritative Editorial Header */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Professional Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-[#059669]" />
              <span className="font-semibold uppercase tracking-wider">
                Junior Accountant • Mahasai Aluminium Profiles
              </span>
            </div>

            {/* Name */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0f172a] leading-[1.1] mb-5">
              {resumeData.personal.name}
            </h1>

            {/* Professional Positioning Title */}
            <div className="text-base sm:text-lg font-medium text-[#065f46] tracking-tight mb-6 pb-4 border-b border-[#e2e8f0] w-full">
              {resumeData.personal.positioning}
            </div>

            {/* Factual Narrative derived strictly from Resume */}
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl mb-8">
              Finance professional with hands-on experience in financial accounting,
              GST compliance (GSTR-1 &amp; GSTR-3B), bank reconciliation (BRS),
              accounts payable &amp; receivable, and financial reporting. Experienced
              in Tally Prime, ERP systems, and MS Excel with practical accounting
              experience since 2023. Currently pursuing an MBA in Finance.
            </p>

            {/* Verified Contact Coordinates Bar */}
            <div className="w-full bg-white border border-[#e2e8f0] p-4 rounded-xs mb-8 shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#475569]">
                  <MapPin className="w-4 h-4 text-[#065f46] shrink-0" />
                  <span className="font-medium text-[#0f172a]">
                    {resumeData.personal.location}
                  </span>
                </div>
                <a
                  href={resumeData.personal.phoneHref}
                  className="flex items-center gap-2 text-[#475569] hover:text-[#065f46] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#065f46] shrink-0" />
                  <span className="font-mono">{resumeData.personal.phone}</span>
                </a>
                <a
                  href={resumeData.personal.emailHref}
                  className="flex items-center gap-2 text-[#475569] hover:text-[#065f46] transition-colors truncate"
                  title={resumeData.personal.email}
                >
                  <Mail className="w-4 h-4 text-[#065f46] shrink-0" />
                  <span className="truncate font-mono">
                    {resumeData.personal.email}
                  </span>
                </a>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#experience"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#0f2537] text-white hover:bg-[#1a364d] text-sm font-medium rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>View Professional Experience</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={resumeData.personal.resumePdfUrl}
                download="SAITEJA_RESUME.pdf"
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#0f172a] hover:bg-[#f8fafc] border border-[#cbd5e1] hover:border-[#065f46] text-sm font-medium rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Download className="w-4 h-4 text-[#065f46]" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-5 py-3.5 text-[#334155] hover:text-[#065f46] text-sm font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Direct Contact</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Conceptual Financial Ledger & Operational Architecture */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#cbd5e1] rounded-xs shadow-md p-5 relative">
              {/* Header of the Ledger Terminal */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e2e8f0]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#065f46]" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0f172a]">
                    Operational Ledger Architecture
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#059669] bg-[#ecfdf5] px-2 py-0.5 rounded-xs border border-[#a7f3d0]">
                  Active Controls
                </span>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-3 gap-1 bg-[#f1f5f9] p-1 rounded-xs mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab("balance")}
                  className={`py-1.5 text-xs font-medium rounded-xs transition-all cursor-pointer ${
                    activeTab === "balance"
                      ? "bg-white text-[#0f172a] shadow-xs"
                      : "text-[#64748b] hover:text-[#0f172a]"
                  }`}
                >
                  Dual Balance
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("brs")}
                  className={`py-1.5 text-xs font-medium rounded-xs transition-all cursor-pointer ${
                    activeTab === "brs"
                      ? "bg-white text-[#0f172a] shadow-xs"
                      : "text-[#64748b] hover:text-[#0f172a]"
                  }`}
                >
                  BRS Logic
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("gst")}
                  className={`py-1.5 text-xs font-medium rounded-xs transition-all cursor-pointer ${
                    activeTab === "gst"
                      ? "bg-white text-[#0f172a] shadow-xs"
                      : "text-[#64748b] hover:text-[#0f172a]"
                  }`}
                >
                  GST Stream
                </button>
              </div>

              {/* Content Panels */}
              {activeTab === "balance" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="text-[11px] text-[#64748b] pb-1 border-b border-[#f1f5f9] flex justify-between">
                    <span>Double-Entry General Ledger</span>
                    <span>Debit = Credit Check</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
                      <div>
                        <span className="text-[#0f172a] font-medium block">
                          Trade Accounts Receivable (AR)
                        </span>
                        <span className="text-[10px] text-[#64748b]">
                          Debit • Asset ledger
                        </span>
                      </div>
                      <span className="font-semibold text-[#065f46]">Balanced</span>
                    </div>

                    <div className="flex justify-between items-center p-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
                      <div>
                        <span className="text-[#0f172a] font-medium block">
                          Trade Accounts Payable (AP)
                        </span>
                        <span className="text-[10px] text-[#64748b]">
                          Credit • Liability ledger
                        </span>
                      </div>
                      <span className="font-semibold text-[#065f46]">Balanced</span>
                    </div>

                    <div className="flex justify-between items-center p-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
                      <div>
                        <span className="text-[#0f172a] font-medium block">
                          Cash &amp; Bank Ledgers
                        </span>
                        <span className="text-[10px] text-[#64748b]">
                          Voucher verified &amp; posted
                        </span>
                      </div>
                      <span className="font-semibold text-[#065f46]">Reconciled</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#ecfdf5] border border-[#a7f3d0] rounded-xs mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-[#065f46]" />
                      <span className="font-sans font-medium text-xs text-[#065f46]">
                        Trial Balance Equilibrium
                      </span>
                    </div>
                    <span className="text-[#065f46] font-semibold text-xs">
                      Matched (DR = CR)
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "brs" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="text-[11px] text-[#64748b] pb-1 border-b border-[#f1f5f9] flex justify-between">
                    <span>Bank Reconciliation Model (BRS)</span>
                    <span>Timing Resolution</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="p-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
                      <div className="flex justify-between text-[#0f172a] font-medium">
                        <span>1. Balance as per Cash Book</span>
                        <span className="text-[#065f46]">Base Ledger</span>
                      </div>
                    </div>

                    <div className="p-2 bg-white border border-[#e2e8f0] rounded-xs">
                      <div className="flex justify-between items-center text-[#334155]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                          <span>(+) Cheques deposited not yet cleared</span>
                        </span>
                        <span className="text-[#64748b]">Timing Diff</span>
                      </div>
                    </div>

                    <div className="p-2 bg-white border border-[#e2e8f0] rounded-xs">
                      <div className="flex justify-between items-center text-[#334155]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" />
                          <span>(-) Cheques issued not yet presented</span>
                        </span>
                        <span className="text-[#64748b]">Timing Diff</span>
                      </div>
                    </div>

                    <div className="p-2 bg-white border border-[#e2e8f0] rounded-xs">
                      <div className="flex justify-between items-center text-[#334155]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
                          <span>(-) Bank charges / interest debits</span>
                        </span>
                        <span className="text-[#64748b]">Adjusting Entry</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#ecfdf5] border border-[#a7f3d0] rounded-xs mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#065f46]" />
                      <span className="font-sans font-medium text-xs text-[#065f46]">
                        Reconciled with Passbook
                      </span>
                    </div>
                    <span className="text-[#065f46] font-semibold text-xs">
                      Discrepancies Resolved
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "gst" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="text-[11px] text-[#64748b] pb-1 border-b border-[#f1f5f9] flex justify-between">
                    <span>Statutory Tax Filing Cycle</span>
                    <span>Portal Verification</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="p-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-bold text-[#0f172a] block">
                            GSTR-1 (Outward Supplies)
                          </span>
                          <span className="text-[10px] text-[#64748b]">
                            B2B &amp; B2C Sales Invoices Uploaded
                          </span>
                        </div>
                        <span className="text-[#065f46] font-semibold">
                          Compliant
                        </span>
                      </div>
                    </div>

                    <div className="p-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-bold text-[#0f172a] block">
                            GSTR-3B (Monthly Summary)
                          </span>
                          <span className="text-[10px] text-[#64748b]">
                            Tax Liability Offset vs ITC Ledger
                          </span>
                        </div>
                        <span className="text-[#065f46] font-semibold">Filed</span>
                      </div>
                    </div>

                    <div className="p-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-bold text-[#0f172a] block">
                            Supporting Documentation
                          </span>
                          <span className="text-[10px] text-[#64748b]">
                            Vouchers, E-way Bills &amp; Bank Advices
                          </span>
                        </div>
                        <span className="text-[#065f46] font-semibold">
                          Archived
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#ecfdf5] border border-[#a7f3d0] rounded-xs mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-[#065f46]" />
                      <span className="font-sans font-medium text-xs text-[#065f46]">
                        Statutory Filing Rigor
                      </span>
                    </div>
                    <span className="text-[#065f46] font-semibold text-xs">
                      Zero Default
                    </span>
                  </div>
                </div>
              )}

              {/* Terminal Footer Note */}
              <div className="mt-4 pt-3 border-t border-[#f1f5f9] flex items-center justify-between text-[11px] text-[#64748b]">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#065f46]" />
                  <span>Mahasai Aluminium Profiles Pvt Ltd</span>
                </span>
                <span className="font-mono">Tally Prime &bull; ERP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
