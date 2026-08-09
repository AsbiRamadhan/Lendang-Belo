import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import bcrypt from "bcryptjs";

const dbUrl = process.env.DATABASE_URL || "mysql://root:@127.0.0.1:3306/lendangbelo_db";
const adapter = new PrismaMariaDb(dbUrl);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding data ke database MySQL...");

  const posts = [
    {
      title: "Most Popular Vacation Spots For Kids",
      slug: "most-popular-vacation-spots-for-kids",
      excerpt:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118779/lendang-belo-blog/image_1.jpg",
      author: "Admin",
      comments: 3,
    },
    {
      title: "Top 10 Hidden Gems to Visit This Summer",
      slug: "top-10-hidden-gems-summer",
      excerpt:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118781/lendang-belo-blog/image_2.jpg",
      author: "Admin",
      comments: 5,
    },
    {
      title: "How to Pack Light for a 2-Week Trip",
      slug: "how-to-pack-light-2-week-trip",
      excerpt:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
      content:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.",
      image: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118782/lendang-belo-blog/image_3.jpg",
      author: "Admin",
      comments: 8,
    },
  ];

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
  }

  // Seed default admin user (1 user only)
  const hashedPassword = await bcrypt.hash("admin123", 10);


  await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      name: "Administrator Desa",
      username: "admin",
      email: "admin@lendangbelo.des.id",
      password: hashedPassword,
      role: "admin",
    },
  });

  console.log("Seeding berhasil! Data blog awal & user admin telah tersimpan di MySQL.");
}

main()
  .catch((e) => {
    console.error("Gagal melakukan seed database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
