import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogSection, { BlogPost } from "@/components/BlogSection";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import { Newspaper } from "lucide-react";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://lendangbelo.com";

export const metadata: Metadata = {
  title: "Berita & Kegiatan Desa Lendang Belo Montong Gading Lombok Timur",
  description:
    "Pusat informasi berita terkini, pembangunan desa, kegiatan mahasiswa KKN, dan event kebudayaan Desa Wisata Lendang Belo, Montong Gading, Lombok Timur, NTB.",
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  keywords: [
    "Berita Lendang Belo",
    "Kegiatan Desa Lendang Belo",
    "Montong Gading Lombok Timur",
    "KKN Lendang Belo",
    "Kabar NTB",
  ],
};

export const dynamic = "force-dynamic"; // Always fetch fresh posts from MySQL

interface RawDbPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  comments: number;
  createdAt: Date | string;
  updatedAt: Date | string;
}

async function getPosts(): Promise<BlogPost[]> {
  try {
    const posts = (await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    })) as RawDbPost[];

    return posts.map((post: RawDbPost) => {
      let dateIso = new Date().toISOString();
      if (post.createdAt) {
        try {
          const d = new Date(post.createdAt);
          if (!isNaN(d.getTime())) {
            dateIso = d.toISOString();
          }
        } catch {}
      }

      return {
        ...post,
        createdAt: dateIso,
      };
    });
  } catch (error) {
    console.error("Error fetching blog posts from MySQL:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar Navigasi */}
      <Navbar />

      {/* Dark Forest Header with High Contrast Pure White Title */}
      <header className="pt-32 pb-16 bg-[#0f291e] text-white border-b border-emerald-900/60 relative overflow-hidden">
        {/* Glow Decorator */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[#4ade80] text-xs font-bold uppercase tracking-wider shadow-md">
            <Newspaper className="w-4 h-4 text-[#4ade80]" />
            <span>Pusat Informasi & Kabar Desa</span>
          </div>

          {/* Main Title - Pure White Color via Inline Style & Drop Shadow */}
          <h1
            style={{ color: "#ffffff" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto drop-shadow-md"
          >
            Berita & Kegiatan Desa Lendang Belo
          </h1>

          {/* Description */}
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Update informasi terkini mengenai aktivitas kemasyarakatan, kegiatan mahasiswa KKN, pembangunan desa, dan agenda kebudayaan Desa Wisata Lendang Belo.
          </p>

          {/* Decorative Accent Line */}
          <div className="w-20 h-1 bg-[#4ade80] mx-auto rounded-full mt-4 shadow-sm" />
        </div>
      </header>

      {/* Real-time Blog Articles Grid */}
      <BlogSection posts={posts} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
