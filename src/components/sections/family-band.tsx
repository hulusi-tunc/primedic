import Image from "next/image";

export function FamilyBand() {
  return (
    <section aria-label="Primedic ürün ailesi" className="bg-[#3c0a0a]">
      <div className="relative aspect-[1920/857] w-full">
        <Image
          src="/images/primedic-family.png"
          alt="Primedic defibrilatör ürün ailesi"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
