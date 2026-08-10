import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://lendangbelo.com";

export const metadata: Metadata = {
  title: "Kontak Resmi Perangkat Desa Lendang Belo Lombok Timur NTB",
  description:
    "Hubungi Pemerintah Kantor Desa Lendang Belo, Montong Gading, Lombok Timur, NTB. Layanan informasi wisata, kemitraan, dan kontak langsung WhatsApp +62 818-0713-5209.",
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  keywords: [
    "Kontak Desa Lendang Belo",
    "Kantor Desa Lendang Belo",
    "Montong Gading Lombok Timur",
    "Pemerintah Desa Lendang Belo",
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero
        title="Hubungi Perangkat Desa"
        subheading="Kantor Desa Lendang Belo"
        caps="Kami siap melayani kebutuhan informasi wisata, kemitraan desa, dan reservasi Anda."
      />

      <section className="py-20 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="p-8 bg-white rounded-3xl border border-emerald-100 shadow-lg text-center space-y-3">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Alamat Kantor</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Desa Lendang Belo, Kabupaten Lombok Timur, Nusa Tenggara Barat
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-emerald-100 shadow-lg text-center space-y-3">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Telepon / WA</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <a
                  href="https://wa.me/6281807135209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#16a34a] font-semibold transition-colors"
                >
                  +62 818-0713-5209
                </a>
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-emerald-100 shadow-lg text-center space-y-3">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Email Resmi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <a
                  href="mailto:desalendangbelo2010@gmail.com"
                  className="hover:text-[#16a34a] font-semibold transition-colors"
                >
                  desalendangbelo2010@gmail.com
                </a>
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-emerald-100 shadow-lg text-center space-y-3">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Jam Layanan</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Senin - Sabtu: 08.00 - 16.00 WITA
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-xl max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Kirim Pesan Ke Perangkat Desa
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#16a34a] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@domain.com"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#16a34a] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Subjek Pesan
                </label>
                <input
                  type="text"
                  required
                  placeholder="Informasi Wisata / Kemitraan / Lainnya"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#16a34a] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Isi Pesan
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tuliskan pesan Anda..."
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#16a34a] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold rounded-xl text-base transition-colors shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
