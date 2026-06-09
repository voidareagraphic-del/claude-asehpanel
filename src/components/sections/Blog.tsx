"use client";
// src/components/sections/Blog.tsx
import { motion } from "framer-motion";
import { AnimateIn, StaggerChildren, staggerItem } from "@/components/ui/AnimateIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandBar } from "@/components/ui/BrandBar";
import { AsteriskMark } from "@/components/ui/AsteriskMark";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BRAND_COLORS, type BrandColor } from "@/lib/utils";

interface Article {
  category: string;
  accent: BrandColor;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

const ARTICLES: Article[] = [
  {
    category: "Engineering",
    accent: "purple",
    title: "PIR vs PUR: Thermal Performance Under Extreme Cold",
    excerpt: "A comprehensive analysis of High Index PIR insulation versus standard PUR foam in sub-zero applications, including real-world thermal conductivity data at -40°C.",
    author: "Engineering R&D",
    date: "March 2026",
    readTime: "8 min",
    slug: "pir-vs-pur-thermal-performance",
  },
  {
    category: "Manufacturing",
    accent: "green",
    title: "How Modern Sandwich Panels Are Made",
    excerpt: "Inside the continuous production line — from raw steel coil and PIR foam injection to CNC cutting and automated quality inspection.",
    author: "Production Team",
    date: "April 2026",
    readTime: "6 min",
    slug: "how-sandwich-panels-are-made",
  },
  {
    category: "Technology",
    accent: "blue",
    title: "Smart Cold Storage: IoT Integration Guide",
    excerpt: "How to integrate temperature monitoring, energy management, and real-time performance analytics into ASP-CS cold storage panel systems.",
    author: "Systems Engineering",
    date: "May 2026",
    readTime: "10 min",
    slug: "smart-cold-storage-iot-guide",
  },
];

function ArticleCard({ article }: { article: Article }) {
  const color = BRAND_COLORS[article.accent];

  return (
    <motion.article
      variants={staggerItem}
      className="group flex flex-col rounded-2xl bg-panel border border-white/[0.05] overflow-hidden hover:border-white/10 transition-all duration-400 cursor-pointer"
    >
      {/* Visual header */}
      <div
        className="relative h-44 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #141414 0%, #1C1C1C 100%)`,
          borderBottom: `3px solid ${color}`,
        }}
      >
        {/* Abstract tech pattern */}
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border"
              style={{
                width: 40 + i * 25,
                height: 40 + i * 25,
                borderColor: `${color}${Math.max(5, 20 - i * 3).toString(16).padStart(2, "0")}`,
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
          <AsteriskMark size={32} />
        </div>
        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${color}10 0%, transparent 70%)` }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-center gap-2">
          <AsteriskMark size={10} />
          <span className="text-[0.65rem] font-bold uppercase tracking-widest" style={{ color }}>
            {article.category}
          </span>
        </div>

        <h3 className="text-base font-bold text-white leading-snug group-hover:text-frost transition-colors duration-200">
          {article.title}
        </h3>

        <p className="text-sm text-steel leading-relaxed flex-1">{article.excerpt}</p>

        <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
          <div className="flex items-center gap-3 text-[0.65rem] text-muted font-mono">
            <span className="flex items-center gap-1">
              <Calendar size={10} /> {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={10} /> {article.readTime}
            </span>
          </div>
          <a
            href={`/insights/${article.slug}`}
            className="flex items-center gap-1 text-xs font-semibold transition-all duration-200"
            style={{ color }}
          >
            Read more
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Blog() {
  return (
    <section id="insights" className="relative py-32 bg-[#0D0D0D]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <AnimateIn className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <SectionLabel text="Insights" accent="ice" className="mb-5" />
              <BrandBar width="120px" height={3} className="mb-6" />
              <h2 className="text-display-xl font-black text-white leading-tight">
                Knowledge built<br />
                <span className="text-white/30">into every panel.</span>
              </h2>
            </div>
            <a
              href="/insights"
              className="flex items-center gap-2 text-sm font-semibold text-steel hover:text-white transition-colors"
            >
              All articles <ArrowRight size={14} />
            </a>
          </div>
        </AnimateIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.1}>
          {ARTICLES.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

