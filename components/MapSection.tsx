"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MapSectionProps {
  mapImagePath?: string;
}

export default function MapSection({
  mapImagePath = "https://res.cloudinary.com/tar8ttin/image/upload/v1786121688/lendang-belo-ui/peta-potensi-wisata-lendang-belo.jpg",
}: MapSectionProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section className="py-20 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="font-arizonia text-[#16a34a] text-3xl block">
            Peta Lokasi & Potensi Wisata
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Temukan Lokasi Desa Lendang Belo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Jelajahi peta lokasi presisi Desa Lendang Belo via Google Maps serta peta potensi zona destinasi wisata yang dikembangkan bersama.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Embed Google Maps (7 cols) */}
          <div className="lg:col-span-7 bg-emerald-50/50 rounded-3xl p-4 sm:p-6 border border-emerald-100 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Google Maps Kantor Desa Lendang Belo
                </h3>
              </div>
              <span className="text-xs text-emerald-800 font-medium">Montong Gading, Lombok Timur</span>
            </div>

            {/* Google Maps iFrame Container */}
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-inner border border-emerald-200/60 bg-emerald-100">
              <iframe
                title="Lokasi Google Maps Kantor Desa Lendang Belo"
                src="https://maps.google.com/maps?q=Kantor+Desa+Lendang+Belo,+Kecamatan+Montong+Gading,+Kabupaten+Lombok+Timur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right Column: Peta Potensi Wisata (5 cols) */}
          <div className="lg:col-span-5 bg-[#0f291e] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group border border-emerald-800/40">
            <div className="space-y-4">
              <h3 style={{ color: "#ffffff" }} className="!text-white text-2xl font-bold leading-snug">
                Peta Potensi Wisata Desa Lendang Belo
              </h3>
              <p className="text-emerald-100/70 text-xs sm:text-sm leading-relaxed">
                Peta khusus rincian zona titik atraksi, terasering sawah, titik foto bukit, dan lokasi tradisi Siong Kopi Kete desa.
              </p>
            </div>

            {/* Custom Map Image Box */}
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-emerald-700/50 my-6 cursor-pointer group-hover:border-[#4ade80] transition-colors shadow-2xl"
            >
              <Image
                src={mapImagePath}
                alt="Peta Potensi Wisata Desa Lendang Belo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="px-4 py-2 bg-[#0f291e]/80 backdrop-blur-md rounded-full text-xs font-semibold text-white flex items-center gap-2 border border-emerald-500/30 shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5 text-[#4ade80]" />
                  <span>Klik untuk Perbesar Peta</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-emerald-200/80 border-t border-emerald-900/60 pt-4 flex items-center justify-between">
              <span>Zona Wisata Desa Lendang Belo</span>
              <span className="text-[#4ade80] font-semibold">Tampilan HD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl">
              <Image
                src={mapImagePath}
                alt="Peta Potensi Wisata Desa Lendang Belo HD"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
