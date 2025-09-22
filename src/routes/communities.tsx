import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import communities from "@/_data/communities.json";
import { BASE_URL, SITE_TITLE } from "@/_utils/consts";

export const Route = createFileRoute("/communities")({
  component: PageCommunities,
  head: () => ({
    meta: [
      { title: `Communities - ${SITE_TITLE}` },
      { name: "title", content: `Communities - ${SITE_TITLE}` },
      {
        name: "description",
        content:
          "Connect with Myth War communities. Find private servers, Discord groups, forums, and official archived websites.",
      },
      { property: "og:title", content: `Communities - ${SITE_TITLE}` },
      {
        property: "og:description",
        content:
          "Connect with Myth War communities. Find private servers, Discord groups, forums, and official archived websites.",
      },
      { property: "og:url", content: `${BASE_URL}/communities` },
      { name: "twitter:title", content: `Communities - ${SITE_TITLE}` },
      {
        name: "twitter:description",
        content:
          "Connect with Myth War communities. Find private servers, Discord groups, forums, and official archived websites.",
      },
      { name: "twitter:url", content: `${BASE_URL}/communities` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/communities` }],
  }),
});

function PageCommunities() {
  return (
    <>
      <Header heading="Communities" />
      <div className="content-wrapper">
        <Section heading="Servers">
          <Table data={communities.servers} />
        </Section>
        <Section heading="Discord">
          <Table data={communities.discord} />
        </Section>
        <Section heading="Subreddits">
          <Table data={communities.subreddits} />
        </Section>
        <Section heading="Forums & Information">
          <Table data={communities.forums} />
        </Section>
        <Section heading="Official (Defunct)">
          <Table data={communities.official} />
        </Section>
      </div>
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
    <table className="blue-table separator system">
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
