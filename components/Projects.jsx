import { motion } from "framer-motion";
import { Cpu, Gamepad2, LayoutGrid, Monitor, Search, Smartphone } from "lucide-react";

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

const projectIconMap = {
  "Mobile App": Smartphone,
  "Web App": LayoutGrid,
  "Desktop App": Monitor,
  "Game App": Gamepad2,
  "IoT Project": Cpu,
};

const projectToneMap = {
  "Mobile App": "from-[#22324e] via-[#18263d] to-[#101b2d]",
  "Web App": "from-[#22324e] via-[#18263d] to-[#101b2d]",
  "Desktop App": "from-[#22324e] via-[#18263d] to-[#101b2d]",
  "Game App": "from-[#22324e] via-[#18263d] to-[#101b2d]",
  "IoT Project": "from-[#22324e] via-[#18263d] to-[#101b2d]",
};

const projectIconToneMap = {
  "Mobile App": "text-[#f7c46b]",
  "Web App": "text-[#f7c46b]",
  "Desktop App": "text-[#f7c46b]",
  "Game App": "text-[#f7c46b]",
  "IoT Project": "text-[#f7c46b]",
};

export default function Projects({ projects }) {
  return (
    <section id="proyek" className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between gap-5">
        <div>
          <SectionLabel>Proyek Pilihan</SectionLabel>
          <h2 className="font-serif text-5xl font-black text-navy">Proyek Pilihan</h2>
        </div>
      </div>

      <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            {...fadeUp}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            className="group overflow-hidden rounded-3xl border border-slate-100 bg-white/80 shadow-xl shadow-slate-900/5 transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${projectToneMap[project.type] ?? "from-slate-100 to-white"}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_55%)]" />
              <div className="relative transition duration-300 group-hover:scale-105">
                {(() => {
                  const Icon = projectIconMap[project.type] ?? Search;
                  return <Icon size={58} strokeWidth={2.1} className={projectIconToneMap[project.type] ?? "text-white"} />;
                })()}
              </div>

              <span className="absolute left-5 top-5 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase text-white backdrop-blur">
                {project.type}
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-serif text-2xl font-black text-navy">{project.name}</h3>
              <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">{project.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
