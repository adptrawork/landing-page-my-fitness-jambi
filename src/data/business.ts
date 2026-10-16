export const business = {
  name: 'My Fitness Jambi',
  slug: 'my-fitness-jambi',
  category: 'Gym Area The Hok',
  city: 'Kota Jambi',
  rating: 4.9,
  reviewCount: 110,
  phone: '6281234567890', // TODO-GANTI: nomor WA aktif pemilik
  mapsUrl: 'https://maps.google.com/?q=My%20Fitness%20Jambi%20Jambi',
  address: 'The Hok, Kota Jambi',
  hours: 'Senin–Sabtu 09.00–21.00, Minggu 10.00–20.00',
  title: 'My Fitness Jambi The Hok — Konsultasi Gratis',
  description: 'My Fitness Jambi: jangkauan The Hok via SEO lokal, form konsultasi pemula via WhatsApp.',
  canonicalPath: '/',
  ogImage: '/og-default.jpg',
};

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  {
    "name": "Harian — Akses 1 Hari + 1 Kelas",
    "price": "Rp 35.000",
    "badge": "Fleksibel",
    "stock": "Kuota"
  },
  {
    "name": "Mingguan — 7 Hari Semua Kelas",
    "price": "Rp 120.000",
    "badge": "Populer",
    "stock": "Kuota"
  },
  {
    "name": "Bulanan — Full Akses + Program",
    "price": "Rp 300.000",
    "badge": "Hemat",
    "stock": "Kuota"
  },
  {
    "name": "Tahunan — Full + 2 Bulan Bonus",
    "price": "Rp 2.900.000",
    "badge": "Best Value",
    "stock": "Kuota"
  },
  {
    "name": "Free Trial 1x + Konsultasi",
    "price": "Rp 0",
    "badge": "Gratis",
    "stock": "Slot"
  },
  {
    "name": "Personal Trainer 4 Sesi",
    "price": "Rp 500.000",
    "badge": "Progres",
    "stock": "Slot"
  }
];
