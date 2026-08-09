"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Sparkles,
  Coffee,
  Trees,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface WisataEventItem {
  id: string;
  name: string;
  type: "Wisata Alam" | "Event Budaya" | "Tradisi & Kuliner";
  category: string;
  location: string;
  schedule: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  mainImage: string;
  gallery: { src: string; caption: string }[];
  icon: typeof Trees;
}

export const lendangBeloWisataAndEvents: WisataEventItem[] = [
  {
    id: "terasering-sawah",
    name: "Terasering Sawah Lendang Belo",
    type: "Wisata Alam",
    category: "Objek Wisata Alam",
    location: "Kawasan Persawahan Desa Lendang Belo",
    schedule: "Buka Setiap Hari (06:00 - 18:00 WITA)",
    shortDescription:
      "Pemandangan sawah terasering bertingkat membentang hijau alami khas Desa Lendang Belo yang menenangkan jiwa, menyejukkan mata, dan instagramable.",
    fullDescription:
      "Terasering Sawah Lendang Belo adalah daya tarik utama lanskap agrowisata pedesaan di kaki perbukitan. Wisatawan dapat menyusuri galengan sawah bertingkat, menyaksikan sistem irigasi alami warisan leluhur, serta menikmati kesegaran udara pagi dan pesona matahari terbenam di antara petakan sawah yang menghijau.",
    highlights: [
      "Spot foto lanskap persawahan bertingkat yang menakjubkan",
      "Jalur trekking ringan di antara pematang sawah alami",
      "Udara pegunungan yang segar dan suasana menenangkan",
      "Interaksi hangat dengan para petani lokal saat beraktivitas",
    ],
    mainImage: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118776/lendang-belo-ui/terasering-1.jpg",
    gallery: [
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118776/lendang-belo-ui/terasering-1.jpg",
        caption: "Panorama Terasering Sawah Bertingkat Lendang Belo",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118777/lendang-belo-ui/terasering-2.jpg",
        caption: "Pesona Terasering Sawah & Pohon Kelapa Asri",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118778/lendang-belo-ui/terasering-3.jpg",
        caption: "Bentangan Hijau Persawahan & Gubuk Petani",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118744/lendang-belo-ui/about-drone.jpg",
        caption: "Pemandangan Udara Kawasan Persawahan Lendang Belo",
      },
    ],
    icon: Trees,
  },
  {
    id: "festival-dara-ngindang",
    name: "Festival Dara Ngindang",
    type: "Event Budaya",
    category: "Event & Festival Kebudayaan",
    location: "Lapangan & Bale Desa Lendang Belo",
    schedule: "Agenda Rutin Musiman / Tahunan Desa",
    shortDescription:
      "Festival Dara Ngindang adalah tradisi unik di Desa Wisata Lendang Belo, Kabupaten Lombok Timur, Nusa Tenggara Barat, berupa pelepasan ribuan burung merpati secara bersama-sama.",
    fullDescription:
      "Festival Dara Ngindang adalah tradisi unik di Desa Wisata Lendang Belo, Kabupaten Lombok Timur, Nusa Tenggara Barat, berupa pelepasan ribuan burung merpati secara bersama-sama. Acara budaya ini menjadi daya tarik wisata untuk mengangkat potensi lokal dan tradisi masyarakat setempat.",
    highlights: [
      "Pelepasan ribuan burung merpati secara bersama-sama",
      "Tradisi unik & kebudayaan ikonik warga Desa Lendang Belo",
      "Pengangkatan potensi lokal & daya tarik wisata Lombok Timur",
      "Antusiasme & kebersamaan hangat masyarakat setempat",
    ],
    mainImage: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118748/lendang-belo-ui/dara-ngindang-1.jpg",
    gallery: [
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118748/lendang-belo-ui/dara-ngindang-1.jpg",
        caption: "Suasana Panggung Utama & Peserta Festival Dara Ngindang",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118750/lendang-belo-ui/dara-ngindang-2.jpg",
        caption: "Kurungan Burung Merpati Tradisional & Kebersamaan Warga",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118751/lendang-belo-ui/dara-ngindang-3.jpg",
        caption: "Masyarakat Menyaksikan Tradisi Pelepasan Burung Merpati",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118753/lendang-belo-ui/dara-ngindang-4.jpg",
        caption: "Foto Bersama Panitia & Warga Penyelenggara Festival",
      },
    ],
    icon: Sparkles,
  },
  {
    id: "siong-kopi-kete",
    name: "Siong Kopi Kete",
    type: "Event Budaya",
    category: "Event Tradisi & Kebersamaan Warga",
    location: "Area Pemukiman & Balai Desa Lendang Belo",
    schedule: "Kegiatan Rutin Akhir Pekan & Waktu Santai",
    shortDescription:
      "Event tradisi khas Desa Lendang Belo berupa kegiatan menggoreng kopi secara tradisional menggunakan wajan dari tanah liat, dinikmati bersama kehangatan warga desa.",
    fullDescription:
      "Siong Kopi Kete adalah salah satu event tradisi kebudayaan khas Desa Lendang Belo yang mana kegiatannya merupakan menggoreng (menyangrai) biji kopi secara tradisional menggunakan wajan dari tanah liat. Tradisi ini mempererat silaturahmi dan kebersamaan warga desa melalui suasana santai berkumpul, menyeduh kopi hangat hasil olahan sendiri, serta merokok tembakau hasil melinting sendiri.",
    highlights: [
      "Menggoreng (menyangrai) biji kopi tradisional dengan wajan tanah liat",
      "Cita rasa & aroma khas racikan kopi kete perdesaan Lendang Belo",
      "Event tradisi silaturahmi & kebersamaan hangat warga desa",
      "Tradisi merokok tembakau linting khas kebudayaan Suku Sasak",
    ],
    mainImage: "https://res.cloudinary.com/tar8ttin/image/upload/v1786284090/lendang-belo-ui/siong-kopi-kete-1.jpg",
    gallery: [
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786284090/lendang-belo-ui/siong-kopi-kete-1.jpg",
        caption: "Proses Menggoreng Kopi Tradisional Menggunakan Wajan Tanah Liat",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786284091/lendang-belo-ui/siong-kopi-kete-2.jpg",
        caption: "Deretan Warga Desa Menyangrai Kopi Bersama",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786284092/lendang-belo-ui/siong-kopi-kete-3.jpg",
        caption: "Kebersamaan Peserta & Panitia Festival Siong Kopi Kete",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786284093/lendang-belo-ui/siong-kopi-kete-4.jpg",
        caption: "Tradisi Menyangrai Kopi Kete Khas Perdesaan",
      },
    ],
    icon: Coffee,
  },
];

export default function DestinationSection() {
  const [selectedItem, setSelectedItem] = useState<WisataEventItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const openModal = (item: WisataEventItem) => {
    setSelectedItem(item);
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handlePrevImage = () => {
    if (!selectedItem) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedItem.gallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!selectedItem) return;
    setActiveImageIndex((prev) =>
      prev === selectedItem.gallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="wisata-event">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-arizonia text-3xl text-[#16a34a] block">
            Destinasi & Kebudayaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Wisata & Event Desa Lendang Belo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Klik pada setiap objek wisata atau event desa untuk melihat informasi lengkap, cerita kebudayaan, dan galeri foto selengkapnya.
          </p>
        </div>

        {/* Combined Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lendangBeloWisataAndEvents.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onClick={() => openModal(item)}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col border border-emerald-100/80 hover:border-[#16a34a]/60 cursor-pointer"
              >
                {/* Image Header Container */}
                <div className="relative h-64 w-full overflow-hidden shrink-0">
                  <Image
                    src={item.mainImage}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <span className="bg-[#16a34a] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                      {item.category}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4 text-[#4ade80]" />
                    </div>
                  </div>

                  {/* Title overlay on bottom of image */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3
                      style={{ color: "#ffffff", textShadow: "0 2px 10px rgba(0,0,0,0.95)" }}
                      className="!text-white text-xl font-extrabold group-hover:text-[#4ade80] transition-colors leading-snug tracking-tight"
                    >
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.shortDescription}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <div className="space-y-1.5 text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#16a34a] shrink-0" />
                        <span className="font-medium text-slate-700">{item.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#16a34a] shrink-0" />
                        <span className="font-medium text-slate-700 truncate">{item.location}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-[#16a34a] text-[#16a34a] hover:text-white rounded-xl font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-200/60"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Lihat Detail & Galeri</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail & Photo Gallery Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col border border-emerald-100"
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-[#0f291e] to-[#16a34a] text-white flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-[#4ade80]">
                    <selectedItem.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#4ade80] uppercase tracking-wider">
                      {selectedItem.category}
                    </span>
                    <h3
                      style={{ color: "#ffffff" }}
                      className="!text-white text-lg sm:text-xl font-extrabold leading-tight"
                    >
                      {selectedItem.name}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Tutup Detail"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body Content (Scrollable) */}
              <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
                {/* Photo Gallery Viewer */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#16a34a]" />
                      <span>Galeri Foto ({activeImageIndex + 1}/{selectedItem.gallery.length})</span>
                    </h4>
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                      Gunakan tombol panah atau klik foto mini untuk mengganti foto
                    </span>
                  </div>

                  {/* Main Large Photo Display */}
                  <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md group">
                    <Image
                      src={selectedItem.gallery[activeImageIndex].src}
                      alt={selectedItem.gallery[activeImageIndex].caption}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                    {/* Navigation Arrows */}
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#16a34a] text-white flex items-center justify-center backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 cursor-pointer"
                      aria-label="Foto Sebelumnya"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#16a34a] text-white flex items-center justify-center backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 cursor-pointer"
                      aria-label="Foto Selanjutnya"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Caption Overlay */}
                    <div className="absolute bottom-3 left-4 right-4 text-white text-xs sm:text-sm font-medium bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl">
                      {selectedItem.gallery[activeImageIndex].caption}
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-4 gap-3 pt-1">
                    {selectedItem.gallery.map((photo, idx) => (
                      <button
                        key={photo.src + idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          activeImageIndex === idx
                            ? "border-[#16a34a] ring-2 ring-[#16a34a]/40 scale-[1.02]"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.caption}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Info & Story Details */}
                <div className="space-y-6 pt-4 border-t border-slate-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-2">
                        Tentang {selectedItem.name}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {selectedItem.fullDescription}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Daya Tarik & Keunggulan:
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedItem.highlights.map((point, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/60">
                            <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
                    <a
                      href={`https://wa.me/6281234567890?text=Halo%20Pengelola%20Desa%20Lendang%20Belo,%20saya%20ingin%20bertanya%20informasi%20mengenai%20${encodeURIComponent(
                        selectedItem.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-2.5 px-6 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#16a34a]/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Tanya via WhatsApp</span>
                    </a>

                    <Link
                      href="/map"
                      onClick={closeModal}
                      className="w-full sm:w-auto py-2.5 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-slate-200"
                    >
                      <MapPin className="w-4 h-4 text-[#16a34a]" />
                      <span>Buka Peta Wisata</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
