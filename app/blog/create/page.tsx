"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Send, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function CreateBlogPostPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118779/lendang-belo-blog/image_1.jpg",
    author: "Admin Lendang Belo",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Auto-generate slug when title changes
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const generatedSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    setFormData({
      ...formData,
      title,
      slug: generatedSlug,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal menyimpan postingan blog ke MySQL");
      }

      setSuccess(true);
      setTimeout(() => {
        router.push(`/blog/${data.slug}`);
      }, 1500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Terjadi kesalahan sistem";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero
        title="Tambah Artikel Blog"
        subheading="Manajemen Konten MySQL"
        caps="Form ini akan menyimpan artikel secara otomatis ke dalam database MySQL via Prisma ORM."
      />

      <section className="py-20 bg-emerald-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-semibold text-[#16a34a] hover:text-[#15803d] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Daftar Blog
          </Link>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Buat Artikel Baru di MySQL
            </h2>

            {error && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl flex items-center space-x-3 text-sm">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center space-x-3 text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Artikel berhasil disimpan di database MySQL! Mengalihkan...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Judul Artikel
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Pesona Wisata Desa Lendang Belo"
                  value={formData.title}
                  onChange={handleTitleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#16a34a] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  URL Slug (Otomatis)
                </label>
                <input
                  type="text"
                  required
                  placeholder="pesona-wisata-desa-lendang-belo"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#16a34a] transition-colors font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Ringkasan (Excerpt)
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Ringkasan singkat artikel..."
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#16a34a] transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Konten Lengkap
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder="Tuliskan isi lengkap artikel..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#16a34a] transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    URL Gambar
                  </label>
                  <select
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#16a34a] transition-colors"
                  >
                    <option value="https://res.cloudinary.com/tar8ttin/image/upload/v1786118779/lendang-belo-blog/image_1.jpg">Gambar 1 (https://res.cloudinary.com/tar8ttin/image/upload/v1786118779/lendang-belo-blog/image_1.jpg)</option>
                    <option value="https://res.cloudinary.com/tar8ttin/image/upload/v1786118781/lendang-belo-blog/image_2.jpg">Gambar 2 (https://res.cloudinary.com/tar8ttin/image/upload/v1786118781/lendang-belo-blog/image_2.jpg)</option>
                    <option value="https://res.cloudinary.com/tar8ttin/image/upload/v1786118782/lendang-belo-blog/image_3.jpg">Gambar 3 (https://res.cloudinary.com/tar8ttin/image/upload/v1786118782/lendang-belo-blog/image_3.jpg)</option>
                    <option value="https://res.cloudinary.com/tar8ttin/image/upload/v1786118784/lendang-belo-blog/image_4.jpg">Gambar 4 (https://res.cloudinary.com/tar8ttin/image/upload/v1786118784/lendang-belo-blog/image_4.jpg)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Penulis
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#16a34a] transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold rounded-xl text-base transition-colors shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
              >
                <span>{loading ? "Menyimpan ke MySQL..." : "Simpan ke Database"}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
