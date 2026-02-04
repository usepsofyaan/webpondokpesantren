import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { CalendarDays } from "lucide-react";

const kalenderAkademik = [
  {
    tanggal: "15 Juli 2026",
    kegiatan: "Awal Tahun Ajaran Baru",
    kategori: "Akademik",
  },
  {
    tanggal: "20 Juli 2026",
    kegiatan: "Masa Ta'aruf Santri Baru",
    kategori: "Kegiatan",
  },
  {
    tanggal: "1 Agustus 2026",
    kegiatan: "Mulai Kegiatan Belajar Mengajar (KBM)",
    kategori: "Akademik",
  },
  {
    tanggal: "17 Agustus 2026",
    kegiatan: "Libur Hari Kemerdekaan",
    kategori: "Libur",
  },
];

export default function KalenderAkademik() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-4">
          <CalendarDays className="w-8 h-8 text-emerald-400" />
          <h1 className="text-3xl md:text-4xl font-bold">Kalender Akademik</h1>
        </div>

        <p className="text-gray-400 max-w-2xl">Informasi jadwal kegiatan akademik dan non-akademik Mahad Ibnu Aqil selama satu tahun ajaran.</p>
      </section>

      {/* Kalender List */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-6">
          {kalenderAkademik.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between
              bg-gray-900 border border-gray-800 rounded-xl p-5
              hover:border-emerald-500 transition"
            >
              <div>
                <p className="text-sm text-gray-400">{item.tanggal}</p>
                <h3 className="text-lg font-semibold mt-1">{item.kegiatan}</h3>
              </div>

              <span
                className={`mt-3 md:mt-0 inline-block px-3 py-1 text-sm rounded-full
                ${item.kategori === "Akademik" ? "bg-emerald-500/20 text-emerald-400" : item.kategori === "Libur" ? "bg-red-500/20 text-red-400" : "bg-blue-500/20 text-blue-400"}`}
              >
                {item.kategori}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
