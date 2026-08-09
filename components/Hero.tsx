"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subheading?: string;
  caps?: string;
  isSlider?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

const heroImages = [
  { src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118761/lendang-belo-ui/hero-1.jpg", alt: "Terasering Sawah Lendang Belo" },
  { src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118763/lendang-belo-ui/hero-2.jpg", alt: "Festival Dara Ngindang Lendang Belo" },
  { src: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118765/lendang-belo-ui/hero-3.jpg", alt: "Panorama Perbukitan & Terasering Sawah" },
];

export default function Hero({
  title = "Jelajahi Pesona Keindahan Desa Wisata Lendang Belo",
  subheading = "Selamat Datang di Desa Lendang Belo",
  caps = "Nikmati pemandangan terasering sawah nan asri, keramahan warga desa, dan kebudayaan khas suku sasak",
  isSlider = false,
  ctaText = "Jelajahi Desa",
  ctaHref = "#tentang",
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isSlider) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isSlider]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  // If isSlider is active (Landing Page)
  if (isSlider) {
    return (
      <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0f291e] overflow-hidden pt-20">
        {/* Background Images with Smooth Crossfade Opacity */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
          {/* Dark Overlay Gradient */}
          <div className="hero-overlay" />
        </div>

        {/* Content Container (Static Welcome Text & Subtitle) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
          <div className="max-w-3xl space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              <span className="font-arizonia text-3xl md:text-4xl text-[#4ade80] block">
                {subheading}
              </span>

              <h1
                style={{ color: "#ffffff" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
              >
                {title}
              </h1>

              <p className="text-xl sm:text-2xl text-white/95 max-w-2xl font-normal leading-relaxed drop-shadow-sm">
                {caps}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <a
                href={ctaHref}
                className="group px-8 py-3.5 bg-[#16a34a] hover:bg-[#15803d] text-white font-extrabold text-base rounded-full shadow-xl shadow-[#16a34a]/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 cursor-pointer border border-emerald-400/30"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/destination"
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-base rounded-full border border-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <Compass className="w-5 h-5 text-[#4ade80]" />
                <span>Wisata & Event</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Carousel Slider Navigation Controls */}
        <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrevSlide}
            aria-label="Previous Slide"
            className="w-11 h-11 rounded-full bg-black/40 hover:bg-[#16a34a] backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  idx === currentSlide
                    ? "w-7 h-2.5 bg-[#4ade80]"
                    : "w-2.5 h-2.5 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNextSlide}
            aria-label="Next Slide"
            className="w-11 h-11 rounded-full bg-black/40 hover:bg-[#16a34a] backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    );
  }

  // Feature pages header without background slider (Clean Solid Header)
  return (
    <section className="pt-32 pb-16 bg-[#0f291e] text-white border-b border-emerald-900/60 relative overflow-hidden">
      {/* Glow Decorator */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
        <span className="font-arizonia text-3xl sm:text-4xl text-[#4ade80] block">
          {subheading}
        </span>

        <h1
          style={{ color: "#ffffff" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto drop-shadow-md"
        >
          {title}
        </h1>

        {caps && (
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {caps}
          </p>
        )}

        <div className="w-20 h-1 bg-[#4ade80] mx-auto rounded-full mt-4 shadow-sm" />
      </div>
    </section>
  );
}
