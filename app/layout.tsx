// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AI-Conic Club",
  description: "A community of AI enthusiasts who code together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="navigation">
          <div className="nav-container">
            <div className="logo">
              <Link href="/">AI-Conic Club</Link>
            </div>
            <nav className="nav-links">
              <Link href="/community">Community</Link>
              <Link href="https://github.com/Aiconic-club">Github</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}