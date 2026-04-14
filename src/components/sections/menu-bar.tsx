"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { nav } from "@/lib/content";

const linkBase =
  "text-[17px] font-medium text-white/90 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none";

export function MenuBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow,height] duration-300 ${
        scrolled
          ? "bg-[#2a0505]/90 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container width="wide">
        <div
          className={`flex items-center justify-between transition-[height] duration-300 ${
            scrolled ? "h-[80px] md:h-[88px]" : "h-[120px] md:h-[150px]"
          }`}
        >
          <Link
            href="/"
            className="flex items-center"
            aria-label={nav.brandLogoAlt}
          >
            <Image
              src="/logos/primedic.png"
              alt="Primedic"
              width={316}
              height={66}
              priority
              className={`w-auto transition-[height] duration-300 ${
                scrolled ? "h-[40px] md:h-[48px]" : "h-[52px] md:h-[66px]"
              }`}
            />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>

          <nav
            aria-label="Ana menü"
            className="hidden items-center gap-10 lg:flex"
          >
            {nav.items.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className={`${linkBase} inline-flex items-center gap-1.5`}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    >
                      <path
                        d="M3 4.5l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </button>

                  <div
                    className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                  >
                    <ul
                      role="menu"
                      className="min-w-[260px] rounded-[16px] border border-white/15 bg-[#2a0505]/95 p-2 shadow-2xl backdrop-blur"
                    >
                      {item.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            role="menuitem"
                            href={child.href}
                            className="block rounded-[12px] px-4 py-3 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline-none"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={linkBase}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`lg:hidden ${mobileOpen ? "block" : "hidden"} border-t border-white/10 bg-[#2a0505]/95 backdrop-blur-md`}
      >
        <Container width="wide">
          <nav aria-label="Mobil menü" className="py-6">
            <ul className="flex flex-col gap-1">
              {nav.items.map((item) =>
                item.children ? (
                  <li key={item.label} className="py-2">
                    <div className="px-3 pb-2 text-[13px] font-semibold uppercase tracking-wider text-white/50">
                      {item.label}
                    </div>
                    <ul className="flex flex-col gap-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-[12px] px-3 py-3 text-[17px] font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-[12px] px-3 py-3 text-[17px] font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}
