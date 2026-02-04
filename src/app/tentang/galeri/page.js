import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const galeriImages = [
  {
    id: 1,
    src: "/kbm/kbm-1.jpg",
    title: "Kegiatan Belajar Santri",
  },
  {
    id: 2,
    src: "/kbm/kbm-2.jpg",
    title: "Halaqah Al-Qur'an",
  },
  {
    id: 3,
    src: "/kbm/kbm-3.jpg",
    title: "Kegiatan Outdoor",
  },
];

export default function GaleriPage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-12 text-center px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Galeri Kegiatan</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Dokumentasi kegiatan belajar, ibadah, dan keseharian santri Mahad Ibnu Aqil.</p>
      </section>

      {/* Grid Galeri */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galeriImages.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image src={item.src} alt={item.title} width={600} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-4">
                  <p className="text-sm font-semibold">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
