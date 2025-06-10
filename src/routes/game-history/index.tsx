import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import { Timeline } from "@/_components/Timeline";

export const Route = createFileRoute("/game-history/")({
  component: PageGameHistory,
});

function PageGameHistory() {
  return (
    <>
      <Header title="Game History" subtitle="A brief history of Myth War Online" />
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
          <hr />
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
          <hr />
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
          <hr />
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
          <hr />
          <div className="papyrus-section">
            <h3>Myth War's Legacy</h3>
            <p>
              Though the official servers for both games have long been offline, the Myth War community persists. Today,
              the only fully operational private server, TDT, runs Myth War II, keeping the spirit of the game alive.
              The only other known server, the once-promising Chinese sj.51wgg.com, has remained dormant since their
              planned reopenings in 2019 and 2021 failed to materialize.
            </p>
          </div>
          <hr />
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
      <Section title="Timeline" id="timeline-section">
        <h3>Pre</h3>
        <Timeline
          items={[
            {
              id: 1,
              md: "??? ??",
              year: "1999",
              title: "Founding of Xinruishi",
              description:
                "Zhuang Jinlong(庄锦隆) founds & leads Xiamen Xinruishi Multimedia Co., Ltd.(厦门新瑞狮多媒体有限公司). It quickly became a prominent game studio in China, known for its innovative game development and strong leadership. Renowned for training a strong generation of game developers.",
            },
            {
              id: 2,
              md: "??? ??",
              year: "1999",
              title: "Xinruishi Acquires Core Investor",
              description: "Main Taiwanese investor named Cai Chengrui(蔡呈瑞) joins in.",
            },
            {
              id: 3,
              md: "??? ??",
              year: "2003",
              title: "Malicious Fund Withdrawal by Core Investor",
              description:
                "Cai Chengrui(蔡呈瑞) withdraws most of his funds without the knowledge of the company's employees, which paralyzed the company's development plan and eventually led to their collapse.",
            },
            {
              id: 4,
              md: "Dec 14",
              year: "2003",
              title: "Xinruishi Shuts Down",
              description: (
                <>
                  Without funding and late wages, the company is unable to continue operating. Assets are sold, office
                  vacated.{" "}
                  <a
                    href="https://web.archive.org/web/20241124183150/https://forum.gamer.com.tw/C.php?bsn=3987&snA=25"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Article about the collapse of Xinruishi">
                    Full collapse of Xinruishi.
                  </a>
                </>
              ),
            },
            {
              id: 5,
              md: "??? ??",
              year: "2004",
              title: "Zhuang Jinlong Cemented as the Godfather of the Chinese Game Industry",
              description:
                'Zhuang Jinlong(庄锦隆) elected as "Top Ten Chinese IT Person of the Year" & "Top Ten Leaders of the Year".',
            },
            {
              id: 6,
              md: "??? ??",
              year: "2006",
              title: "Zhuang Jinlong Joins Unigium",
              description: (
                <>
                  Zhuang Jinlong(庄锦隆) joins Unigium(联竣信息科技（上海）有限公司) and becomes the Director & General
                  Manager of the "God World/Myth War"(神界) project. A large portion of the employees, development
                  tooling and assets come directly from Xinruishi.{" "}
                  <a
                    href="https://web.archive.org/web/20241124210600/https://news.17173.com/content/2006-11-22/20061122121131838,1.shtml"
                    target="_blank"
                    rel="noopener noreferrer">
                    More information about the core team behind Myth War Online's development.
                  </a>
                </>
              ),
            },
          ]}
        />
        <hr />
        <h3>Myth War Online</h3>
        <Timeline
          items={[
            {
              id: 1,
              md: "May 20",
              year: "2005",
              title: "Chinese Closed Beta",
              description: `China server for Closed Beta is opened. Hosted on mythol.com and proxied to mainland China through mythonline.com.cn.`,
            },
            {
              id: 2,
              md: "Jul 15",
              year: "2005",
              title: "Taiwanese Release",
              description: `While the China Open Beta release got stuck in limbo, the Taiwan server launches, which most Chinese players migrated to during the wait.`,
            },
            {
              id: 3,
              md: "Jan 18",
              year: "2006",
              title: "Japanese Open Beta",
              description: `Japanese Open Beta launches, published under DIGIWORLD.`,
            },
            {
              id: 4,
              md: "??? ??",
              year: "2006",
              title: "Chinese Domain Migration",
              description: `Release of the China server migrates to sj.gyyx.cn, mythonline.com.cn was adjusted to point to this new version.`,
            },
            {
              id: 5,
              md: "??? ??",
              year: "2006",
              title: "Chinese Release",
              description: `Myth War Online officially releases in China.`,
            },
            {
              id: 6,
              md: "Jul 7",
              year: "2006",
              title: "North American Release",
              description: `Myth War Online is released in North America, published by IGG.`,
            },
            {
              id: 7,
              md: "May ??",
              year: "2009",
              title: "Transition to Myth War II",
              description: `Myth War Online servers are shut down in order to make way for Myth War II's release.`,
            },
          ]}
        />
        <hr />
        <h3>Myth War II</h3>
        <Timeline
          items={[
            {
              id: 1,
              md: "Mar 29",
              year: "2007",
              title: "Chinese Beta",
              description: (
                <>
                  Myth War II Beta{" "}
                  <a
                    href="https://web.archive.org/web/20241125145821/http://www.edmontonchina.ca/archiver/?tid-84638.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Article about the China Beta of Myth War II">
                    begins in China.
                  </a>
                </>
              ),
            },
            {
              id: 2,
              md: "Jun 13",
              year: "2008",
              title: "North American Closed Beta",
              description: `Myth War II Closed Beta launches in North America.`,
            },
            {
              id: 3,
              md: "Jun 26",
              year: "2008",
              title: "North American Open Beta",
              description: `Myth War II Open Beta launches in North America.`,
            },
            {
              id: 4,
              md: "May 20",
              year: "2009",
              title: "North America Release",
              description: `Myth War II is officially released in North America.`,
            },
            {
              id: 5,
              md: "Jan 15",
              year: "2015",
              title: "North America Shutdown",
              description: `An announcement regarding Myth War II's closure is made.`,
            },
            {
              id: 6,
              md: "Feb 16",
              year: "2015",
              title: "North America Shutdown",
              description: `Myth War II servers are shut down permanently.`,
            },
          ]}
        />
        <hr />
        <h3>Myth War III: Legends of the Dark</h3>
        <Timeline
          items={[
            {
              id: 1,
              md: "Jan 15",
              year: "2009",
              title: "Development Announcement",
              description: (
                <>
                  <a
                    href="https://web.archive.org/web/20090122002318/http://mw2.igg.com/news/news.php?aid=477"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Article about the development announcement of Myth War III: Legends of the Dark">
                    Development is publicly announced
                  </a>
                  . Planned release date during Christmas 2009.
                </>
              ),
            },
            {
              id: 2,
              md: "Jun 28",
              year: "2009",
              title: "Trademark Filing",
              description: (
                <>
                  Trademark for Myth War 3 Legends of the Dark's logo is{" "}
                  <a
                    href="https://trademarks.justia.com/777/69/myth-war-legends-of-the-dark-77769734.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Trademark filing for Myth War 3 Legends of the Dark">
                    filed
                  </a>
                  .
                </>
              ),
            },
            {
              id: 3,
              year: "Present",
              title: "Development Status",
              description: `No further information is available. Development was never completed.`,
            },
          ]}
        />
      </Section>
    </>
  );
}
