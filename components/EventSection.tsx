"use client";

import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export interface VillageEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export const villageEvents: VillageEvent[] = [
  {
    id: "festival-dara-ngindang",
    title: "Festival Dara Ngindang",
    category: "Festival & Kebudayaan",
    date: "Rutin Musiman / Tahunan",
    time: "08:00 - Selesai",
    location: "Lapangan & Bale Desa Lendang Belo",
    description:
      "Festival Dara Ngindang adalah tradisi unik di Desa Wisata Lendang Belo, Kabupaten Lombok Timur, Nusa Tenggara Barat, berupa pelepasan ribuan burung merpati secara bersama-sama. Acara budaya ini menjadi daya tarik wisata untuk mengangkat potensi lokal dan tradisi masyarakat setempat.",
    image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118748/lendang-belo-ui/dara-ngindang-1.jpg",
  },
  {
    id: "siong-kopi-kete",
    title: "Siong Kopi Kete",
    category: "Event Tradisi & Kebersamaan Warga",
    date: "Rutin Akhir Pekan / Musiman",
    time: "16:00 - 21:00 WITA",
    location: "Area Pemukiman & Balai Desa Lendang Belo",
    description:
      "Siong Kopi Kete merupakan tradisi kebudayaan khas Desa Lendang Belo berupa kegiatan menggoreng kopi secara tradisional menggunakan wajan dari tanah liat, yang kemudian diseduh hangat untuk dinikmati bersama cengkrama kebersamaan warga desa.",
    image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786284090/lendang-belo-ui/siong-kopi-kete-1.jpg",
  },
];

export default function EventSection() {
  return (
    <section className="py-20 bg-emerald-50/40 text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-arizonia text-3xl text-[#16a34a] block">
            Kebudayaan & Event Desa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Event Budaya Desa Lendang Belo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Saksikan keanggunan Festival Dara Ngindang serta kemeriahan event Siong Kopi Kete khas kearifan lokal desa kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {villageEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white border border-emerald-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-1/2 h-64 sm:h-auto overflow-hidden shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#16a34a] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
                  {event.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#16a34a] transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#16a34a] shrink-0" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#16a34a] shrink-0" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
