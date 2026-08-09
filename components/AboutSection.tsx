"use client";

import { useState } from "react";
import Image from "next/image";
import { History, Compass, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"tentang" | "sejarah" | "gambaran">("tentang");

  const tabContents = {
    tentang: {
      title: "Tentang Desa Lendang Belo",
      icon: Compass,
      image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118744/lendang-belo-ui/about-drone.jpg",
      badge: "Profil & Identitas Desa",
      subtitle: "Kawasan Desa Wisata Asri di Kaki Gunung Rinjani",
      content: [
        "Lendang Belo adalah sebuah desa di Kecamatan Montong Gading, Kabupaten Lombok Timur, Provinsi Nusa Tenggara Barat yang dianugerahi keindahan alam perbukitan yang hijau dan udara pegunungan yang menyejukkan.",
        "Desa ini terkenal dengan panorama lanskap persawahan terasering bertingkat yang membentang luas. Keasrian lingkungan pedesaan yang terjaga menjadikan Lendang Belo sebagai destinasi ideal bagi wisatawan yang merindukan ketenangan alam pedesaan Lombok.",
      ],
      highlights: [
        "Lanskap persawahan terasering bertingkat yang memukau",
        "Udara pegunungan yang sejuk dan bebas polusi",
        "Budaya meminum kopi & merokok tembakau linting sendiri",
        "Lingkungan pedesaan yang bersih, hijau, dan lestari",
      ],
    },
    sejarah: {
      title: "Sejarah Singkat Desa",
      icon: History,
      image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118761/lendang-belo-ui/hero-1.jpg",
      badge: "Asal-Usul & Warisan Leluhur",
      subtitle: "Makna Nama Lendang Belo & Perkembangan Desa",
      content: [
        "Nama 'Lendang Belo' berasal dari Bahasa Sasak lokal. Kata 'Lendang' memiliki arti padang atau bentangan hamparan tanah yang luas, sedangkan kata 'Belo' memiliki arti panjang.",
        "Desa Lendang Belo merupakan desa yang baru mengalami pemekaran pada tahun 2016. Dulunya desa ini termasuk dalam Desa Kilang. Desa Lendang Belo merupakan desa terkecil di Kecamatan Montong Gading.",
        "Secara harfiah, Lendang Belo mengartikan bentangan tanah atau persawahan hijau yang membentang panjang melintasi kawasan perbukitan. Sejak dahulu kala, para tetua desa telah membuka kawasan ini sebagai pemukiman agraria yang hidup harmonis dengan alam sekitar.",
        "Generasi demi generasi warga Lendang Belo terus menjaga kearifan lokal, tradisi gotong royong, serta kebudayaan khas Sasak yang menjadi identitas kebanggaan desa hingga saat ini.",
      ],
      highlights: [
        "Desa hasil pemekaran dari Desa Kilang pada tahun 2016",
        "Desa dengan wilayah terkecil di Kecamatan Montong Gading",
        "Makna nama 'Lendang' (Padang/Hamparan) dan 'Belo' (Panjang)",
        "Tradisi gotong royong warga & kearifan lokal Sasak yang terjaga",
      ],
    },
    gambaran: {
      title: "Gambaran Umum Desa",
      icon: Users,
      image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118765/lendang-belo-ui/hero-3.jpg",
      badge: "Demografi & Kemasyarakatan",
      subtitle: "Kehidupan Sosial, Budaya Sasak & Mata Pencaharian",
      content: [
        "Masyarakat Desa Lendang Belo mayoritas berasal dari Suku Sasak yang menjunjung tinggi kebudayaan lokal dan nilai-nilai kebersamaan. Keramahan serta kehangatan warga dalam menyambut setiap tamu menjadi ciri khas utama desa ini.",
        "Mata pencaharian utama penduduk desa adalah pertanian persawahan terasering. Selain bertani, warga menjaga kebiasaan hangat meminum kopi dan merokok dengan tembakau hasil melinting sendiri secara kebersamaan.",
        "Selain aktivitas sehari-hari, warga aktif dalam acara kemasyarakatan dan kegiatan kebudayaan desa seperti Festival Dara Ngindang dan Siong Kopi Kete.",
      ],
      highlights: [
        "Masyarakat Suku Sasak yang ramah dan terbuka",
        "Mata pencaharian utama sektor pertanian persawahan terasering",
        "Budaya meminum kopi & merokok tembakau linting sendiri",
        "Kehidupan sosial yang rukun, aman, dan harmonis",
      ],
    },
  };

  const activeInfo = tabContents[activeTab];

  return (
    <section className="py-20 bg-emerald-50/40 overflow-hidden" id="tentang">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-arizonia text-3xl text-[#16a34a] block">
            Profil Resmi Desa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mengenal Lebih Dekat Desa Lendang Belo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Jelajahi informasi lengkap mengenai identitas desa, sejarah singkat nama Lendang Belo, serta gambaran umum kehidupan sosial masyarakat.
          </p>
        </div>

        {/* Custom Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab("tentang")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-all shadow-sm cursor-pointer ${activeTab === "tentang"
                ? "bg-[#16a34a] text-white shadow-md scale-105"
                : "bg-white text-slate-700 hover:bg-emerald-100/60 border border-slate-200"
              }`}
          >
            <Compass className="w-5 h-5" />
            <span>Tentang Desa</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("sejarah")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-all shadow-sm cursor-pointer ${activeTab === "sejarah"
                ? "bg-[#16a34a] text-white shadow-md scale-105"
                : "bg-white text-slate-700 hover:bg-emerald-100/60 border border-slate-200"
              }`}
          >
            <History className="w-5 h-5" />
            <span>Sejarah Singkat</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("gambaran")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-all shadow-sm cursor-pointer ${activeTab === "gambaran"
                ? "bg-[#16a34a] text-white shadow-md scale-105"
                : "bg-white text-slate-700 hover:bg-emerald-100/60 border border-slate-200"
              }`}
          >
            <Users className="w-5 h-5" />
            <span>Gambaran Umum</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-6 sm:p-10 rounded-3xl border border-emerald-100 shadow-xl"
          >
            {/* Image Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                <Image
                  src={activeInfo.image}
                  alt={activeInfo.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

                {/* Text Overlay directly on Gradient without dark box */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2.5 z-10">
                  <span
                    style={{ color: "#4ade80", backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                    className="!text-[#4ade80] inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-400/50 shadow-lg"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#4ade80]" />
                    {activeInfo.badge}
                  </span>
                  <h3
                    style={{ color: "#ffffff", textShadow: "0 3px 12px rgba(0,0,0,0.95)" }}
                    className="!text-white text-xl sm:text-2xl font-black leading-snug tracking-tight"
                  >
                    {activeInfo.subtitle}
                  </h3>
                </div>
              </div>
            </div>

            {/* Text & Content Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#16a34a]">
                  {activeInfo.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {activeInfo.title}
                </h3>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeInfo.content.map((pText, i) => (
                  <p key={i} className="text-justify">{pText}</p>
                ))}
              </div>

              {/* Key Points Grid */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Poin Utama & Karakteristik:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeInfo.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
