# Portfolio Wafa (Next.js)

Portfolio ini dibuat dengan Next.js App Router + Tailwind + Framer Motion.

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Struktur

- `app/` entry halaman dan layout
- `components/` komponen section
- `public/projects/` gambar proyek (opsional)
- `public/certificates/` gambar sertifikat (opsional)
- `styles/globals.css` styling global

## Catatan asset

Jika belum ada foto, komponen akan menampilkan placeholder emoji.
Untuk menambah foto:
- simpan foto profil ke `public/profile.png`
- simpan gambar proyek ke `public/projects/`
- simpan gambar sertifikat ke `public/certificates/`

## Deploy ke publik

Cara paling mudah adalah pakai Vercel:

1. Push project ini ke GitHub.
2. Buka https://vercel.com.
3. Klik **Add New -> Project**.
4. Pilih repo ini, lalu klik **Deploy**.

Setelah selesai, Vercel akan kasih link publik yang bisa dibuka siapa saja.
