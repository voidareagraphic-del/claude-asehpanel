"use client";
// src/components/sections/Products.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateIn, StaggerChildren, staggerItem } from "@/components/ui/AnimateIn";
import { BrandBar, BrandBarFull } from "@/components/ui/BrandBar";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AsteriskMark } from "@/components/ui/AsteriskMark";
import { ArrowRight } from "lucide-react";
import { BRAND_COLORS, type BrandColor } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface Product {
  code: string;
  name: string;
  subtitle: string;
  accent: BrandColor;
  specs: { label: string; value: string }[];
  description: string;
  thickness: string;
  applications: string[];
  image: string;
}

const PRODUCTS: Product[] = [
  {
    code: "ASP-RO",
    image: "/images/P01.jpg",
    name: "Roof Panels",
    subtitle: "5-rib & 3-rib corrugated profiles",
    accent: "green",
    description: "High-performance insulated roof panels with exceptional thermal efficiency and structural integrity.",
    thickness: "30–200mm",
    specs: [
      { label: "λD", value: "0.022 W/m·K" },
      { label: "Fire", value: "BS1D0 / BS2D0" },
      { label: "Width", value: "1000mm" },
    ],
    applications: ["Industrial warehouses", "Logistics hubs", "Solar-ready profiles"],
  },
  {
    code: "ASP-WA",
    image: "/images/P02.jpg",
    name: "Wall Panels",
    subtitle: "Standard external & internal cladding",
    accent: "blue",
    description: "Multi-layer composite wall system delivering superior thermal and mechanical performance.",
    thickness: "40–150mm",
    specs: [
      { label: "λD",   value: "0.022 W/m·K" },
      { label: "Uc",   value: "from 0.15 W/m²K" },
      { label: "Width", value: "1000mm" },
    ],
    applications: ["Commercial buildings", "Industrial facades", "Agricultural"],
  },
  {
    code: "ASP-SF",
    image: "/images/P03.jpg",
    name: "Secret Fix",
    subtitle: "Concealed fastener system",
    accent: "purple",
    description: "Architectural facade panels with hidden fixing system delivering seamless, premium surfaces.",
    thickness: "40–200mm",
    specs: [
      { label: "Fix",   value: "Concealed" },
      { label: "Surface", value: "Ultra-smooth" },
      { label: "Fire",  value: "BS1D0" },
    ],
    applications: ["Hotel facades", "Shopping centres", "Office buildings"],
  },
  {
    code: "ASP-CS",
    image: "/images/P04.jpg",
    name: "Cold Storage",
    subtitle: "Tongue & groove insulated panels",
    accent: "ice",
    description: "Engineered for extreme cold environments. 4-layer edge protection with minimum heat transfer at joints.",
    thickness: "60–200mm",
    specs: [
      { label: "Temp",  value: "-40°C to +15°C" },
      { label: "Edge",  value: "4-layer T&G" },
      { label: "HACCP", value: "Compliant" },
    ],
    applications: ["Cold storage warehouses", "Food processing", "Pharmaceutical"],
  },
  {
    code: "ASP-CR",
    image: "/images/P05.jpg",
    name: "Clean Room",
    subtitle: "Antibacterial seamless system",
    accent: "ice",
    description: "Zero-contamination panels for controlled environments. Antibacterial surface, seamless joints, HACCP certified.",
    thickness: "50–150mm",
    specs: [
      { label: "Surface", value: "Antibacterial" },
      { label: "Joints",  value: "Seamless" },
      { label: "Grade",   value: "Pharmaceutical" },
    ],
    applications: ["Pharmaceutical plants", "Food factories", "Semiconductor fabs"],
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const color = BRAND_COLORS[product.accent];

  return (
    <motion.div
      variants={staggerItem}
      className="product-card group relative rounded-2xl bg-panel border border-white/[0.05] overflow-hidden flex flex-col cursor-pointer hover:border-white/10"
      style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.6)" }}
    >
      {/* Accent top border */}
      <div className="w-full h-[3px]" style={{ background: color }} />

      {/* Visual area – product image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(14,14,14,0.7) 100%)" }} />
        {/* Accent glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${color}20 0%, transparent 70%)` }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <AsteriskMark size={12} />
              <span className="font-mono text-[0.65rem] uppercase tracking-widest" style={{ color }}>
                {product.code}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white leading-tight">{product.name}</h3>
            <p className="text-xs text-muted mt-0.5">{product.subtitle}</p>
          </div>
          <div
            className="flex-shrink-0 rounded-lg px-2.5 py-1 font-mono text-[0.65rem] tracking-wider"
            style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
          >
            {product.thickness}
          </div>
        </div>

        <p className="text-sm text-steel leading-relaxed">{product.description}</p>

        {/* Specs grid */}
        <div className="grid grid-cols-3 gap-2 mt-auto">
          {product.specs.map((spec) => (
            <div key={spec.label} className="rounded-lg bg-surface/60 p-2.5 border border-white/[0.04]">
              <div className="font-mono text-[0.58rem] uppercase tracking-wider text-muted mb-1">{spec.label}</div>
              <div className="font-mono text-[0.68rem] font-semibold text-frost leading-tight">{spec.value}</div>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {product.applications.map((app) => (
            <span key={app} className="text-[0.65rem] text-muted border border-white/[0.06] rounded-full px-2.5 py-1">
              {app}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`#${product.code.toLowerCase()}`}
          className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link mt-1"
          style={{ color }}
        >
          View Specifications
          <ArrowRight
            size={14}
            className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200"
          />
        </a>
      </div>
    </motion.div>
  );
}

export function Products() {
  return (
    <section id="products" className="relative py-32 bg-[#0C0C0C]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimateIn className="mb-16">
          <SectionLabel text="Product Range" accent="green" className="mb-5" />
          <BrandBar width="120px" height={3} className="mb-6" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-display-xl font-black text-white leading-tight">
              Five systems.<br />
              <span className="text-white/30">One standard.</span>
            </h2>
            <p className="text-base text-steel max-w-md leading-relaxed lg:text-right">
              Every product line is engineered for a specific demand — from fire-rated roof panels to pharmaceutical clean rooms.
              PIR-cored. Precision-made. Export-ready.
            </p>
          </div>
        </AnimateIn>

        {/* Product grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5" stagger={0.08}>
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.code} product={product} index={i} />
          ))}
        </StaggerChildren>

        {/* Bottom specs strip */}
        <AnimateIn delay={0.3} className="mt-12">
          <div className="rounded-2xl bg-surface/40 border border-white/[0.05] p-6 flex flex-wrap gap-8 items-center justify-between">
            {[
              { label: "Thickness range", value: "30 — 200mm" },
              { label: "Thermal conductivity", value: "λD = 0.022 W/m·K" },
              { label: "Density", value: "40 ± 2 kg/m³" },
              { label: "Fire rating", value: "BS1D0 / BS2D0" },
              { label: "Steel coating", value: "AZ120 / Z120" },
              { label: "Width", value: "1000mm effective" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{item.label}</span>
                <span className="font-mono text-sm font-bold text-frost">{item.value}</span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

