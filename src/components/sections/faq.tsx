"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { faq } from "@/lib/content";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((current) => (current === i ? null : i));

  return (
    <section
      id="iletisim"
      className="relative bg-white py-[80px]"
      aria-labelledby="faq-title"
    >
      <Container width="wide">
        <div className="mx-auto max-w-[1408px] px-4 md:px-[112px]">
          <Reveal y={24}>
            <h2
              id="faq-title"
              className="max-w-[738px] font-bold tracking-[-0.5px] text-black"
            >
              {faq.title}
            </h2>
          </Reveal>

          <ul className="mt-10 flex flex-col gap-4">
            {faq.items.map((item, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-panel-${i}`;
              const btnId = `faq-button-${i}`;
              return (
                <li
                  key={item.question}
                  className="rounded-[4px] border border-[#b21c1c] bg-white"
                >
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(i)}
                      className="flex w-full items-center justify-between gap-6 p-6 text-left text-[18px] font-bold leading-[1.3] text-[#272d27] md:text-[24px]"
                    >
                      <span className="flex-1">{item.question}</span>
                      <span
                        className={cn(
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#b21c1c] text-white transition-transform",
                          isOpen ? "rotate-0" : "-rotate-90",
                        )}
                        aria-hidden
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    hidden={!isOpen}
                    className="px-6 pb-6 text-[16px] leading-[1.6] text-[#272d27] md:text-[20px] md:leading-[32px]"
                  >
                    {item.answer}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
