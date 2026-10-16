export const business = {
  name: 'My Fitness Jambi',
  slug: 'my-fitness-jambi',
  category: 'Gym Area The Hok',
  city: 'Kota Jambi',
  // Catatan: tidak ditemukan IG resmi My Fitness Jambi (16 Okt 2026).
  // Akun @myfitness_kebunkopi adalah bisnis berbeda — TIDAK dipakai.
  // Nomor WA resmi belum terverifikasi — CTA utama: kunjungan langsung + Google Maps.
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=My+Fitness+The+Hok+Jambi',
  mapsEmbed: 'https://maps.google.com/maps?q=My%20Fitness%20The%20Hok%20Jambi&t=&z=15&ie=UTF8&iwloc=&output=embed',
  address: 'The Hok, Kota Jambi — titik pasti cek Google Maps',
  hours: 'Jam operasional konfirmasi via kunjungan / Google Maps',
  title: 'My Fitness The Hok Jambi — Gym Dekat Rumah Warga',
  description:
    'My Fitness area The Hok Jambi: gym beban & kardio, kelas, personal training untuk warga sekitar. Survei langsung ke lokasi — tanpa komitmen.',
  canonicalPath: '/',
  ogImage: '/images/my-fitness-1.jpg',
};

export const programs = [
  {
    name: 'Open Gym — Beban & Kardio',
    badge: 'Estimasi',
    desc: 'Area latihan beban dan kardio untuk member harian/bulanan. Fasilitas pasti cek lokasi.',
    img: '/images/my-fitness-1.jpg',
    alt: 'Area beban gym My Fitness The Hok Jambi',
  },
  {
    name: 'Kelas Grup',
    badge: 'Estimasi',
    desc: 'Kelas kebugaran terjadwal. Jadwal pasti cek papan info / tanya di lokasi.',
    img: '/images/my-fitness-2.jpg',
    alt: 'Kelas grup kebugaran My Fitness Jambi',
  },
  {
    name: 'Personal Training',
    badge: 'Estimasi',
    desc: 'Program 1-on-1 sesuai target. Ketersediaan trainer tanya di lokasi.',
    img: '/images/my-fitness-3.jpg',
    alt: 'Rak dumbel untuk sesi personal training My Fitness Jambi',
  },
  {
    name: 'Asesmen & Konsultasi Pemula',
    badge: 'Estimasi',
    desc: 'Pemula disarankan asesmen dulu sebelum program. Gratis/tidak tergantung lokasi.',
    img: '/images/my-fitness-4.jpg',
    alt: 'Asesmen awal member baru My Fitness Jambi',
  },
];

export const coaches = [
  { role: 'Coach Gym', badge: 'Estimasi', desc: 'Panduan teknik dasar. Nama coach aktual tanya di lokasi.' },
  { role: 'Instruktur Kelas', badge: 'Estimasi', desc: 'Memimpin kelas terjadwal. Jadwal cek di lokasi.' },
  { role: 'Personal Trainer', badge: 'Estimasi', desc: 'Program personal. Tarif & slot tanya di lokasi.' },
];

export const prices = [
  { name: 'Kunjungan Coba', price: 'Konfirmasi lokasi', badge: 'Estimasi', desc: 'Tanya resepsionis apakah ada sesi coba.' },
  { name: 'Harian — 1 Hari', price: 'Rp 30.000', badge: 'Estimasi', desc: 'Harga estimasi Jambi, konfirmasi di lokasi.' },
  { name: 'Mingguan', price: 'Rp 100.000', badge: 'Estimasi', desc: 'Harga estimasi Jambi, konfirmasi di lokasi.' },
  { name: 'Bulanan — Full Akses', price: 'Rp 250.000', badge: 'Estimasi', desc: 'Harga estimasi Jambi, konfirmasi di lokasi.' },
  { name: 'Personal Training 4 Sesi', price: 'Rp 450.000', badge: 'Estimasi', desc: 'Harga estimasi Jambi, konfirmasi di lokasi.' },
  { name: 'Tahunan', price: 'Rp 2.500.000', badge: 'Estimasi', desc: 'Harga estimasi Jambi, konfirmasi di lokasi.' },
];
