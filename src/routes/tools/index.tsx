import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import tools from "@/_data/tools.json";
import { ArrowBigDownDash } from "lucide-react";

export const Route = createFileRoute("/tools/")({
  component: PageTools,
});

function PageTools() {
  return (
    <>
      <Header title="Tools" subtitle="" />
      <Section title="Modding">
        <table className="blue-table">
          <thead>
            <tr>
              <th>Tool</th>
              <th>Author</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tools.modding.map((tool) => (
              <tr key={tool.file}>
                <td>
                  <a
                    className="btn-download"
                    href={tool.link}
                    {...(tool.isFile && { download: tool.isFile })}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tool.isFile ? `Download ${tool.file}` : `Go to ${tool.file} website`}
                    title={tool.isFile ? `Download ${tool.file}` : `Go to ${tool.file} website`}>
                    {tool.file}
                    <ArrowBigDownDash />
                  </a>
                </td>
                <td>{tool.authors.join(", ")}</td>
                <td>{tool.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section title="Reverse-Engineering">
        <table className="blue-table">
          <thead>
            <tr>
              <th>Tool</th>
              <th>Author</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tools["reverse-engineering"].map((tool) => (
              <tr key={tool.file}>
                <td>
                  <a
                    className="btn-download"
                    href={tool.link}
                    {...(tool.isFile && { download: tool.isFile })}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tool.isFile ? `Download ${tool.file}` : `Go to ${tool.file} website`}
                    title={tool.isFile ? `Download ${tool.file}` : `Go to ${tool.file} website`}>
                    {tool.file}
                    <ArrowBigDownDash />
                  </a>
                </td>
                <td>{tool.authors.join(", ")}</td>
                <td>{tool.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </>
  );
}
