import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "MIN 1 Probolinggo | Portal Berita",
  description: "Portal berita dan kegiatan MIN 1 Probolinggo"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <header className="topbar">
          <div className="container nav">
            <Link href="/" className="brand">
              <span className="logo">MIN</span>
              <span><b>MIN 1 PROBOLINGGO</b><small>Religius • Unggul • Berbudaya Lingkungan</small></span>
            </Link>
            <nav>
              <Link href="/">Beranda</Link>
              <Link href="/berita">Berita</Link>
              <Link href="/prestasi">Prestasi</Link>
              <Link href="/galeri">Galeri</Link>
              <Link href="/admin" className="adminLink">Admin</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer><div className="container"><b>MIN 1 PROBOLINGGO</b><p>Portal Berita Madrasah • Religius • Unggul • Berbudaya Lingkungan</p></div></footer>
      </body>
    </html>
  );
}
