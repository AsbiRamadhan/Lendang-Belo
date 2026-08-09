import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Peta Lokasi & Potensi Wisata Desa Lendang Belo Montong Gading Lombok Timur",
  description:
    "Peta navigasi Google Maps dan peta potensi wisata terasering sawah karya pemuda Desa Lendang Belo, Kecamatan Montong Gading, Lombok Timur, NTB.",
  keywords: [
    "Peta Lendang Belo",
    "Lokasi Lendang Belo Montong Gading",
    "Peta Wisata Lombok Timur",
    "Google Maps Lendang Belo",
  ],
};

export default function MapPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero
        title="Peta Wisata Desa"
        subheading="Lokasi & Potensi"
        caps="Jelajahi peta interaktif Google Maps dan peta potensi zona wisata buatan pemuda Desa Lendang Belo."
      />

      <MapSection />

      <Footer />
    </main>
  );
}
