import { Download, ExternalLink, FileText, CheckCircle2, Shield } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function ResumeSection() {
  const { personal } = resumeData;

  return (
    <section id="resume-download" className="py-16 md:py-24 border-b border-[#e2e8f0] bg-[#fafaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#cbd5e1] rounded-xs shadow-xs p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Information */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ecfdf5] border border-[#a7f3d0] rounded-xs text-xs font-mono text-[#065f46] mb-4">
                <Shield className="w-3.5 h-3.5" />
                <span>Primary Document &amp; Single Source of Truth</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
                Official Resume &amp; Credential Archive
              </h2>

              <p className="text-base text-[#475569] leading-relaxed mb-6 max-w-2xl">
                Download the official, unabridged curriculum vitae of S. Venkata Sai Teja in PDF format.
                Contains full verification of professional accounting experience at Mahasai Aluminium
                Profiles Pvt Ltd, statutory GST responsibilities, BRS methodologies, and education.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#334155] mb-2 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Verified Contact Details &amp; Location</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Full General Ledger &amp; Tax Scope</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>MBA &amp; B.Com Academic Transcripts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Typing Certification Record</span>
                </div>
              </div>
            </div>

            {/* Right Column: Actions */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={personal.resumePdfUrl}
                download="SAITEJA_RESUME.pdf"
                className="w-full py-3.5 px-6 bg-[#065f46] hover:bg-[#044e39] text-white text-sm font-medium rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personal.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-white hover:bg-[#f8fafc] text-[#0f172a] border border-[#cbd5e1] hover:border-[#065f46] text-sm font-medium rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <ExternalLink className="w-4 h-4 text-[#065f46]" />
                <span>View Resume in Browser</span>
              </a>

              <div className="text-center mt-2">
                <span className="text-[11px] font-mono text-[#64748b]">
                  Document: SAITEJA_RESUME.pdf (Original)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
