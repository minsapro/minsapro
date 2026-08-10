import { NextResponse } from "next/server";
import { prisma } from '../../../lib_prisma'
export async function GET() {
  const articles = await prisma.article.findMany({
    include: { category: true, author: true },
    orderBy: { createdAt: "desc" }
  });
  return NextResponse.json(articles);
}

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.title || !body.content || !body.categoryId || !body.authorId) {
    return NextResponse.json({ error: "title, content, categoryId, authorId wajib diisi" }, { status: 400 });
  }
  const slug = body.slug || body.title.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-");
  const article = await prisma.article.create({
    data: {
      title: body.title, slug, excerpt: body.excerpt, content: body.content,
      featuredImage: body.featuredImage, categoryId: body.categoryId, authorId: body.authorId,
      status: body.status || "DRAFT", publishedAt: body.status === "PUBLISHED" ? new Date() : null
    }
  });
  return NextResponse.json(article, { status: 201 });
}
