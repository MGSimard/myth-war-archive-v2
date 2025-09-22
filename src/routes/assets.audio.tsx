import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import { AudioPlayer } from "@/_components/AudioPlayer";
import { BASE_URL, SITE_TITLE } from "@/_utils/consts";

export const Route = createFileRoute("/assets/audio")({
  component: PageAssetsAudio,
  head: () => ({
    meta: [
      { title: `Audio Assets - ${SITE_TITLE}` },
      { name: "title", content: `Audio Assets - ${SITE_TITLE}` },
      {
        name: "description",
        content:
          "Listen and download audio assets from Myth War I and II. Music tracks, ambient sounds, and sound effects.",
      },
      { property: "og:title", content: `Audio Assets - ${SITE_TITLE}` },
      {
        property: "og:description",
        content:
          "Listen and download audio assets from Myth War I and II. Music tracks, ambient sounds, and sound effects.",
      },
      { property: "og:url", content: `${BASE_URL}/assets/audio` },
      { name: "twitter:title", content: `Audio Assets - ${SITE_TITLE}` },
      {
        name: "twitter:description",
        content:
          "Listen and download audio assets from Myth War I and II. Music tracks, ambient sounds, and sound effects.",
      },
      { name: "twitter:url", content: `${BASE_URL}/assets/audio` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/assets/audio` }],
  }),
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
