import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function SistemPembelajaran() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-900/40 to-gray-950 py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sistem Pembelajaran</h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          Sistem pendidikan di Mahad Ibnu Aqil dirancang untuk membentuk santri yang berakidah lurus, berakhlak mulia, dan memiliki pemahaman Islam yang shahih berdasarkan Al-Qur’an dan Sunnah.
        </p>
      </section>

      {/* Konsep Pembelajaran */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Konsep Pembelajaran</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Tarbiyah Islamiyah</h3>
            <p className="text-gray-400 text-sm">Pendidikan berbasis penanaman akidah, ibadah, dan akhlak sesuai manhaj Ahlus Sunnah wal Jama’ah.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Ilmu Syar’i</h3>
            <p className="text-gray-400 text-sm">Pembelajaran Al-Qur’an, Hadits, Fiqih, Aqidah, dan Bahasa Arab dengan metode bertahap dan terstruktur.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Pembinaan Karakter</h3>
            <p className="text-gray-400 text-sm">Pembiasaan adab, kedisiplinan, dan tanggung jawab dalam kehidupan sehari-hari santri.</p>
          </div>
        </div>
      </section>

      {/* Metode Pembelajaran */}
      <section className="bg-gray-900/50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">Metode Pembelajaran</h2>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
            <li className="bg-gray-950 p-6 rounded-xl border border-gray-800">📘 Talaqqi dan Musyafahah bersama ustadz</li>
            <li className="bg-gray-950 p-6 rounded-xl border border-gray-800">📝 Halaqah dan diskusi terarah</li>
            <li className="bg-gray-950 p-6 rounded-xl border border-gray-800">📖 Hafalan dan muroja’ah rutin</li>
            <li className="bg-gray-950 p-6 rounded-xl border border-gray-800">🕋 Praktik ibadah dan penerapan adab</li>
          </ul>
        </div>
      </section>

      {/* Target Lulusan */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Target Lulusan</h2>

        <div className="grid md:grid-cols-3 gap-8 text-gray-300">
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">✔ Memiliki akidah yang lurus</div>
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">✔ Mampu membaca dan memahami Al-Qur’an dengan baik</div>
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">✔ Berakhlak mulia dalam kehidupan bermasyarakat</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
