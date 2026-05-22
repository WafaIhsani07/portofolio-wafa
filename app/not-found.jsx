import Link from "next/link";
import { ArrowLeft, Home, MailWarning } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f5ed] px-6 py-16 text-[#172033]">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/60 bg-white/80 p-8 text-center shadow-xl shadow-slate-900/5 backdrop-blur">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-white">
          <MailWarning size={30} />
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-gold">404</p>
        <h1 className="mt-2 font-serif text-4xl font-black md:text-5xl">Halaman tidak ditemukan</h1>
        <p className="mx-auto mt-4 max-w-lg leading-8 text-slate-600">
          Alamat yang kamu buka tidak ada atau sudah dipindahkan. Kembali ke beranda atau hubungi saya dari halaman utama.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-2xl bg-navy px-6 py-4 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5">
            <Home size={16} /> Beranda
          </Link>
          <a href="/#kontak" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-navy shadow-sm transition hover:-translate-y-0.5">
            <ArrowLeft size={16} /> Ke Kontak
          </a>
        </div>
      </div>
    </main>
  );
}