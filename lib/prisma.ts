import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const rawUrl = process.env.DATABASE_URL || "mysql://root:@127.0.0.1:3306/lendangbelo_db";
const dbUrl = rawUrl.replace(/^mysql:\/\//, "mariadb://");
const adapter = new PrismaMariaDb(dbUrl);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
