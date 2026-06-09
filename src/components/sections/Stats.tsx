"use client";
// src/components/sections/Stats.tsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimateIn, StaggerChildren, staggerItem } from "@/components/ui/AnimateIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandBar } from "@/components/ui/BrandBar";
import { AsteriskMarkGhost } from "@/components/ui/AsteriskMark";
import { EngBadgeRow } from "@/components/ui/EngBadge";
import { motion } from "framer-motion";
import { BRAND_COLORS, type BrandColor } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface Stat {
  numericValue: number;
  displayValue: string;
  suffix: string;
  label: string;
  sublabel: string;
  accent: BrandColor;
}

const STATS: Stat[] = [
  { numericValue: 12,  displayValue: "12M",    suffix: "m²",  label: "Annual Production",  sublabel: "Two continuous lines",              accent: "green"  },
  { numericValue: 2,   displayValue: "2",      suffix: "×",   label: "Production Lines",   sublabel: "Continuous operation",              accent: "blue"   },
  { numericValue: 200, displayValue: "200",    suffix: "mm",  label: "Max Panel Thickness", sublabel: "30mm–200mm full range",             accent: "purple" },
  { numericValue: 40,  displayValue: "±2",     suffix: "kg",  label: "Core Density",        sublabel: "40 ± 2 kg/m³ PIR precision",       accent: "ice"    },
];

function CountUp({ value, suffix, color }: { value: number; suffix: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!ref.current || triggered.current) return;
    gsap.fromTo(
      ref.current,
      { textContent: "0" },
      {
        textContent: value,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          once: true,
        },
      }
    );
    triggered.current = true;
  }, [value]);

  return (
    <span className="font-black tabular-nums" style={{ color }}>
      <span ref={ref}>{value}</span>
      <span className="text-2xl font-mono ml-1 opacity-60">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section id="about" className="relative py-32 bg-[#090909] overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <AsteriskMarkGhost size={600} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <AnimateIn className="text-center mb-20">
          <SectionLabel text="By The Numbers" accent="ice" className="justify-center mb-5" />
          <BrandBar width="120px" height={3} className="mx-auto mb-6" />
          <h2 className="text-display-xl font-black text-white leading-tight">
            Scale that delivers.<br />
            <span className="text-white/30">Precision that endures.</span>
          </h2>
        </AnimateIn>

        {/* Stat cards */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16" stagger={0.12}>
          {STATS.map((stat) => {
            const color = BRAND_COLORS[stat.accent];
            return (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="rounded-2xl bg-panel border border-white/[0.05] p-8 flex flex-col gap-4 hover:border-white/10 transition-colors duration-300 relative overflow-hidden group"
              >
                {/* Top accent border */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: color }} />

                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse 70% 60% at 50% 100%, ${color}08 0%, transparent 70%)` }}
                />

                <div className="text-display-lg leading-none">
                  <CountUp value={stat.numericValue} suffix={stat.suffix} color={color} />
                </div>
                <div>
                  <div className="text-base font-bold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-muted">{stat.sublabel}</div>
                </div>
              </motion.div>
            );
          })}
        </StaggerChildren>

        {/* Certification badges */}
        <AnimateIn delay={0.2} className="flex flex-col items-center gap-5">
          <div className="text-xs font-mono uppercase tracking-widest text-muted">
            International certifications & standards
          </div>
          <EngBadgeRow
            badges={["ISO 9001:2014", "EN 13501-1", "EN 13501-2", "ASTM E84", "NFPA 285", "BS1D0", "ISO/IEC 17025"]}
            className="justify-center"
          />
        </AnimateIn>
      </div>
    </section>
  );
}

