# MIN 1 Probolinggo Portal — V2

Fondasi website portal berita dengan Next.js + PostgreSQL + Prisma.

## Struktur
- `app/` — halaman website dan dashboard
- `app/api/` — API
- `prisma/schema.prisma` — database schema
- `prisma/seed.ts` — data awal
- `.env.example` — konfigurasi environment

## Menjalankan
1. Install Node.js 20+.
2. Salin `.env.example` menjadi `.env`.
3. Isi `DATABASE_URL` PostgreSQL.
4. Jalankan `npm install`.
5. Jalankan `npx prisma generate`.
6. Jalankan `npm run db:push`.
7. Jalankan `npm run db:seed`.
8. Jalankan `npm run dev`.
9. Buka `http://localhost:3000`.

## Catatan penting
Versi ini adalah fondasi V2. Dashboard statistik dan schema database sudah tersedia, tetapi autentikasi production, CRUD penuh, upload file, komentar publik, analytics, CSRF/rate limiting, backup, dan deployment masih harus diselesaikan sebelum digunakan sebagai website publik resmi.
Jangan memakai password default di production.
