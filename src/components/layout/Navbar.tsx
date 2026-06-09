"use client";
// src/components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { BrandBarFull } from "@/components/ui/BrandBar";
import { Menu, X, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const NAV_LINKS = [
    { label: t.nav.products,    href: "#products"      },
    { label: t.nav.technology,  href: "#technology"    },
    { label: t.nav.fireShield,  href: "#fire-shield"   },
    { label: t.nav.coldStorage, href: "#cold-storage"  },
    { label: t.nav.projects,    href: "#projects"      },
    { label: t.nav.about,       href: "#about"         },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <BrandBarFull className="fixed top-0 left-0 right-0 z-[60]" height={3} />

      <motion.header
        className={cn(
          "fixed top-[3px] left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-nav" : "bg-transparent"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">
          <a href="/" className="group flex-shrink-0">
            <Logo size="md" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-steel hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + lang toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "fa" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/25 transition-colors duration-200 text-xs font-semibold text-steel hover:text-white"
              aria-label="Toggle language"
            >
              <Languages size={13} />
              <span>{lang === "en" ? "FA" : "EN"}</span>
            </button>

            <a
              href="#contact"
              className="text-sm font-semibold text-steel hover:text-white transition-colors tracking-wide"
            >
              {t.nav.contact}
            </a>
            <Button variant="gradient-border" size="sm" href="#contact">
              {t.nav.requestQuote}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl flex flex-col pt-24 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-2xl font-bold text-white/90 hover:text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Mobile lang toggle */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setLang(lang === "en" ? "fa" : "en")}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 text-sm font-semibold text-steel hover:text-white transition-colors"
              >
                <Languages size={15} />
                {lang === "en" ? "فارسی" : "English"}
              </button>
            </div>

            <div className="mt-6">
              <Button variant="gradient-border" size="lg" href="#contact" className="w-full justify-center">
                {t.nav.requestQuote}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
