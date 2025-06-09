import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <header id="hero">
        <h1>
          Myth War <span>Archive</span>
        </h1>
        <h2 className="heading">Your go-to resource for everything Myth War Online</h2>
      </header>
      <Section title="What you'll find">
        <ul>
          <li>Information: All types of information about the game, for preservation purposes.</li>
          <li>
            Asset library: From the original music and ambient tracks, to wallpapers, character sprites and other assets
            from the game.
          </li>
          <li>Tools: Tools for reverse-engineering, modding & miscellenuous applications.</li>
          <li>Community Links: Active servers, social groups, and fan-driven projects to connect with.</li>
        </ul>
        <p>
          This site is built to celebrate the creativity and spirit of the Myth War community. Start exploring and
          reconnect with the world of Myth War. You can contact the website creator on{" "}
          <a href="https://github.com/MGSimard">Github</a> or <a href="https://x.com/MGSimard">X</a>.
        </p>
      </Section>
    </>
  );
}
