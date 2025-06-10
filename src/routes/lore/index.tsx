import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/lore/")({
  component: PageWorld,
});

function PageWorld() {
  return (
    <>
      <Header title="Lore" subtitle="A brief history of Myth War Online" />
      <Section title="Storylines">Storyline stuff here</Section>
      <Section title="Races">Races stuff here</Section>
    </>
  );
}
