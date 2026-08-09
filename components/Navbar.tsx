"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Profil Desa", href: "/about" },
    { name: "Wisata & Event", href: "/destination" },
    { name: "Homestay & Cafe", href: "/hotel" },
    { name: "Peta Wisata", href: "/map" },
    { name: "Berita Desa", href: "/blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f291e]/95 backdrop-blur-md shadow-xl py-2.5 border-b border-white/10"
          : "bg-gradient-to-b from-[#0a1e16]/90 via-[#0a1e16]/50 to-transparent py-3.5 sm:py-4"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo Pemkab Lombok Timur & Title on Left */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="relative w-9 h-11 sm:w-10 sm:h-12 shrink-0 flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/tar8ttin/image/upload/v1786118766/lendang-belo-ui/logo-lombok-timur.jpg"
              alt="Logo Pemkab Lombok Timur"
              width={40}
              height={48}
              priority
              className="object-contain group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg lg:text-xl font-black uppercase tracking-wide text-white leading-tight group-hover:text-[#4ade80] transition-colors">
              Desa Lendang Belo
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#22c55e] uppercase">
              Kab. Lombok Timur, NTB
            </span>
          </div>
        </Link>

        {/* Desktop Links on Right */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm xl:text-base font-bold tracking-wide transition-colors py-1.5 whitespace-nowrap relative ${
                  isActive
                    ? "text-[#22c55e]"
                    : "text-white/90 hover:text-[#22c55e]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#22c55e] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Trigger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
          className="lg:hidden p-2 text-white hover:text-[#22c55e] transition-colors focus:outline-none cursor-pointer shrink-0"
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0f291e]/98 border-t border-white/10 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                  isActive
                    ? "bg-[#16a34a] text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
