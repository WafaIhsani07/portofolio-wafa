import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

function Badge({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">{children}</p>;
}

export default function Skills({ skills }) {
  return (
    <section id="skill" className="mx-auto max-w-7xl px-6 py-16">
      <SectionLabel>Tech Stack & Skill</SectionLabel>
      <h2 className="font-serif text-5xl font-black text-navy">Keahlian Saya</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.title}
              {...fadeUp}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="rounded-3xl border border-slate-100 bg-white/75 p-7 shadow-xl shadow-slate-900/5 transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
                <Icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-black text-navy">{skill.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
