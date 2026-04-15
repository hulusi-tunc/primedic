import { Container } from "@/components/ui/container";
import { hakkimizda } from "@/lib/content.hakkimizda";

export function HakkimizdaSolutions() {
  const { title, description, cards } = hakkimizda.solutions;

  return (
    <section className="bg-gradient-to-b from-[#080e18] to-[#555c6a] py-[96px] md:py-[140px]">
      <Container width="wide">
        <header className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center text-white md:gap-8">
          <h2 className="font-medium tracking-[0.2px]">
            {title}
          </h2>
          <p className="text-lead">
            {description}
          </p>
        </header>

        <ul className="mx-auto mt-16 grid max-w-[1400px] gap-12 md:mt-24 md:grid-cols-3 md:gap-10 lg:gap-16">
          {cards.map((card) => (
            <li
              key={card.number}
              className="flex flex-col items-center text-center text-white"
            >
              <NumberBadge value={card.number} />
              <h3 className="mt-8 font-bold">
                {card.title}
              </h3>
              <p className="text-body-lg mt-6 max-w-[400px] text-white/90">
                {card.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function NumberBadge({ value }: { value: string }) {
  return (
    <span
      aria-hidden
      className="relative flex h-[66px] w-[60px] items-center justify-center rounded-[7px] bg-white"
    >
      <span className="text-[48px] font-bold leading-none text-[#b21c1c]">
        {value}
      </span>
    </span>
  );
}
