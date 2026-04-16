"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { heartsaveMypad } from "@/lib/content.heartsave-mypad";

export function ProductVideo() {
  const { youtubeId, heading, description } = heartsaveMypad.video;
  const [playing, setPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <section className="relative overflow-hidden py-[88px] md:py-[112px]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(256.46deg, rgba(197, 39, 39, 0.92) 4%, rgba(26, 29, 33, 0.94) 96%)",
        }}
      />

      <Container width="wide">
        <header className="mx-auto mb-12 max-w-[800px] text-center md:mb-16">
          <h2 className="text-white">{heading}</h2>
          <p className="text-lead mt-4 text-white/80">{description}</p>
        </header>

        <div className="relative mx-auto w-full max-w-[1437px] overflow-hidden rounded-[24px] border border-white/15 bg-black/30 md:rounded-[40px]">
          <div className="relative aspect-video w-full">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={heading}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Tanıtım videosunu oynat"
                className="group absolute inset-0 h-full w-full cursor-pointer"
              >
                <Image
                  src={thumbnailUrl}
                  alt={heading}
                  fill
                  sizes="(max-width: 768px) 100vw, 1437px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                  <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform group-hover:scale-110 md:h-[96px] md:w-[96px]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="#b21c1c"
                      className="ml-1 h-8 w-8 md:h-10 md:w-10"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
