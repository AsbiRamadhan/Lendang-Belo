"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";
import { AlertMessage } from "@/types/blog";

interface BannerMessageProps {
  message: AlertMessage | null;
  onClose: () => void;
}

export function BannerMessage({ message, onClose }: BannerMessageProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`mb-8 p-4 rounded-2xl border flex items-center justify-between text-sm shadow-md ${
            message.type === "success"
              ? "bg-emerald-50 border-emerald-300 text-emerald-900"
              : "bg-rose-50 border-rose-300 text-rose-900"
          }`}
        >
          <div className="flex items-center gap-3">
            {message.type === "success" ? (
              <Check className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            )}
            <span className="font-semibold">{message.text}</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-bold opacity-70 hover:opacity-100 cursor-pointer ml-4"
          >
            Tutup
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
