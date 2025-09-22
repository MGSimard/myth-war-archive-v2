import { createFileRoute } from "@tanstack/react-router";
import { ArrowBigDownDash } from "lucide-react";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import tools from "@/_data/tools.json";
import { BASE_URL, SITE_TITLE } from "@/_utils/consts";

export const Route = createFileRoute("/tools")({
  component: PageTools,
  head: () => ({
    meta: [
      { title: `Tools - ${SITE_TITLE}` },
      { name: "title", content: `Tools - ${SITE_TITLE}` },
      {
        name: "description",
        content: "Download modding, utility, and reverse-engineering tools for Myth War I and II.",
      },
      { property: "og:title", content: `Tools - ${SITE_TITLE}` },
      {
        property: "og:description",
        content: "Download modding, utility, and reverse-engineering tools for Myth War I and II.",
      },
      { property: "og:url", content: `${BASE_URL}/tools` },
      { name: "twitter:title", content: `Tools - ${SITE_TITLE}` },
      {
        name: "twitter:description",
        content: "Download modding, utility, and reverse-engineering tools for Myth War I and II.",
      },
      { name: "twitter:url", content: `${BASE_URL}/tools` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/tools` }],
  }),
});

function PageTools() {
  return (
    <>
      <Header heading="Tools" />
      <div className="content-wrapper">
        <Section title="Modding">
          <Table data={tools.modding} />
        </Section>
        <Section title="Reverse-Engineering">
          <Table data={tools["reverse-engineering"]} />
        </Section>
      </div>
    </>
  );
}

interface TableProps {
  file: string;
  link: string;
  isFile: boolean | string;
  authors: string[];
  desc: string;
}

function Table({ data }: { data: TableProps[] }) {
  return (
    <table className="blue-table separator system">
      <thead>
        <tr>
          <th>Tool</th>
          <th>Author</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.file}>
            <td>
              <a
                className="btn-download"
                href={item.link}
                {...(item.isFile && { download: item.isFile })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.isFile ? `Download ${item.file}` : `Go to ${item.file} website`}
                title={item.isFile ? `Download ${item.file}` : `Go to ${item.file} website`}>
                {item.file}
                <ArrowBigDownDash />
              </a>
            </td>
            <td>{item.authors.join(", ")}</td>
            <td>{item.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
