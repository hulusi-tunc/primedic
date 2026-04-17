"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import {
  accessoryThemes,
  type AccessoryGroup,
  type AccessoryRow,
} from "@/lib/content.aksesuarlar";
import { getAksesuarlar } from "@/lib/get-content";
import { useLocale } from "next-intl";

type OpenMap = Record<string, string | null>;

export function AksesuarAccessories() {
  const locale = useLocale();
  const aksesuarlar = getAksesuarlar(locale);
  const { section, categories, groups } = aksesuarlar;
  const [openRows, setOpenRows] = useState<OpenMap>(() =>
    Object.fromEntries(groups.map((g) => [g.id, null])),
  );
  const groupRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const setGroupRef = useCallback(
    (groupId: string) => (node: HTMLDivElement | null) => {
      groupRefs.current[groupId] = node;
    },
    [],
  );

  const toggleRow = (groupId: string, rowId: string) => {
    setOpenRows((prev) => ({
      ...prev,
      [groupId]: prev[groupId] === rowId ? null : rowId,
    }));
  };

  const handleChipClick = (groupId: string, rowId: string) => {
    setOpenRows((prev) => ({ ...prev, [groupId]: rowId }));
    const node = groupRefs.current[groupId];
    if (node) {
      const top = node.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-[96px] md:py-[140px]">
      <Container width="wide">
        <Reveal as="header" y={24} className="mx-auto flex max-w-[952px] flex-col items-center gap-4 text-center">
          <span className="inline-flex h-[45px] items-center justify-center rounded-[38px] border border-[#9f2322] bg-white px-6 text-[20px] font-semibold leading-none text-black md:text-[24px]">
            {section.pretitle}
          </span>
          <h2 className="text-display-xl bg-gradient-to-b from-[#9f2322] from-[37%] to-black to-[73%] bg-clip-text text-transparent">
            {section.title}
          </h2>
          <span aria-hidden className="h-[5px] w-[300px] max-w-[60%] bg-[#9f2322]" />
        </Reveal>

        {/* Chip slider */}
        <div
          className="-mx-6 mt-14 flex gap-6 overflow-x-auto overscroll-x-contain px-6 py-10 md:mt-20 md:gap-[52px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          role="list"
          aria-label={section.categoryHeader}
        >
          {categories.map((chip) => {
            const theme = accessoryThemes[chip.tone];
            return (
              <button
                key={chip.id}
                type="button"
                role="listitem"
                onClick={() => handleChipClick(chip.groupId, chip.rowId)}
                className="flex h-[134px] w-[134px] shrink-0 flex-col items-center justify-center gap-3 rounded-[20px] text-center shadow-[0_16px_32px_-8px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f2322]/40"
                style={{ backgroundColor: theme.chipBg }}
              >
                <span
                  aria-hidden
                  className="flex h-[58px] w-[58px] items-center justify-center"
                >
                  <Image
                    src={chip.icon}
                    alt=""
                    width={54}
                    height={54}
                    className="h-auto w-auto max-h-[54px] max-w-[54px] object-contain"
                  />
                </span>
                <span className="px-2 text-[15px] font-bold leading-tight text-[#22415e]">
                  {chip.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Groups */}
        <div className="mx-auto mt-14 flex max-w-[1100px] flex-col gap-10 md:mt-20 md:gap-12 2xl:max-w-[1400px]">
          {groups.map((group) => (
            <GroupCard
              key={group.id}
              group={group}
              openRowId={openRows[group.id] ?? null}
              onToggle={(rowId) => toggleRow(group.id, rowId)}
              registerRef={setGroupRef(group.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

type GroupCardProps = {
  group: AccessoryGroup;
  openRowId: string | null;
  onToggle: (rowId: string) => void;
  registerRef: (node: HTMLDivElement | null) => void;
};

function GroupCard({ group, openRowId, onToggle, registerRef }: GroupCardProps) {
  const theme = accessoryThemes[group.theme];
  const openRow = group.rows.find((r) => r.id === openRowId) ?? null;

  return (
    <div
      ref={registerRef}
      id={`aksesuar-${group.id}`}
      className="overflow-hidden rounded-[16px] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.1)]"
    >
      <div className="grid gap-0 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-6 p-8 md:p-12">
          {/* group content */}
          <p
            className="text-[14px] font-bold leading-tight md:text-[16px]"
            style={{ color: theme.eyebrow }}
          >
            {group.eyebrow}
          </p>
          <h3 className="text-[26px] font-bold leading-[1.15] text-[#070f17] md:text-[32px]">
            {group.title}
          </h3>

          <ul className="flex flex-col gap-4">
            {group.rows.map((row) => {
              const isOpen = openRowId === row.id;
              return (
                <li key={row.id}>
                  <AccordionRow
                    row={row}
                    isOpen={isOpen}
                    onToggle={() => onToggle(row.id)}
                    borderColor={theme.border}
                    bg={isOpen ? theme.cardBgActive : theme.cardBg}
                  />
                </li>
              );
            })}
          </ul>

          <div className="pt-2">
            <Link
              href={group.actionHref}
              className="inline-flex items-center gap-2 rounded-[8px] px-5 py-2.5 text-[15px] font-medium text-[#070f17] transition-colors md:text-[16px]"
              style={{ backgroundColor: theme.button }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.buttonHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.button;
              }}
            >
              {group.actionLabel}
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <VisualColumn openRow={openRow} defaultImage={group.defaultImage} />
      </div>
    </div>
  );
}

type AccordionRowProps = {
  row: AccessoryRow;
  isOpen: boolean;
  onToggle: () => void;
  borderColor: string;
  bg: string;
};

function AccordionRow({
  row,
  isOpen,
  onToggle,
  borderColor,
  bg,
}: AccordionRowProps) {
  return (
    <div
      className="rounded-[8px] border transition-[background-color] duration-200"
      style={{ borderColor, backgroundColor: bg }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`row-body-${row.id}`}
        className="flex w-full items-start gap-3 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
      >
        <span className="flex-1">
          <span className="block text-[18px] font-bold leading-[1.25] text-[#070f17] md:text-[20px]">
            {row.title}
          </span>
          <span className="mt-1 block text-[13px] font-semibold leading-[1.35] text-[#070f17]/80 md:text-[14px]">
            {row.subtitle}
          </span>
        </span>
        <span
          aria-hidden
          className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-[#070f17]"
          >
            <path d="M5 8l5 5 5-5" />
          </svg>
        </span>
      </button>

      <div
        id={`row-body-${row.id}`}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-body-sm space-y-3 px-5 pb-5 text-[#070f17]/85">
            {row.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualColumn({
  openRow,
  defaultImage,
}: {
  openRow: AccessoryRow | null;
  defaultImage: { src: string; alt: string };
}) {
  const image = openRow?.image ?? defaultImage;

  return (
    <div className="relative hidden self-stretch md:block">
      <Image
        key={image.src}
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1024px) 40vw, 380px"
        className="object-contain object-top"
      />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M3 8h10" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

