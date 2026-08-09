"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl = "https://player.vimeo.com/video/45830194?autoplay=1",
}: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Video Player"
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#16a34a] transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video Container (16:9 Aspect Ratio) */}
          <div className="relative pt-[56.25%] w-full">
            <iframe
              src={videoUrl}
              title="Lendang Belo Travel Agency Intro Video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
