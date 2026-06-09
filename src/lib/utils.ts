// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BRAND_COLORS = {
  green:  "#7AB648",
  blue:   "#2D4FA3",
  purple: "#8B5EA4",
  ice:    "#A8CCE0",
} as const;

export type BrandColor = keyof typeof BRAND_COLORS;

export const EASING = {
  cinematic: [0.16, 1, 0.3, 1] as const,
  spring:    [0.34, 1.56, 0.64, 1] as const,
  soft:      [0.25, 0.1, 0.25, 1] as const,
};

export const DURATIONS = {
  fast:   0.35,
  normal: 0.6,
  slow:   0.9,
  cinematic: 1.2,
};

