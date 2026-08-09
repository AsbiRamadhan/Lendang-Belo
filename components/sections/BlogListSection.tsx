"use client";

import { FileText, RefreshCw } from "lucide-react";
import { PostItem } from "@/types/blog";
import { BlogCard } from "@/components/cards/BlogCard";

interface BlogListSectionProps {
  posts: PostItem[];
  loadingPosts: boolean;
  onRefresh: () => void;
  onDelete: (slug: string, title: string) => void;
}

export function BlogListSection({
  posts,
  loadingPosts,
  onRefresh,
  onDelete,
}: BlogListSectionProps) {
  return (
    <div className="lg:col-span-5 bg-white border border-emerald-100 rounded-3xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#16a34a] text-white flex items-center justify-center shadow-md">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Daftar Artikel ({posts.length})</h2>
            <p className="text-xs text-emerald-800 font-semibold">Tersimpan di MySQL</p>
          </div>
        </div>

        <button
          onClick={onRefresh}
          title="Muat ulang artikel"
          className="p-2 text-slate-700 hover:text-emerald-700 bg-slate-100 hover:bg-emerald-50 rounded-lg border border-slate-200 transition-colors cursor-pointer"
        >
          <RefreshCw className={`w-4 h-4 ${loadingPosts ? "animate-spin" : ""}`} />
        </button>
      </div>

      {loadingPosts ? (
        <div className="py-12 text-center text-slate-600 text-sm font-medium">
          <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#16a34a]" />
          Memuat artikel dari MySQL...
        </div>
      ) : posts.length === 0 ? (
        <div className="py-12 text-center text-slate-500 text-sm font-medium">
          Belum ada artikel di database. Gunakan form di sebelah kiri untuk menambah artikel pertama Anda!
        </div>
      ) : (
        <div className="space-y-4 max-h-[750px] overflow-y-auto pr-1">
          {posts.map((post) => (
            <BlogCard key={post.id || post.slug} post={post} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
