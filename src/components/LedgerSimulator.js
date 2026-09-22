"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Scale, CheckCircle2, FileCheck2, Building2 } from "lucide-react";

export default function LedgerSimulator() {
  const [activeTab, setActiveTab] = useState("balance");

  return (
    <div className="bg-[#141c2c] border border-[#2a3b54] rounded-xs shadow-xl p-5 sm:p-6 relative">
      {/* Header of the Ledger Terminal */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1e2a3d]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#f1f5f9]">
            Operational Ledger Architecture
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-xs border border-[#10b981]/25">
          Active Controls
        </span>
      </div>

      {/* Tab Selector */}
      <div className="grid grid-cols-3 gap-1 bg-[#090d16] p-1 rounded-xs mb-4 border border-[#1e2a3d]">
        <button
          type="button"
          onClick={() => setActiveTab("balance")}
          className={`py-1.5 text-xs font-medium rounded-xs transition-all cursor-pointer ${
            activeTab === "balance"
              ? "bg-[#1e2a3d] text-[#f1f5f9] shadow-xs"
              : "text-[#94a3b8] hover:text-[#f1f5f9]"
          }`}
        >
          Dual Balance
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("brs")}
          className={`py-1.5 text-xs font-medium rounded-xs transition-all cursor-pointer ${
            activeTab === "brs"
              ? "bg-[#1e2a3d] text-[#f1f5f9] shadow-xs"
              : "text-[#94a3b8] hover:text-[#f1f5f9]"
          }`}
        >
          BRS Logic
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("gst")}
          className={`py-1.5 text-xs font-medium rounded-xs transition-all cursor-pointer ${
            activeTab === "gst"
              ? "bg-[#1e2a3d] text-[#f1f5f9] shadow-xs"
              : "text-[#94a3b8] hover:text-[#f1f5f9]"
          }`}
        >
          GST Stream
        </button>
      </div>

      {/* Content Panels */}
      {activeTab === "balance" && (
        <div className="space-y-3 font-mono text-xs">
          <div className="text-[11px] text-[#94a3b8] pb-1 border-b border-[#1e2a3d] flex justify-between">
            <span>Double-Entry General Ledger</span>
            <span>Debit = Credit Check</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center p-2.5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs">
              <div>
                <span className="text-[#f1f5f9] font-medium block">
                  Trade Accounts Receivable (AR)
                </span>
                <span className="text-[10px] text-[#94a3b8]">
                  Debit • Asset ledger
                </span>
              </div>
              <span className="font-semibold text-[#10b981]">Balanced</span>
            </div>

            <div className="flex justify-between items-center p-2.5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs">
              <div>
                <span className="text-[#f1f5f9] font-medium block">
                  Trade Accounts Payable (AP)
                </span>
                <span className="text-[10px] text-[#94a3b8]">
                  Credit • Liability ledger
                </span>
              </div>
              <span className="font-semibold text-[#10b981]">Balanced</span>
            </div>

            <div className="flex justify-between items-center p-2.5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs">
              <div>
                <span className="text-[#f1f5f9] font-medium block">
                  Cash &amp; Bank Ledgers
                </span>
                <span className="text-[10px] text-[#94a3b8]">
                  Voucher verified &amp; posted
                </span>
              </div>
              <span className="font-semibold text-[#10b981]">Reconciled</span>
            </div>
          </div>

          <div className="p-3 bg-[#10b981]/10 border border-[#10b981]/25 rounded-xs mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#10b981]" />
              <span className="font-sans font-medium text-xs text-[#10b981]">
                Trial Balance Equilibrium
              </span>
            </div>
            <span className="text-[#10b981] font-semibold text-xs">
              Matched (DR = CR)
            </span>
          </div>
        </div>
      )}

      {activeTab === "brs" && (
        <div className="space-y-3 font-mono text-xs">
          <div className="text-[11px] text-[#94a3b8] pb-1 border-b border-[#1e2a3d] flex justify-between">
            <span>Bank Reconciliation Model (BRS)</span>
            <span>Timing Resolution</span>
          </div>

          <div className="space-y-2 text-[11px]">
            <div className="p-2.5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs">
              <div className="flex justify-between text-[#f1f5f9] font-medium">
                <span>1. Balance as per Cash Book</span>
                <span className="text-[#10b981]">Base Ledger</span>
              </div>
            </div>

            <div className="p-2.5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs">
              <div className="flex justify-between items-center text-[#cbd5e1]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                  <span>(+) Cheques deposited not yet cleared</span>
                </span>
                <span className="text-[#94a3b8]">Timing Diff</span>
              </div>
            </div>

            <div className="p-2.5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs">
              <div className="flex justify-between items-center text-[#cbd5e1]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e]" />
                  <span>(-) Cheques issued not yet presented</span>
                </span>
                <span className="text-[#94a3b8]">Timing Diff</span>
              </div>
            </div>

            <div className="p-2.5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs">
              <div className="flex justify-between items-center text-[#cbd5e1]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                  <span>(-) Bank charges / interest debits</span>
                </span>
                <span className="text-[#94a3b8]">Adjusting Entry</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-[#10b981]/10 border border-[#10b981]/25 rounded-xs mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
              <span className="font-sans font-medium text-xs text-[#10b981]">
                Reconciled with Passbook
              </span>
            </div>
            <span className="text-[#10b981] font-semibold text-xs">
              Discrepancies Resolved
            </span>
          </div>
        </div>
      )}

      {activeTab === "gst" && (
        <div className="space-y-3 font-mono text-xs">
          <div className="text-[11px] text-[#94a3b8] pb-1 border-b border-[#1e2a3d] flex justify-between">
            <span>Statutory Tax Filing Cycle</span>
            <span>Portal Verification</span>
          </div>

          <div className="space-y-2 text-[11px]">
            <div className="p-2.5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-[#f1f5f9] block">
                    GSTR-1 (Outward Supplies)
                  </span>
                  <span className="text-[10px] text-[#94a3b8]">
                    B2B &amp; B2C Sales Invoices Uploaded
                  </span>
                </div>
                <span className="text-[#10b981] font-semibold">Compliant</span>
              </div>
            </div>

            <div className="p-2.5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-[#f1f5f9] block">
                    GSTR-3B (Monthly Summary)
                  </span>
                  <span className="text-[10px] text-[#94a3b8]">
                    Tax Liability Offset vs ITC Ledger
                  </span>
                </div>
                <span className="text-[#10b981] font-semibold">Filed</span>
              </div>
            </div>

            <div className="p-2.5 bg-[#0d131f] border border-[#1e2a3d] rounded-xs">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-[#f1f5f9] block">
                    Supporting Documentation
                  </span>
                  <span className="text-[10px] text-[#94a3b8]">
                    Vouchers, E-way Bills &amp; Bank Advices
                  </span>
                </div>
                <span className="text-[#10b981] font-semibold">Archived</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-[#10b981]/10 border border-[#10b981]/25 rounded-xs mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-[#10b981]" />
              <span className="font-sans font-medium text-xs text-[#10b981]">
                Statutory Filing Rigor
              </span>
            </div>
            <span className="text-[#10b981] font-semibold text-xs">
              Zero Default
            </span>
          </div>
        </div>
      )}

      {/* Terminal Footer Note */}
      <div className="mt-4 pt-3 border-t border-[#1e2a3d] flex items-center justify-between text-[11px] text-[#94a3b8]">
        <span className="flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-[#10b981]" />
          <span>Mahasai Aluminium Profiles Pvt Ltd</span>
        </span>
        <span className="font-mono">Tally Prime • ERP</span>
      </div>
    </div>
  );
}
