"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? "bg-paper/95 shadow-[0_2px_14px_rgba(59,35,26,0.10)] backdrop-blur" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        {/* torn badge logo */}
        <Link href="/" className="badge-torn bg-espresso px-5 py-2 font-serif2 text-sm font-bold italic text-paper">
          {profile.alias}
        </Link>

        <ul className="hidden items-center gap-7 text-sm font-semibold text-espresso md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-rust">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-espresso hidden !py-2 text-xs md:inline-flex">
          Hire Me
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="text-2xl text-espresso md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-espresso/10 bg-paper px-5 py-4 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href} className="py-2">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-semibold text-espresso"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-espresso w-full justify-center text-xs">
              Hire Me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
