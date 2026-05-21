import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

function SectionLabel({ children }) {
  return <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">{children}</p>;
}

export default function About({ education, organizations }) {
  return (
    <section id="tentang" className="mx-auto max-w-7xl px-6 py-16">
      <motion.div {...fadeUp}>
        <SectionLabel>Tentang Saya</SectionLabel>
        <h2 className="font-serif text-5xl font-black text-navy">Tentang Saya</h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative rounded-[2rem] bg-navy p-8 text-white shadow-soft">
            <div className="h-80 w-full overflow-hidden rounded-[1.5rem] bg-center bg-cover" style={{ backgroundImage: "url('/profile.jpg')" }} role="img" aria-label="Foto Wafa">
              <img src="/profile.jpg" alt="Wafa Ihsani" className="hidden" />
            </div>

            <div className="absolute -bottom-8 left-8 rounded-3xl border border-white/70 bg-white p-6 text-navy shadow-soft">
              <p className="text-sm font-black">Mahasiswi Semester 6</p>
              <p className="mt-2 text-xs text-slate-500">Pendidikan Teknik Informatika • UNP</p>
            </div>
          </div>

          <div className="pt-6 text-base leading-8 text-slate-600">
            <p>
              Halo! Saya <strong className="text-navy">Nurwahidah Wafa Ihsani</strong>, biasa dipanggil Wafa. Saya mahasiswi semester 6 Program Studi Pendidikan Teknik Informatika di Universitas Negeri Padang.
            </p>
            <p className="mt-5">
              Saya tertarik pada pengembangan mobile, web development, desain grafis, dan cloud computing. Saya percaya website yang bagus bukan hanya enak dilihat, tapi juga jelas, rapi, dan punya arah.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {["Asal Daerah|Bangkinang, Riau", "Domisili|Padang, Sumatera Barat", "Email|wafaihsani0710@gmail.com", "Keahlian Lain|Graphic Design"].map((item) => {
                const [title, value] = item.split("|");
                return (
                  <div key={title} className="rounded-3xl border border-slate-100 bg-white/75 p-5 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{title}</p>
                    <p className="mt-2 font-extrabold text-navy">{value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div {...fadeUp} id="organisasi" className="mt-24">
        <SectionLabel>Pendidikan & Organisasi</SectionLabel>
        <h2 className="font-serif text-5xl font-black text-navy">Perjalanan Saya</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white/75 p-8 shadow-soft">
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="text-gold" />
              <h3 className="font-serif text-2xl font-black text-navy">Pendidikan</h3>
            </div>

            {education.map(([school, major, year]) => (
              <div key={school} className="border-l-2 border-gold/40 pb-7 pl-6 last:pb-0">
                <h4 className="font-black text-navy">{school}</h4>
                {major ? <p className="mt-1 text-slate-600">{major}</p> : null}
                <p className="mt-1 text-sm font-bold text-gold">{year}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] bg-navy p-8 text-white shadow-soft">
            <div className="mb-6 flex items-center gap-3">
              <Users className="text-[#E7C76A]" />
              <h3 className="font-serif text-2xl font-black">Organisasi</h3>
            </div>

            <div className="space-y-5">
              {organizations.map((org) => (
                <div key={org.name} className="rounded-3xl bg-white/10 p-6">
                  <h4 className="font-serif text-xl font-black">{org.name}</h4>
                  <p className="mt-3 leading-7 text-white/75">{org.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
