import Image from "next/image";

export function FamilyBand() {
  return (
    <section aria-label="Primedic ürün ailesi" className="bg-[#3c0a0a]">
      <div className="relative aspect-[1920/857] w-full">
        <Image
          src="/images/primedic-family.webp"
          alt="Primedic defibrilatör ürün ailesi"
          width={1920}
          height={857}
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
