import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationSection from "@/components/DestinationSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wisata Terasering Sawah & Budaya Lendang Belo Lombok Timur NTB",
  description:
    "Jelajahi keasrian Objek Wisata Terasering Sawah Lendang Belo, kemeriahan Festival Dara Ngindang, dan tradisi Siong Kopi Kete di Kecamatan Montong Gading, Lombok Timur, NTB.",
  keywords: [
    "Terasering Sawah Lendang Belo",
    "Terasering Sawah Lombok Timur",
    "Festival Dara Ngindang",
    "Siong Kopi Kete",
    "Montong Gading NTB",
  ],
};

export default function DestinationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero
        title="Wisata & Event Desa"
        subheading="Keindahan Alam & Tradisi"
        caps="Jelajahi keasrian Objek Wisata Terasering Sawah serta kemeriahan Festival Dara Ngindang dan Tradisi Siong Kopi Kete Desa Lendang Belo."
      />

      <DestinationSection />

      <Footer />
    </main>
  );
}
