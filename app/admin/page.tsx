"use client";

import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useBlogs } from "@/hooks/useBlogs";
import { AdminHeader } from "@/components/layout/AdminHeader";
import { BannerMessage } from "@/components/shared/BannerMessage";
import { LoadingState } from "@/components/shared/LoadingState";
import { BlogForm } from "@/components/forms/BlogForm";
import { BlogListSection } from "@/components/sections/BlogListSection";

export default function AdminDashboardPage() {
  const { user, loading: authLoading, logout } = useAuth();

  const { formState, uiState, handlers } = useBlogs(
    user?.name || "Admin Lendang Belo"
  );

  const { loadPosts } = handlers;
  const { setAuthor } = formState;

  useEffect(() => {
    if (!authLoading && user) {
      loadPosts();
      if (user.name) {
        setAuthor(user.name);
      }
    }
  }, [authLoading, user, loadPosts, setAuthor]);

  if (authLoading) {
    return <LoadingState message="Memuat Portal Admin..." />;
  }

  return (
    <div className="min-h-screen bg-emerald-50/40 text-slate-900 pb-20">
      {/* Top Navbar */}
      <AdminHeader onLogout={logout} />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Banner Message */}
        <BannerMessage
          message={uiState.message}
          onClose={() => uiState.setMessage(null)}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Input Artikel */}
          <BlogForm
            formState={formState}
            uiState={uiState}
            handlers={handlers}
          />

          {/* Right Column: Daftar Artikel MySQL */}
          <BlogListSection
            posts={uiState.posts}
            loadingPosts={uiState.loadingPosts}
            onRefresh={handlers.loadPosts}
            onDelete={handlers.handleDeletePost}
          />
        </div>
      </main>
    </div>
  );
}
