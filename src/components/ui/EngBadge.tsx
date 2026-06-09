"use client";
// src/components/ui/EngBadge.tsx — engineering monospace spec tags
import { cn } from "@/lib/utils";

interface EngBadgeProps {
  label: string;
  className?: string;
  size?: "xs" | "sm";
}

export function EngBadge({ label, className, size = "sm" }: EngBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-white/10 rounded-lg bg-surface/60",
        "font-mono font-medium text-steel tracking-widest uppercase",
        size === "xs" ? "px-2.5 py-1 text-[0.6rem]" : "px-3 py-1.5 text-[0.68rem]",
        className
      )}
    >
      {label}
    </span>
  );
}

export function EngBadgeRow({ badges, className }: { badges: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {badges.map((b) => <EngBadge key={b} label={b} />)}
    </div>
  );
}

