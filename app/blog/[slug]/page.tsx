import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { prisma } from "@/lib/prisma";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";

export const dynamic = "force-dynamic"; // Always fetch latest post detail from MySQL

async function getPost(slug: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
    });
    return post;
  } catch (error) {
    console.warn("Database connection error:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://lendangbelo.web.id";

  return {
    title: `${post.title} | Berita Desa Lendang Belo Lombok Timur`,
    description: post.excerpt,
    keywords: [
      post.title,
      "Lendang Belo",
      "Desa Lendang Belo",
      "Montong Gading",
      "Lombok Timur",
      "Berita NTB",
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: "Desa Wisata Lendang Belo",
      images: [
        {
          url:
            post.image ||
            "https://res.cloudinary.com/tar8ttin/image/upload/v1786118779/lendang-belo-blog/image_1.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [
        post.image ||
          "https://res.cloudinary.com/tar8ttin/image/upload/v1786118779/lendang-belo-blog/image_1.jpg",
      ],
    },
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (d: Date) => {
    return new Date(d).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar Navigasi */}
      <Navbar />

      {/* Dark Forest Green Header with Pure White High-Contrast Title */}
      <header className="pt-32 pb-14 bg-[#0f291e] text-white border-b border-emerald-900/60 relative overflow-hidden">
        {/* Glow Decorator */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 relative z-10">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#4ade80] hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-emerald-500/30 shadow-md"
          >
            <ArrowLeft className="w-4 h-4 mr-2 text-[#4ade80]" />
            Kembali ke Berita Desa
          </Link>

          {/* Category Tag */}
          <div className="pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#16a34a] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              <Tag className="w-3.5 h-3.5" />
              Berita & Kegiatan Desa Lendang Belo
            </span>
          </div>

          {/* Main Article Title - Pure White Color via Inline Style & Drop Shadow */}
          <h1
            style={{ color: "#ffffff" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.25] drop-shadow-md"
          >
            {post.title}
          </h1>

          {/* Author & Date Metadata Bar */}
          <div className="flex flex-wrap items-center text-xs sm:text-sm text-emerald-200/90 gap-6 pt-4 border-t border-emerald-800/60">
            <div className="flex items-center space-x-2 bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-800/50">
              <User className="w-4 h-4 text-[#4ade80]" />
              <span className="font-bold text-white">{post.author}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-[#4ade80]" />
              <span className="font-semibold text-emerald-100">{formatDate(post.createdAt)}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Article Content Area */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Featured Photo Block (High Definition, Framed Picture) */}
          <div className="relative h-[360px] sm:h-[520px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
            <Image
              src={post.image || "https://res.cloudinary.com/tar8ttin/image/upload/v1786118779/lendang-belo-blog/image_1.jpg"}
              alt={post.title}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Excerpt Summary Box */}
          <div className="p-6 sm:p-8 bg-emerald-50/80 border-l-4 border-[#16a34a] rounded-r-3xl shadow-sm border border-emerald-100">
            <h3 style={{ color: "#0f172a" }} className="text-xs font-bold uppercase tracking-wider text-[#16a34a] mb-1">
              Ringkasan Berita:
            </h3>
            <p style={{ color: "#1e293b" }} className="text-lg sm:text-xl font-semibold leading-relaxed italic m-0 text-justify">
              &ldquo;{post.excerpt}&rdquo;
            </p>
          </div>

          {/* Full Article Body Paragraphs */}
          <div className="prose prose-lg max-w-none text-slate-800 leading-relaxed font-normal text-base sm:text-lg whitespace-pre-line border-t border-slate-100 pt-6 text-justify">
            {post.content}
          </div>

          {/* Social Media Share Buttons */}
          <ShareButtons title={post.title} slug={post.slug} />
        </div>
      </article>

      {/* Footer */}
      <Footer />
    </main>
  );
}
