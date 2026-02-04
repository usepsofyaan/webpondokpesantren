"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showArabic, setShowArabic] = useState(false);
  const [fade, setFade] = useState(true);

  const menus = [
    { name: "Home", href: "/" },
    { name: "Pendaftaran", href: "/pendaftaran" },
    { name: "Info KBM", href: "/kbm" },
    { name: "Tentang Kami", href: "/tentang" },
  ];

  // Animasi ganti teks
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setShowArabic((prev) => !prev);
        setFade(true); // fade in
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo dengan animasi */}
        <Link href="/" className={`font-bold text-xl tracking-wide text-green-700 dark:text-green-400 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
          {showArabic ? "مَعْهَدُ ابْنُ عَقِيلٍ" : "Ma’had Ibnu Aqil"}
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {menus.map((menu, i) => (
            <Link key={i} href={menu.href} className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition">
              {menu.name}
            </Link>
          ))}
        </div>

        {/* Button Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700 dark:text-gray-300">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col px-4 py-4 gap-4">
            {menus.map((menu, i) => (
              <Link key={i} href={menu.href} onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition">
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
