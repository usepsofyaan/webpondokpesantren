"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FloatingButton from "./components/floatingbutton";

const slides = [
  {
    image: "/slides/bg-1.jpeg",
    title: "Mahad Ibnu Aqil",
    subtitle: "Mencetak Generasi Berilmu dan Berakhlak",
  },
  {
    image: "/slides/bg-1.jpeg",
    title: "Pendidikan Islam Terpadu",
    subtitle: "Berbasis Al-Qur'an dan Sunnah",
  },
  {
    image: "/slides/bg-1.jpeg",
    title: "Lingkungan Islami",
    subtitle: "Nyaman, Aman, dan Kondusif",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />

      {/* SLIDESHOW */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}>
            {/* IMAGE */}
            <Image src={slide.image} alt={slide.title} fill priority={index === 0} className="object-cover" />

            {/* OVERLAY DARK */}
            <div className="absolute inset-0 bg-black/50" />

            {/* TEXT OVERLAY */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-wide">{slide.title}</h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION KBM */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Kegiatan Belajar Mengajar</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">Proses pembelajaran di Mahad Ibnu Aqil dirancang untuk membentuk santri yang berilmu, berakhlak, dan berlandaskan nilai-nilai Islam.</p>

          {/* CARD KBM */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
              <img src="/kbm/kbm-1.jpg" alt="Halaqah Al-Qur'an" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Halaqah Al-Qur'an</h3>
              <p className="mt-2 text-gray-600 text-sm">Pembelajaran Al-Qur'an secara talaqqi dan tahfidz dengan bimbingan ustadz berpengalaman.</p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
              <img src="/kbm/kbm-2.jpg" alt="Kajian Kitab" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Kajian Kitab</h3>
              <p className="mt-2 text-gray-600 text-sm">Mengkaji kitab-kitab turats dan kontemporer untuk memperkuat pemahaman agama secara mendalam.</p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
              <img src="/kbm/kbm-3.jpg" alt="Pembelajaran Terpadu" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Pembelajaran Terpadu</h3>
              <p className="mt-2 text-gray-600 text-sm">Integrasi ilmu syar'i dan umum dalam suasana belajar yang nyaman dan kondusif.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION BERITA TERKINI */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Berita Terkini</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">Informasi terbaru seputar kegiatan, pengumuman, dan agenda Mahad Ibnu Aqil.</p>
          </div>

          {/* LIST BERITA */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* BERITA 1 */}
            <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img src="/berita/uts.jpeg" alt="Ujian Tengah Semester" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500">10 Januari 2026</p>
                <h3 className="mt-2 text-xl font-semibold text-gray-800">Pelaksanaan Ujian Tengah Semester</h3>
                <p className="mt-2 text-gray-600 text-sm">Mahad Ibnu Aqil melaksanakan UTS sebagai evaluasi pembelajaran santri.</p>
                <a href="#" className="inline-block mt-4 text-green-700 font-medium hover:underline">
                  Baca Selengkapnya →
                </a>
              </div>
            </div>

            {/* BERITA 2 */}
            <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img src="/berita/wisuda.jpeg" alt="Wisuda Tahfidz" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500">22 Februari 2026</p>
                <h3 className="mt-2 text-xl font-semibold text-gray-800">Wisuda Tahfidz Santri</h3>
                <p className="mt-2 text-gray-600 text-sm">Momen haru wisuda tahfidz bagi santri yang telah menyelesaikan hafalan.</p>
                <a href="#" className="inline-block mt-4 text-green-700 font-medium hover:underline">
                  Baca Selengkapnya →
                </a>
              </div>
            </div>

            {/* BERITA 3 */}
            <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img src="/berita/bukapuasa.jpeg" alt="Kegiatan Santri" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500">5 Maret 2026</p>
                <h3 className="mt-2 text-xl font-semibold text-gray-800">Kegiatan Santri di Bulan Ramadhan</h3>
                <p className="mt-2 text-gray-600 text-sm">Rangkaian kegiatan Ramadhan untuk meningkatkan iman dan amal santri.</p>
                <a href="#" className="inline-block mt-4 text-green-700 font-medium hover:underline">
                  Baca Selengkapnya →
                </a>
              </div>
            </div>
          </div>

          {/* BUTTON ALL NEWS */}
          <div className="mt-12 text-center">
            <a href="/berita" className="inline-block bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition">
              Lihat Semua Berita
            </a>
          </div>
        </div>

        <FloatingButton />
      </section>

      <Footer />
    </div>
  );
}
