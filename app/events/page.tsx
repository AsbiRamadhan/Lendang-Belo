import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationSection from "@/components/DestinationSection";
import Footer from "@/components/Footer";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://lendangbelo.com";

export const metadata: Metadata = {
  title: "Event & Festival Budaya Lendang Belo Montong Gading Lombok Timur",
  description:
    "Saksikan agenda event budaya tahunan Festival Dara Ngindang, tradisi Siong Kopi Kete, serta wisata kebudayaan Desa Lendang Belo, Lombok Timur, NTB.",
  alternates: {
    canonical: `${baseUrl}/events`,
  },
  keywords: [
    "Festival Dara Ngindang",
    "Event Budaya Lombok Timur",
    "Tradisi Lendang Belo",
    "Montong Gading NTB",
  ],
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero
        title="Wisata & Event Desa"
        subheading="Kebudayaan & Tradisi"
        caps="Saksikan kemeriahan Festival Dara Ngindang, Tradisi Siong Kopi Kete, serta pesona Objek Wisata Terasering Sawah Desa Lendang Belo."
      />

      <DestinationSection />

      <Footer />
    </main>
  );
}
