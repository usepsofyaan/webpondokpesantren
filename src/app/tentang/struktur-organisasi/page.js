import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";

const struktur = [
  {
    nama: "Pimpinan Mahad",
    jabatan: "Mudir Mahad",
    foto: "/images/mudir.jpg",
  },
  {
    nama: "Wakil Pimpinan",
    jabatan: "Wakil Mudir",
    foto: "/images/wakil.jpg",
  },
  {
    nama: "Bagian Akademik",
    jabatan: "Kepala Akademik",
    foto: "/images/akademik.jpg",
  },
  {
    nama: "Bagian Kesantrian",
    jabatan: "Kepala Kesantrian",
    foto: "/images/kesantrian.jpg",
  },
  {
    nama: "Bagian Administrasi",
    jabatan: "Tata Usaha",
    foto: "/images/admin.jpg",
  },
];

export default function StrukturOrganisasi() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Struktur Organisasi</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Susunan kepengurusan Mahad Ibnu Aqil yang bertanggung jawab dalam pengelolaan pendidikan dan pembinaan santri.</p>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {struktur.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image src={item.foto} alt={item.nama} fill className="object-cover rounded-full border-4 border-gray-800" />
              </div>
              <h3 className="text-xl font-semibold">{item.nama}</h3>
              <p className="text-blue-400 mt-1">{item.jabatan}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
