"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Wisatawan Asal Jakarta",
      image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118771/lendang-belo-ui/person_1.jpg",
      quote:
        "Suasana Desa Lendang Belo sangat tenang dan asri. Pemandangan bukitnya luar biasa, dan kopi racikan Siong Kopi nya benar-benar otentik!",
    },
    {
      name: "Siti Aminah",
      role: "Wisatawan Asal Surabaya",
      image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118771/lendang-belo-ui/person_2.jpg",
      quote:
        "Menginap di homestay warga sangat berkesan. Pemilik homestay ramah sekali dan reservasi via WhatsApp sangat praktis!",
    },
    {
      name: "Rian Pratama",
      role: "Pengunjung Festival Budaya",
      image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118774/lendang-belo-ui/person_3.jpg",
      quote:
        "Festival Dara Ngindang adalah salah satu pertunjukan budaya paling menarik yang pernah saya tonton di Lombok. Wajib dikunjungi!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="font-arizonia text-3xl text-[#16a34a] block">
            Kesan Pengunjung
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            KATA MEREKA TENTANG LENDANG BELO
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4">
          <Quote className="w-12 h-12 text-[#16a34a]/20 mx-auto mb-4" />

          <div className="relative min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="text-center space-y-6"
              >
                <p className="text-lg sm:text-2xl text-slate-700 font-light italic leading-relaxed max-w-2xl mx-auto">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>

                <div className="flex items-center justify-center space-x-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#16a34a] shadow-md">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-slate-900 leading-tight">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs text-[#16a34a] uppercase tracking-wider font-semibold">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full bg-emerald-50 text-slate-700 border border-emerald-100 hover:bg-[#16a34a] hover:text-white transition-colors flex items-center justify-center shadow-md focus:outline-none cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "bg-[#16a34a] w-6" : "bg-emerald-200 w-2.5"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full bg-emerald-50 text-slate-700 border border-emerald-100 hover:bg-[#16a34a] hover:text-white transition-colors flex items-center justify-center shadow-md focus:outline-none cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
