import Link from "next/link";
import { ArrowUp, Download, ShieldCheck } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function Footer() {
  const { personal } = resumeData;

  return (
    <footer className="bg-[#070b12] text-[#cbd5e1] py-12 border-t border-[#1e2a3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#1e2a3d]">
          {/* Col 1: Identity & Statement */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 flex items-center justify-center font-serif font-bold text-sm">
                {personal.initials}
              </div>
              <span className="font-serif font-bold text-lg text-[#f1f5f9]">
                {personal.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed max-w-md">
              {personal.positioning}. Junior Accountant at Mahasai Aluminium Profiles
              Pvt Ltd. Practical accounting experience, GST compliance (GSTR-1, GSTR-3B),
              and BRS execution since 2023.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0d131f] border border-[#1e2a3d] rounded-xs text-[11px] font-mono text-[#10b981]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Strictly Verified Against SAITEJA_RESUME.pdf</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#64748b] block mb-3">
              Portfolio Navigation
            </span>
            <div className="flex flex-col space-y-1.5 text-xs text-[#94a3b8]">
              <a href="#overview" className="hover:text-[#10b981] transition-colors">Overview</a>
              <a href="#experience" className="hover:text-[#10b981] transition-colors">Experience (Mahasai Aluminium)</a>
              <a href="#workflow" className="hover:text-[#10b981] transition-colors">Operations Workflow</a>
              <a href="#reconciliation" className="hover:text-[#10b981] transition-colors">Reconciliation (BRS)</a>
              <a href="#gst" className="hover:text-[#10b981] transition-colors">GST Compliance</a>
              <a href="#skills" className="hover:text-[#10b981] transition-colors">Core Capabilities</a>
              <a href="#education" className="hover:text-[#10b981] transition-colors">Education &amp; Credentials</a>
              <a href="#target-roles" className="hover:text-[#10b981] transition-colors">Target Roles</a>
              <a href="#contact" className="hover:text-[#10b981] transition-colors">Direct Contact</a>
            </div>
          </div>

          {/* Col 3: Direct Coordinates & Resume */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#64748b] block mb-2">
              Verified Coordinates
            </span>
            <div className="space-y-1 text-xs text-[#cbd5e1] font-mono">
              <p>{personal.location}</p>
              <p>
                <a href={personal.phoneHref} className="hover:text-[#10b981] transition-colors">
                  {personal.phone}
                </a>
              </p>
              <p className="truncate">
                <a href={personal.emailHref} className="hover:text-[#10b981] transition-colors" title={personal.email}>
                  {personal.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={personal.resumePdfUrl}
                download="SAITEJA_RESUME.pdf"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#059669] hover:bg-[#047857] text-white text-xs font-medium rounded-xs transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official Resume PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p>
            &copy; {new Date().getFullYear()} {personal.name}. All verified credentials reserved.
          </p>

          <a
            href="#overview"
            className="flex items-center gap-1 hover:text-[#10b981] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
