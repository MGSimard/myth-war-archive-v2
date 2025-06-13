import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/guides/leveling")({
  component: PageLore,
});

function PageLore() {
  return (
    <>
      <Header title="Leveling" subtitle="Your Guide to Power and Progression" />
      <Section title="Level 1-6">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Tutorial</h3>
          </div>
        </div>
      </Section>
      <Section title="Level 6-21">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>New Horizon & Best Coagent</h3>
          </div>
        </div>
      </Section>
      <Section title="Level 6-21-30">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Stonesmith</h3>
          </div>
        </div>
      </Section>
      <Section title="Level 30-50">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Howling Beast</h3>
          </div>
        </div>
      </Section>
      <Section title="Level 30+">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Drow & Wednesday Event</h3>
          </div>
        </div>
      </Section>
      <Section title="Level 50-60">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Woodlingor Defense</h3>
          </div>
        </div>
      </Section>
      <Section title="Level 60-70">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Blython Defense</h3>
          </div>
        </div>
      </Section>
      <Section title="Level 60-80">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Bloodreaper</h3>
          </div>
        </div>
      </Section>
      <Section title="Level 70-90">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Seal</h3>
          </div>
        </div>
      </Section>
      <Section title="Level 90+">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Papa Drow & Worn Messenger</h3>
          </div>
        </div>
      </Section>
    </>
  );
}
