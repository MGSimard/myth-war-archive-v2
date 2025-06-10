import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <header id="hero">
      <h1>
        <span data-text="MYTH WAR">MYTH WAR</span> <span>Archive</span>
      </h1>
      <h2 className="heading">Preserving the world, art, and history of Myth War.</h2>
    </header>
  );
}
