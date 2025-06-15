import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/guides/rebirth")({
  component: PageGuidesRebirth,
});

function PageGuidesRebirth() {
  return (
    <>
      <Header title="Rebirth" subtitle="Your Guide to Rebirth" />
      <Section title="Introduction">
        <div className="papyrus">
          <div className="papyrus-section">
            <p></p>
          </div>
        </div>
      </Section>
    </>
  );
}
