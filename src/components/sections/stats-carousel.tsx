"use client";

import { useState, useCallback } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/content";

export function StatsCarousel() {
  const [index, setIndex] = useState(0);
  const total = stats.slides.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total],
  );

  const slide = stats.slides[index];

  return (
    <section
      className="relative bg-black py-[120px] md:py-[140px]"
      style={{
        backgroundImage:
          "linear-gradient(178deg, rgba(178, 28, 28, 0.90) 20.56%, rgba(178, 28, 28, 0.90) 70.84%, rgba(26, 29, 33, 0.81) 98.96%)",
      }}
      aria-labelledby="stats-title"
    >
      <Container width="wide">
        <Reveal y={24}>
          <h2
            id="stats-title"
            className="mx-auto text-center text-white"
          >
            <span className="block">Kalp Durmasında</span>
            <span className="block">Erken Müdahalenin Önemi</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} y={32} className="relative mx-auto mt-14 max-w-[1324px]">
          {/* Outer white frame — Figma 1:2197 */}
          <div className="rounded-[20px] border-[1.2px] border-white bg-white p-6 md:p-10 backdrop-blur-[8px] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
            {/* Inner card — Figma 1:2198 (subtle gray gradient + dark border) */}
            <div
              className="relative flex flex-col items-center overflow-hidden rounded-[20px] border border-[#272834] p-6 md:p-10"
              style={{
                backgroundImage:
                  "linear-gradient(55.38deg, rgba(51,51,62,0.16) 6.2%, rgba(83,84,108,0.16) 98%)",
              }}
            >
              <div className="flex min-h-[227px] w-full flex-col items-center justify-center gap-5">
                <p className="text-eyebrow self-start text-[#b21c1c]">
                  {slide.source}
                </p>
                <p
                  className="text-center text-[20px] font-semibold leading-[1.4] text-black md:text-[32px] lg:text-[36px]"
                  style={{ fontFeatureSettings: "'dlig' 1" }}
                >
                  {slide.quote.map((part, i) => (
                    <span
                      key={i}
                      className={part.strong ? "font-extrabold" : undefined}
                    >
                      {part.text}
                    </span>
                  ))}
                </p>
              </div>

              <div
                className="mt-8 flex gap-4"
                role="tablist"
                aria-label="İstatistik kaynakları"
              >
                {stats.slides.map((_, i) => {
                  const isActive = i === index;
                  return (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Slayt ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className="flex h-6 w-6 items-center justify-center"
                    >
                      <span
                        className={
                          isActive
                            ? "relative flex h-6 w-6 items-center justify-center rounded-full border border-[#b21c1c]"
                            : ""
                        }
                      >
                        <span
                          className={`block h-1.5 w-1.5 rounded-full ${
                            isActive ? "bg-[#b21c1c]" : "bg-[#272834]/60"
                          }`}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Arrow buttons — black arrow glyph with a white stroke border */}
          <button
            type="button"
            onClick={prev}
            aria-label="Önceki"
            className="absolute left-[-28px] top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-black text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 md:flex"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Sonraki"
            className="absolute right-[-28px] top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-black text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 md:flex"
          >
            <ArrowRight />
          </button>
        </Reveal>
      </Container>
    </section>
  );
}

function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
