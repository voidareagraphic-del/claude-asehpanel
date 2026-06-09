"use client";
// src/components/sections/ColdStorage.tsx
import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandBar } from "@/components/ui/BrandBar";
import { Button } from "@/components/ui/Button";
import { EngBadgeRow } from "@/components/ui/EngBadge";
import { Thermometer, Layers, Shield, Droplets } from "lucide-react";

const SPECS = [
  { label: "Temperature Range",   value: "-40°C to +15°C" },
  { label: "Core Material",       value: "High Index PIR / PUR" },
  { label: "Tongue & Groove",     value: "4-layer edge protection" },
  { label: "λD Thermal",          value: "0.022 W/m·K" },
  { label: "Panel Width",         value: "1000mm effective" },
  { label: "Thickness Range",     value: "60–200mm" },
  { label: "Density",             value: "40 ± 2 kg/m³" },
  { label: "HACCP",               value: "Compliant" },
];

const FEATURES = [
  { icon: Thermometer, label: "Extreme temperature range", sub: "-40°C cryogenic to +15°C ambient", color: "#A8CCE0" },
  { icon: Layers,      label: "4-layer edge protection",    sub: "Maximum joint thermal performance", color: "#A8CCE0" },
  { icon: Shield,      label: "HACCP certified surfaces",   sub: "Food-safe antibacterial finish", color: "#A8CCE0" },
  { icon: Droplets,    label: "Zero thermal bridging",      sub: "Minimum heat transfer at T&G joint", color: "#A8CCE0" },
];

export function ColdStorage() {
  return (
    <section id="cold-storage" className="relative py-32 bg-[#0A0C10] overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background: cold storage image */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 bottom-0 w-[55%] overflow-hidden">
          <Image src="/images/A01.jpg" alt="Cold Storage" fill className="object-cover opacity-40" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,12,16,0.4) 0%, rgba(10,12,16,0.2) 100%)" }} />
        </div>
        {/* Gradient separator: content → scene */}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: "40%", width: "15%", background: "linear-gradient(90deg, #0A0C10 0%, transparent 100%)" }}
        />
        {/* Deep vignette over right side */}
        <div className="absolute top-0 right-0 bottom-0 w-[55%]"
          style={{ background: "radial-gradient(ellipse 100% 100% at 80% 50%, transparent 40%, rgba(10,12,16,0.7) 100%)" }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div>
            <AnimateIn>
              <SectionLabel text="Cold Storage Systems" accent="ice" className="mb-5" />
              <BrandBar width="120px" height={3} className="mb-6" />
              <h2 className="text-display-xl font-black text-white leading-tight mb-6">
                Built for -40°C.<br />
                <span className="text-white/30">Engineered for permanence.</span>
              </h2>

              {/* Temperature statement */}
              <div
                className="inline-flex items-baseline gap-2 mb-8 px-5 py-3 rounded-xl"
                style={{ background: "rgba(168,204,224,0.06)", border: "1px solid rgba(168,204,224,0.15)" }}
              >
                <span className="font-mono font-black text-4xl" style={{ color: "#A8CCE0" }}>-40°C</span>
                <span className="text-steel font-mono text-sm">to</span>
                <span className="font-mono font-black text-2xl" style={{ color: "#A8CCE0" }}>+15°C</span>
              </div>

              <p className="text-base text-steel leading-relaxed mb-8 max-w-lg">
                ASP-CS Cold Storage panels use a precision tongue-and-groove joint system with
                4-layer edge metal protection — the most advanced cold room joint in the market.
                Minimum heat transfer. Maximum cold chain reliability.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {FEATURES.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.label}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                      style={{ background: "rgba(168,204,224,0.06)", border: "1px solid rgba(168,204,224,0.12)" }}
                    >
                      <Icon size={13} color={f.color} />
                      <span className="text-xs font-semibold text-frost">{f.label}</span>
                    </div>
                  );
                })}
              </div>

              <Button variant="gradient-border" size="md" href="#contact">
                Cold Storage Solutions
              </Button>
            </AnimateIn>
          </div>

          {/* Right: Engineering spec table */}
          <AnimateIn delay={0.15} direction="left">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(14,16,22,0.9)",
                border: "1px solid rgba(168,204,224,0.12)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Table header */}
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ background: "rgba(168,204,224,0.04)", borderBottom: "1px solid rgba(168,204,224,0.08)" }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: "#A8CCE0" }} />
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-steel">
                  ASP-CS Technical Specifications
                </span>
              </div>

              {/* Specs list */}
              <div className="divide-y divide-white/[0.04]">
                {SPECS.map((spec, i) => (
                  <div key={spec.label} className="flex items-center justify-between px-6 py-4">
                    <span className="font-mono text-xs text-muted uppercase tracking-wider">{spec.label}</span>
                    <span
                      className="font-mono text-sm font-bold"
                      style={{ color: i === 0 ? "#A8CCE0" : "#C8D8E8" }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom badge row */}
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

