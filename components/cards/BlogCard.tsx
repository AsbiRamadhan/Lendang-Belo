"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Trash2 } from "lucide-react";
import { PostItem } from "@/types/blog";

interface BlogCardProps {
  post: PostItem;
  onDelete: (slug: string, title: string) => void;
}

export function BlogCard({ post, onDelete }: BlogCardProps) {
  return (
    <div className="p-4 bg-slate-50 border border-slate-200 hover:border-[#16a34a] rounded-2xl flex gap-4 transition-all group shadow-sm">
      {/* Thumbnail */}
      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-200 shrink-0 border border-slate-300 shadow-inner">
        <Image
          src={post.image || "https://res.cloudinary.com/tar8ttin/image/upload/v1786118779/lendang-belo-blog/image_1.jpg"}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>

      {/* Meta & Actions */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900 truncate group-hover:text-[#16a34a] transition-colors">
            {post.title}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 mt-0.5 font-normal text-justify">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 mt-2 pt-2 border-t border-slate-200">
          <span className="font-semibold text-slate-700">{post.author}</span>

          <div className="flex items-center gap-2">
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              className="p-1.5 text-slate-700 hover:text-emerald-700 bg-white hover:bg-emerald-50 rounded-lg border border-slate-200 transition-colors shadow-sm"
              title="Pratinjau Artikel"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => onDelete(post.slug, post.title)}
              className="p-1.5 text-rose-600 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 rounded-lg border border-rose-200 transition-colors cursor-pointer shadow-sm"
              title="Hapus Artikel"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
