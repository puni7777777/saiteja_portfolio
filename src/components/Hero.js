"use client";

import { motion } from "motion/react";
import {
  Download,
  ArrowDownRight,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function Hero() {
  const { personal } = resumeData;

  return (
    <section
      id="overview"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#1e2a3d] bg-[#090d16]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* PHOTO COLUMN:
              On Mobile: Appears first (order-1), centered, constrained width.
              On Desktop: Appears in right column (lg:order-2, lg:col-span-5). */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-sm">
              {/* Outer architectural frame */}
              <div className="relative rounded-xs overflow-hidden border border-[#2a3b54] bg-[#141c2c] shadow-2xl">
                {/* Profile Photo */}
                <div className="aspect-[4/5] overflow-hidden bg-[#0d131f] relative">
                  <img
                    src={personal.photoUrl}
                    alt={`${personal.name} - Professional Portrait`}
                    className="w-full h-full object-cover object-top filter contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Photo Caption Strip */}
                <div className="p-3 sm:p-3.5 bg-[#0d131f] border-t border-[#1e2a3d] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                    <span className="font-mono text-xs text-[#cbd5e1] font-semibold tracking-wide">
                      {personal.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-xs border border-[#10b981]/25">
                    Junior Accountant
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TEXT NARRATIVE COLUMN:
              On Mobile: Appears under photo (order-2).
              On Desktop: Appears in left column (lg:order-1, lg:col-span-7). */}
          <div className="w-full order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#10b981]/10 border border-[#10b981]/25 text-[#10b981] text-xs font-mono mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="font-semibold uppercase tracking-wider">
                Junior Accountant • Mahasai Aluminium Profiles
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f1f5f9] leading-[1.1] mb-4"
            >
              {personal.name}
            </motion.h1>

            {/* Professional Positioning Title */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base lg:text-lg font-medium text-[#10b981] tracking-tight mb-5 pb-3 border-b border-[#1e2a3d] w-full"
            >
              {personal.positioning}
            </motion.div>

            {/* Factual Narrative derived strictly from Resume */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed max-w-2xl mb-7"
            >
              Finance professional with hands-on experience in financial accounting,
              GST compliance (GSTR-1 &amp; GSTR-3B), bank reconciliation (BRS),
              accounts payable &amp; receivable, and financial reporting. Experienced
              in Tally Prime, ERP systems, and MS Excel with practical accounting
              experience since 2023. Currently pursuing an MBA in Finance.
            </motion.p>

            {/* Verified Contact Coordinates Bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full bg-[#141c2c] border border-[#1e2a3d] p-3.5 sm:p-4 rounded-xs mb-7 shadow-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#94a3b8]">
                  <MapPin className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span className="font-medium text-[#f1f5f9]">
                    {personal.location}
                  </span>
                </div>
                <a
                  href={personal.phoneHref}
                  className="flex items-center gap-2 text-[#94a3b8] hover:text-[#10b981] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span className="font-mono">{personal.phone}</span>
                </a>
                <a
                  href={personal.emailHref}
                  className="flex items-center gap-2 text-[#94a3b8] hover:text-[#10b981] transition-colors truncate"
                  title={personal.email}
                >
                  <Mail className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span className="truncate font-mono">
                    {personal.email}
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <a
                href="#experience"
                className="w-full sm:w-auto px-5 py-3 bg-[#059669] hover:bg-[#047857] text-white text-xs sm:text-sm font-medium rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>View Professional Experience</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumePdfUrl}
                download="SAITEJA_RESUME.pdf"
                className="w-full sm:w-auto px-5 py-3 bg-[#141c2c] hover:bg-[#182236] text-[#f1f5f9] border border-[#2a3b54] hover:border-[#10b981] text-xs sm:text-sm font-medium rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#10b981]" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-4 py-3 text-[#cbd5e1] hover:text-[#10b981] text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Direct Contact</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
