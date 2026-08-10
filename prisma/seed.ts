import { PrismaClient, Role, ArticleStatus } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

function hashPassword(password: string) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || "admin@min1probolinggo.sch.id" },
    update: {},
    create: {
      name: "Administrator MIN 1 Probolinggo",
      email: process.env.ADMIN_EMAIL || "admin@min1probolinggo.sch.id",
      passwordHash: hashPassword(process.env.ADMIN_PASSWORD || "ganti-password-kuat"),
      role: Role.SUPER_ADMIN
    }
  });

  const categories = [
    ["Kegiatan", "kegiatan"], ["Prestasi", "prestasi"],
    ["Akademik", "akademik"], ["Lingkungan", "lingkungan"],
    ["Pengumuman", "pengumuman"]
  ];

  for (const [name, slug] of categories) {
    await prisma.category.upsert({
      where: { slug },
      update: {},
      create: { name, slug }
    });
  }

  const lingkungan = await prisma.category.findUniqueOrThrow({ where: { slug: "lingkungan" } });

  await prisma.article.upsert({
    where: { slug: "penanaman-dan-pemeliharaan-pohon" },
    update: {},
    create: {
      title: "Penanaman dan Pemeliharaan Pohon di Lingkungan Madrasah",
      slug: "penanaman-dan-pemeliharaan-pohon",
      excerpt: "MIN 1 Probolinggo terus menguatkan budaya lingkungan melalui kegiatan penanaman dan pemeliharaan pohon.",
      content: "Kegiatan penanaman dan pemeliharaan pohon menjadi bagian dari upaya madrasah membangun lingkungan yang sehat, hijau, dan nyaman.",
      status: ArticleStatus.PUBLISHED,
      publishedAt: new Date(),
      authorId: admin.id,
      categoryId: lingkungan.id
    }
  });
}

main().finally(() => prisma.$disconnect());
