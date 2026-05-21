import { Mail } from "lucide-react";

export default function Navbar() {
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

        <a
          href="#kontak"
          className="hidden items-center gap-2 rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 md:inline-flex"
        >
          <Mail size={16} /> Hubungi Saya
        </a>
      </nav>
    </header>
  );
}
