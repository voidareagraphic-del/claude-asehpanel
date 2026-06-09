"use client";
// src/components/ui/SectionLabel.tsx
import { cn } from "@/lib/utils";
import { AsteriskMark } from "./AsteriskMark";
import type { BrandColor } from "@/lib/utils";
import { BRAND_COLORS } from "@/lib/utils";

interface SectionLabelProps {
  text: string;
  accent?: BrandColor;
  className?: string;
  showMark?: boolean;
}

export function SectionLabel({ text, accent = "ice", className, showMark = true }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {showMark && <AsteriskMark size={14} />}
      <span
        className="text-xs font-bold uppercase tracking-[0.2em]"
        style={{ color: BRAND_COLORS[accent] }}
      >
        {text}
      </span>
    </div>
  );
}

