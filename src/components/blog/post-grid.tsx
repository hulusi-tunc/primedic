import { Container } from "@/components/ui/container";
import { PostCard } from "./post-card";
import type { PostListItem } from "@/sanity/lib/types";

export function PostGrid({
  heading,
  posts,
}: {
  heading: string;
  posts: readonly PostListItem[];
}) {
  return (
    <section className="bg-white py-[72px] text-black md:py-[91px]">
      <Container width="wide">
        <div className="flex flex-col gap-12 md:gap-[48px]">
          <h2 className="text-black">
            {heading}
          </h2>

          {posts.length === 0 ? <EmptyState /> : <Grid posts={posts} />}
        </div>
      </Container>
    </section>
  );
}

function Grid({ posts }: { posts: readonly PostListItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-[120px]">
      {posts.map((post) => (
        <li key={post._id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

function EmptyState() {
  return (
    <div className="mx-auto flex max-w-[560px] flex-col items-center gap-4 rounded-[24px] border-2 border-dashed border-black/15 px-8 py-16 text-center">
      <span className="inline-flex items-center justify-center rounded-full border border-[#b21c1c] px-4 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#b21c1c]">
        Çok yakında
      </span>
      <h3 className="text-black">
        İlk yazılarımız hazırlanıyor
      </h3>
      <p className="text-body text-black/70">
        Primedic Studio&apos;dan yayınlanan içerikler burada görünecek. İçerik
        eklemek için{" "}
        <a
          href="/studio"
          className="font-semibold text-[#b21c1c] underline-offset-4 hover:underline"
        >
          /studio
        </a>{" "}
        sayfasını ziyaret edin.
      </p>
    </div>
  );
}
