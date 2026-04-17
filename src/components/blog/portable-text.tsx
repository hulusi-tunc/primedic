import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-body-lg text-black/85">{children}</p>
    ),
    h2: ({ children }) => <h2 className="mt-12 text-black md:mt-16">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 text-black md:mt-10">{children}</h3>,
    h4: ({ children }) => <h4 className="mt-6 text-black">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="text-lead mt-8 border-l-4 border-[#b21c1c] pl-6 italic text-black/85">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="text-body-lg mt-4 list-disc space-y-2 pl-6 text-black/85">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="text-body-lg mt-4 list-decimal space-y-2 pl-6 text-black/85">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-black">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    link: ({ value, children }) => {
      const blank = value?.blank;
      return (
        <a
          href={value?.href}
          target={blank ? "_blank" : undefined}
          rel={blank ? "noopener noreferrer" : undefined}
          className="text-[#b21c1c] underline decoration-[#b21c1c]/40 underline-offset-4 transition-colors hover:decoration-[#b21c1c]"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlForImage(value).width(1600).url();
      return (
        <figure className="my-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[16px] bg-black/5">
            <Image
              src={url}
              alt={value.alt ?? "Blog görseli"}
              fill
              sizes="(min-width: 1024px) 900px, 92vw"
              className="object-cover"
            />
          </div>
          {value.caption ? (
            <figcaption className="text-body-sm mt-3 text-center text-black/60">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

export function PostBody({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className="space-y-5">
      <PortableText value={value} components={components} />
    </div>
  );
}
