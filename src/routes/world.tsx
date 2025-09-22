import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import { Figure } from "@/_components/Figure";
import { BASE_URL, SITE_TITLE } from "@/_utils/consts";

export const Route = createFileRoute("/world")({
  component: PageWorld,
  head: () => ({
    meta: [
      { title: `World Map - ${SITE_TITLE}` },
      { name: "title", content: `World Map - ${SITE_TITLE}` },
      { name: "description", content: "" },
      { property: "og:title", content: `World Map - ${SITE_TITLE}` },
      { property: "og:description", content: "" },
      { property: "og:url", content: `${BASE_URL}/world` },
      { property: "twitter:title", content: `World Map - ${SITE_TITLE}` },
      { property: "twitter:description", content: "" },
      { property: "twitter:url", content: `${BASE_URL}/world` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/world` }],
  }),
});

function PageWorld() {
  throw new Error("test error @ /world");

  return (
    <>
      <Header heading="World" />
      <div className="content-wrapper">
        <Section heading="Rarus Continent" id="rarus-continent">
          <Figure caption="MW I" figureSrc="/assets/game/worldmap_mw1.jpg" fullSrc="/assets/game/worldmap_mw1.jpg" />
          <Figure caption="MW II" figureSrc="/assets/game/worldmap_mw2.jpg" fullSrc="/assets/game/worldmap_mw2.jpg" />
        </Section>
        <Section heading="Regions" id="regions" className="panel">
          <h3 className="subheading">Sky Passage</h3>
          <div className="regions-grid">
            <Figure
              caption="MW I"
              figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDMtw4eGnb3uSsWXI26wpKemYEJknqdoAcyfGx"
              fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDcWQI5SQZyuUsaZkXdIKeMob6WL0VCvE7nQzp"
            />
            <Figure
              caption="MW II"
              figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDWdO1408Bfw9LNZ4rUvj5JH8gmuxFYyDa7VcE"
              fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDbZrmPsQNybQAYjH0EtZvPW7grei6sqp4xmDf"
            />
          </div>
          <hr />
          <h3 className="subheading">Woodlingor</h3>
          <div className="regions-grid">
            <Figure
              caption="MW I"
              figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDxrDGMLe6yfmsFp3PlRXvq14WQMGSKYuOVeN2"
              fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDUBW3phPKpQmeJYwDbyxd8XTkq0FrSWORC2L7"
            />
            <Figure
              caption="MW I"
              figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2ID4G2AfRKcrwVZDsukISP3qghLp8bQOazGK4Fi"
              fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDUcMs0YePKpQmeJYwDbyxd8XTkq0FrSWORC2L"
            />
            <Figure
              caption="MW II"
              figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDZGmQtlOTc3PzmeJdgr8CjMvVOwFXQISN90Gk"
              fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDPgbMmPDARbvwOekm5MKW6GYS8T7oXV0cd3ry"
            />
          </div>
          <hr />
          <h3 className="subheading">Blython</h3>
          <div className="regions-grid">
            <Figure
              caption="MW I"
              figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDjpfcDIDVouBCRq8DvbQmUzW6wKcrFEkaVS7n"
              fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDPCSd6DARbvwOekm5MKW6GYS8T7oXV0cd3ryE"
            />
            <Figure
              caption="MW I"
              figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDWmcVJK8Bfw9LNZ4rUvj5JH8gmuxFYyDa7VcE"
              fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDdpi1ihGt4PBA5R1Gny2ZwlDKFa7qQpeH6Lor"
            />
            <Figure
              caption="MW II"
              figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDODdmg9Wpm7hLnow43kVBXSvNyxGKMAEUZale"
              fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDM0s0AEnb3uSsWXI26wpKemYEJknqdoAcyfGx"
            />
          </div>
          <hr />
          <h3 className="subheading">Desert City</h3>
          <div className="regions-grid">
            <Figure
              caption="MW I"
              figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDds1q1cGt4PBA5R1Gny2ZwlDKFa7qQpeH6Lor"
              fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDoySmkd2aYkJvQtxq8Sdlm6XsEWMzLDPc10rZ"
            />
            <Figure
              caption="MW II"
              figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDY7RnQST4ySH0FN6v9uabPiRkq1XzJLBVfcso"
              fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDn0H37M1bVFSbrL6P7Akzsf35mdtKvUDG1iwT"
            />
          </div>
          <hr />
          <h3 className="subheading">Demon Square</h3>
          <div className="regions-grid">
            <Figure
              caption="MW I"
              figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2ID34Bu5N6bXvnFgdPQZHUTqKM1iOW0uIVxAlSa"
              fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDL5pvhb7Z1Hubd7nVafzFwxCsMQc0JrklqY4W"
            />
            <Figure
              caption="MW II"
              figureSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDQnyk9B0p08e7tMHlWkyhBqxZaFJbDPU3vf6G"
              fullSrc="https://gnz8w62jmm.ufs.sh/f/6TomNTIXQ2IDY5s7oCT4ySH0FN6v9uabPiRkq1XzJLBVfcso"
            />
          </div>
        </Section>
      </div>
    </>
  );
}
