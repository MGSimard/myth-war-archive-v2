import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/assets/images")({
  component: PageAssetsImages,
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
