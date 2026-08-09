"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  comments: number;
  createdAt: string | Date;
}

interface BlogSectionProps {
  posts?: BlogPost[];
}

const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: "Most Popular Vacation Spots For Kids",
    slug: "most-popular-vacation-spots-for-kids",
    excerpt:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    content: "Full content here...",
    image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118779/lendang-belo-blog/image_1.jpg",
    author: "Admin",
    comments: 3,
    createdAt: "2026-08-21",
  },
  {
    id: 2,
    title: "Top 10 Hidden Gems to Visit This Summer",
    slug: "top-10-hidden-gems-summer",
    excerpt:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    content: "Full content here...",
    image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118781/lendang-belo-blog/image_2.jpg",
    author: "Admin",
    comments: 5,
    createdAt: "2026-08-15",
  },
  {
    id: 3,
    title: "How to Pack Light for a 2-Week Trip",
    slug: "how-to-pack-light-2-week-trip",
    excerpt:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
    content: "Full content here...",
    image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118782/lendang-belo-blog/image_3.jpg",
    author: "Admin",
    comments: 8,
    createdAt: "2026-08-10",
  },
];

export default function BlogSection({ posts: initialPosts }: BlogSectionProps) {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (!initialPosts || initialPosts.length === 0) {
      fetch("/api/posts")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setFetchedPosts(data);
          }
        })
        .catch((err) => console.error("Error fetching live posts for BlogSection:", err));
    }
  }, [initialPosts]);

  const displayPosts =
    initialPosts && initialPosts.length > 0
      ? initialPosts
      : fetchedPosts.length > 0
      ? fetchedPosts
      : defaultPosts;

  const formatDate = (dateStr: string | Date) => {
    if (!dateStr) return "Aug 2026";
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return "Aug 2026";
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Aug 2026";
    }
  };

  return (
    <section className="py-20 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="font-arizonia text-[#16a34a] text-3xl block">
            Kabar & Berita Desa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Kegiatan Terbaru Desa Lendang Belo
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Informasi terkini mengenai aktivitas kemasyarakatan, kegiatan KKN, pembangunan, dan acara kebudayaan desa.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <motion.div
              key={post.id || post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group border border-emerald-100/60"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image || "https://res.cloudinary.com/tar8ttin/image/upload/v1786118779/lendang-belo-blog/image_1.jpg"}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Meta */}
                  <div className="flex items-center text-xs text-slate-400 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-[#16a34a]" />
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3.5 h-3.5 text-[#16a34a]" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16a34a] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 text-justify">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-bold text-[#16a34a] hover:text-[#15803d] transition-colors"
                  >
                    Baca Selengkapnya &rarr;
                  </Link>

                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`[Berita Lendang Belo] ${post.title} - https://lendangbelo.web.id/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-emerald-700 hover:text-white bg-emerald-50 hover:bg-[#25D366] rounded-xl transition-all shadow-sm flex items-center gap-1.5 text-xs font-bold"
                    title="Bagikan ke WhatsApp"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Bagikan</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
