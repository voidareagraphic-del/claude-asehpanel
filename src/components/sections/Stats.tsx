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
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const STAT_ACCENTS: BrandColor[] = ["green", "blue", "purple", "ice"];
const STAT_DISPLAY = ["12M", "2", "200", "±2"];
const STAT_SUFFIXES = ["m²", "×", "mm", "kg"];
const STAT_NUMERIC = [12, 2, 200, 40];

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
        scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
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
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-32 bg-[#090909] overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <AsteriskMarkGhost size={600} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <AnimateIn className="text-center mb-20">
          <SectionLabel text={t.stats.label} accent="ice" className="justify-center mb-5" />
          <BrandBar width="120px" height={3} className="mx-auto mb-6" />
          <h2 className="text-display-xl font-black text-white leading-tight">
            {t.stats.headline1}<br />
            <span className="text-white/30">{t.stats.headline2}</span>
          </h2>
        </AnimateIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16" stagger={0.12}>
          {t.stats.items.map((stat, i) => {
            const color = BRAND_COLORS[STAT_ACCENTS[i]];
            return (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="rounded-2xl bg-panel border border-white/[0.05] p-8 flex flex-col gap-4 hover:border-white/10 transition-colors duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: color }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse 70% 60% at 50% 100%, ${color}08 0%, transparent 70%)` }} />
                <div className="text-display-lg leading-none">
                  <CountUp value={STAT_NUMERIC[i]} suffix={STAT_SUFFIXES[i]} color={color} />
                </div>
                <div>
                  <div className="text-base font-bold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-muted">{stat.sublabel}</div>
                </div>
              </motion.div>
            );
          })}
        </StaggerChildren>

        <AnimateIn delay={0.2} className="flex flex-col items-center gap-5">
          <div className="text-xs font-mono uppercase tracking-widest text-muted">{t.stats.certLabel}</div>
          <EngBadgeRow
            badges={["ISO 9001:2014", "EN 13501-1", "EN 13501-2", "ASTM E84", "NFPA 285", "BS1D0", "ISO/IEC 17025"]}
            className="justify-center"
          />
        </AnimateIn>
      </div>
    </section>
  );
}
