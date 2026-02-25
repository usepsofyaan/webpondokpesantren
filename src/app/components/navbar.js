"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showArabic, setShowArabic] = useState(false);
  const [fade, setFade] = useState(true);
  const [kbmOpen, setKbmOpen] = useState(false);
  const [tentangOpen, setTentangOpen] = useState(false);

  // Animasi logo
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setShowArabic((prev) => !prev);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`font-bold text-xl tracking-wide text-green-700 dark:text-green-400 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
          {showArabic ? "مَدْرَسَة إِبْتِدَائِيَّة ابْنُ عَقِيلٍ" : "Madrasah Ibtidaiyah Ibnu 'Aqil"}
        </Link>

        {/* ===== MENU DESKTOP ===== */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/pendaftaran" className="nav-link">
            Pendaftaran
          </Link>

          {/* Dropdown Info KBM */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition">
              Info KBM <ChevronDown size={16} />
            </button>

            <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/kalender-akademik" className="block px-4 py-3 hover:bg-green-50 dark:hover:bg-gray-800 transition">
                Kalender Akademik
              </Link>
              <Link href="/sistem-pembelajaran" className="block px-4 py-3 hover:bg-green-50 dark:hover:bg-gray-800 transition">
                Sistem Pembelajaran
              </Link>
            </div>
          </div>

          {/* Dropdown Tentang Kami */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition">
              Tentang Kami <ChevronDown size={16} />
            </button>

            <div
              className="
      absolute top-full left-0 mt-2
      w-56 rounded-xl
      bg-white dark:bg-gray-900
      shadow-lg border border-gray-200 dark:border-gray-800
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-200
    "
            >
              <Link href="/tentang/struktur-organisasi" className="block px-4 py-3 hover:bg-green-50 dark:hover:bg-gray-800 transition">
                Struktur Organisasi
              </Link>
              <Link href="/tentang/galeri" className="block px-4 py-3 hover:bg-green-50 dark:hover:bg-gray-800 transition">
                Galeri
              </Link>
            </div>
          </div>
        </div>

        {/* ===== BUTTON MOBILE ===== */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700 dark:text-gray-300">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ===== MENU MOBILE ===== */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col px-4 py-4 gap-4">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/pendaftaran" onClick={() => setOpen(false)}>
              Pendaftaran
            </Link>

            {/* Dropdown Mobile KBM */}
            <button onClick={() => setKbmOpen(!kbmOpen)} className="flex items-center justify-between">
              <span>Info KBM</span>
              <ChevronDown size={18} className={`transition ${kbmOpen ? "rotate-180" : ""}`} />
            </button>

            {kbmOpen && (
              <div className="ml-4 flex flex-col gap-3 text-sm">
                <Link href="/kalender-akademik" onClick={() => setOpen(false)}>
                  Kalender Akademik
                </Link>
                <Link href="/sistem-pembelajaran" onClick={() => setOpen(false)}>
                  Sistem Pembelajaran
                </Link>
              </div>
            )}

            {/* Dropdown Mobile Tentang Kami */}
            <button onClick={() => setTentangOpen(!tentangOpen)} className="flex items-center justify-between">
              <span>Tentang Kami</span>
              <ChevronDown size={18} className={`transition ${tentangOpen ? "rotate-180" : ""}`} />
            </button>

            {tentangOpen && (
              <div className="ml-4 flex flex-col gap-3 text-sm">
                <Link href="/tentang/struktur-organisasi" onClick={() => setOpen(false)}>
                  Struktur Organisasi
                </Link>
                <Link href="/tentang/galeri" onClick={() => setOpen(false)}>
                  Galeri
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
