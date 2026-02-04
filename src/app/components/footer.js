"use client";

import { MapPin, Mail, Phone, Home, Info, BookOpen, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Mahad Ibnu Aqil</h2>

          {/* Disembunyikan di mobile */}
          <p className="text-sm leading-relaxed hidden md:block">Lembaga pendidikan Islam yang berfokus pada pembinaan akidah, akhlak, dan ilmu syar’i berdasarkan Al-Qur’an dan Sunnah.</p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Home size={16} />
              <a href="/" className="hover:text-white transition">
                Beranda
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Info size={16} />
              <a href="/about" className="hover:text-white transition">
                Tentang Kami
              </a>
            </li>
            <li className="flex items-center gap-2">
              <BookOpen size={16} />
              <a href="/kajian" className="hover:text-white transition">
                Kajian
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={16} />
              <a href="/kontak" className="hover:text-white transition">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kontak</h3>

          <ul className="space-y-3 text-sm leading-relaxed">
            {/* Google Maps */}
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <a href="https://www.google.com/maps/search/?api=1&query=mahad+ibnu+aqil" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Jl. Delima VII / Radio Raya No. 24 RT/RW 008/01 Kel. Tobekgodang, Kec. Binawidya Pekanbaru 28294
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@mahadibnuaqil.id</span>
            </li>

            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>+62 8xxx xxxx xxxx</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-400">© {new Date().getFullYear()} Mahad Ibnu Aqil</div>
    </footer>
  );
}
