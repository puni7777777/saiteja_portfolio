"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = resumeData.operationalWorkflow;

  return (
    <section id="workflow" className="py-16 md:py-24 border-b border-[#e2e8f0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
            Finance Operations Lifecycle &amp; Workflow
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            A conceptual visual representation of the operational accounting lifecycle—illustrating
            how commercial events transform into verified, compliant financial statements.
          </p>
        </div>

        {/* Workflow Progression Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {steps.map((item, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 text-left border rounded-xs transition-all cursor-pointer relative ${
                  isCurrent
                    ? "bg-[#0f2537] text-white border-[#0f2537] shadow-sm"
                    : "bg-[#fafaf7] text-[#0f172a] border-[#e2e8f0] hover:border-[#cbd5e1]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-semibold px-1.5 py-0.5 rounded-xs ${
                      isCurrent
                        ? "bg-white/15 text-[#34d399]"
                        : "bg-[#e2e8f0] text-[#475569]"
                    }`}
                  >
                    {item.code}
                  </span>
                  <span
                    className={`font-mono text-[11px] ${
                      isCurrent ? "text-[#94a3b8]" : "text-[#94a3b8]"
                    }`}
                  >
                    Step {item.step}
                  </span>
                </div>
                <div className="font-serif font-bold text-xs sm:text-sm truncate">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="p-6 sm:p-8 bg-[#fafaf7] border border-[#cbd5e1] rounded-xs relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#e2e8f0]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 bg-[#065f46] text-white font-mono text-xs font-bold rounded-xs">
                  STAGE {steps[activeStep].step}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#64748b]">
                  {steps[activeStep].code} Process Matrix
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0f172a]">
                {steps[activeStep].title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))
                }
                className="px-3 py-1.5 text-xs font-mono bg-white border border-[#cbd5e1] hover:border-[#065f46] rounded-xs text-[#0f172a] cursor-pointer"
              >
                &larr; Prev Step
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))
                }
                className="px-3 py-1.5 text-xs font-mono bg-white border border-[#cbd5e1] hover:border-[#065f46] rounded-xs text-[#0f172a] cursor-pointer"
              >
                Next Step &rarr;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="font-serif text-base font-bold text-[#0f172a] mb-2">
                Operational Scope &amp; Activity
              </h4>
              <p className="text-sm text-[#334155] leading-relaxed mb-4">
                {steps[activeStep].description}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#065f46]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Standardized Accounting Controls Applied</span>
              </div>
            </div>

            <div className="p-4 bg-white border border-[#e2e8f0] rounded-xs">
              <h4 className="font-serif text-base font-bold text-[#0f172a] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#065f46]" />
                <span>Verification &amp; Internal Audit Check</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-mono">
                {steps[activeStep].verification}
              </p>
            </div>
          </div>

          {/* Workflow Sequence Footnote */}
          <div className="mt-6 pt-4 border-t border-[#e2e8f0] flex items-center justify-between text-[11px] text-[#64748b]">
            <span>Conceptual workflow model for accounting operations</span>
            <span className="font-mono">End-to-End Control Framework</span>
          </div>
        </div>
      </div>
    </section>
  );
}
