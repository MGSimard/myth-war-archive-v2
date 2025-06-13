import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/guides/leveling")({
  component: PageLore,
});

function PageLore() {
  return (
    <>
      <Header title="Leveling" subtitle="Chronicles of Creation and Cataclysm" />
      <Section title="Level 1-6">
        <div className="papyrus">
          <div className="papyrus-section">Jello</div>
        </div>
      </Section>
      <Section title="Level 6-21 (New Horizon & Best Coagent">
        <div className="papyrus">
          <div className="papyrus-section">Jello</div>
        </div>
      </Section>
    </>
  );
}
