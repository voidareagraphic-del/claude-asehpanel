"use client";
// src/components/ui/Logo.tsx
import { AsteriskMark } from "./AsteriskMark";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = {
  sm: { mark: 20, text1: "text-base", text2: "text-base" },
  md: { mark: 28, text1: "text-xl",   text2: "text-xl"   },
  lg: { mark: 38, text1: "text-2xl",  text2: "text-2xl"  },
  xl: { mark: 52, text1: "text-4xl",  text2: "text-4xl"  },
};

export function Logo({ size = "md", className }: LogoProps) {
  const s = sizes[size];
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Stacked wordmark block */}
      <div className="flex flex-col leading-none">
        <span
          className={cn("font-black tracking-tight text-[#3D3D3D] dark:text-[#C8C8C8]", s.text1)}
          style={{ fontWeight: 900, color: "#C8C8C8", letterSpacing: "-0.02em" }}
        >
          aseh
        </span>
        <span
          className={cn("font-black tracking-tight", s.text2)}
          style={{ fontWeight: 900, color: "#C8C8C8", letterSpacing: "-0.02em", marginTop: "-2px" }}
        >
          panel
        </span>
      </div>
      {/* Asterisk mark positioned upper-right of the wordmark */}
      <div style={{ marginTop: `-${s.mark * 0.6}px` }}>
        <AsteriskMark size={s.mark} />
      </div>
    </div>
  );
}

