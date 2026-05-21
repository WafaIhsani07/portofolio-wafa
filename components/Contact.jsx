import { Mail, Github, Linkedin, Send } from "lucide-react";

function SectionLabel({ children }) {
  return <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E7C76A]">{children}</p>;
}

export default function Contact() {
  return (
    <section id="kontak" className="bg-navy px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>Kontak</SectionLabel>
          <h2 className="font-serif text-5xl font-black">
            Mari Berkolaborasi <span className="text-[#E7C76A]">Bersama!</span>
          </h2>
          <p className="mt-5 max-w-lg leading-8 text-white/70">
            Saya terbuka untuk diskusi, kolaborasi proyek, peluang magang, atau sekadar berbagi cerita seputar teknologi.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-bold" href="https://github.com/WafaIhsani07" target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub
            </a>
            <a className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-bold" href="https://www.linkedin.com/in/nurwahidah-wafa-ihsani-2b00b2310" target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-bold" href="mailto:wafaihsani0710@gmail.com">
              <Mail size={17} /> Email
            </a>
          </div>
        </div>

        <form className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm outline-none placeholder:text-white/45" placeholder="Nama Lengkap" />
            <input className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm outline-none placeholder:text-white/45" placeholder="Email" />
          </div>
          <textarea className="mt-4 h-36 w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm outline-none placeholder:text-white/45" placeholder="Pesan" />
          <button type="button" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gold px-6 py-4 text-sm font-black text-white transition hover:bg-[#E7C76A]">
            Kirim Pesan <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
