import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import { Figure } from "@/_components/Figure";

export const Route = createFileRoute("/world")({
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
            fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDcWQI5SQZyuUsaZkXdIKeMob6WL0VCvE7nQzp"
          />
          <Figure
            caption="Sky Passage, Myth War II"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDWdO1408Bfw9LNZ4rUvj5JH8gmuxFYyDa7VcE"
            fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDbZrmPsQNybQAYjH0EtZvPW7grei6sqp4xmDf"
          />
        </div>
        <hr />
        <h3>Woodlingor</h3>
        <div className="regions-grid">
          <Figure
            caption="Woodlingor, Myth War Online"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDxrDGMLe6yfmsFp3PlRXvq14WQMGSKYuOVeN2"
            fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDUBW3phPKpQmeJYwDbyxd8XTkq0FrSWORC2L7"
          />
          <Figure
            caption="Woodlingor (Winter), Myth War Online"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2ID4G2AfRKcrwVZDsukISP3qghLp8bQOazGK4Fi"
            fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDUcMs0YePKpQmeJYwDbyxd8XTkq0FrSWORC2L"
          />
          <Figure
            caption="Woodlingor, Myth War II"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDZGmQtlOTc3PzmeJdgr8CjMvVOwFXQISN90Gk"
            fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDPgbMmPDARbvwOekm5MKW6GYS8T7oXV0cd3ry"
          />
        </div>
        <hr />
        <h3>Blython</h3>
        <div className="regions-grid">
          <Figure
            caption="Blython, Myth War Online"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDjpfcDIDVouBCRq8DvbQmUzW6wKcrFEkaVS7n"
            fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDPCSd6DARbvwOekm5MKW6GYS8T7oXV0cd3ryE"
          />
          <Figure
            caption="Blython (Winter), Myth War Online"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDWmcVJK8Bfw9LNZ4rUvj5JH8gmuxFYyDa7VcE"
            fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDdpi1ihGt4PBA5R1Gny2ZwlDKFa7qQpeH6Lor"
          />
          <Figure
            caption="Blython, Myth War II"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDODdmg9Wpm7hLnow43kVBXSvNyxGKMAEUZale"
            fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDM0s0AEnb3uSsWXI26wpKemYEJknqdoAcyfGx"
          />
        </div>
        <hr />
        <h3>Desert City</h3>
        <div className="regions-grid">
          <Figure
            caption="Desert City, Myth War Online"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDds1q1cGt4PBA5R1Gny2ZwlDKFa7qQpeH6Lor"
            fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDoySmkd2aYkJvQtxq8Sdlm6XsEWMzLDPc10rZ"
          />
          <Figure
            caption="Desert City, Myth War II"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDY7RnQST4ySH0FN6v9uabPiRkq1XzJLBVfcso"
            fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDn0H37M1bVFSbrL6P7Akzsf35mdtKvUDG1iwT"
          />
        </div>
        <hr />
        <h3>Demon Square</h3>
        <div className="regions-grid">
          <Figure
            caption="Demon Square, Myth War Online"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2ID34Bu5N6bXvnFgdPQZHUTqKM1iOW0uIVxAlSa"
            fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDL5pvhb7Z1Hubd7nVafzFwxCsMQc0JrklqY4W"
          />
          <Figure
            caption="Demon Square, Myth War II"
            figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDQnyk9B0p08e7tMHlWkyhBqxZaFJbDPU3vf6G"
            fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDY5s7oCT4ySH0FN6v9uabPiRkq1XzJLBVfcso"
          />
        </div>
      </Section>
    </>
  );
}
