"use client";

import Image from "next/image";
import { Plus, Upload, RefreshCw, Check, Sparkles } from "lucide-react";

interface BlogFormProps {
  formState: {
    title: string;
    slug: string;
    author: string;
    excerpt: string;
    content: string;
    imagePath: string;
    previewUrl: string | null;
    setSlug: (val: string) => void;
    setAuthor: (val: string) => void;
    setExcerpt: (val: string) => void;
    setContent: (val: string) => void;
    setImagePath: (val: string) => void;
    setPreviewUrl: (val: string | null) => void;
  };
  uiState: {
    uploadingImage: boolean;
    submittingPost: boolean;
  };
  handlers: {
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmitArticle: (e: React.FormEvent) => void;
  };
}

export function BlogForm({ formState, uiState, handlers }: BlogFormProps) {
  const {
    title,
    slug,
    author,
    excerpt,
    content,
    imagePath,
    previewUrl,
    setSlug,
    setAuthor,
    setExcerpt,
    setContent,
    setImagePath,
    setPreviewUrl,
  } = formState;

  const { uploadingImage, submittingPost } = uiState;
  const { handleTitleChange, handleFileSelect, handleSubmitArticle } = handlers;

  return (
    <div className="lg:col-span-7 bg-white border border-emerald-100 rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-[#16a34a] text-white flex items-center justify-center shadow-md">
          <Plus className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">Tambah Artikel Blog Baru</h2>
          <p className="text-xs text-slate-600">
            Isi formulir berikut dan unggah foto utama artikel Anda
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmitArticle} className="space-y-6">
        {/* Judul Artikel */}
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
            Judul Artikel <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={handleTitleChange}
            placeholder="Contoh: Kegiatan Edukasi Kebersamaan Anak-Anak Desa Lendang Belo"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]/20 text-sm font-medium transition-all"
          />
        </div>

        {/* Slug URL & Penulis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              URL Slug (Otomatis)
            </label>
            <input
              type="text"
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="kegiatan-edukasi-desa-lendang-belo"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-emerald-800 font-bold text-xs font-mono placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#16a34a] transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Penulis (Author)
            </label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Admin Lendang Belo"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#16a34a] transition-all"
            />
          </div>
        </div>

        {/* Upload Foto Artikel */}
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
            Foto Utama Artikel <span className="text-rose-500">*</span>
          </label>

          <div className="space-y-4">
            <div className="relative border-2 border-dashed border-emerald-300 hover:border-[#16a34a] bg-emerald-50/40 rounded-2xl p-6 text-center transition-colors group cursor-pointer">
              <input
                type="file"
                accept="image/*"
                disabled={uploadingImage}
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed z-10"
              />

              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#16a34a] shadow-md group-hover:scale-110 transition-all border border-emerald-100">
                  {uploadingImage ? (
                    <RefreshCw className="w-6 h-6 animate-spin text-[#16a34a]" />
                  ) : (
                    <Upload className="w-6 h-6" />
                  )}
                </div>
                <div className="text-sm text-slate-800">
                  <span className="font-bold text-[#16a34a]">Klik untuk memilih foto</span>{" "}
                  atau seret foto ke sini
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Format: JPG, PNG, WEBP (Otomatis tersimpan ke folder public/images)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">Atau path foto:</span>
              <input
                type="text"
                value={imagePath}
                onChange={(e) => {
                  setImagePath(e.target.value);
                  setPreviewUrl(e.target.value);
                }}
                placeholder="https://res.cloudinary.com/tar8ttin/image/upload/v1786118779/lendang-belo-blog/image_1.jpg"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-emerald-800 text-xs font-mono font-bold focus:outline-none focus:border-[#16a34a]"
              />
            </div>

            {previewUrl && (
              <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-emerald-200 bg-slate-100 shadow-md">
                <Image
                  src={previewUrl}
                  alt="Preview Foto Artikel"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-lg border border-white/20">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Pratinjau Foto Siap</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ringkasan (Excerpt) */}
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
            Ringkasan Singkat (Excerpt) <span className="text-rose-500">*</span>
          </label>
          <textarea
            rows={2}
            required
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Ringkasan 1-2 kalimat yang akan tampil di kartu artikel..."
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-medium placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#16a34a] text-sm resize-none transition-all"
          />
        </div>

        {/* Isi Artikel (Content) */}
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
            Isi Artikel Lengkap <span className="text-rose-500">*</span>
          </label>
          <textarea
            rows={6}
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Tuliskan isi paragraf artikel lengkap di sini..."
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-medium placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#16a34a] text-sm transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submittingPost || uploadingImage}
          className="w-full py-4 px-6 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold rounded-xl shadow-xl shadow-emerald-600/30 transition-all duration-200 disabled:opacity-50 text-sm cursor-pointer flex items-center justify-center gap-2"
        >
          {submittingPost ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Menyimpan ke Database...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Terbitkan Artikel ke Blog</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
