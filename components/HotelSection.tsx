"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  MessageCircle,
  Globe,
  ExternalLink,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Home,
  Coffee,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface HomestayGalleryImage {
  src: string;
  caption: string;
}

export interface HomestayItem {
  id: string;
  name: string;
  type: string;
  location: string;
  price: string;
  bookingType: "online" | "whatsapp";
  bookingUrl?: string;
  phoneWhatsapp?: string;
  phoneWhatsapp2?: string;
  owner?: string;
  whatsappMessage?: string;
  image: string;
  gallery: HomestayGalleryImage[];
  features: string[];
  fullDescription: string;
  note: string;
  icon: typeof Home;
}

export const lendangBeloHomestays: HomestayItem[] = [
  {
    id: "bello-bungalow",
    name: "Bello Bungalow",
    type: "Bungalow & Penginapan",
    location: "Kawasan Desa Lendang Belo, Lombok Timur",
    price: "Penginapan",
    bookingType: "online",
    bookingUrl: "https://www.booking.com/hotel/id/bello-bungalow.id.html",
    image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118745/lendang-belo-ui/bello-bungalow-1.jpg",
    gallery: [
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118745/lendang-belo-ui/bello-bungalow-1.jpg",
        caption: "Bangunan Kayu Bertingkat Bello Bungalow Khas Sasak",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118746/lendang-belo-ui/bello-bungalow-2.jpg",
        caption: "Fasilitas Kolam Renang Outdoor Asri Bello Bungalow",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118747/lendang-belo-ui/bello-bungalow-3.jpg",
        caption: "Pintu Masuk & Ukiran Kayu Bello Bungalow Food & Drink",
      },
    ],
    features: [
      "Bangunan kayu bertingkat tradisional khas pedesaan",
      "Fasilitas kolam renang outdoor jernih & asri",
      "Layanan makanan & minuman (Food & Drink)",
      "Taman hijau luas, bersih, dan menenangkan",
    ],
    fullDescription:
      "Bello Bungalow adalah akomodasi penginapan bungalo kayu bertingkat bernuansa tradisional di Desa Wisata Lendang Belo, Kabupaten Lombok Timur. Dilengkapi dengan fasilitas kolam renang outdoor yang jernih, area taman hijau yang asri, serta restoran/kafe menyajikan makanan dan minuman khas Lombok. Pemesanan dapat dilakukan langsung melalui Booking.com.",
    note: "Wajib Booking via Platform Online",
    icon: Home,
  },
  {
    id: "munis-terrace-bungalow",
    name: "Muni's Terrace Bungalow",
    type: "Bungalow & Penginapan",
    location: "Kawasan Persawahan Desa Lendang Belo, Lombok Timur",
    price: "Penginapan",
    bookingType: "online",
    bookingUrl: "https://www.booking.com/hotel/id/munis-terrace-bungalow.id.html",
    image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118767/lendang-belo-ui/munis-terrace-1.jpg",
    gallery: [
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118767/lendang-belo-ui/munis-terrace-1.jpg",
        caption: "Desain Arsitektur Segitiga (A-Frame) Unik Muni's Terrace Bungalow",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118768/lendang-belo-ui/munis-terrace-2.jpg",
        caption: "Teras Depan Bungalow Dinding Anyaman Bambu & Kursi Kayu",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118770/lendang-belo-ui/munis-terrace-3.jpg",
        caption: "Pemandangan Terasering Sawah & Pohon Kelapa Langsung di Depan Kamar",
      },
    ],
    features: [
      "Arsitektur bungalo kayu segitiga (A-Frame) yang unik & estetis",
      "Pemandangan terasering sawah membentang hijau di depan kamar",
      "Teras depan santai berbahan kayu & anyaman bambu otentik",
      "Udara pegunungan yang menyejukkan dan bebas polusi",
    ],
    fullDescription:
      "Muni's Terrace Bungalow adalah penginapan unik berarsitektur kayu segitiga (A-Frame) yang terletak persis di tepian lanskap terasering sawah Desa Wisata Lendang Belo. Menawarkan pengalaman menginap yang damai dengan pemandangan petakan sawah hijau yang membentang luas langsung dari teras kamar. Pemesanan dapat dilakukan langsung melalui Booking.com.",
    note: "Wajib Booking via Platform Online",
    icon: Home,
  },
  {
    id: "kebon-doe-cafe",
    name: "Lesehan & Cafe Kebon Dowe",
    type: "Lesehan & Cafe",
    owner: "Ibu Yanti",
    location: "Kawasan Desa Lendang Belo, Lombok Timur",
    price: "Kuliner & Santai",
    bookingType: "whatsapp",
    phoneWhatsapp: "6287751067086",
    phoneWhatsapp2: "6287810231065",
    whatsappMessage: "Halo Ibu Yanti, saya ingin bertanya informasi menu, reservasi & jam buka Lesehan & Cafe Kebon Dowe Desa Lendang Belo.",
    image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786121260/lendang-belo-ui/kebon-dowe-2.jpg",
    gallery: [
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786121260/lendang-belo-ui/kebon-dowe-2.jpg",
        caption: "Papan Nama Utama Lesehan & Cafe Kebon Dowe Desa Lendang Belo",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786121259/lendang-belo-ui/kebon-dowe-1.jpg",
        caption: "Gapura Pintu Masuk Sugeng Rawuh Beratap Ijuk & Anyaman Bambu",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786121261/lendang-belo-ui/kebon-dowe-3.jpg",
        caption: "Gerbang Pilar Bata Merah Kebon Dowe Khas Pedesaan Lombok",
      },
      {
        src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786121262/lendang-belo-ui/kebon-dowe-4.jpg",
        caption: "Bungalo & Saung Lesehan Kayu Tradisional 2 Lantai yang Asri",
      },
    ],
    features: [
      "Pemilik & Pengelola: Ibu Yanti",
      "Saung lesehan kayu bertingkat bernuansa tradisional Sasak",
      "Seduhan kopi hangat khas & hidangan santap kuliner lokal",
      "Suasana kebun & alam persawahan yang asri dan sejuk",
    ],
    fullDescription:
      "Lesehan & Cafe Kebon Dowe (Dikelola oleh Ibu Yanti) adalah tempat kuliner dan bersantai favorit di Desa Wisata Lendang Belo. Menawarkan saung lesehan kayu bertingkat bernuansa tradisional Sasak yang asri, dikelilingi kebun hijau dan suasana alam persawahan. Tempat yang cocok untuk bersantai bersama keluarga dan menikmati sajian kuliner khas Lombok. Untuk reservasi tempat dan pertanyaan menu, silakan hubungi Ibu Yanti via WhatsApp (0877-5106-7086 / 0878-1023-1065).",
    note: "Reservasi via WA (Ibu Yanti)",
    icon: Coffee,
  },
];

export default function HotelSection() {
  const [selectedItem, setSelectedItem] = useState<HomestayItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (item: HomestayItem) => {
    setSelectedItem(item);
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleNextImage = () => {
    if (!selectedItem) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedItem.gallery.length);
  };

  const handlePrevImage = () => {
    if (!selectedItem) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedItem.gallery.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-emerald-50/50" id="homestay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="font-arizonia text-3xl text-[#16a34a] block">
            Akomodasi & Bersantai
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Homestay & Cafe Desa Lendang Belo
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Sistem Informasi Akomodasi & Kuliner Desa Wisata Lendang Belo. Klik pada kartu untuk melihat informasi detail, galeri foto, dan akses pemesanan.
          </p>
        </div>

        {/* Hotel / Homestay / Cafe Grid (3 items layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lendangBeloHomestays.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onClick={() => openModal(item)}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group border border-emerald-100/80 hover:border-[#16a34a]/60 cursor-pointer"
              >
                {/* Image Container with Uncropped Dual-Layer Display */}
                <div className="relative h-72 w-full overflow-hidden bg-slate-950">
                  {/* Blurred backdrop image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover blur-md scale-110 opacity-40 pointer-events-none"
                  />
                  {/* Main uncropped full image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-500 z-10 p-1"
                  />

                  {/* Top Badges Container (Non-Overlapping Flex) */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center gap-2 z-20 pointer-events-none">
                    <span className="bg-[#0f291e]/90 backdrop-blur-md text-emerald-200 text-[11px] font-semibold px-3 py-1 rounded-md border border-emerald-500/20 truncate max-w-[65%] shadow-md">
                      {item.type}
                    </span>
                    <span className="bg-[#16a34a] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md shrink-0">
                      {item.price}
                    </span>
                  </div>

                  {/* Title overlay on bottom of image */}
                  <div className="absolute bottom-3 left-4 right-4 z-20">
                    <h3
                      style={{ color: "#ffffff", textShadow: "0 2px 10px rgba(0,0,0,0.95)" }}
                      className="!text-white text-xl font-extrabold group-hover:text-[#4ade80] transition-colors leading-snug tracking-tight"
                    >
                      {item.name}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10" />
                </div>

                {/* Card Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center text-xs text-slate-500 space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>

                    {/* Booking Note Badge */}
                    <div className="mt-3 inline-block text-[11px] font-bold text-[#16a34a] bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60">
                      {item.note}
                    </div>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(item);
                      }}
                      className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-[#16a34a] text-[#16a34a] hover:text-white rounded-xl font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-200/60 cursor-pointer"
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
                      {selectedItem.type}
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
                {/* Photo Gallery Viewer with Uncropped Dual-Layer Display */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#16a34a]" />
                      <span>Galeri Foto ({activeImageIndex + 1}/{selectedItem.gallery.length})</span>
                    </h4>
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                      Klik foto mini atau panah untuk mengganti foto
                    </span>
                  </div>

                  {/* Main Large Photo Display (Uncropped Full Aspect Ratio) */}
                  <div className="relative h-72 sm:h-[480px] w-full rounded-2xl overflow-hidden bg-slate-950 shadow-md group">
                    {/* Blurred background photo layer */}
                    <Image
                      src={selectedItem.gallery[activeImageIndex].src}
                      alt={selectedItem.gallery[activeImageIndex].caption}
                      fill
                      className="object-cover blur-md scale-110 opacity-30 pointer-events-none"
                    />
                    {/* Full main photo layer */}
                    <Image
                      src={selectedItem.gallery[activeImageIndex].src}
                      alt={selectedItem.gallery[activeImageIndex].caption}
                      fill
                      className="object-contain transition-all duration-500 z-10 p-2"
                    />

                    {/* Navigation Arrows */}
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-[#16a34a] text-white flex items-center justify-center backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 cursor-pointer z-20"
                      aria-label="Foto Sebelumnya"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-[#16a34a] text-white flex items-center justify-center backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 cursor-pointer z-20"
                      aria-label="Foto Selanjutnya"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Caption Overlay */}
                    <div className="absolute bottom-3 left-4 right-4 text-white text-xs sm:text-sm font-medium bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl z-20 border border-white/10">
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
                        className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-slate-900 ${activeImageIndex === idx
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
                        Fasilitas & Keunggulan Tempat:
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedItem.features.map((point, i) => (
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
                    {selectedItem.bookingType === "online" ? (
                      <a
                        href={selectedItem.bookingUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto py-3 px-6 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#16a34a]/20"
                      >
                        <Globe className="w-4 h-4" />
                        <span>Pesan via Booking.com</span>
                        <ExternalLink className="w-4 h-4 opacity-80" />
                      </a>
                    ) : (
                      <>
                        <a
                          href={`https://wa.me/${selectedItem.phoneWhatsapp}?text=${encodeURIComponent(
                            selectedItem.whatsappMessage || ""
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto py-3 px-5 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-xl font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#16a34a]/20"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>WhatsApp 1 (0877-5106-7086)</span>
                        </a>
                        {selectedItem.phoneWhatsapp2 && (
                          <a
                            href={`https://wa.me/${selectedItem.phoneWhatsapp2}?text=${encodeURIComponent(
                              selectedItem.whatsappMessage || ""
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto py-3 px-5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-900/20"
                          >
                            <MessageCircle className="w-4 h-4 fill-current" />
                            <span>WhatsApp 2 (0878-1023-1065)</span>
                          </a>
                        )}
                      </>
                    )}
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
