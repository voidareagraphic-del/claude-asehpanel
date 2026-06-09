"use client";
// src/components/layout/Footer.tsx
import { Logo } from "@/components/ui/Logo";
import { BrandBarFull } from "@/components/ui/BrandBar";
import { EngBadgeRow } from "@/components/ui/EngBadge";
import { AsteriskMark } from "@/components/ui/AsteriskMark";
import { BRAND_COLORS } from "@/lib/utils";

const FOOTER_LINKS = {
  Products: [
    { label: "ASP-RO Roof Panels",   href: "#products" },
    { label: "ASP-WA Wall Panels",   href: "#products" },
    { label: "ASP-SF Secret Fix",    href: "#products" },
    { label: "ASP-CS Cold Storage",  href: "#cold-storage" },
    { label: "ASP-CR Clean Room",    href: "#products" },
  ],
  Technology: [
    { label: "High Index PIR",        href: "#fire-shield" },
    { label: "Fire Shield",           href: "#fire-shield" },
    { label: "Continuous Production", href: "#technology" },
    { label: "Quality Systems",       href: "#technology" },
    { label: "R&D Laboratory",        href: "#technology" },
  ],
  Company: [
    { label: "About Us",       href: "#about"    },
    { label: "Projects",       href: "#projects" },
    { label: "Insights",       href: "#insights" },
    { label: "Careers",        href: "#careers"  },
    { label: "Contact",        href: "#contact"  },
  ],
} as const;

const ACCENT_COLORS: Record<string, string> = {
  Products:   BRAND_COLORS.green,
  Technology: BRAND_COLORS.blue,
  Company:    BRAND_COLORS.purple,
};

export function Footer() {
  return (
    <footer className="relative bg-[#080808]">
      {/* Brand 4-color bar at top — the logo DNA unfolded */}
      <BrandBarFull height={4} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Logo size="lg" />
            <p className="text-sm text-muted leading-relaxed max-w-[220px]">
              Engineering cold. Building the future.
            </p>
            {/* Certification row */}
            <div className="flex flex-col gap-3">
              {["ISO 9001:2014", "BS1D0", "EN 13501"].map((cert) => (
                <div
                  key={cert}
                  className="inline-flex items-center gap-2 border border-white/[0.08] rounded-lg px-3 py-1.5 w-fit"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7AB648]" />
                  <span className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(Object.entries(FOOTER_LINKS) as [keyof typeof FOOTER_LINKS, typeof FOOTER_LINKS[keyof typeof FOOTER_LINKS]][]).map(
            ([section, links]) => (
              <div key={section}>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">{section}</span>
                  <div className="h-px flex-1 ml-1" style={{ background: `${ACCENT_COLORS[section]}50` }} />
                </div>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted hover:text-steel transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span
                          className="w-0 h-px transition-all duration-200 group-hover:w-3"
                          style={{ background: ACCENT_COLORS[section] }}
                        />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs text-muted font-mono">
              © 2026 Aseh Tejarat Asia. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="text-xs text-muted hover:text-steel transition-colors font-mono">Privacy Policy</a>
            <a href="#" className="text-xs text-muted hover:text-steel transition-colors font-mono">Terms</a>
            <a href="#" className="text-xs text-muted hover:text-steel transition-colors font-mono">Engineering Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

