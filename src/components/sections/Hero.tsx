"use client";
// src/components/sections/Hero.tsx
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { BrandBar } from "@/components/ui/BrandBar";
import { EngBadgeRow } from "@/components/ui/EngBadge";
import { AsteriskMarkGhost } from "@/components/ui/AsteriskMark";
import { ArrowRight, ChevronDown } from "lucide-react";
import { EASING } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const HERO_IMAGES = ["/images/H01.jpg", "/images/H02.jpg", "/images/H03.jpg"];

export function Hero() {
  const corridorRef = useRef<HTMLDivElement>(null);
  const lightRaysRef = useRef<HTMLDivElement[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Animate volumetric light rays
    lightRaysRef.current.forEach((ray, i) => {
      if (!ray) return;
      gsap.to(ray, {
        opacity: 0.04 + (i % 3) * 0.02,
        scaleY: 1.05,
        duration: 3 + i * 0.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.4,
      });
    });

    // Parallax on scroll
    const handleScroll = () => {
      if (!corridorRef.current) return;
      const y = window.scrollY;
      gsap.set(corridorRef.current, { y: y * 0.3 });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
  };
  const item = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASING.cinematic } },
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-void flex items-center">

      {/* ── Background: hero image slider ── */}
      <div ref={corridorRef} className="absolute inset-0 will-change-transform">
        {/* Slider images */}
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === activeSlide ? 1 : 0 }}
          >
            <Image src={src} alt="" fill className="object-cover" priority={i === 0} />
          </div>
        ))}
        {/* Dark overlay to preserve cinematic look */}
        <div className="absolute inset-0 bg-[#0A0C10]/65" />

        {/* Left wall panels */}
        <div
          className="absolute top-0 bottom-0 left-0"
          style={{
            width: "38%",
            background: "linear-gradient(180deg, #181C22 0%, #141820 100%)",
            borderRight: "1px solid rgba(168,204,224,0.06)",
          }}
        >
          {/* Horizontal panel joint lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full"
              style={{ top: `${5 + i * 5}%`, height: 1, background: "rgba(168,204,224,0.07)" }}
            />
          ))}
        </div>

        {/* Right wall panels */}
        <div
          className="absolute top-0 bottom-0 right-0"
          style={{
            width: "28%",
            background: "linear-gradient(180deg, #181C22 0%, #141820 100%)",
            borderLeft: "1px solid rgba(168,204,224,0.06)",
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full"
              style={{ top: `${5 + i * 5}%`, height: 1, background: "rgba(168,204,224,0.07)" }}
            />
          ))}
        </div>

        {/* Ceiling grid */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "22%",
            background: "linear-gradient(180deg, #0C0F14 0%, transparent 100%)",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0"
              style={{
                left: `${10 + i * 11}%`,
                width: 1,
                background: "linear-gradient(180deg, rgba(168,204,224,0.08) 0%, transparent 100%)",
              }}
            />
          ))}
        </div>

        {/* Floor reflection */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "30%",
            background: "linear-gradient(0deg, rgba(10,18,40,0.9) 0%, transparent 100%)",
          }}
        />

        {/* Volumetric light rays from above */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => { if (el) lightRaysRef.current[i] = el; }}
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: `${18 + i * 11}%`,
              width: `${1.5 + (i % 3) * 0.8}%`,
              background: `linear-gradient(180deg, rgba(168,204,224,${0.06 + (i%3)*0.02}) 0%, rgba(168,204,224,0.01) 60%, transparent 100%)`,
              opacity: 0.05,
            }}
          />
        ))}

        {/* Cold mist at floor */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "18%",
            background: "radial-gradient(ellipse 100% 80% at 50% 100%, rgba(168,204,224,0.05) 0%, transparent 70%)",
          }}
        />

        {/* Deep vanishing point glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "35%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: "40%", height: "30%",
            background: "radial-gradient(ellipse at center, rgba(45,79,163,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Overall cinematic vignette */}
        <div className="absolute inset-0 bg-hero-vignette pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(8,8,8,0.8) 0%, transparent 100%)" }}
        />
      </div>

      {/* ── Ghost asterisk watermark ── */}
      <AsteriskMarkGhost size={600} className="right-[-100px] top-1/2 -translate-y-1/2 opacity-[0.03]" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-20">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Label row */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <BrandBar width="140px" height={3} />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-steel">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 variants={item} className="font-black leading-[0.93] tracking-tight mb-8">
            <span className="block text-display-2xl text-white">{t.hero.line1}</span>
            <span className="block text-display-2xl text-white">{t.hero.line2}</span>
            <span className="block text-display-2xl text-white/30">{t.hero.line3}</span>
          </motion.h1>

          {/* Accent line */}
          <motion.div variants={item}>
            <div className="mb-6" style={{ width: 200, height: 1, background: "linear-gradient(90deg, #A8CCE0, transparent)" }} />
          </motion.div>

          {/* Sub-copy */}
          <motion.p variants={item} className="text-base text-steel leading-relaxed mb-3 max-w-xl">
            {t.hero.sub1}
          </motion.p>
          <motion.p variants={item} className="text-sm text-muted mb-10 max-w-xl">
            {t.hero.sub2}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <Button variant="gradient-border" size="lg" href="#products">
              {t.hero.cta1} <ArrowRight size={16} />
            </Button>
            <Button variant="ghost" size="lg" href="#technology">
              {t.hero.cta2}
            </Button>
          </motion.div>

          {/* Eng badges */}
          <motion.div variants={item}>
            <EngBadgeRow badges={["ISO 9001:2014", "BS1D0", "EN 13501-1", "λD = 0.022 W/m·K"]} />
          </motion.div>
        </motion.div>
      </div>

      {/* ── λD floating data tag ── */}
      <motion.div
        className="absolute bottom-10 right-8 lg:right-16 glass rounded-xl px-4 py-3 hidden md:flex flex-col gap-1"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.7, ease: EASING.cinematic }}
      >
        <span className="font-mono text-[0.65rem] text-muted uppercase tracking-widest">{t.hero.thermalLabel}</span>
        <span className="font-mono text-sm font-bold text-frost">λD = 0.022 W/m·K</span>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-steel transition-colors"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-[0.6rem] uppercase tracking-[0.25em] font-semibold">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}

