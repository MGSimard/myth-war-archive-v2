import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import communities from "@/_data/communities.json";

export const Route = createFileRoute("/communities/")({
  component: PageCommunities,
});

function PageCommunities() {
  return (
    <>
      <Header title="Communities" subtitle="" />
      <Section title="Servers">
        <Table data={communities.servers} />
      </Section>
      <Section title="Discord">
        <Table data={communities.discord} />
      </Section>
      <Section title="Subreddits">
        <Table data={communities.subreddits} />
      </Section>
      <Section title="Forums & Information">
        <Table data={communities.forums} />
      </Section>
      <Section title="Official (Defunct)">
        <Table data={communities.official} />
      </Section>
    </>
  );
}

interface TableProps {
  link: string;
  name: string;
  description: string;
}

function Table({ data }: { data: TableProps[] }) {
  return (
    <table className="blue-table separator">
      <thead>
        <tr>
          <th>Link</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.link}>
            <td>
              <a
                className="btn-download"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${item.name} website`}
                title={`View ${item.name} website`}>
                {item.name}
              </a>
            </td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
