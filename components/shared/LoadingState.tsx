"use client";

import { RefreshCw } from "lucide-react";

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = "Memuat Portal Admin..." }: LoadingStateProps) {
  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center text-slate-800 font-medium">
      <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-lg border border-emerald-100">
        <RefreshCw className="w-6 h-6 animate-spin text-[#16a34a]" />
        <span>{message}</span>
      </div>
    </div>
  );
}
