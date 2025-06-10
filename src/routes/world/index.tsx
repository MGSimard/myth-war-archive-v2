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
        <Figure
          caption="Rarus Continent, Myth War Online"
          figureSrc="/assets/game/worldmap_mw1.jpg"
          fullSrc="/assets/game/worldmap_mw1.jpg"
          papyrus={false}>
          Modal Content
        </Figure>
        <Figure
          caption="Rarus Continent, Myth War II"
          figureSrc="/assets/game/worldmap_mw2.jpg"
          fullSrc="/assets/game/worldmap_mw2.jpg"
          papyrus={true}>
          Modal Content
        </Figure>
      </Section>
      <Section title="Regions">Content</Section>
    </>
  );
}
