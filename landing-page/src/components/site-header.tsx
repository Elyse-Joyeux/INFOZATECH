"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Why Umucyo" },
  { href: "#how-it-works", label: "How it works" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-black/10 bg-white/80 px-3 py-2.5 shadow-lg shadow-black/[0.04] backdrop-blur-xl sm:px-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src="/umucyo-icon.png"
            alt="Umucyo AI logo"
            className="h-9 w-9 rounded-xl"
          />
          <span className="text-base font-bold tracking-tight">Umucyo AI</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-black/55 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-black">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#get-started"
            className="rounded-xl bg-[#101114] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#24262b]"
          >
            Get started
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl text-black/70 transition hover:bg-black/5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-black/10 bg-white/95 p-2 shadow-xl backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-black/70 hover:bg-black/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#get-started"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl bg-[#101114] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Start learning free
          </Link>
        </div>
      )}
    </header>
  );
}
