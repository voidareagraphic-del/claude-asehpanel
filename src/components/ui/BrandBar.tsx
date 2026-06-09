"use client";
// src/components/ui/BrandBar.tsx
import { cn } from "@/lib/utils";

interface BrandBarProps {
  className?: string;
  height?: number;
  animated?: boolean;
  width?: string;
}

export function BrandBar({ className, height = 3, animated = false, width = "160px" }: BrandBarProps) {
  return (
    <div
      className={cn("brand-bar rounded-full", animated && "origin-left", className)}
      style={{
        height,
        width,
        animation: animated ? "brand-bar 1.2s cubic-bezier(0.16,1,0.3,1) forwards" : undefined,
      }}
    />
  );
}

/** Full-width 4-color segmented bar */
export function BrandBarFull({ className, height = 4 }: { className?: string; height?: number }) {
  return (
    <div className={cn("brand-bar w-full", className)} style={{ height }} />
  );
}

