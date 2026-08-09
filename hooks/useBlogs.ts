"use client";

import { useState, useCallback } from "react";
import { PostItem, AlertMessage } from "@/types/blog";
import { generateSlug } from "@/lib/helper";
import { fetchAllPosts, createPost, deletePostBySlug } from "@/services/blog.service";
import { uploadImageFile } from "@/services/upload.service";

export function useBlogs(defaultAuthor: string = "Admin Lendang Belo") {
  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [author, setAuthor] = useState(defaultAuthor);
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // UI State
  const [uploadingImage, setUploadingImage] = useState(false);
  const [submittingPost, setSubmittingPost] = useState(false);
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [message, setMessage] = useState<AlertMessage | null>(null);

  const loadPosts = useCallback(async () => {
    setLoadingPosts(true);
    try {
      const data = await fetchAllPosts();
      setPosts(data);
    } catch (err: unknown) {
      console.error("Gagal memuat artikel:", err);
    } finally {
      setLoadingPosts(false);
    }
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(generateSlug(newTitle));
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validasi format file (hanya gambar)
    if (!file.type || !file.type.startsWith("image/")) {
      setMessage({
        type: "error",
        text: "Berkas yang dipilih harus berupa gambar (JPG, PNG, WEBP, GIF, dll).",
      });
      return;
    }

    // Validasi ukuran file (maksimal 5 MB)
    if (file.size > 5 * 1024 * 1024) {
      setMessage({
        type: "error",
        text: "Ukuran berkas gambar terlalu besar! Maksimal ukuran file 5 MB.",
      });
      return;
    }

    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));

    setUploadingImage(true);
    setMessage(null);

    try {
      const url = await uploadImageFile(file);
      setImagePath(url);
      setMessage({
        type: "success",
        text: `Foto "${file.name}" berhasil diunggah!`,
      });
    } catch (err: unknown) {
      console.error("Upload error:", err);
      const msg = err instanceof Error ? err.message : "Terjadi kesalahan saat mengunggah berkas foto.";
      setMessage({
        type: "error",
        text: msg,
      });
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmitArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!title || !slug || !excerpt || !content || !imagePath) {
      setMessage({
        type: "error",
        text: "Harap lengkapi semua bidang form, termasuk foto artikel!",
      });
      return;
    }

    setSubmittingPost(true);

    try {
      await createPost({
        title,
        slug,
        author,
        excerpt,
        content,
        imagePath,
      });

      setMessage({
        type: "success",
        text: `Artikel "${title}" berhasil diterbitkan ke database!`,
      });

      setTitle("");
      setSlug("");
      setExcerpt("");
      setContent("");
      setImagePath("");
      setImageFile(null);
      setPreviewUrl(null);

      await loadPosts();
    } catch (err: unknown) {
      console.error("Submit post error:", err);
      const msg = err instanceof Error ? err.message : "Terjadi kesalahan koneksi saat menyimpan artikel.";
      setMessage({
        type: "error",
        text: msg,
      });
    } finally {
      setSubmittingPost(false);
    }
  };

  const handleDeletePost = async (targetSlug: string, targetTitle: string) => {
    if (!confirm(`Apakah Anda yakin ingin menghapus artikel "${targetTitle}"?`)) return;

    try {
      await deletePostBySlug(targetSlug);
      setMessage({
        type: "success",
        text: `Artikel "${targetTitle}" berhasil dihapus.`,
      });
      await loadPosts();
    } catch (err: unknown) {
      console.error("Delete error:", err);
      const msg = err instanceof Error ? err.message : "Terjadi kesalahan saat menghapus artikel.";
      setMessage({
        type: "error",
        text: msg,
      });
    }
  };

  return {
    formState: {
      title,
      slug,
      author,
      excerpt,
      content,
      imagePath,
      imageFile,
      previewUrl,
      setTitle,
      setSlug,
      setAuthor,
      setExcerpt,
      setContent,
      setImagePath,
      setPreviewUrl,
    },
    uiState: {
      uploadingImage,
      submittingPost,
      posts,
      loadingPosts,
      message,
      setMessage,
    },
    handlers: {
      loadPosts,
      handleTitleChange,
      handleFileSelect,
      handleSubmitArticle,
      handleDeletePost,
    },
  };
}
