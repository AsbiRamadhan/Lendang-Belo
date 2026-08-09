import fs from "fs";
import path from "path";
import { prisma } from "../lib/prisma";

async function main() {
  const mapPath = path.join(process.cwd(), "scripts", "image-url-map.json");
  const urlMap: Record<string, string> = JSON.parse(fs.readFileSync(mapPath, "utf8"));

  const posts = await prisma.post.findMany();
  console.log(`Found ${posts.length} posts in database.`);

  for (const post of posts) {
    if (urlMap[post.image]) {
      const newUrl = urlMap[post.image];
      await prisma.post.update({
        where: { id: post.id },
        data: { image: newUrl },
      });
      console.log(`✅ Post #${post.id} updated -> ${newUrl}`);
    } else if (post.image.startsWith("/images/")) {
      const filename = path.basename(post.image);
      const fallbackUrl =
        urlMap[`/images/${filename}`] ||
        "https://res.cloudinary.com/tar8ttin/image/upload/v1786118779/lendang-belo-blog/image_1.jpg";
      await prisma.post.update({
        where: { id: post.id },
        data: { image: fallbackUrl },
      });
      console.log(`🔄 Post #${post.id} fallback updated -> ${fallbackUrl}`);
    }
  }

  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
