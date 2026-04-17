"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "header" | "li" | "article" | "span";
  stagger?: number;
};

const item: Variants = {
  hidden: (y: number) => ({ opacity: 0, y }),
  visible: (y: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 120, mass: 0.5 },
  }),
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 32,
  once = true,
  as = "div",
}: RevealProps) {
  const Tag = motion.create(as);

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "ul" | "section" | "header";
};

const container: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  y = 32,
  once = true,
  as = "div",
}: StaggerProps) {
  const Tag = motion.create(as);

  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      custom={stagger}
      variants={container}
      className={className}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className,
  y = 32,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "article" | "span";
}) {
  const Tag = motion.create(as);

  return (
    <Tag custom={y} variants={item} className={className}>
      {children}
    </Tag>
  );
}
