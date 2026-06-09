"use client";
// src/app/page.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { FireShield } from "@/components/sections/FireShield";
import { Manufacturing } from "@/components/sections/Manufacturing";
import { ColdStorage } from "@/components/sections/ColdStorage";
import { CleanRoom } from "@/components/sections/CleanRoom";
import { Stats } from "@/components/sections/Stats";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <FireShield />
        <Manufacturing />
        <ColdStorage />
        <CleanRoom />
        <Stats />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

