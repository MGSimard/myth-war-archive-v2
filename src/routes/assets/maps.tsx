import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import maps from "./maps.json";

export const Route = createFileRoute("/assets/maps")({
  component: PageAssetsMaps,
});

function PageAssetsMaps() {
  return (
    <>
      <Header title="Map Assets" subtitle="An Archive of Map Assets from Myth War Online & Myth War II" />
      <Section title="Maps" id="maps">
        <table>
          <thead>
            <tr>
              <th>File</th>
              <th>Zone</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            {maps.map((map) => (
              <tr key={map.file}>
                <td>{map.file}</td>
                <td>
                  <ul>
                    {map.zones.map((zone) => (
                      <li key={zone}>{zone}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <div className="map-preview">
                    <span className="heading">
                      {map.file}
                      <ul>
                        {map.zones.map((zone) => (
                          <li key={zone}>{zone}</li>
                        ))}
                      </ul>
                    </span>
                    <img src={map.preview} alt={`Preview of ${map.file}`} loading="lazy" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </>
  );
}
