"use client";
// src/components/sections/ColdStorage.tsx
import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandBar } from "@/components/ui/BrandBar";
import { Button } from "@/components/ui/Button";
import { EngBadgeRow } from "@/components/ui/EngBadge";
import { Thermometer, Layers, Shield, Droplets } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const FEATURE_ICONS = [Thermometer, Layers, Shield, Droplets];

export function ColdStorage() {
  const { t } = useLanguage();

  return (
    <section id="cold-storage" className="relative py-32 bg-[#0A0C10] overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background: cold storage image */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 bottom-0 w-[55%] overflow-hidden">
          <Image src="/images/A01.jpg" alt="Cold Storage" fill className="object-cover opacity-40" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,12,16,0.4) 0%, rgba(10,12,16,0.2) 100%)" }} />
        </div>
        <div className="absolute top-0 bottom-0" style={{ left: "40%", width: "15%", background: "linear-gradient(90deg, #0A0C10 0%, transparent 100%)" }} />
        <div className="absolute top-0 right-0 bottom-0 w-[55%]"
          style={{ background: "radial-gradient(ellipse 100% 100% at 80% 50%, transparent 40%, rgba(10,12,16,0.7) 100%)" }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div>
            <AnimateIn>
              <SectionLabel text={t.coldStorage.label} accent="ice" className="mb-5" />
              <BrandBar width="120px" height={3} className="mb-6" />
              <h2 className="text-display-xl font-black text-white leading-tight mb-6">
                {t.coldStorage.headline1}<br />
                <span className="text-white/30">{t.coldStorage.headline2}</span>
              </h2>

              <div
                className="inline-flex items-baseline gap-2 mb-8 px-5 py-3 rounded-xl"
                style={{ background: "rgba(168,204,224,0.06)", border: "1px solid rgba(168,204,224,0.15)" }}
              >
                <span className="font-mono font-black text-4xl" style={{ color: "#A8CCE0" }}>-40°C</span>
                <span className="text-steel font-mono text-sm">to</span>
                <span className="font-mono font-black text-2xl" style={{ color: "#A8CCE0" }}>+15°C</span>
              </div>

              <p className="text-base text-steel leading-relaxed mb-8 max-w-lg">{t.coldStorage.body}</p>

              <div className="flex flex-wrap gap-3 mb-10">
                {t.coldStorage.features.map((f, i) => {
                  const Icon = FEATURE_ICONS[i];
                  return (
                    <div key={f.label} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                      style={{ background: "rgba(168,204,224,0.06)", border: "1px solid rgba(168,204,224,0.12)" }}>
                      <Icon size={13} color="#A8CCE0" />
                      <span className="text-xs font-semibold text-frost">{f.label}</span>
                    </div>
                  );
                })}
              </div>

              <Button variant="gradient-border" size="md" href="#contact">{t.coldStorage.cta}</Button>
            </AnimateIn>
          </div>

          {/* Right: Spec table */}
          <AnimateIn delay={0.15} direction="left">
            <div className="rounded-2xl overflow-hidden"
              style={{ background: "rgba(14,16,22,0.9)", border: "1px solid rgba(168,204,224,0.12)", backdropFilter: "blur(12px)" }}>
              <div className="px-6 py-4 flex items-center gap-3"
                style={{ background: "rgba(168,204,224,0.04)", borderBottom: "1px solid rgba(168,204,224,0.08)" }}>
                <div className="w-2 h-2 rounded-full" style={{ background: "#A8CCE0" }} />
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-steel">{t.coldStorage.specTitle}</span>
              </div>
              <div className="divide-y divide-white/[0.04]">
                {t.coldStorage.specs.map((spec, i) => (
                  <div key={spec.label} className="flex items-center justify-between px-6 py-4">
                    <span className="font-mono text-xs text-muted uppercase tracking-wider">{spec.label}</span>
                    <span className="font-mono text-sm font-bold" style={{ color: i === 0 ? "#A8CCE0" : "#C8D8E8" }}>{spec.value}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-5" style={{ borderTop: "1px solid rgba(168,204,224,0.08)" }}>
                <EngBadgeRow badges={["HACCP", "ISO 22000", "EN 13501-1", "Zero thermal bridging"]} />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
