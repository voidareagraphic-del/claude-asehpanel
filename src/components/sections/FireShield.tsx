"use client";
// src/components/sections/FireShield.tsx
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandBar } from "@/components/ui/BrandBar";
import { Button } from "@/components/ui/Button";
import { EngBadgeRow } from "@/components/ui/EngBadge";
import { ShieldCheck, Flame, Droplets, Wind, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PROPERTY_ICONS = [Flame, Droplets, ShieldCheck, Wind];

const CERTIFICATIONS = [
  { code: "EN 13501-1", scope: "Fire classification — non-load-bearing walls" },
  { code: "EN 13501-2", scope: "Fire resistance — non-load-bearing elements" },
  { code: "ASTM E84",   scope: "Surface burning characteristics" },
  { code: "NFPA 285",   scope: "Fire propagation — exterior non-load-bearing walls" },
  { code: "BS1D0",      scope: "British Standard fire performance classification" },
];

export function FireShield() {
  const sectionRef = useRef<HTMLElement>(null);
  const charLineRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!sectionRef.current || !charLineRef.current) return;
    gsap.fromTo(
      charLineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
      }
    );
  }, []);

  return (
    <section id="fire-shield" ref={sectionRef} className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: "50%", height: "70%", background: "radial-gradient(ellipse at 80% 50%, rgba(180,60,20,0.04) 0%, transparent 60%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Content */}
          <div>
            <AnimateIn delay={0}>
              <SectionLabel text={t.fireShield.label} accent="purple" className="mb-5" />
              <BrandBar width="120px" height={3} className="mb-8" />
              <h2 className="text-display-xl font-black text-white leading-tight mb-6">
                {t.fireShield.headline1}<br />
                <span className="text-white/30">{t.fireShield.headline2}</span>
              </h2>
              <p className="text-base text-steel leading-relaxed mb-8 max-w-lg">{t.fireShield.body}</p>

              {/* Char layer visual indicator */}
              <div className="mb-8 p-4 rounded-xl bg-surface/50 border border-white/[0.05]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{t.fireShield.charLabel}</span>
                </div>
                <div className="flex gap-1 h-8 rounded-lg overflow-hidden" ref={charLineRef}>
                  <div className="w-[12%] rounded-l bg-[#2A2A2A]" />
                  <div className="w-[8%] bg-[#1A1009]" />
                  <div className="w-[60%] bg-gradient-to-r from-[#C47820] to-[#E89030]" />
                  <div className="w-[8%] bg-[#1A1009]" />
                  <div className="w-[12%] rounded-r bg-[#2A2A2A]" />
                </div>
                <div className="flex justify-between mt-2 font-mono text-[0.55rem] text-muted">
                  <span>Steel facer</span>
                  <span style={{ color: "#8B5EA4" }}>Char barrier</span>
                  <span style={{ color: "#E89030" }}>PIR core — intact</span>
                  <span style={{ color: "#8B5EA4" }}>Char barrier</span>
                  <span>Steel facer</span>
                </div>
              </div>

              {/* Fire properties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {t.fireShield.properties.map((p, i) => {
                  const Icon = PROPERTY_ICONS[i];
                  return (
                    <div
                      key={p.label}
                      className="flex gap-3 p-4 rounded-xl bg-surface/40 border border-white/[0.05] hover:border-[#8B5EA4]/30 transition-colors duration-300"
                    >
                      <div className="mt-0.5 flex-shrink-0"><Icon size={16} color="#8B5EA4" /></div>
                      <div>
                        <div className="text-sm font-semibold text-white mb-0.5">{p.label}</div>
                        <div className="text-[0.72rem] text-muted leading-relaxed">{p.detail}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="solid-purple" size="md" href="#contact">{t.fireShield.cta1}</Button>
                <Button variant="ghost" size="md" href="#contact">{t.fireShield.cta2}</Button>
              </div>
            </AnimateIn>
          </div>

          {/* Right: Image + Certifications + data */}
          <div className="flex flex-col gap-5">
            {/* Fire shield product image */}
            <AnimateIn delay={0.1} direction="left">
              <div className="rounded-2xl overflow-hidden relative h-52">
                <Image src="/images/A05.jpg" alt="FireShield Panel" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.7) 100%)" }} />
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15} direction="left">
              <div className="rounded-2xl bg-panel border border-white/[0.05] p-7">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck size={18} color="#8B5EA4" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">{t.fireShield.certTitle}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert.code} className="flex items-center justify-between gap-4 py-3 border-b border-white/[0.04] last:border-0">
                      <div className="flex items-center gap-3">
                        <CheckCircle size={13} color="#8B5EA4" className="flex-shrink-0" />
                        <span className="font-mono text-sm font-bold text-white">{cert.code}</span>
                      </div>
                      <span className="text-xs text-steel text-right leading-tight max-w-[55%]">{cert.scope}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.25} direction="left">
              <div
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1A1020 0%, #120D18 100%)", border: "1px solid rgba(139,94,164,0.2)" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(139,94,164,0.15) 0%, transparent 70%)" }} />
                <div className="font-mono text-[0.6rem] uppercase tracking-widest text-muted mb-2">Real fire test result</div>
                <div className="text-2xl font-black text-white mb-1">{t.fireShield.resultTitle}</div>
                <div className="text-sm text-steel mb-6">{t.fireShield.resultSub}</div>
                {t.fireShield.results.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#8B5EA4" }} />
                    <span className="text-sm text-frost">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
