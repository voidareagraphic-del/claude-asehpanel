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
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const FEATURE_ICONS = [Factory, Eye, Zap, Award];
const FEATURE_COLORS = ["#7AB648", "#2D4FA3", "#8B5EA4", "#A8CCE0"];
const STEP_COLORS = ["#7AB648", "#2D4FA3", "#E89030", "#8B5EA4", "#A8CCE0", "#7AB648", "#2D4FA3"];

export function Manufacturing() {
  const capacityRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

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
              <SectionLabel text={t.manufacturing.label} accent="green" className="mb-5" />
              <BrandBar width="120px" height={3} className="mb-6" />
              <h2 className="text-display-xl font-black text-white leading-tight">
                {t.manufacturing.headline1}<br />
                <span className="text-white/30">{t.manufacturing.headline2}</span>
              </h2>
            </div>
            <div className="lg:text-right flex flex-col gap-1">
              <div className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{t.manufacturing.capacityLabel}</div>
              <div className="font-black leading-none" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "#7AB648" }}>
                <span ref={capacityRef}>12M</span>
                <span className="text-3xl font-mono text-steel ml-2">m²</span>
              </div>
              <div className="text-steel text-sm">{t.manufacturing.capacitySub}</div>
            </div>
          </div>
        </AnimateIn>

        {/* Features grid */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16" stagger={0.1}>
          {t.manufacturing.features.map((feat, i) => {
            const Icon = FEATURE_ICONS[i];
            const color = FEATURE_COLORS[i];
            return (
              <motion.div
                key={feat.title}
                variants={staggerItem}
                className="rounded-2xl bg-panel border border-white/[0.05] p-7 flex flex-col gap-4 hover:border-white/10 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                  <Icon size={18} color={color} />
                </div>
                <div className="w-8 h-0.5 rounded transition-all duration-300 group-hover:w-16" style={{ background: color }} />
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
              style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(122,182,72,0.06) 0%, transparent 70%)" }} />
            <div className="font-mono text-[0.6rem] uppercase tracking-widest text-muted mb-6">{t.manufacturing.schematicLabel}</div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {t.manufacturing.steps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-2 flex-shrink-0">
                  <div
                    className="rounded-xl p-3 text-center min-w-[80px]"
                    style={{ background: `${STEP_COLORS[i]}14`, border: `1px solid ${STEP_COLORS[i]}30` }}
                  >
                    <div
                      className="text-[0.6rem] font-mono font-bold uppercase tracking-wide leading-tight whitespace-pre-line"
                      style={{ color: STEP_COLORS[i] }}
                    >
                      {step.label}
                    </div>
                  </div>
                  {i < t.manufacturing.steps.length - 1 && (
                    <div className="w-5 h-px flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }} />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-6 border-t border-white/[0.04] pt-6">
              {t.manufacturing.details.map((d) => (
                <div key={d.label}>
                  <div className="font-mono text-[0.58rem] uppercase tracking-widest text-muted mb-1">{d.label}</div>
                  <div className="font-mono text-sm font-bold text-frost">{d.value}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2} className="mt-8 flex flex-wrap gap-4">
          <Button variant="solid-green" size="md" href="#contact">{t.manufacturing.cta1}</Button>
          <Button variant="ghost" size="md" href="#contact">{t.manufacturing.cta2}</Button>
        </AnimateIn>
      </div>
    </section>
  );
}
