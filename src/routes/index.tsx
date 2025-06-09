import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <header id="hero">
      <h1>
        <span data-text="MYTH WAR">MYTH WAR</span> Archive
      </h1>
      <h2 className="heading">Preserving the Myth</h2>
    </header>
  );
}
