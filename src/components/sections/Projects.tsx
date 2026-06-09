"use client";
// src/components/sections/Projects.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateIn, StaggerChildren, staggerItem } from "@/components/ui/AnimateIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandBar } from "@/components/ui/BrandBar";
import { AsteriskMark } from "@/components/ui/AsteriskMark";
import { ArrowRight, MapPin } from "lucide-react";
import { BRAND_COLORS, type BrandColor } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectStatic {
  accent: BrandColor;
  size: "large" | "medium" | "small";
  system: string;
  year: string;
  area: string;
  image?: string;
}

const PROJECT_STATIC: ProjectStatic[] = [
  { accent: "blue",   size: "large",  system: "ASP-CS + ASP-RO", year: "2024", area: "42,000 m²", image: "/images/A04.jpg" },
  { accent: "purple", size: "medium", system: "ASP-CR + ASP-CS", year: "2023", area: "8,200 m²" },
  { accent: "green",  size: "medium", system: "ASP-WA + ASP-RO", year: "2024", area: "18,600 m²" },
  { accent: "ice",    size: "small",  system: "ASP-SF Facade",   year: "2023", area: "11,400 m²" },
  { accent: "green",  size: "small",  system: "ASP-RO + ASP-WA", year: "2024", area: "26,000 m²" },
];

function ProjectCard({ project }: { project: ProjectStatic & { title: string; location: string; category: string } }) {
  const color = BRAND_COLORS[project.accent];

  return (
    <motion.div
      variants={staggerItem}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-panel border border-white/[0.05] hover:border-white/10 transition-all duration-500"
      style={{ minHeight: project.size === "large" ? 380 : project.size === "medium" ? 280 : 220 }}
    >
      {/* Project visual */}
      <div className="absolute inset-0">
        {project.image ? (
          <>
            <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,16,24,0.55) 0%, rgba(10,16,24,0.35) 100%)" }} />
          </>
        ) : (
          <div className="absolute inset-0" style={{ background: project.size === "large" ? `linear-gradient(135deg, #0E1420 0%, #141C28 60%, #0A1018 100%)` : `linear-gradient(135deg, #101418 0%, #181C20 100%)` }} />
        )}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-30 group-hover:opacity-60 transition-opacity duration-500"
          style={{ background: `linear-gradient(0deg, ${color}20 0%, transparent 100%)` }} />
      </div>

      {/* Category tag */}
      <div className="absolute top-5 left-5 z-10">
        <div className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider"
          style={{ background: `${color}1A`, color, border: `1px solid ${color}30` }}>
          <AsteriskMark size={9} />
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="mb-3" style={{ height: 1, background: `linear-gradient(90deg, ${color}60, transparent)`, width: "40%" }} />
        <h3 className="font-bold text-white mb-1.5 leading-tight" style={{ fontSize: project.size === "large" ? "1.2rem" : "1rem" }}>
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 mb-4">
          <MapPin size={11} color={color} />
          <span className="text-xs text-steel">{project.location}</span>
        </div>

        <div className="flex flex-wrap gap-3 items-end justify-between">
          <div className="flex gap-4">
            <div>
              <div className="font-mono text-[0.55rem] uppercase tracking-widest text-muted mb-0.5">System</div>
              <div className="font-mono text-xs font-semibold text-frost">{project.system}</div>
            </div>
            <div>
              <div className="font-mono text-[0.55rem] uppercase tracking-widest text-muted mb-0.5">Area</div>
              <div className="font-mono text-xs font-semibold text-frost">{project.area}</div>
            </div>
            <div>
              <div className="font-mono text-[0.55rem] uppercase tracking-widest text-muted mb-0.5">Year</div>
              <div className="font-mono text-xs font-semibold text-frost">{project.year}</div>
            </div>
          </div>
          <ArrowRight size={16} color={color} className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const projects = PROJECT_STATIC.map((s, i) => ({ ...s, ...t.projects.items[i] }));

  return (
    <section id="projects" className="relative py-32 bg-[#0C0C0C]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <AnimateIn className="mb-16">
          <SectionLabel text={t.projects.label} accent="blue" className="mb-5" />
          <BrandBar width="120px" height={3} className="mb-6" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-display-xl font-black text-white leading-tight">
              {t.projects.headline1}<br />
              <span className="text-white/30">{t.projects.headline2}</span>
            </h2>
            <p className="text-base text-steel max-w-sm leading-relaxed lg:text-right">{t.projects.description}</p>
          </div>
        </AnimateIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.08}>
          <div className="md:col-span-2 md:row-span-2">
            <ProjectCard project={projects[0]} />
          </div>
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} />
          <ProjectCard project={projects[3]} />
          <ProjectCard project={projects[4]} />
        </StaggerChildren>
      </div>
    </section>
  );
}
