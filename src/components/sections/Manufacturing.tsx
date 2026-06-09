"use client";
// src/components/sections/Manufacturing.tsx
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimateIn, StaggerChildren, staggerItem } from "@/components/ui/AnimateIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandBar } from "@/components/ui/BrandBar";
import { EngBadgeRow } from "@/components/ui/EngBadge";
import { AsteriskMarkGhost } from "@/components/ui/AsteriskMark";
import { Button } from "@/components/ui/Button";
import { Zap, Eye, Factory, Award } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const TECH_FEATURES = [
  {
    icon: Factory,
    title: "Continuous Production",
    detail: "Two fully-automated continuous production lines — the highest-precision method for sandwich panel manufacturing.",
    color: "#7AB648",
  },
  {
    icon: Eye,
    title: "Smart Quality Control",
    detail: "Highest number of automated inspection stations in the region. Every parameter monitored in real-time.",
    color: "#2D4FA3",
  },
  {
    icon: Zap,
    title: "CNC Precision Forming",
    detail: "CNC bending from 0° to 155° with ±1° accuracy. Automatic digital analysis before every bend.",
    color: "#8B5EA4",
  },
  {
    icon: Award,
    title: "ISO 9001:2014 Certified",
    detail: "Quality management system covering raw material input, in-process monitoring, and final product audit.",
    color: "#A8CCE0",
  },
];

export function Manufacturing() {
  const capacityRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!capacityRef.current || !sectionRef.current) return;
    gsap.fromTo(
      capacityRef.current,
      { innerText: 0 },
      {
        innerText: 12,
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: { trigger: sectionRef.current, start: "top 50%" },
        onUpdate() {
          if (capacityRef.current) capacityRef.current.textContent = `${Math.round(+capacityRef.current.textContent!)}M`;
        },
      }
    );
  }, []);

  return (
    <section id="technology" ref={sectionRef} className="relative py-32 bg-[#0D0D0D] overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <AsteriskMarkGhost size={500} className="left-[-120px] top-1/2 -translate-y-1/2 opacity-[0.025]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimateIn className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <SectionLabel text="Manufacturing Technology" accent="green" className="mb-5" />
              <BrandBar width="120px" height={3} className="mb-6" />
              <h2 className="text-display-xl font-black text-white leading-tight">
                Two lines.<br />
                <span className="text-white/30">Zero compromise.</span>
              </h2>
            </div>
            {/* Animated capacity counter */}
            <div className="lg:text-right flex flex-col gap-1">
              <div className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">Annual capacity</div>
              <div className="font-black leading-none" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "#7AB648" }}>
                <span ref={capacityRef}>12M</span>
                <span className="text-3xl font-mono text-steel ml-2">m²</span>
              </div>
              <div className="text-steel text-sm">One of Asia&apos;s largest producers</div>
            </div>
          </div>
        </AnimateIn>

        {/* Features grid */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16" stagger={0.1}>
          {TECH_FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                variants={staggerItem}
                className="rounded-2xl bg-panel border border-white/[0.05] p-7 flex flex-col gap-4 hover:border-white/10 transition-colors duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${feat.color}18`, border: `1px solid ${feat.color}30` }}
                >
                  <Icon size={18} color={feat.color} />
                </div>
                <div
                  className="w-8 h-0.5 rounded transition-all duration-300 group-hover:w-16"
                  style={{ background: feat.color }}
                />
                <h3 className="text-base font-bold text-white">{feat.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{feat.detail}</p>
              </motion.div>
            );
          })}
        </StaggerChildren>

        {/* Factory image */}
        <AnimateIn delay={0.05} className="mb-5">
          <div className="rounded-2xl overflow-hidden relative h-64">
            <Image src="/images/A03.jpg" alt="Manufacturing" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(13,13,13,0.6) 0%, transparent 50%, rgba(13,13,13,0.3) 100%)" }} />
          </div>
        </AnimateIn>

        {/* Production line visualization */}
        <AnimateIn delay={0.1}>
          <div className="rounded-2xl bg-panel border border-white/[0.05] p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-32 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(122,182,72,0.06) 0%, transparent 70%)" }}
            />
            <div className="font-mono text-[0.6rem] uppercase tracking-widest text-muted mb-6">
              Production line schematic — ASP Continuous Line
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {[
                { label: "Raw Coil\nInput", color: "#7AB648" },
                { label: "Roll\nForming", color: "#2D4FA3" },
                { label: "PIR Foam\nInjection", color: "#E89030" },
                { label: "Press &\nLamination", color: "#8B5EA4" },
                { label: "Automated\nQC Scan", color: "#A8CCE0" },
                { label: "CNC\nCutting", color: "#7AB648" },
                { label: "Panel\nOutput", color: "#2D4FA3" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-2 flex-shrink-0">
                  <div
                    className="rounded-xl p-3 text-center min-w-[80px]"
                    style={{
                      background: `${step.color}14`,
                      border: `1px solid ${step.color}30`,
                    }}
                  >
                    <div
                      className="text-[0.6rem] font-mono font-bold uppercase tracking-wide leading-tight whitespace-pre-line"
                      style={{ color: step.color }}
                    >
                      {step.label}
                    </div>
                  </div>
                  {i < 6 && (
                    <div className="w-5 h-px flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }} />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-6 border-t border-white/[0.04] pt-6">
              <div>
                <div className="font-mono text-[0.58rem] uppercase tracking-widest text-muted mb-1">Blowing agent</div>
                <div className="font-mono text-sm font-bold text-frost">Pentane — Kyoto Protocol compliant</div>
              </div>
              <div>
                <div className="font-mono text-[0.58rem] uppercase tracking-widest text-muted mb-1">Automation</div>
                <div className="font-mono text-sm font-bold text-frost">Fully-automated, minimal operator dependency</div>
              </div>
              <div>
                <div className="font-mono text-[0.58rem] uppercase tracking-widest text-muted mb-1">Quality system</div>
                <div className="font-mono text-sm font-bold text-frost">ISO 9001:2014 + ISO/IEC 17025 laboratory</div>
              </div>
              <div>
                <div className="font-mono text-[0.58rem] uppercase tracking-widest text-muted mb-1">Steel coating</div>
                <div className="font-mono text-sm font-bold text-frost">PE / SMP / PVDF / Plastisol options</div>
              </div>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2} className="mt-8 flex flex-wrap gap-4">
          <Button variant="solid-green" size="md" href="#contact">
            Production Specifications
          </Button>
          <Button variant="ghost" size="md" href="#contact">
            Quality Certifications
          </Button>
        </AnimateIn>
      </div>
    </section>
  );
}

