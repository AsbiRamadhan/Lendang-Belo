import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Profil & Sejarah Desa Lendang Belo | Montong Gading Lombok Timur NTB",
  description:
    "Mengenal lebih dekat keindahan alam, sejarah singkat, dan kebudayaan Desa Wisata Lendang Belo, Kecamatan Montong Gading, Kabupaten Lombok Timur, NTB.",
  keywords: [
    "Profil Lendang Belo",
    "Sejarah Desa Lendang Belo",
    "Montong Gading Lombok Timur",
    "Wisata Alam NTB",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero
        title="Profil Desa Lendang Belo"
        subheading="Sejarah & Gambaran Umum"
        caps="Mengenal lebih dekat keindahan alam, sejarah singkat, dan kebudayaan Desa Wisata Lendang Belo."
      />

      {/* Profil & Sejarah Desa Lendang Belo */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
