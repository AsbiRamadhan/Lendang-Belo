import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { getAuthUser } from "@/lib/auth";
import cloudinary, { isCloudinaryConfigured } from "@/lib/cloudinary";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export async function POST(request: Request) {
  try {
    const session = await getAuthUser();
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized. Silakan login terlebih dahulu." },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "Tidak ada berkas foto yang diunggah." },
        { status: 400 }
      );
    }

    // 1. Validasi tipe file (hanya gambar)
    if (!file.type || !file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Berkas harus berupa gambar (JPG, PNG, WEBP, GIF, dll)." },
        { status: 400 }
      );
    }

    // 2. Validasi ukuran file (maksimal 5 MB)
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Ukuran berkas gambar tidak boleh melebihi 5 MB." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 3. Upload ke Cloudinary jika environment variables diset
    if (isCloudinaryConfigured) {
      const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;
      
      const uploadResult = await cloudinary.uploader.upload(base64Image, {
        folder: "lendang-belo-blog",
        resource_type: "image",
      });

      return NextResponse.json({
        success: true,
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
        provider: "cloudinary",
      });
    }

    // Fallback penyimpanan lokal jika Cloudinary env belum dikonfigurasi
    const ext = path.extname(file.name) || ".jpg";
    const baseName = path
      .basename(file.name, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-");

    const fileName = `${baseName}-${Date.now()}${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "images");
    const filePath = path.join(uploadDir, fileName);

    await writeFile(filePath, buffer);

    const localUrl = `/images/${fileName}`;

    return NextResponse.json({
      success: true,
      url: localUrl,
      fileName,
      provider: "local",
    });
  } catch (error: unknown) {
    console.error("Error uploading image:", error);
    const errorMessage = error instanceof Error ? error.message : "Gagal mengunggah foto ke server.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
