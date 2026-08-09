"use client";

import Link from "next/link";
import { ExternalLink, LogOut } from "lucide-react";

interface AdminHeaderProps {
  onLogout: () => void;
}

export function AdminHeader({ onLogout }: AdminHeaderProps) {
  return (
    <header className="bg-white border-b border-emerald-100 sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#16a34a] flex items-center justify-center text-white font-bold shadow-md shadow-emerald-600/30">
            LB
          </div>
          <div>
            <h1 className="font-extrabold text-slate-900 text-base leading-tight">
              Admin Panel Lendang Belo
            </h1>
            <span className="text-xs text-[#16a34a] font-semibold">Pengelolaan Blog & Media</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/blog"
            target="_blank"
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors flex items-center gap-1.5 bg-emerald-100/70 hover:bg-emerald-200/70 px-3.5 py-2 rounded-xl border border-emerald-200"
          >
            <span>Lihat Halaman Blog</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={onLogout}
            className="text-xs font-semibold text-rose-700 hover:text-rose-900 transition-colors flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 px-3.5 py-2 rounded-xl border border-rose-200 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Keluar (Logout)</span>
          </button>
        </div>
      </div>
    </header>
  );
}
