"use client";
// src/components/layout/Footer.tsx
import { Logo } from "@/components/ui/Logo";
import { BrandBarFull } from "@/components/ui/BrandBar";
import { EngBadgeRow } from "@/components/ui/EngBadge";
import { BRAND_COLORS } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const FOOTER_HREFS = {
  Products:   ["#products", "#products", "#products", "#cold-storage", "#products"],
  Technology: ["#fire-shield", "#fire-shield", "#technology", "#technology", "#technology"],
  Company:    ["#about", "#projects", "#insights", "#careers", "#contact"],
};

const ACCENT_COLORS: Record<string, string> = {
  Products:   BRAND_COLORS.green,
  Technology: BRAND_COLORS.blue,
  Company:    BRAND_COLORS.purple,
};

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#080808]">
      <BrandBarFull height={4} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Logo size="lg" />
            <p className="text-sm text-muted leading-relaxed max-w-[220px]">{t.footer.tagline}</p>
            <div className="flex flex-col gap-3">
              {["ISO 9001:2014", "BS1D0", "EN 13501"].map((cert) => (
                <div key={cert} className="inline-flex items-center gap-2 border border-white/[0.08] rounded-lg px-3 py-1.5 w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7AB648]" />
                  <span className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(["Products", "Technology", "Company"] as const).map((section) => (
            <div key={section}>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">{t.footer.sections[section]}</span>
                <div className="h-px flex-1 ml-1" style={{ background: `${ACCENT_COLORS[section]}50` }} />
              </div>
              <ul className="flex flex-col gap-3">
                {(t.footer.links[section] as string[]).map((label, i) => (
                  <li key={label}>
                    <a
                      href={FOOTER_HREFS[section][i]}
                      className="text-sm text-muted hover:text-steel transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px transition-all duration-200 group-hover:w-3"
                        style={{ background: ACCENT_COLORS[section] }} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-xs text-muted font-mono">{t.footer.copyright}</span>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="text-xs text-muted hover:text-steel transition-colors font-mono">{t.footer.privacy}</a>
            <a href="#" className="text-xs text-muted hover:text-steel transition-colors font-mono">{t.footer.terms}</a>
            <a href="#" className="text-xs text-muted hover:text-steel transition-colors font-mono">{t.footer.standards}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
