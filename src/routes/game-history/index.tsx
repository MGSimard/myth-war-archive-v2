import { Section } from "@/_components/Section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/game-history/")({
  component: PageGameHistory,
});

function PageGameHistory() {
  return (
    <>
      <header>
        <Section title="Game History" as="h1">
          <p>A brief history of Myth War Online</p>
        </Section>
      </header>
      <Section title="Introduction">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>The Development and Evolution of Myth War Online</h3>
            <p>
              Myth War Online, developed by Unigium and published by Sing-Gium International, then IGG in the west—was a
              free-to-play 2.5D MMORPG that brought players into a vibrant, mythological world filled with unique
              creatures and classic RPG gameplay elements. Released in 2006 in China, the game became known for its
              turn-based Active Time Battle system, inspired by iconic RPGs like Final Fantasy. Players could explore
              the game's rich fantasy setting through four character races; Humans, Centaurs, Mages, and Borgs. The game
              also featured a robust pet system allowing pets to fight alongside their masters.
            </p>
          </div>
          <div className="papyrus-section">
            <h3>Unique Game Design</h3>
            <p>The game distinguished itself with features such as:</p>
            <ul className="ul">
              <li>The Rumor System, where players could interact with NPCs to spread tales about their characters.</li>
              <li>A Master and Apprentice System, fostering mentorship between new and experienced players.</li>
              <li>Engaging quests woven with mythological lore that could influence the game world itself.</li>
            </ul>
            <p>
              Players also enjoyed over 200 skill sets, more than 100 trainable pets, and expansive, beautifully
              illustrated isometric 2D maps. Regular updates and content expansions kept the community engaged, making
              it a standout in its genre.
            </p>
          </div>
          <div className="papyrus-section">
            <h3>A Story of Resilience in Development</h3>
            <p>
              The development of Myth War Online has a compelling backstory. Unigium emerged from the ruins of Xiamen
              Xinruishi Multimedia Co., Ltd.(厦门新瑞狮多媒体有限公司) or Xinruishi(新瑞狮) for short. It was a
              once-prominent Chinese game studio founded by Zhuang Jinlong(庄锦隆), whose leadership earned him
              accolades as one of the "Top Ten Chinese IT Leaders of the Year" in 2004. Following the malicious
              bankruptcy of Xinruishi in 2003, Zhuang and many of his team members joined Unigium, bringing with them
              years of expertise.
            </p>
            <p>
              The collaborative effort between Unigium and its Singapore counterpart, Sing-Gium International, under the
              umbrella of Gium International, allowed the team to launch Myth War Online successfully. The game's
              distinct musical score, produced by Li Dongjun(李东军) and performed by the Singapore National Symphony
              Orchestra, further highlighted their dedication to quality. The development of Myth War Online was
              supported with some outsourcing with developers and artists from Japan and the United States.
            </p>
          </div>
          <div className="papyrus-section">
            <h3>The Transition to Myth War II</h3>
            <p>
              In 2009, Myth War Online was closed to pave the way for its sequel, Myth War II. This new iteration
              refined and streamlined gameplay with features like updated character designs, enhanced graphics, new boss
              mechanics, and systems like Second Rebirth, Relationships & Marriage, Power Worship, Holy Sets, Mine War
              Events and more. Despite these improvements, Myth War II struggled to retain its predecessor's magic and
              ultimately shut down in 2015.
            </p>
          </div>
          <div className="papyrus-section">
            <h3>Myth War's Legacy</h3>
            <p>
              Though the official servers for both games have long been offline, the Myth War community persists. Today,
              the only fully operational private server, TDT, runs Myth War II, keeping the spirit of the game alive.
              The only other known server, the once-promising Chinese sj.51wgg.com, has remained dormant since their
              planned reopenings in 2019 and 2021 failed to materialize.
            </p>
          </div>
          <div className="papyrus-section">
            <h3>Preserving the Myth</h3>
            <p>
              Projects like Myth War Archive ensure that the legacy of Myth War Online and Myth War II endures. By
              providing access to game assets, maps, music, and fostering a hub for remaining communities, fans can
              continue to celebrate the creativity and passion that went into this ambitious MMORPG.
            </p>
          </div>
        </div>
      </Section>
      <Section title="Timeline"></Section>
    </>
  );
}
