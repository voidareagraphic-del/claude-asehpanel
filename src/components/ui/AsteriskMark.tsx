"use client";
// src/components/ui/AsteriskMark.tsx
import { BRAND_COLORS } from "@/lib/utils";

interface AsteriskMarkProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export function AsteriskMark({ size = 24, className = "", animated = false }: AsteriskMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? "group-hover:rotate-45 transition-transform duration-500" : ""} ${className}`}
      style={{ flexShrink: 0 }}
    >
      {/* Blade 1: horizontal – ice blue */}
      <rect
        x="8" y="42" width="84" height="16"
        rx="8"
        fill={BRAND_COLORS.ice}
        opacity="0.95"
      />
      {/* Blade 2: diagonal top-left → bottom-right – green */}
      <rect
        x="8" y="42" width="84" height="16"
        rx="8"
        fill={BRAND_COLORS.green}
        transform="rotate(60 50 50)"
        opacity="0.95"
      />
      {/* Blade 3: diagonal top-right → bottom-left – purple */}
      <rect
        x="8" y="42" width="84" height="16"
        rx="8"
        fill={BRAND_COLORS.purple}
        transform="rotate(-60 50 50)"
        opacity="0.95"
      />
      {/* Center triangle – blue (overlap) */}
      <polygon
        points="50,36 61,55 39,55"
        fill={BRAND_COLORS.blue}
        opacity="0.98"
      />
    </svg>
  );
}

export function AsteriskMarkGhost({ size = 400, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none absolute ${className}`}
      style={{ width: size, height: size, opacity: 0.04 }}
    >
      <AsteriskMark size={size} />
    </div>
  );
}

