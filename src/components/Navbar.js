"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, Check, Copy } from "lucide-react";
import { resumeData } from "@/data/resumeData";

const NAV_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#experience", label: "Experience" },
  { href: "#workflow", label: "Workflow" },
  { href: "#reconciliation", label: "Reconciliation" },
  { href: "#gst", label: "GST Compliance" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#target-roles", label: "Target Roles" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(resumeData.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fafaf7]/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-xs py-3"
          : "bg-[#fafaf7] border-b border-[#e2e8f0]/60 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <Link
            href="#overview"
            className="flex items-center gap-3 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#065f46]"
          >
            <div className="w-9 h-9 rounded-sm bg-[#0f2537] text-[#fafaf7] flex items-center justify-center font-serif font-bold text-sm tracking-wide">
              {resumeData.personal.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base tracking-tight text-[#0f172a] group-hover:text-[#065f46] transition-colors">
                {resumeData.personal.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748b]">
                  MBA Finance • Hyderabad
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-6"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-wide uppercase text-[#334155] hover:text-[#065f46] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[1.5px] hover:after:bg-[#065f46]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex px-3 items-center gap-3">
            {/* <button
              onClick={handleCopyEmail}
              type="button"
              className="px-3 py-1.5 text-xs font-mono text-[#334155] bg-white border border-[#cbd5e1] hover:border-[#065f46] rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span className="text-[#059669]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#64748b]" />
                  <span>Copy Email</span>
                </>
              )}
            </button> */}

            <a
              href={resumeData.personal.resumePdfUrl}
              download="SAITEJA_RESUME.pdf"
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-[#065f46] hover:bg-[#044e39] rounded-xs transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={resumeData.personal.resumePdfUrl}
              download="SAITEJA_RESUME.pdf"
              className="sm:hidden px-2.5 py-1.5 text-xs font-medium text-white bg-[#065f46] rounded-xs flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              <span>PDF</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0f172a] hover:bg-[#f1f5f9] rounded-xs transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-[#e2e8f0] pb-4 flex flex-col gap-2 bg-[#fafaf7]">
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-[#334155] hover:bg-white rounded-xs border border-transparent hover:border-[#e2e8f0]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 mt-1 border-t border-[#e2e8f0] flex flex-col gap-2">
              <button
                onClick={handleCopyEmail}
                type="button"
                className="w-full py-2 text-xs font-mono text-[#334155] bg-white border border-[#cbd5e1] rounded-xs flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#059669]" />
                    <span className="text-[#059669]">
                      saitejasuravaram@gmail.com Copied
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#64748b]" />
                    <span>Copy saitejasuravaram@gmail.com</span>
                  </>
                )}
              </button>

              <a
                href={resumeData.personal.resumePdfUrl}
                download="SAITEJA_RESUME.pdf"
                className="w-full py-2.5 text-xs font-medium text-white bg-[#065f46] hover:bg-[#044e39] rounded-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Resume (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
