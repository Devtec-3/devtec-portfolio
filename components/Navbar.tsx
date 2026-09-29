"use client";

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
        scrolled ? "border-b border-line bg-ink/80 backdrop-blur" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-bold tracking-tight">
          <span className="gradient-text">&lt;{profile.alias} /&gt;</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-lg border border-accent/40 px-3 py-1.5 font-semibold text-accent transition hover:bg-accent/10"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-line bg-ink/95 px-5 py-4 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href} className="py-2">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-slate-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center text-sm">
              Hire Me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
