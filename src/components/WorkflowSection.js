"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import LedgerSimulator from "@/components/LedgerSimulator";

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = resumeData.operationalWorkflow;

  return (
    <section id="workflow" className="py-16 md:py-24 border-b border-[#1e2a3d] bg-[#0d131f]">
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
            Finance Operations Lifecycle &amp; Workflow
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            A conceptual visual representation of the operational accounting lifecycle—illustrating
            how commercial events transform into verified, compliant financial statements.
          </p>
        </motion.div>

        {/* Workflow Progression Stepper */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8"
        >
          {steps.map((item, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-3 sm:p-3.5 text-left border rounded-xs transition-all cursor-pointer relative ${
                  isCurrent
                    ? "bg-[#10b981]/15 text-[#f1f5f9] border-[#10b981] shadow-lg"
                    : "bg-[#141c2c] text-[#cbd5e1] border-[#1e2a3d] hover:border-[#2a3b54]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-semibold px-1.5 py-0.5 rounded-xs ${
                      isCurrent
                        ? "bg-[#10b981] text-white"
                        : "bg-[#090d16] text-[#94a3b8] border border-[#1e2a3d]"
                    }`}
                  >
                    {item.code}
                  </span>
                  <span className="font-mono text-[11px] text-[#94a3b8]">
                    Step {item.step}
                  </span>
                </div>
                <div className="font-serif font-bold text-xs sm:text-sm truncate text-[#f1f5f9]">
                  {item.title}
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Active Stage Detailed Breakdown Panel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 sm:p-8 bg-[#141c2c] border border-[#2a3b54] rounded-xs relative shadow-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1e2a3d]">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 bg-[#059669] text-white font-mono text-xs font-bold rounded-xs">
                  STAGE {steps[activeStep].step}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#94a3b8]">
                  {steps[activeStep].code} Process Matrix
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f1f5f9]">
                {steps[activeStep].title}
              </h3>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={() =>
                  setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))
                }
                className="px-3 py-1.5 text-xs font-mono bg-[#090d16] border border-[#2a3b54] hover:border-[#10b981] rounded-xs text-[#cbd5e1] hover:text-[#f1f5f9] cursor-pointer transition-colors"
              >
                &larr; Prev Step
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))
                }
                className="px-3 py-1.5 text-xs font-mono bg-[#090d16] border border-[#2a3b54] hover:border-[#10b981] rounded-xs text-[#cbd5e1] hover:text-[#f1f5f9] cursor-pointer transition-colors"
              >
                Next Step &rarr;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-6">
            <div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#f1f5f9] mb-2">
                Operational Scope &amp; Activity
              </h4>
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-4">
                {steps[activeStep].description}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#10b981]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Standardized Accounting Controls Applied</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-[#090d16] border border-[#1e2a3d] rounded-xs">
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#f1f5f9] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                <span>Verification &amp; Internal Audit Check</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-mono">
                {steps[activeStep].verification}
              </p>
            </div>
          </div>

          {/* Workflow Sequence Footnote */}
          <div className="mt-6 pt-4 border-t border-[#1e2a3d] flex items-center justify-between text-[11px] text-[#94a3b8]">
            <span>Conceptual workflow model for accounting operations</span>
            <span className="font-mono text-[#10b981]">End-to-End Control Framework</span>
          </div>
        </motion.div>

        {/* Interactive Systems Simulator Console */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12"
        >
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#10b981] font-semibold">
              Interactive Systems Simulator
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f1f5f9] mt-1">
              Operational Ledger &amp; Reconciliation Controls
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] mt-1 max-w-3xl">
              Simulated interactive accounting checks: inspect double-entry trial balance equilibrium, bank reconciliation timing adjustments, and statutory GST compliance verification.
            </p>
          </div>
          <LedgerSimulator />
        </motion.div>
      </div>
    </section>
  );
}
