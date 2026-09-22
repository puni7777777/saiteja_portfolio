"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Layers } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { categories } = resumeData.skills;

  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-[#1e2a3d] bg-[#090d16]">
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
            Core Financial &amp; Technical Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            Directly derived from commercial accounting operations and formal commerce &amp; MBA
            curricula. No arbitrary percentages; each capability reflects verified operational practice.
          </p>
        </motion.div>

        {/* Category Switcher Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#1e2a3d]"
        >
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-xs font-mono font-medium rounded-xs transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-[#10b981] text-white shadow-md font-semibold"
                : "bg-[#141c2c] text-[#cbd5e1] border border-[#1e2a3d] hover:border-[#2a3b54]"
            }`}
          >
            All Disciplines ({categories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-mono font-medium rounded-xs transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#10b981] text-white shadow-md font-semibold"
                  : "bg-[#141c2c] text-[#cbd5e1] border border-[#1e2a3d] hover:border-[#2a3b54]"
              }`}
            >
              {cat.name} ({cat.skills.length})
            </button>
          ))}
        </motion.div>

        {/* Skill Groups Grid with Staggered Scroll Animation */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id}>
              {/* Category Heading with Fade-in */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <Layers className="w-4 h-4 text-[#10b981]" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f1f5f9]">
                  {category.name}
                </h3>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.45, delay: 0.06 * idx }}
                    className="p-5 bg-[#141c2c] border border-[#1e2a3d] rounded-xs flex flex-col justify-between hover:border-[#10b981]/50 transition-colors shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-serif font-bold text-sm text-[#f1f5f9]">
                          {skill.name}
                        </h4>
                        <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                      </div>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-[#1e2a3d] flex items-center justify-between text-[10px] font-mono text-[#94a3b8]">
                      <span>Verified Practice</span>
                      <span className="text-[#10b981] font-semibold">Active</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
