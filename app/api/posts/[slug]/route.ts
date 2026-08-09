import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";

// GET /api/posts/[slug] - Fetch single post detail by slug
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const post = await prisma.post.findUnique({
      where: { slug },
    });

    if (!post) {
      return NextResponse.json(
        { error: "Artikel blog tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching post detail:", error);
    return NextResponse.json(
      { error: "Gagal mengambil detail artikel" },
      { status: 500 }
    );
  }
}

// DELETE /api/posts/[slug] - Delete post by slug
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
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

    const { slug } = await params;


    const post = await prisma.post.delete({
      where: { slug },
    });

    return NextResponse.json({
      success: true,
      message: "Artikel berhasil dihapus",
      post,
    });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Gagal menghapus artikel dari database" },
      { status: 500 }
    );
  }
}
