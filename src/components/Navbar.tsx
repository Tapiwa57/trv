
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "T-Shirt Printing", href: "/t-shirt-printing" },
  { name: "Mug Printing", href: "/mug-printing" },
  { name: "Graphic Design", href: "/graphic-design" },
  { name: "Branding", href: "/branding" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-2xl font-black tracking-tight text-black">
          TRV<span className="text-orange-500">.</span>
          <span className="ml-2 text-xs font-medium text-gray-500">
            PRINT & DESIGN
          </span>
        </Link>

        <button
          type="button"
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close ✕" : "Menu ☰"}
        </button>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav className="flex flex-col border-t border-gray-200 bg-white px-5 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700 hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
