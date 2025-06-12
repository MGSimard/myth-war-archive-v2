import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/assets/images")({
  component: PageAssetsImages,
});

function PageAssetsImages() {
  return (
    <>
      <Header title="Image Assets" />
      <Section title="Images" id="images">
        <p>Images</p>
      </Section>
    </>
  );
}
