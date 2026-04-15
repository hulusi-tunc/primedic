"use client";

import { useEffect, useRef, useState } from "react";

type Language = {
  code: string;
  label: string;
  flag: string;
};

const languages: ReadonlyArray<Language> = [
  { code: "TR", label: "Türkçe", flag: "🇹🇷" },
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  { code: "FR", label: "Français", flag: "🇫🇷" },
  { code: "AR", label: "العربية", flag: "🇸🇦" },
];

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Language>(languages[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Dil seçimi: ${selected.label}`}
        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-[14px] text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <span aria-hidden className="text-[16px] leading-none">
          {selected.flag}
        </span>
        <span className="font-medium">{selected.code}</span>
        <svg
          viewBox="0 0 12 12"
          aria-hidden
          className={`h-3 w-3 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
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

      {open && (
        <ul
          role="listbox"
          aria-label="Dil listesi"
          className="absolute bottom-full right-0 mb-2 min-w-[180px] overflow-hidden rounded-[14px] border border-white/15 bg-[#2a0505]/95 p-1 shadow-2xl backdrop-blur md:left-auto"
        >
          {languages.map((lang) => {
            const isActive = lang.code === selected.code;
            return (
              <li key={lang.code} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setSelected(lang);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-[10px] px-3 py-2.5 text-left text-[14px] transition-colors hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none ${
                    isActive
                      ? "bg-white/10 font-semibold text-white"
                      : "font-medium text-white/80"
                  }`}
                >
                  <span aria-hidden className="text-[18px] leading-none">
                    {lang.flag}
                  </span>
                  <span className="flex-1">{lang.label}</span>
                  <span className="text-[12px] uppercase tracking-wider text-white/50">
                    {lang.code}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
