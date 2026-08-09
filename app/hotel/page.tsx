import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HotelSection from "@/components/HotelSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Homestay & Penginapan Murah Desa Lendang Belo Lombok Timur NTB",
  description:
    "Rekomendasi homestay warga dan tempat bersantai cafe desa di Desa Lendang Belo, Montong Gading, Lombok Timur, NTB. Pesan langsung via WhatsApp.",
  keywords: [
    "Homestay Lendang Belo",
    "Penginapan Murah Lombok Timur",
    "Homestay Montong Gading",
    "Penginapan Desa Lombok",
  ],
};

export default function HotelPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero
        title="Homestay & Cafe Desa"
        subheading="Akomodasi & Tempat Bersantai"
        caps="Nikmati kenyamanan menginap di Homestay warga lokal serta suasana santai bersantap kuliner di Cafe Desa Lendang Belo."
      />

      <HotelSection />

      <Footer />
    </main>
  );
}
