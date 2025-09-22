import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import { BASE_URL, SITE_TITLE } from "@/_utils/consts";

export const Route = createFileRoute("/assets/images")({
  component: PageAssetsImages,
  head: () => ({
    meta: [
      { title: `Image Assets - ${SITE_TITLE}` },
      { name: "title", content: `Image Assets - ${SITE_TITLE}` },
      {
        name: "description",
        content:
          "Browse and download image assets from Myth War I and II. Character sprites, UI elements, and game artwork.",
      },
      { property: "og:title", content: `Image Assets - ${SITE_TITLE}` },
      {
        property: "og:description",
        content:
          "Browse and download image assets from Myth War I and II. Character sprites, UI elements, and game artwork.",
      },
      { property: "og:url", content: `${BASE_URL}/assets/images` },
      { name: "twitter:title", content: `Image Assets - ${SITE_TITLE}` },
      {
        name: "twitter:description",
        content:
          "Browse and download image assets from Myth War I and II. Character sprites, UI elements, and game artwork.",
      },
      { name: "twitter:url", content: `${BASE_URL}/assets/images` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/assets/images` }],
  }),
});

function PageAssetsImages() {
  return (
    <>
      <Header heading="Image Assets" />
      <div className="content-wrapper">
        <Section id="images">
          <p>Images</p>
        </Section>
      </div>
    </>
  );
}
