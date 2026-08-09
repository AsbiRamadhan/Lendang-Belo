import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import DestinationSection from "@/components/DestinationSection";
import HotelSection from "@/components/HotelSection";
import MapSection from "@/components/MapSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar Navigasi */}
      <Navbar />

      {/* Hero Banner dengan Image Slider 3 Foto (Beranda Utama) */}
      <Hero
        isSlider={true}
        ctaText="Jelajahi Desa"
        ctaHref="#tentang"
      />

      {/* 1. Profil & Sejarah Singkat Desa Lendang Belo */}
      <AboutSection />

      {/* 2. Wisata & Event Desa (Terasering Sawah, Festival Dara Ngindang, Siong Kopi Kete) */}
      <DestinationSection />

      {/* 3. Homestay / Penginapan + WhatsApp Direct Booking */}
      <HotelSection />

      {/* 4. Google Maps & Peta Potensi Wisata Desa */}
      <MapSection />

      {/* 5. Berita / Kegiatan Terbaru Desa (Real-time MySQL Blog) */}
      <BlogSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
