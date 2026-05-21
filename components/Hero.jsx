
import { motion } from "framer-motion";
import { ArrowRight, Send, MapPin } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Hero({ techStack }) {
  return (
    <section id="home" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-[1fr_0.95fr] lg:py-20">
      <motion.div {...fadeUp}>
        {/* Removed small intro pill per request */}

        <h1 className="font-serif text-5xl font-black leading-[0.95] tracking-tight text-navy md:text-8xl">
          Nurwahidah <br />
          <span className="text-gold">Wafa</span> <em className="text-navy">Ihsani</em>
        </h1>

        <div className="mt-7 border-l-4 border-gold pl-4 text-lg font-extrabold text-navy">
          Frontend & Mobile Developer
        </div>

        <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
          Mahasiswi Pendidikan Teknik Informatika yang fokus pada pengembangan aplikasi, desain antarmuka, dan pengalaman pengguna yang rapi serta intuitif.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#proyek" className="inline-flex items-center gap-2 rounded-2xl bg-navy px-6 py-4 text-sm font-bold text-white shadow-soft transition hover:-translate-y-1">
            Lihat Proyek <ArrowRight size={17} />
          </a>
          <a href="#kontak" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 py-4 text-sm font-bold text-navy shadow-sm transition hover:-translate-y-1">
            Hubungi Saya <Send size={16} />
          </a>
        </div>

        <div className="mt-9">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-gold">Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((item) => (
              <div
                key={item.name}
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/85 p-2 shadow-sm"
                title={item.name}
                aria-label={item.name}
              >
                <img src={item.icon} alt={item.name} className="h-8 w-8" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div {...fadeUp} className="relative">
        <div className="rounded-[2.2rem] border border-white bg-white/80 p-8 shadow-soft backdrop-blur-xl">
          <div className="grid gap-6 md:grid-cols-[1fr_130px]">
            <div>
              <div className="relative mx-auto mb-7 h-56 w-56 rounded-full overflow-hidden shadow-md bg-center bg-cover" style={{ backgroundImage: "url('/profile.jpg')" }}>
                <img
                  src="/profile.jpg"
                  alt="Foto Nurwahidah Wafa Ihsani"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />

                {/* monogram badge removed to show profile image cleanly */}
              </div>

              <h2 className="font-serif text-[1.55rem] font-black leading-tight tracking-tight text-navy md:whitespace-nowrap md:text-[1.9rem] lg:text-[2.15rem]">
                Nurwahidah Wafa Ihsani
              </h2>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                <MapPin size={16} /> Bangkinang, Riau, Indonesia
              </p>
            </div>

            <div className="grid gap-4">
              {["8|Proyek", "6|Sertifikat", "12+|Teknologi"].map((item) => {
                const [num, label] = item.split("|");
                return (
                  <div key={label} className="rounded-3xl border border-slate-100 bg-white/80 p-5 text-center shadow-sm">
                    <p className="font-serif text-3xl font-black text-gold">{num}</p>
                    <p className="text-xs font-bold text-slate-600">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-7 grid gap-3 rounded-3xl bg-navy p-5 text-white md:grid-cols-3">
            {["Domisili|Padang", "Bahasa|Indonesia - English", "Angkatan|2023"].map((item) => {
              const [title, value] = item.split("|");
              return (
                <div key={title}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">{title}</p>
                  <p className="mt-1 text-xs font-bold">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
