"use client";

import { useEffect, useState } from "react";
import { Mail, MoonStar, SunMedium } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const preferredTheme = storedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const links = [
    ["Tentang", "tentang"],
    ["Skill", "skill"],
    ["Proyek", "proyek"],
    ["Sertifikat", "sertifikat"],
    ["Kontak", "kontak"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-[#F8F5ED]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="font-serif text-2xl font-black text-navy" aria-label="Beranda" />

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          {links.map(([label, target]) => (
            <a key={target} href={`#${target}`} className="transition hover:text-gold">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-navy shadow-sm transition hover:-translate-y-0.5"
            aria-label={theme === "light" ? "Aktifkan mode gelap" : "Aktifkan mode terang"}
          >
            {theme === "light" ? <MoonStar size={18} /> : <SunMedium size={18} />}
          </button>

          <a
            href="#kontak"
            className="hidden items-center gap-2 rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 md:inline-flex"
          >
            <Mail size={16} /> Hubungi Saya
          </a>
        </div>
      </nav>
    </header>
  );
}
