"use client";

import { useState } from "react";
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
    <section id="skills" className="py-16 md:py-24 border-b border-[#e2e8f0] bg-[#fafaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
            Core Financial &amp; Technical Capabilities
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Directly derived from commercial accounting operations and formal commerce &amp; MBA
            curricula. No arbitrary percentages; each capability reflects verified operational practice.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#e2e8f0]">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-xs font-mono font-medium rounded-xs transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-[#0f2537] text-white shadow-xs"
                : "bg-white text-[#334155] border border-[#cbd5e1] hover:border-[#065f46]"
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
                  ? "bg-[#065f46] text-white shadow-xs"
                  : "bg-white text-[#334155] border border-[#cbd5e1] hover:border-[#065f46]"
              }`}
            >
              {cat.name} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-4 h-4 text-[#065f46]" />
                <h3 className="font-serif text-xl font-bold text-[#0f172a]">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white border border-[#e2e8f0] rounded-xs flex flex-col justify-between hover:border-[#065f46] transition-colors shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-serif font-bold text-sm text-[#0f172a]">
                          {skill.name}
                        </h4>
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-[#f1f5f9] flex items-center justify-between text-[10px] font-mono text-[#64748b]">
                      <span>Verified Practice</span>
                      <span className="text-[#065f46] font-semibold">Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
