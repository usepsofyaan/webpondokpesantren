"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PendaftaranPage() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    noHp: "",
    alamat: "",
    program: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // sementara hanya log, nanti bisa kirim ke API / Supabase
    console.log("Data Pendaftaran:", form);

    alert("Pendaftaran berhasil dikirim!");
    setForm({
      nama: "",
      email: "",
      noHp: "",
      alamat: "",
      program: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-500 text-white flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="text-center py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Pendaftaran Santri Baru</h1>
        <p className="text-gray-400 max-w-xl mx-auto">Silakan lengkapi formulir di bawah ini untuk mendaftar sebagai santri di Mahad Ibnu Aqil.</p>
      </section>

      {/* Form */}
      <section className="flex justify-center px-4 pb-20">
        <form onSubmit={handleSubmit} className="w-full max-w-xl bg-gray-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-lg">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              required
              value={form.nama}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Nama lengkap"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Nomor WhatsApp</label>
            <input
              type="tel"
              name="noHp"
              required
              value={form.noHp}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="08xxxxxxxxxx"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Alamat</label>
            <textarea
              name="alamat"
              required
              value={form.alamat}
              onChange={handleChange}
              rows="3"
              className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Alamat lengkap"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Program Pendidikan</label>
            <select name="program" required value={form.program} onChange={handleChange} className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">-- Pilih Program --</option>
              <option value="Tahfidz">Tahfidz Al-Qur'an</option>
              <option value="Bahasa Arab">Bahasa Arab</option>
              <option value="Dirosah Islamiyah">Dirosah Islamiyah</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 transition rounded-lg py-3 font-semibold">
            Daftar Sekarang
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
