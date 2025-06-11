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
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDMtw4eGnb3uSsWXI26wpKemYEJknqdoAcyfGx"
            fullSrc=""
          />
          <Figure
            caption="Sky Passage, Myth War II"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDWdO1408Bfw9LNZ4rUvj5JH8gmuxFYyDa7VcE"
            fullSrc=""
          />
        </div>
        <hr />
        <h3>Woodlingor</h3>
        <div className="regions-grid">
          <Figure
            caption="Woodlingor, Myth War Online"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDxrDGMLe6yfmsFp3PlRXvq14WQMGSKYuOVeN2"
            fullSrc=""
          />
          <Figure
            caption="Woodlingor (Winter), Myth War Online"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2ID4G2AfRKcrwVZDsukISP3qghLp8bQOazGK4Fi"
            fullSrc=""
          />
          <Figure
            caption="Woodlingor, Myth War II"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDZGmQtlOTc3PzmeJdgr8CjMvVOwFXQISN90Gk"
            fullSrc=""
          />
        </div>
        <hr />
        <h3>Blython</h3>
        <div className="regions-grid">
          <Figure
            caption="Blython, Myth War Online"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDjpfcDIDVouBCRq8DvbQmUzW6wKcrFEkaVS7n"
            fullSrc=""
          />
          <Figure
            caption="Blython (Winter), Myth War Online"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDWmcVJK8Bfw9LNZ4rUvj5JH8gmuxFYyDa7VcE"
            fullSrc=""
          />
          <Figure
            caption="Blython, Myth War II"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDODdmg9Wpm7hLnow43kVBXSvNyxGKMAEUZale"
            fullSrc=""
          />
        </div>
        <hr />
        <h3>Desert City</h3>
        <div className="regions-grid">
          <Figure
            caption="Desert City, Myth War Online"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDds1q1cGt4PBA5R1Gny2ZwlDKFa7qQpeH6Lor"
            fullSrc=""
          />
          <Figure
            caption="Desert City, Myth War II"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDY7RnQST4ySH0FN6v9uabPiRkq1XzJLBVfcso"
            fullSrc=""
          />
        </div>
        <hr />
        <h3>Demon Square</h3>
        <div className="regions-grid">
          <Figure
            caption="Demon Square, Myth War Online"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2ID34Bu5N6bXvnFgdPQZHUTqKM1iOW0uIVxAlSa"
            fullSrc=""
          />
          <Figure
            caption="Demon Square, Myth War II"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDQnyk9B0p08e7tMHlWkyhBqxZaFJbDPU3vf6G"
            fullSrc=""
          />
        </div>
      </Section>
    </>
  );
}
