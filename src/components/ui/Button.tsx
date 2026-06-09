"use client";
// src/components/ui/Button.tsx
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "gradient-border" | "ghost" | "solid-green" | "solid-blue" | "solid-purple";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

export function Button({ children, variant = "gradient-border", size = "md", className, onClick, href, type }: ButtonProps) {
  const base = cn(
    "relative inline-flex items-center justify-center gap-2 font-semibold tracking-wide rounded-xl transition-all duration-300 cursor-pointer select-none",
    sizes[size],
    {
      "btn-gradient-border text-white hover:bg-[#242424]": variant === "gradient-border",
      "border border-white/20 text-white/90 bg-transparent hover:bg-white/5 hover:border-white/40": variant === "ghost",
      "bg-[#7AB648] text-white hover:bg-[#8CC85A] shadow-glow-green": variant === "solid-green",
      "bg-[#2D4FA3] text-white hover:bg-[#3A62C4] shadow-glow-blue":  variant === "solid-blue",
      "bg-[#8B5EA4] text-white hover:bg-[#A070BF] shadow-glow-purple": variant === "solid-purple",
    },
    className
  );

  if (href) {
    return <a href={href} className={base}>{children}</a>;
  }

  return (
    <button type={type ?? "button"} className={base} onClick={onClick}>
      {children}
    </button>
  );
}

