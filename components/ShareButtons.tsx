"use client";

import { useState } from "react";
import { Share2, Copy, Check, MessageCircle, Send } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getArticleUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/blog/${slug}`;
    }
    return `https://lendangbelo.web.id/blog/${slug}`;
  };

  const handleCopyLink = async () => {
    const url = getArticleUrl();
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        const input = document.createElement("input");
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Gagal menyalin tautan:", err);
    }
  };

  const articleUrl = getArticleUrl();
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(`[Berita Lendang Belo] ${title}`);

  const shareLinks = [
    {
      name: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      bg: "bg-[#25D366] hover:bg-[#20bd5a]",
      textColor: "text-white",
      icon: <MessageCircle className="w-4 h-4 fill-current" />,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: "bg-[#1877F2] hover:bg-[#166fe5]",
      textColor: "text-white",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      bg: "bg-[#000000] hover:bg-[#1a1a1a]",
      textColor: "text-white",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: `https://www.instagram.com/`,
      isInstagram: true,
      bg: "bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90",
      textColor: "text-white",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      bg: "bg-[#26A5E4] hover:bg-[#2094ce]",
      textColor: "text-white",
      icon: <Send className="w-4 h-4" />,
    },
  ];

  return (
    <div className="pt-8 mt-10 border-t border-slate-200">
      <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
            <div className="w-8 h-8 rounded-lg bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </div>
            <span>Bagikan Artikel Ini:</span>
          </div>

          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Sebarkan berita desa untuk masyarakat
          </span>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center gap-2.5">
          {shareLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (item.isInstagram) {
                  handleCopyLink();
                }
              }}
              className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95 ${item.bg} ${item.textColor}`}
              title={`Bagikan ke ${item.name}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}

          {/* Copy Link Button */}
          <button
            type="button"
            onClick={handleCopyLink}
            className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95 border ${
              copied
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-slate-700 hover:bg-slate-100 border-slate-300"
            }`}
            title="Salin Tautan Artikel"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Tautan Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-600" />
                <span>Salin Tautan</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
