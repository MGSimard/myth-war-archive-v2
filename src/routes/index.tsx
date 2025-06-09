import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <header id="hero">
      <h1>Myth War</h1>
      <span>Archive</span>
      <h2 className="heading">Your go-to resource for everything Myth War</h2>
    </header>
  );
}
