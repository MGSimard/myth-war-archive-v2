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
        />
        <Figure
          caption="Rarus Continent, Myth War II"
          figureSrc="/assets/game/worldmap_mw2.jpg"
          fullSrc="/assets/game/worldmap_mw2.jpg"
        />
      </Section>
      <Section title="Regions" id="regions">
        <h3>Sky Passage</h3>
        <div className="regions-grid">
          <Figure
            caption="Sky Passage, Myth War Online"
            figureSrc="/assets/game/worldmap_mw1.jpg"
            fullSrc="/assets/game/worldmap_mw1.jpg"
          />
        </div>
        <hr />
        <h3>Woodlingor</h3>
        <div className="regions-grid">
          <Figure
            caption="Woodlingor, Myth War Online"
            figureSrc="/assets/game/worldmap_mw1.jpg"
            fullSrc="/assets/game/worldmap_mw1.jpg"
          />
        </div>
        <hr />
        <h3>Blython</h3>
        <div className="regions-grid">
          <Figure
            caption="Blython, Myth War Online"
            figureSrc="/assets/game/worldmap_mw1.jpg"
            fullSrc="/assets/game/worldmap_mw1.jpg"
          />
        </div>
        <hr />
        <h3>Desert City</h3>
        <div className="regions-grid">
          <Figure
            caption="Desert City, Myth War Online"
            figureSrc="/assets/game/worldmap_mw1.jpg"
            fullSrc="/assets/game/worldmap_mw1.jpg"
          />
        </div>
        <hr />
        <h3>Demon Square</h3>
      </Section>
    </>
  );
}
