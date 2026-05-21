import { motion } from "framer-motion";
import { Award } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

function SectionLabel({ children }) {
  return <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">{children}</p>;
}

export default function Certificates({ certificates }) {
  return (
    <section id="sertifikat" className="mx-auto max-w-7xl px-6 py-16">
      <SectionLabel>Sertifikat</SectionLabel>
      <h2 className="font-serif text-5xl font-black text-navy">Sertifikat & Lisensi</h2>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map(([provider, title, year], index) => (
          <motion.div
            key={`${provider}-${title}`}
            {...fadeUp}
            transition={{ delay: index * 0.06, duration: 0.5 }}
            className="rounded-3xl border border-slate-100 bg-white/75 p-6 shadow-lg shadow-slate-900/5"
          >
            <Award className="text-gold" />
            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">{provider}</p>
            <h3 className="mt-2 font-serif text-lg font-black text-navy">{title}</h3>
            <p className="mt-3 text-sm text-slate-500">{year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
