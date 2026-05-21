"use client";

import { Code2, Database, Wrench, Smartphone } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";

const techStack = [
  { name: "Flutter", icon: "https://skillicons.dev/icons?i=flutter" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "NextJS", icon: "https://skillicons.dev/icons?i=nextjs" },
  { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
  { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
  { name: "Supabase", icon: "https://skillicons.dev/icons?i=supabase" },
];

const skills = [
  {
    title: "Frontend & Mobile",
    icon: Smartphone,
    items: ["HTML", "CSS", "JavaScript", "React.js", "Flutter", "Dart"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    items: ["PHP", "NestJS", "MySQL", "PostgreSQL", "Firebase", "Supabase"],
  },
  {
    title: "Bahasa Pemrograman",
    icon: Code2,
    items: ["Java", "C", "C++", "Python Dasar"],
  },
  {
    title: "Tools & Lainnya",
    icon: Wrench,
    items: ["Git & GitHub", "AWS Cloud", "MikroTik", "Graphic Design", "Unity", "IoT"],
  },
];

const projects = [
  {
    name: "SmartKos",
    type: "Mobile App",
    desc: "Aplikasi mobile pencarian kos untuk mahasiswa dengan fitur pencarian, filter, dan pemesanan.",
    stack: ["Flutter", "Firebase", "Dart"],
    image: "https://source.unsplash.com/1200x800/?apartment,room,student",
  },
  {
    name: "Planora",
    type: "Web App",
    desc: "Platform manajemen acara untuk mengelola undangan, koordinasi vendor, dan logistik.",
    stack: ["React.js", "NestJS", "PostgreSQL"],
    image: "https://source.unsplash.com/1200x800/?event,wedding,conference",
  },
  {
    name: "Publishify",
    type: "Web App",
    desc: "Platform publikasi buku digital untuk penulis, penerbit, dan pembaca.",
    stack: ["PHP", "MySQL", "JavaScript"],
    image: "https://source.unsplash.com/1200x800/?books,reading,library",
  },
  {
    name: "Kosify",
    type: "Mobile App",
    desc: "Aplikasi pencarian kos berbasis lokasi untuk membantu mahasiswa menemukan kos terdekat.",
    stack: ["Flutter", "Supabase", "Dart"],
    image: "https://source.unsplash.com/1200x800/?boarding,apartment,location",
  },
  {
    name: "Sistem Manajemen Laundry",
    type: "Desktop App",
    desc: "Aplikasi desktop berbasis Java untuk mengelola order, status cucian, pembayaran, dan laporan operasional laundry.",
    stack: ["Java", "MySQL"],
    image: "https://source.unsplash.com/1200x800/?laundry,washing,machine",
  },
  {
    name: "Game Unity",
    type: "Game App",
    desc: "Pengembangan game interaktif menggunakan Unity dengan fokus pada gameplay, antarmuka pengguna, dan implementasi logika menggunakan bahasa C#.",
    stack: ["Unity", "C#"],
    image: "https://source.unsplash.com/1200x800/?game,video-game,gaming",
  },
  {
    name: "Proyek IoT",
    type: "IoT Project",
    desc: "Eksplorasi Internet of Things yang menggabungkan perangkat keras dan perangkat lunak untuk membangun solusi berbasis sensor dan kontrol embedded.",
    stack: ["Internet of Things", "Embedded", "Sensor"],
    image: "https://source.unsplash.com/1200x800/?iot,embedded,arduino,raspberry",
  },
  {
    name: "Portofolio Website",
    type: "Web App",
    desc: "Website portofolio personal untuk menampilkan profil, skill, proyek, sertifikat, dan informasi kontak dalam satu halaman modern.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    image: "https://source.unsplash.com/1200x800/?workspace,portfolio,desk",
  },
];

const certificates = [
  ["MikroTik", "MikroTik Certified Network Associate (MTCNA)", "2025"],
  ["Dicoding Indonesia", "Cloud Practitioner Essentials", "2025"],
  ["Dicoding Indonesia", "Belajar Dasar Data Science", "2025"],
  ["Dicoding Indonesia", "Belajar Artificial Intelligence (AI)", "2025"],
  ["MySkill", "Sertifikat Graphic Design", "2025"],
  ["MySkill", "Backend in Website Development", "2025"],
];

const education = [
  ["Universitas Negeri Padang", "Pendidikan Teknik Informatika", "2023 - Sekarang"],
  ["SMA Negeri 1 Bangkinang Kota", "", "2020 - 2023"],
  ["MTs Negeri 1 Kampar", "", "2017 - 2020"],
  ["SD Negeri 004 Pulau Terap", "", "2011 - 2017"],
];

const organizations = [
  {
    name: "UK INFITECH UNP",
    desc: "Unit Kegiatan Mahasiswa tingkat universitas di UNP yang berfokus pada pembinaan, pengembangan, dan penalaran mahasiswa dalam bidang Teknologi Informasi.",
  },
  {
    name: "IPMK-SB",
    desc: "Ikatan Pelajar Mahasiswa Kampar - Sumatera Barat sebagai wadah berkumpul, bersilaturahmi, dan berorganisasi bagi pelajar/mahasiswa asal Kabupaten Kampar di Sumatera Barat.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-cream font-sans text-[#172033]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#E7C76A]/25 blur-3xl" />
        <div className="absolute right-0 top-28 h-[420px] w-[420px] rounded-full bg-[#0F1B2D]/10 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 h-72 w-72 rounded-full bg-white/70 blur-3xl" />
        <div className="soft-grid absolute inset-0" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero techStack={techStack} />
          <About education={education} organizations={organizations} />
          <Skills skills={skills} />
          <Projects projects={projects} />
          <Certificates certificates={certificates} />
          <Contact />
        </main>
      </div>
    </div>
  );
}
