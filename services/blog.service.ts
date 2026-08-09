import { PostItem, BlogFormData } from "@/types/blog";

/**
 * Fetch all blog posts from API
 */
export async function fetchAllPosts(): Promise<PostItem[]> {
  const res = await fetch("/api/posts");
  if (!res.ok) {
    throw new Error("Gagal memuat artikel dari database");
  }
  return await res.json();
}

/**
 * Create new blog post via API
 */
export async function createPost(data: BlogFormData): Promise<PostItem> {
  const res = await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      image: data.imagePath,
      author: data.author,
    }),
  });

  const responseData = await res.json();
  if (!res.ok) {
    throw new Error(responseData.error || "Gagal membuat artikel baru.");
  }
  return responseData;
}

/**
 * Delete blog post by slug via API
 */
export async function deletePostBySlug(slug: string): Promise<void> {
  const res = await fetch(`/api/posts/${slug}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Gagal menghapus artikel.");
  }
}
