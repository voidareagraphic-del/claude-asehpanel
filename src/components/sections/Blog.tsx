"use client";
// src/components/sections/Blog.tsx
import { motion } from "framer-motion";
import { AnimateIn, StaggerChildren, staggerItem } from "@/components/ui/AnimateIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandBar } from "@/components/ui/BrandBar";
import { AsteriskMark } from "@/components/ui/AsteriskMark";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BRAND_COLORS, type BrandColor } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const ARTICLE_ACCENTS: BrandColor[] = ["purple", "green", "blue"];
const ARTICLE_SLUGS = ["pir-vs-pur-thermal-performance", "how-sandwich-panels-are-made", "smart-cold-storage-iot-guide"];

function ArticleCard({ article, slug, accent, readMore }: {
  article: { category: string; title: string; excerpt: string; author: string; date: string; readTime: string };
  slug: string; accent: BrandColor; readMore: string;
}) {
  const color = BRAND_COLORS[accent];

  return (
    <motion.article
      variants={staggerItem}
      className="group flex flex-col rounded-2xl bg-panel border border-white/[0.05] overflow-hidden hover:border-white/10 transition-all duration-400 cursor-pointer"
    >
      <div className="relative h-44 overflow-hidden"
        style={{ background: `linear-gradient(135deg, #141414 0%, #1C1C1C 100%)`, borderBottom: `3px solid ${color}` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="absolute rounded-full border"
              style={{ width: 40 + i * 25, height: 40 + i * 25, borderColor: `${color}${Math.max(5, 20 - i * 3).toString(16).padStart(2, "0")}`, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
          ))}
          <AsteriskMark size={32} />
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${color}10 0%, transparent 70%)` }} />
      </div>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-center gap-2">
          <AsteriskMark size={10} />
          <span className="text-[0.65rem] font-bold uppercase tracking-widest" style={{ color }}>{article.category}</span>
        </div>
        <h3 className="text-base font-bold text-white leading-snug group-hover:text-frost transition-colors duration-200">{article.title}</h3>
        <p className="text-sm text-steel leading-relaxed flex-1">{article.excerpt}</p>
        <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
          <div className="flex items-center gap-3 text-[0.65rem] text-muted font-mono">
            <span className="flex items-center gap-1"><Calendar size={10} /> {article.date}</span>
            <span className="flex items-center gap-1"><Clock size={10} /> {article.readTime}</span>
          </div>
          <a href={`/insights/${slug}`} className="flex items-center gap-1 text-xs font-semibold transition-all duration-200" style={{ color }}>
            {readMore}
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Blog() {
  const { t } = useLanguage();

  return (
    <section id="insights" className="relative py-32 bg-[#0D0D0D]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <AnimateIn className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <SectionLabel text={t.blog.label} accent="ice" className="mb-5" />
              <BrandBar width="120px" height={3} className="mb-6" />
              <h2 className="text-display-xl font-black text-white leading-tight">
                {t.blog.headline1}<br />
                <span className="text-white/30">{t.blog.headline2}</span>
              </h2>
            </div>
            <a href="/insights" className="flex items-center gap-2 text-sm font-semibold text-steel hover:text-white transition-colors">
              {t.blog.allArticles} <ArrowRight size={14} />
            </a>
          </div>
        </AnimateIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.1}>
          {t.blog.items.map((article, i) => (
            <ArticleCard key={ARTICLE_SLUGS[i]} article={article} slug={ARTICLE_SLUGS[i]} accent={ARTICLE_ACCENTS[i]} readMore={t.blog.readMore} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
