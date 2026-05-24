import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Pesan Terkirim | Portofolio",
};

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f7fb] px-6 py-16 text-slate-900">
      <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
          <CheckCircle2 size={18} /> Pesan berhasil dikirim
        </div>
        <h1 className="mt-6 text-4xl font-black tracking-tight">Terima kasih!</h1>
        <p className="mt-4 leading-8 text-slate-600">
          Pesan kamu sudah masuk ke email saya. Saya akan balas secepatnya.
        </p>
        <Link href="/#kontak" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#0f2a4a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#16385f]">
          <ArrowLeft size={16} /> Kembali ke portofolio
        </Link>
      </div>
    </main>
  );
}