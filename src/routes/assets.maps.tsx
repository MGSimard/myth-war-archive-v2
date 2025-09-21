import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import maps from "@/_data/assets-maps.json";
import { ArrowBigDownDash } from "lucide-react";

export const Route = createFileRoute("/assets/maps")({
  component: PageAssetsMaps,
});

function PageAssetsMaps() {
  return (
    <>
      <Header heading="Map Assets" />
      <div className="content-wrapper">
        <Section id="maps">
          <table className="blue-table system">
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
                  <td>
                    <a
                      className="btn-download"
                      href={map.link}
                      download={map.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Download ${map.file}`}
                      title={`Download ${map.file}`}>
                      {map.file}
                      <ArrowBigDownDash />
                    </a>
                  </td>
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
      </div>
    </>
  );
}
