"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f291e] text-white pt-20 pb-10 border-t border-emerald-900/60 relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-9 h-11 shrink-0 flex items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/tar8ttin/image/upload/v1786118766/lendang-belo-ui/logo-lombok-timur.jpg"
                  alt="Logo Pemkab Lombok Timur"
                  width={36}
                  height={44}
                  className="object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black uppercase tracking-wider text-white">
                  Desa Lendang Belo
                </span>
                <span className="text-[10px] font-semibold tracking-[2px] text-[#4ade80] uppercase">
                  Kab. Lombok Timur, NTB
                </span>
              </div>
            </Link>
            <p className="text-emerald-100/70 text-sm leading-relaxed">
              Desa Wisata Lendang Belo — Keasrian alam pegunungan, warisan tradisi kebudayaan, agrowisata kopi, dan kehangatan warga lokal Lombok.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Navigasi Utama
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/70">
              <li>
                <Link href="/" className="hover:text-[#4ade80] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-[#16a34a]" />
                  <span>Beranda</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#4ade80] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-[#16a34a]" />
                  <span>Profil & Sejarah Desa</span>
                </Link>
              </li>
              <li>
                <Link href="/destination" className="hover:text-[#4ade80] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-[#16a34a]" />
                  <span>Wisata & Event Desa</span>
                </Link>
              </li>
              <li>
                <Link href="/hotel" className="hover:text-[#4ade80] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-[#16a34a]" />
                  <span>Homestay & Penginapan</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Destinasi & Event */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Wisata & Event
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/70">
              <li>
                <Link href="/destination" className="hover:text-[#4ade80] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-[#16a34a]" />
                  <span>Terasering Sawah</span>
                </Link>
              </li>
              <li>
                <Link href="/destination" className="hover:text-[#4ade80] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-[#16a34a]" />
                  <span>Festival Dara Ngindang</span>
                </Link>
              </li>
              <li>
                <Link href="/destination" className="hover:text-[#4ade80] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-[#16a34a]" />
                  <span>Siong Kopi Kete</span>
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-[#4ade80] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-[#16a34a]" />
                  <span>Peta Potensi Wisata</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Kontak Kantor Desa
            </h4>
            <ul className="space-y-3 text-sm text-emerald-100/70">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#4ade80] shrink-0 mt-0.5" />
                <span>Desa Lendang Belo, Kabupaten Lombok Timur, Nusa Tenggara Barat</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#4ade80] shrink-0" />
                <a
                  href="https://wa.me/6281807135209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4ade80] transition-colors"
                >
                  +62 818-0713-5209
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#4ade80] shrink-0" />
                <a
                  href="mailto:desalendangbelo2010@gmail.com"
                  className="hover:text-[#4ade80] transition-colors"
                >
                  desalendangbelo2010@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-emerald-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-100/60 gap-2">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Desa Wisata Lendang Belo.
          </p>
          <Link
            href="/admin"
            className="text-emerald-300 hover:text-[#4ade80] transition-colors"
          >
            Portal Admin Desa
          </Link>
        </div>
      </div>
    </footer>
  );
}
