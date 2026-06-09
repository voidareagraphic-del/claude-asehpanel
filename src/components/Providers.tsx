"use client";
// src/components/Providers.tsx
import { LanguageProvider } from "@/context/LanguageContext";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
