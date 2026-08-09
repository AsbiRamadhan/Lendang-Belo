import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { prisma } from "../lib/prisma";

// Manually load .env into process.env if needed
const envPath = path.join(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  envContent.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
      const [key, ...valParts] = trimmed.split("=");
      const val = valParts.join("=").replace(/^["']|["']$/g, "").trim();
      process.env[key.trim()] = val;
    }
  });
}

// Configure Cloudinary after env loaded
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const UI_IMAGES = [
  "about-drone.jpg",
  "bello-bungalow-1.jpg",
  "bello-bungalow-2.jpg",
  "bello-bungalow-3.jpg",
  "dara-ngindang-1.jpg",
  "dara-ngindang-2.jpg",
  "dara-ngindang-3.jpg",
  "dara-ngindang-4.jpg",
  "destination-12.jpg",
  "destination-3.jpg",
  "hero-1.jpg",
  "hero-2.jpg",
  "hero-3.jpg",
  "logo-lombok-timur.png",
  "munis-terrace-1.jpg",
  "munis-terrace-2.jpg",
  "munis-terrace-3.jpg",
  "person_1.jpg",
  "person_2.jpg",
  "person_3.jpg",
  "terasering-1.jpg",
  "terasering-2.jpg",
  "terasering-3.jpg",
];

const BLOG_IMAGES = [
  "image_1.jpg",
  "image_2.jpg",
  "image_3.jpg",
  "image_4.jpg",
  "img-7201-1786025464267.jpg",
];

async function uploadFile(filePath: string, folderName: string): Promise<string> {
  const fileBasename = path.basename(filePath, path.extname(filePath));
  const publicId = `${folderName}/${fileBasename}`;

  const result = await cloudinary.uploader.upload(filePath, {
    public_id: publicId,
    overwrite: true,
    resource_type: "auto",
  });

  return result.secure_url;
}

async function main() {
  console.log("🚀 Memulai proses pengunggahan foto ke Cloudinary...");

  const imagesDir = path.join(process.cwd(), "public", "images");
  const urlMap: Record<string, string> = {};

  // Upload UI images
  console.log("\n🎨 Mengunggah Aset Statis UI (Folder: lendang-belo-ui)...");
  for (const filename of UI_IMAGES) {
    const fullPath = path.join(imagesDir, filename);
    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️ Berkas tidak ditemukan: ${filename}`);
      continue;
    }
    try {
      const url = await uploadFile(fullPath, "lendang-belo-ui");
      urlMap[`/images/${filename}`] = url;
      console.log(`✅ Uploaded [UI]: ${filename} -> ${url}`);
    } catch (err) {
      console.error(`❌ Gagal upload ${filename}:`, err);
    }
  }

  // Upload Blog images
  console.log("\n📰 Mengunggah Aset Blog & Berita (Folder: lendang-belo-blog)...");
  for (const filename of BLOG_IMAGES) {
    const fullPath = path.join(imagesDir, filename);
    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️ Berkas tidak ditemukan: ${filename}`);
      continue;
    }
    try {
      const url = await uploadFile(fullPath, "lendang-belo-blog");
      urlMap[`/images/${filename}`] = url;
      console.log(`✅ Uploaded [Blog]: ${filename} -> ${url}`);
    } catch (err) {
      console.error(`❌ Gagal upload ${filename}:`, err);
    }
  }

  // Write mapping file
  const mapPath = path.join(__dirname, "image-url-map.json");
  fs.writeFileSync(mapPath, JSON.stringify(urlMap, null, 2), "utf8");
  console.log(`\n💾 Peta URL berhasil disimpan ke ${mapPath}`);

  // Update Database Posts table
  console.log("\n🗄️ Memperbarui URL gambar di database MySQL (tabel posts)...");
  const posts = await prisma.post.findMany();
  let updatedCount = 0;

  for (const post of posts) {
    if (urlMap[post.image]) {
      const newUrl = urlMap[post.image];
      await prisma.post.update({
        where: { id: post.id },
        data: { image: newUrl },
      });
      console.log(`🔄 DB Updated Post #${post.id} ("${post.title}"): ${post.image} -> ${newUrl}`);
      updatedCount++;
    }
  }

  console.log(`\n🎉 SELESAI! ${updatedCount} postingan blog berhasil diperbarui di database.`);
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error("Fatal error during upload:", e);
  await prisma.$disconnect();
  process.exit(1);
});
