import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import { AudioPlayer } from "@/_components/AudioPlayer";

export const Route = createFileRoute("/assets/audio")({
  component: PageAssetsAudio,
});

function PageAssetsAudio() {
  return (
    <>
      <Header heading="Audio Assets" />
      <div className="content-wrapper">
        <Section id="audio">
          <AudioPlayer />
        </Section>
      </div>
    </>
  );
}
