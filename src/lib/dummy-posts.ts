import type { Locale, Post } from "@/sanity/lib/types";

type DummyPost = Post & { coverUrl: string; language: Locale };

export const dummyPosts: DummyPost[] = [];
