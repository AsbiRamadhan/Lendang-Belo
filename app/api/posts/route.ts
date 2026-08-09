import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";

// GET /api/posts - Fetch all blog posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data blog dari database" },
      { status: 500 }
    );
  }
}

// POST /api/posts - Create a new blog post
export async function POST(request: Request) {
  try {
    const session = await getAuthUser();
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized. Silakan login terlebih dahulu." },
        { status: 401 }
      );
    }

    if (!["admin", "editor"].includes(session.role)) {
      return NextResponse.json(
        { error: "Forbidden. Anda tidak memiliki akses." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { title, slug, excerpt, content, image, author } = body;


    if (!title || !slug || !excerpt || !content || !image) {
      return NextResponse.json(
        { error: "Semua bidang (title, slug, excerpt, content, image) wajib diisi" },
        { status: 400 }
      );
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        image,
        author: author || "Admin",
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error: unknown) {
    console.error("Error creating post:", error);
    if (typeof error === "object" && error !== null && "code" in error && error.code === "P2002") {
      return NextResponse.json(
        { error: "Slug artikel sudah digunakan, silakan gunakan slug lain." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Gagal menyimpan postingan blog ke database" },
      { status: 500 }
    );
  }
}
