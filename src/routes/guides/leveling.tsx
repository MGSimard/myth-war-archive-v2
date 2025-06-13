import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import qna from "@/_data/wednesday-event.json";

export const Route = createFileRoute("/guides/leveling")({
  component: PageLore,
});

function PageLore() {
  return (
    <>
      <Header title="Leveling" subtitle="Your Guide to Power and Progression" />
      <Section title="Level 1-6">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Tutorial</h3>
            <ol>
              <li>Create a new character</li>
              <li>Talk to Skill Mentor in Woodlingor (259, 57)</li>
              <li>Talk to Skill Guide (291, 37)</li>
              <li>Talk to Race Instructor in Sky Passage (19, 104)</li>
              <li>Talk to Pet Manager (53, 116)</li>
              <li>Talk to Battle Instructor (31, 46), initiate a fight</li>
              <li>Go east to Sky Garden, fight random mobs until you collect the required amount of pines</li>
              <li>Return to Battle Instructor in Sky Passage (31, 46)</li>
              <li>After, return to Sky Garden and defeat Savage (78, 47)</li>
              <li>Go back to Battle Instructor in Sky Passage (31, 46), fight to level 6 if not already there</li>
            </ol>
          </div>
        </div>
      </Section>
      <Section title="Level 6-21">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>New Horizon & Best Coagent</h3>
            <p>
              One of the things you can do from level 6 is ask for help from players with the title of New Horizon or
              Best Coagent, respectively level 50-69 & 70+.
            </p>
            <ol>
              <li>Join an NH/BC party, the bigger the party the better the XP</li>
              <li>Have them train you in Revive Arena east of Woodlingor until level 21</li>
              <li>
                If you can&apos;t find help, refer to the next part which gives you a slower alternative to level 21
              </li>
            </ol>
          </div>
        </div>
      </Section>
      <Section title="Level 6-21-30">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Stonesmith</h3>
            <p>
              You can begin the Stonesmith quest from level 6 onwards by visiting Stonesmith in Woodlingor (162, 342).
              He will task you with collecting a certain amount of items by fighting in different zones depending on
              your level. Those areas are Revive Arena, Snow Ridge, Sunset Plains, Southern Rivage, Badlands and Bone
              Desert. The first three are connected between the two cities of Woodlingor and Blython, the last three are
              connected between Blython and Desert City which can be accessed through the Woodlingor Teleporter (87,
              136).
            </p>
            <ol>
              <li>Visit Stonesmith in Woodlingor (162, 343)</li>
              <li>
                Depending on your level, go to your assigned zone and fight monsters repeatedly until you acquire the
                required amount of items
              </li>
              <li>
                Once you have done so, return to Stonesmith in Woodlingor (162, 343) and turn the items in for 100-150%
                of your level in experience
              </li>
              <li>Rinse & repeat this process until you&apos;ve reached level 30</li>
            </ol>
          </div>
        </div>
      </Section>
      <Section title="Level 30-50">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Howling Beast</h3>
            <p>
              At level 30, head back to Revive Arena with a party and begin the Howling Beast quest by talking to
              Howling Beast (136, 97). This will initiate a quest where you are to fight against five monsters in
              different zones, each fight rewarding you with increasing XP. Upon killing the last monster, you will have
              completed one round - up to ten rounds total. Each round will see you fighting the same monsters, except
              with better XP rewards.{" "}
              <b>
                Finishing round ten will reset the XP accumulation see steps below for the most efficient farming
                strategy
              </b>
              . If possible, it is also advised that the party leader uses a consumable &quot;Devil&apos;s Tears&quot;
              which allows you to ignore random monster encounters while traveling.
            </p>
            <ol>
              <li>Talk to Howling Beast in Revive Arena (136, 97) to begin the quest/round</li>
              <li>Defeat Bat Beast (126, 164)</li>
              <li>Travel East to Snow Ridge and defeat Flower Witch (23, 167)</li>
              <li>Go south, then west, through Blython and to Southern Rivage</li>
              <li>Once in Southern Rivage, defeat Flame Beast (92, 18)</li>
              <li>Head North and defeat Cave Clayman (29, 112) to complete a round</li>
              <li>
                <b>Repeat this until you reach round 10, then:</b>
              </li>
              <ol>
                <li>Defeat Howling Beast in Revive Arena (136, 96)</li>
                <li>Defeat Bat Beast (126, 164)</li>
                <li>Travel East to Snow Ridge and defeat Flower Witch (23, 167)</li>
                <li>Open your quest log and quit the Howling Beast quest</li>
                <li>
                  Continue killing these three then reset the quest; their XP rewards will be locked to round 10&apos;s
                  XP accumulation, successfully avoiding an XP reset
                </li>
              </ol>
            </ol>
            <p>
              If you&apos;re unable to find a party, a good alternative depending on your level is Tumulus 2-5, which
              can be entered both from the Blython Teleporter or by walking through Bone Desert from Desert City. There
              are also two leveling alternatives you can use from level 30 onwards, both of which are covered in the
              next section.
            </p>
          </div>
        </div>
      </Section>
      <Section title="Level 30+">
        <div className="papyrus">
          <h3>Drow & Wednesday Event</h3>
          <div className="papyrus-section">
            <h4>Drowcrusher</h4>
            <p>
              Drowcrusher is a monster that can be fought with a party from level 30 onwards. It rewards 100k XP per
              kill. The limit used to be set to five per day, however it is currently unlimited. In order to fight
              Drowcrusher (also referred to as &quot;Drow&quot;), you will need to give him a Tier 5 equipment
              corresponding to your class and gender. Below is a table that shows exactly which class-specific piece of
              equipment you need to give him - those can be obtained either through forging, buying from other players
              or using a Convenience Store item, the latter being the most efficient. You can ask for help in World Chat
              by saying &quot;Drow Lead looking for 1hit party&quot; and inviting the respondents to your party.
            </p>
            <ul>
              <li>
                Borg<em>(M)</em>: +5 Weapon
              </li>
              <li>
                Borg<em>(F)</em>: +5 Weapon
              </li>
              <li>
                Centaur<em>(M)</em>: +5 Shoe
              </li>
              <li>
                Centaur<em>(F)</em>: +5 Armor
              </li>
              <li>
                Human<em>(M)</em>: +5 Armor
              </li>
              <li>
                Human<em>(F)</em>: +5 Armor
              </li>
              <li>
                Mage<em>(M)</em>: +5 Armor
              </li>
              <li>
                Mage<em>(F)</em>: +5 Helm
              </li>
            </ul>
          </div>
          <div className="papyrus-section">
            <h4>Wednesday Event</h4>
            <p>
              <em>
                This is arguably one of the most profitable methods in both gold and XP as each round rewards you with
                ~100k XP to both you and your pet with a chance of obtaining Dispel Potions, Talent Points, Pet
                Intimacy, Perfect Carnelians and High-Graded Gems.
              </em>
            </p>
            <p>
              For the entire duration of Wednesday (server time), you can participate in a repeatable 100 round quest by
              going to Woodlingor and talking to Charity Ambassador in Elder Zone. You will be asked to visit a certain
              NPC to either answer a question, bring them an item or pass a message. Each NPC will give you a reward and
              another task to complete all the way up to 100 tasks.
            </p>
            <p>
              The general trick is to fill blank teleport scrolls and a few colored scrolls, leaving 1-2 free spaces for
              rewards and registering one scroll for each of the NPC locations at the bottom of your inventory. After
              using a scroll, you can drag an empty scroll into that slot and re-register the location for later.
            </p>
            <div className="grid-2">
              <table className="papyrus-table">
                <thead>
                  <tr>
                    <th>NPC</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Adventurer</td>
                    <td>Revive Arena (?, ?)</td>
                  </tr>
                  <tr>
                    <td>Mine Overseer</td>
                    <td>Bone Desert (?, ?)</td>
                  </tr>
                  <tr>
                    <td>Peddler</td>
                    <td>Southern Rivage (?, ?)</td>
                  </tr>
                  <tr>
                    <td>Prophet</td>
                    <td>Desert City (128, 74)</td>
                  </tr>
                  <tr>
                    <td>Teacher</td>
                    <td>Cursed Abyss (?, ?)</td>
                  </tr>
                </tbody>
              </table>
              <table className="papyrus-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Teleport Scroll (Blank)</td>
                    <td>800</td>
                    <td>Any</td>
                  </tr>
                  <tr>
                    <td>Teleport Scroll (Blue)</td>
                    <td>4000</td>
                    <td>Desert City & Demon Square</td>
                  </tr>
                  <tr>
                    <td>Teleport Scroll (Red)</td>
                    <td>4000</td>
                    <td>Desert City & Demon Square</td>
                  </tr>
                  <tr>
                    <td>Carving Knife</td>
                    <td>100</td>
                    <td>Woodlingor & Demon Square</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <details>
              <summary className="no-select">Wednesday Event Questions & Answers</summary>
              <p>
                <em>
                  Credit:{" "}
                  <a
                    href="https://mythwar2.freeforums.net/thread/27/wednesday-event-answers-originally-venky"
                    target="_blank"
                    rel="noopener noreferrer">
                    https://mythwar2.freeforums.net/thread/27/wednesday-event-answers-originally-venky
                  </a>
                </em>
              </p>
              <table className="papyrus-table">
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {qna.map((item) => (
                    <tr key={item.q}>
                      <td>{item.q}</td>
                      <td>{item.a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>
          </div>
        </div>
      </Section>
      <Section title="Level 50-60">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Woodlingor Defense</h3>
          </div>
        </div>
      </Section>
      <Section title="Level 60-70">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Blython Defense</h3>
          </div>
        </div>
      </Section>
      <Section title="Level 60-80">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Bloodreaper</h3>
          </div>
        </div>
      </Section>
      <Section title="Level 70-90">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Seal</h3>
          </div>
        </div>
      </Section>
      <Section title="Level 90+">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Papa Drow & Worn Messenger</h3>
          </div>
          <div className="papyrus-section">
            <h3>Papa Drow & Worn Messenger</h3>
          </div>
        </div>
      </Section>
    </>
  );
}
