-- PostgreSQL schema overview for MIN 1 Probolinggo
CREATE TYPE "Role" AS ENUM ('SUPER_ADMIN','ADMIN','EDITOR','PENULIS');
CREATE TYPE "ArticleStatus" AS ENUM ('DRAFT','PUBLISHED','ARCHIVED');
CREATE TYPE "CommentStatus" AS ENUM ('PENDING','APPROVED','REJECTED');

-- In production, Prisma migration files should generate these tables.
