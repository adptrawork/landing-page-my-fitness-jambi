# My Fitness Jambi — Landing Page Jambi

Astro + Tailwind, Full SEO 100%, 1 repo per 1 bisnis.

## Design system (redesign 16 Okt 2026)
- Konsep: high-energy athletic — fokus, kontras tinggi, instruksional.
- Font: **Barlow Condensed** (display, 500/600/700 + italic 600) + **Public Sans** (body/UI, 400/500/600/700).
  Dimuat non-blocking via `preconnect` + `media="print" onload` di `BaseHead.astro`. Tanpa Inter.
- Palet token (`tailwind.config.mjs` + `src/styles/global.css`): `--bg #11130F`, `--bg-2 #33372D`,
  `--fg #F6F6EF`, `--fg-soft #A3A79B`, `--accent #CDE05A` (saturasi 68.4% — didesaturasi, satu accent).
- Urutan section beranda: split hero bergambar → ticker → bento asimetris (2fr/1fr/1fr) →
  daftar aktivitas ber-rule → program zig-zag → tabel harga → panel lokasi + MapFacade → footer NAP.
- Kontras teks di atas bg gelap: `#F6F6EF` 17.2:1, `#A3A79B` 7.6:1, `#CDE05A` 12.8:1 (semua lolos AA).

## Dev
```bash
npm install
npm run dev
npm run build
```

## Deploy (TODO-DEPLOY, belum dieksekusi)
- Framework Preset: Astro
- Build Command: `npm run build`
- Output: `dist/`
- Connect to Git di Cloudflare Pages → pilih repo ini
- Custom domain + SSL otomatis setelah setup domain

## Sumber gambar (diperbarui 16 Okt 2026 — audit relevansi section)
- Prioritas 1: TIDAK ADA IG resmi My Fitness Jambi. @myfitness_kebunkopi adalah bisnis berbeda — SENGAJA tidak dipakai. Semua kontak mengarah ke kunjungan langsung/Maps.
- Foto dipertahankan (sudah cocok): my-fitness-1 rak dumbel area beban, my-fitness-2 kelas grup.
- Foto diganti (mismatch → Wikimedia Commons, ≤100KB, alt + width/height + decoding async):
  - my-fitness-3 Personal Training: foto solo lat-pulldown (tanpa coach terlihat) → rak dumbel tanpa wajah (USMC, public domain — Lance Cpl. Jason Jimenez, "Marines' voices echo, prompt new gym hours").
  - my-fitness-4 Asesmen Pemula: foto sit-up (bukan asesmen) → aksi pengukuran lingkar pinggang oleh pelatih (US Air Force, public domain — DPLA).
- Halaman /pelatih memakai kartu inisial tanpa foto wajah (tidak ada klaim identitas palsu).
- Redesign ini TIDAK menambah gambar baru. Semua foto di `public/images/` adalah file lokal (tanpa picsum/Unsplash); tidak ada URL gambar remote di `src/`.

