"use client";

import { Compass, Map, Home, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Map,
      title: "Wisata Alam & Panorama",
      description:
        "Menikmati pemandangan bukit, persawahan hijau terasering, dan keindahan lanskap kaki Gunung Rinjani.",
    },
    {
      icon: Coffee,
      title: "Kopi Kete & Linting Tembakau",
      description:
        "Pengalaman menyaksikan dan menikmati tradisi menggoreng kopi secara tradisional menggunakan wajan tanah liat (Siong Kopi Kete) serta merokok tembakau linting sendiri.",
    },
    {
      icon: Home,
      title: "Homestay Perdesaan",
      description:
        "Akomodasi penginapan hangat bersama warga lokal untuk pengalaman tinggal yang berkesan dan autentik.",
    },
    {
      icon: Compass,
      title: "Peta & Trekking Wisata",
      description:
        "Panduan rute jalur trekking perbukitan dan peta potensi zona wisata buatan pemuda lokal desa.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="font-arizonia text-3xl text-[#16a34a] block">
            Potensi & Layanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Daya Tarik Desa Lendang Belo
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-emerald-50/30 rounded-3xl border border-emerald-100 hover:border-[#16a34a] hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center group-hover:bg-[#16a34a] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#16a34a] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
