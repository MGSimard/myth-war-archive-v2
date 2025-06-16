import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/guides/rebirth")({
  component: PageGuidesRebirth,
});

function PageGuidesRebirth() {
  return (
    <>
      <Header title="Rebirth" subtitle="Your Guide to Rebirth" />
      <Section title="Introduction">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>
              This page is incomplete and may contain partially incorrect information due to conflicting data sources.
            </h3>
            <p>
              Once you've acquired all five Soulstones from the various storyline quests throughout the game, you'll be
              able to perform the rebirth process. Though there are minimum requirements for each rebirth, and it is
              advised max out your character's requirements to maximize your character's potential post-rebirth such as
              resistances and growth rate.
            </p>
            <ul>
              <li>There are 3 different rebirth stages with increasing requirements</li>
              <li>Resets your character level, stats and skill points</li>
              <li>Allows you to choose a new race and gender</li>
              <li>Gain more stat points if you maxed your level before rebirth</li>
              <li>Gain increased resistances and growth rate</li>
              <li>Grants you increased inventory slots</li>
              <li>Removes item level requirements</li>
              <li>Pets can also be reborn</li>
            </ul>
            <p>
              There are some nuances to maximizing your rebirth potential depending on class path and other
              considerations, though the language and formatting may be confusing I recommend reading these resources
              regarding rebirth:
            </p>
            <ul>
              <li>
                <a
                  className="link"
                  href="https://mythwar2.freeforums.net/thread/3/soulstone-quest"
                  rel="noopener noreferrer"
                  target="_blank">
                  Soulstone Quests
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://community.tdt.net/forum.php?mod=viewthread&tid=716&extra=page%3D1"
                  rel="noopener noreferrer"
                  target="_blank">
                  Condensed All-in-One Reborn Paths
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://mythwar2.freeforums.net/thread/4/character-reborn-paths"
                  rel="noopener noreferrer"
                  target="_blank">
                  Character Reborn Paths
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://community.tdt.net/forum.php?mod=viewthread&tid=69&extra=page%3D1"
                  rel="noopener noreferrer"
                  target="_blank">
                  Reborn Paths: Data of Growth and Races
                </a>
              </li>
            </ul>
            <p>
              <b>
                Rebirth is a process which allows you to reset your character and start over with new stats and
                abilities. This process is permanent and cannot be undone. Only proceed when you're ready.
              </b>
            </p>
          </div>
        </div>
      </Section>
      <Section title="First Rebirth">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Minimum Requirements</h3>
            <ul>
              <li>Complete the five Soulstone quests</li>
              <li>Character level 100</li>
              <li>All skills level 50</li>
              <li>200 reputation</li>
            </ul>
            <h3>Recommended Requirements</h3>
            <ul>
              <li>Character level 104</li>
              <li>All skills level 75</li>
            </ul>
            <h3>Guide</h3>
            <p>
              <a
                className="link"
                href="https://mythwar2.freeforums.net/thread/8/1st-reborn-guide"
                rel="noopener noreferrer"
                target="_blank">
                Useful fight recommendations
              </a>
            </p>
            <ol>
              <li>Go to Snow Ridge (107, 38) and talk to Elder of Faith</li>
              <li>Talk to the Dark Priest in Tumulus (151, 179)</li>
              <li>Fight monsters until you acquire a key, return to the Dark Priest</li>
              <li>Defeat the 5 guardian beasts to receive Deity's Blood</li>
              <li>Return to the Elder of Faith to perform rebirth</li>
              <li>Upon confirming rebirth and choosing a class, your character will be logged out</li>
              <li>Rebirth will be complete upon reconnection</li>
            </ol>
          </div>
        </div>
      </Section>
      <Section title="Second Rebirth">
        <div className="papyrus">
          <div className="papyrus-section"></div>
        </div>
      </Section>
      <Section title="Third Rebirth">
        <div className="papyrus">
          <div className="papyrus-section"></div>
        </div>
      </Section>
    </>
  );
}
