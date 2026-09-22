import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Hero from "@/components/Hero";
import ProfileSection from "@/components/ProfileSection";
import ExperienceSection from "@/components/ExperienceSection";
import WorkflowSection from "@/components/WorkflowSection";
import ReconciliationSection from "@/components/ReconciliationSection";
import ComplianceSection from "@/components/ComplianceSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import EducationSection from "@/components/EducationSection";
import TargetRolesSection from "@/components/TargetRolesSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-[#f1f5f9] selection:bg-[#10b981]/25 selection:text-[#10b981]">
      {/* Precision Scroll Indicator */}
      <ScrollProgressBar />

      {/* Sticky Executive Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* Section 5 & 6: Hero & Interactive Ledger Visual */}
        <Hero />

        {/* Section 7: Professional Profile Overview & Operating Focus */}
        <ProfileSection />

        {/* Section 8: Professional Experience (Junior Accountant at Mahasai Aluminium) */}
        <ExperienceSection />

        {/* Section 9: Operational Accounting Workflow Visualization */}
        <WorkflowSection />

        {/* Section 13: Bank Reconciliation Statements (BRS) & Ledger Auditing */}
        <ReconciliationSection />

        {/* Section 12: GST Filing & Statutory Compliance (GSTR-1, GSTR-3B) */}
        <ComplianceSection />

        {/* Section 10 & 11: Interactive Core Financial & Compliance Skills */}
        <SkillsSection />

        {/* Section 14: Tools & Information Systems (Tally Prime, ERP, Excel) */}
        <ToolsSection />

        {/* Section 15 & 16: Education Lineage & Typing Certification */}
        <EducationSection />

        {/* Section 17: Target Career Trajectory & Analytical Roles */}
        <TargetRolesSection />

        {/* Section 18: Verified Resume Archive & Direct Download CTA */}
        <ResumeSection />

        {/* Section 19: Direct Contact Channels & Dispatcher */}
        <ContactSection />
      </main>

      {/* Financial Colophon & Verification Footer */}
      <Footer />
    </div>
  );
}
