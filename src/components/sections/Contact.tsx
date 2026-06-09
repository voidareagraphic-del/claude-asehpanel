"use client";
// src/components/sections/Contact.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandBar, BrandBarFull } from "@/components/ui/BrandBar";
import { Button } from "@/components/ui/Button";
import { AsteriskMark } from "@/components/ui/AsteriskMark";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { BRAND_COLORS } from "@/lib/utils";

const PROJECT_TYPES = [
  "Cold Storage Warehouse",
  "Clean Room / Pharmaceutical",
  "Industrial Roof & Wall",
  "Secret Fix Facade",
  "Mixed-Use Development",
  "Export / Distribution",
  "Other",
];

const CONTACT_ITEMS = [
  { icon: Phone, label: "Sales & Inquiry",  value: "+98 21 XXXX XXXX",  color: BRAND_COLORS.green  },
  { icon: Mail,  label: "Engineering",      value: "projects@asehpanel.com", color: BRAND_COLORS.blue },
  { icon: MapPin,label: "Headquarters",     value: "Tehran, Islamic Republic of Iran", color: BRAND_COLORS.purple },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", company: "", type: "", message: "", email: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass = "w-full bg-transparent border-b border-white/[0.12] focus:border-[#2D4FA3] text-white text-sm py-3 outline-none transition-colors duration-300 placeholder:text-muted font-light";

  return (
    <section id="contact" className="relative py-32 bg-[#0A0A0A]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Info */}
          <AnimateIn>
            <SectionLabel text="Contact" accent="blue" className="mb-5" />
            <BrandBar width="120px" height={3} className="mb-8" />
            <h2 className="text-display-xl font-black text-white leading-tight mb-6">
              Start your<br />
              <span className="text-white/30">project.</span>
            </h2>
            <p className="text-base text-steel leading-relaxed mb-12 max-w-md">
              From specification to delivery — our engineering team is available to evaluate your project
              requirements, recommend the right system, and provide full technical support.
            </p>

            {/* Contact items */}
            <div className="flex flex-col gap-6 mb-12">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}14`, border: `1px solid ${item.color}28` }}
                    >
                      <Icon size={15} color={item.color} />
                    </div>
                    <div>
                      <div className="font-mono text-[0.6rem] uppercase tracking-widest text-muted mb-0.5">{item.label}</div>
                      <div className="text-sm font-medium text-frost">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mini world map placeholder */}
            <div className="rounded-2xl bg-surface/40 border border-white/[0.05] p-6 relative overflow-hidden">
              <div className="font-mono text-[0.58rem] uppercase tracking-widest text-muted mb-4">Export coverage</div>
              <div className="h-24 relative">
                {/* Simplified map dots */}
                {[
                  { top: "30%", left: "48%", color: BRAND_COLORS.green,  label: "IR"  },
                  { top: "25%", left: "52%", color: BRAND_COLORS.blue,   label: "AE"  },
                  { top: "28%", left: "42%", color: BRAND_COLORS.purple, label: "TR"  },
                  { top: "20%", left: "55%", color: BRAND_COLORS.ice,    label: "KZ"  },
                  { top: "22%", left: "46%", color: BRAND_COLORS.green,  label: "DE"  },
                ].map((dot) => (
                  <div key={dot.label} className="absolute flex flex-col items-center gap-1" style={{ top: dot.top, left: dot.left }}>
                    <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: dot.color }} />
                    <span className="font-mono text-[0.5rem]" style={{ color: dot.color }}>{dot.label}</span>
                  </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <AsteriskMark size={80} />
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right: Form */}
          <AnimateIn delay={0.15} direction="left">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(20,20,20,0.8)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Form header bar */}
              <BrandBarFull height={3} />
              <div className="p-8 lg:p-10">
                <h3 className="text-lg font-bold text-white mb-8">Request a Quote</h3>

                {sent ? (
                  <motion.div
                    className="flex flex-col items-center gap-4 py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(45,79,163,0.2)", border: "1px solid #2D4FA3" }}>
                      <Send size={20} color="#2D4FA3" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">Message sent</div>
                      <div className="text-sm text-steel">Our team will respond within 24 hours.</div>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label className="font-mono text-[0.6rem] uppercase tracking-widest text-muted block mb-2">Full Name</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <label className="font-mono text-[0.6rem] uppercase tracking-widest text-muted block mb-2">Company</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Organization"
                          value={formData.company}
                          onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-[0.6rem] uppercase tracking-widest text-muted block mb-2">Email</label>
                      <input
                        type="email"
                        className={inputClass}
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[0.6rem] uppercase tracking-widest text-muted block mb-2">Project Type</label>
                      <select
                        className={`${inputClass} bg-surface/60 rounded-t-lg`}
                        value={formData.type}
                        onChange={(e) => setFormData((p) => ({ ...p, type: e.target.value }))}
                      >
                        <option value="">Select project type...</option>
                        {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="font-mono text-[0.6rem] uppercase tracking-widest text-muted block mb-2">Project Details</label>
                      <textarea
                        className={`${inputClass} resize-none`}
                        rows={4}
                        placeholder="Describe your project requirements, area (m²), panel system needed..."
                        value={formData.message}
                        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                        required
                      />
                    </div>

                    <Button variant="gradient-border" size="lg" type="submit" className="w-full justify-center">
                      <Send size={15} /> Request Quote
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

