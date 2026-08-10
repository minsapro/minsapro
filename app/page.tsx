import { prisma } from '../lib_prisma'
export default async function NewArticle() {
  const [categories, users] = await Promise.all([
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    prisma.user.findMany({ orderBy: { name: "asc" } })
  ]);
  return <main className="container admin"><div className="tag">ARTIKEL</div><h1>Tambah Artikel</h1>
    <form className="panel" action="/api/articles" method="post">
      <label>Judul<input className="input" name="title" required /></label>
      <div className="row"><label>Kategori<select className="input" name="categoryId">{categories.map(c=><option value={c.id} key={c.id}>{c.name}</option>)}</select></label>
      <label>Penulis<select className="input" name="authorId">{users.map(u=><option value={u.id} key={u.id}>{u.name}</option>)}</select></label></div>
      <label>Ringkasan<textarea name="excerpt" rows={3}/></label>
      <label>Isi Artikel<textarea name="content" rows={12} required/></label>
      <label>URL Foto Utama<input className="input" name="featuredImage" placeholder="Nanti diganti upload storage"/></label>
      <button className="btn" type="submit">Simpan Draft</button>
    </form>
  </main>;
}
