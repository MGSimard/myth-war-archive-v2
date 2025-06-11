import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/assets/maps")({
  component: PageAssetsMaps,
});

function PageAssetsMaps() {
  return (
    <>
      <Header title="Map Assets" subtitle="An Archive of Map Assets from Myth War Online & Myth War II" />
      <Section title="Maps">
        <table>
          <thead>
            <tr>
              <th>File</th>
              <th>Zone</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Map001</td>
              <td>Sky Passage (MW1)</td>
              <td>
                <img alt="Map1" />
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
    </>
  );
}
