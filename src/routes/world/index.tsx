import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import { Figure } from "@/_components/Figure";

export const Route = createFileRoute("/world/")({
  component: PageWorld,
});

function PageWorld() {
  return (
    <>
      <Header title="World" subtitle="Explore the Lands and Regions of Myth War" />
      <Section title="Rarus Continent" id="rarus-continent">
        <figure>
          <img src="/assets/game/worldmap_mw1.jpg" alt="Map of Rarus Continent - Myth War Online" />
          <figcaption className="label">Rarus Continent, Myth War Online</figcaption>
        </figure>
        <figure>
          <img src="/assets/game/worldmap_mw2.jpg" alt="Map of Rarus Continent - Myth War II" />
          <figcaption className="label">Rarus Continent, Myth War II</figcaption>
        </figure>
      </Section>
      <Section title="Regions">
        <Figure>a</Figure>
      </Section>
    </>
  );
}
