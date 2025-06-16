import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";
import qna from "@/_data/wednesday-event.json";
import sealCoords from "@/_data/seal-windseeker.json";
import { Fragment } from "react";

export const Route = createFileRoute("/guides/leveling")({
  component: PageGuidesLeveling,
});

function PageGuidesLeveling() {
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
              corresponding to your race and gender. Below is a table that shows exactly which character-specific piece
              of equipment you need to give him - those can be obtained either through forging, buying from other
              players or using a Convenience Store item, the latter being the most efficient. You can ask for help in
              World Chat by saying &quot;Drow Lead looking for 1hit party&quot; and inviting the respondents to your
              party.
            </p>
            <table className="papyrus-table">
              <thead>
                <tr>
                  <th>Race</th>
                  <th>Equipment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Borg (Male)</td>
                  <td>+5 Weapon</td>
                </tr>
                <tr>
                  <td>Borg (Female)</td>
                  <td>+5 Weapon</td>
                </tr>
                <tr>
                  <td>Centaur (Male)</td>
                  <td>+5 Shoe</td>
                </tr>
                <tr>
                  <td>Centaur (Female)</td>
                  <td>+5 Armor</td>
                </tr>
                <tr>
                  <td>Human (Male)</td>
                  <td>+5 Armor</td>
                </tr>
                <tr>
                  <td>Human (Female)</td>
                  <td>+5 Armor</td>
                </tr>
                <tr>
                  <td>Mage (Male)</td>
                  <td>+5 Armor</td>
                </tr>
                <tr>
                  <td>Mage (Female)</td>
                  <td>+5 Helm</td>
                </tr>
              </tbody>
            </table>
            <ol>
              <li>Head to Cursed Abyss north of Demon Square</li>
              <li>Give the corresponding equipment to Drowcrusher (181, 166)</li>
              <li>After defeating him, simply rinse & repeat</li>
            </ol>
          </div>
          <hr />
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
            <p>Once you are level 50 you can now run through Woodlingor Defense with a level 50+ party.</p>
            <ol>
              <li>Talk to Defender in Woodlingor (277, 311), take note of the three locations he gives you.</li>
              <li>Visit the three given stores and interact with the NPCs.</li>
              <li>Eventually one will trigger a fight - defeat them and return to Defender (277, 311).</li>
            </ol>
            <p>
              Each round gives increasing XP, up to round 10. Unlike Howling Beast however, there is no way to
              &quot;stall&quot; a round, so you&apos;ll start back at round 1 afterwards.
            </p>
          </div>
        </div>
      </Section>
      <Section title="Level 60-70">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Blython Defense</h3>
            <p>
              At level 60, you can move from Woodlingor to Blython Defense. It's virtually identical except with
              increased XP rewards.
            </p>
            <ol>
              <li>Talk to Defender in Blython (14, 80)</li>
              <li>Visit the listed locations and interact with the NPCs</li>
              <li>Eventually one will trigger a fight, defeat them and return to Defender (14, 80)</li>
            </ol>
            <p>
              <b>
                Note: when Defender says "Armory", the actual location is Weaponry. 2x Armory means both NPCs inside are
                possible targets. Additionally, "Accessories Shop" means Stuff Shop.
              </b>
            </p>
          </div>
        </div>
      </Section>
      <Section title="Level 60-80">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Bloodreaper</h3>
            <p>
              Bloodreaper is a series of fights similar to the Howlign Beast quest, offering an alternative leveling
              method to Blython Defense at level 60. This used to be a timed event during Saturdays back on official
              servers, but TDT has it as a repeatable quest available at all times.
            </p>
            <ol>
              <li>Begin with Bloodreaper in Sunset Plains (130, 70)</li>
              <li>Pass through Blython, defeat Firetroy in Southern Rivage (41, 46)</li>
              <li>North East of Desert City, defeat Bonepoker in Flamingor (23, 164)</li>
              <li>South of Desert City, defeat Eyebasher in Bone Desert (66, 157)</li>
              <li>Teleport to Flame Ruins through Demon Square teleporter, defeat Fistscarer (156, 257)</li>
              <li>Similarly to Howling Beast, reset before ending round 10 to retain the cumulative XP multiplier</li>
            </ol>
          </div>
        </div>
      </Section>
      <Section title="Level 70-90">
        <div className="papyrus">
          <div className="papyrus-section">
            <h3>Seal</h3>
            <p>
              At level 70 you unlock a new repeatable, 10 round quest with increasing XP rewards. It's advised tho use
              both the Windseeker consumable for teleportation, and Devil&apos;s Tears to avoid random monster aggro.{" "}
              <b>
                At the bottom of this section is a Windseeker teleport coordinates cheatsheet to reach your target
                quickly.
              </b>
            </p>
            <ol>
              <li>Buy a Sealed scroll from Endelroth in Blython Bar</li>
              <li>Right click the scroll to receive coordinates, travel to those coordinates</li>
              <li>Upon arrival, right click the scroll again to initiate the fight</li>
              <li>When victorious, return to Endelroth in Blython Bar to receive a new target</li>
            </ol>
            <details>
              <summary className="no-select">Windseeker Teleport Coordinates</summary>
              <p>
                <em>"H" stands for "Hurricane", "S" stands for "Spot".</em>
              </p>
              <table id="seal-table" className="papyrus-table table-rowspan">
                <thead>
                  <tr>
                    <th>Zone</th>
                    <th>Coords</th>
                    <th>Seeker</th>
                  </tr>
                </thead>
                <tbody>
                  {sealCoords.map((entry) => (
                    <Fragment key={entry.zone}>
                      <tr>
                        <th rowSpan={entry.coords.length}>{entry.zone}</th>
                        <td>{entry.coords[0]?.coord}</td>
                        <td>{entry.coords[0]?.seeker}</td>
                      </tr>
                      {entry.coords.slice(1).map((coord) => (
                        <tr key={`${coord.coord}-${coord.seeker}`}>
                          <td>{coord.coord}</td>
                          <td>{coord.seeker}</td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </details>
          </div>
        </div>
      </Section>
      <Section title="Level 90+">
        <div className="papyrus">
          <h3>Papa Drow & Worn Messenger</h3>
          <p>
            At around level 90 you'll stop gaining XP from Seal, so you'll need to find a new source of XP. Two of the
            best options are Papa Drow and Worn Messenger.
          </p>
          <div className="papyrus-section">
            <h4>Papa Drow</h4>
            <p>
              Drow Lord, more commonly referred to as &quot;Papa Drow&quot;, functions pretty much identically to
              regular Drowcrusher. The only real difference being a drastic increase in difficulty. Similarly to
              Drowcrusher, Papa Drow can be repeated as much as you like without limits. Note that your experience gains
              will be drastically reduced after reaching level 110.{" "}
              <b>
                Contrary to regular Drowcrusher, all characters require the same type of equipment to fight Papa Drow
                (+5 weapon of their own race & gender)
              </b>
              .
            </p>
            <ol>
              <li>Head to Cursed Abyss north of Demon Square</li>
              <li>Give the corresponding equipment to Drow Lord (170, 137)</li>
              <li>After defeating him, simply rinse & repeat</li>
            </ol>
          </div>
          <hr />
          <div className="papyrus-section">
            <h4>Worn Messenger</h4>
            <p>
              Like a lot of other quests, Worn Messenger is a repeatable round-based quest. Experience gains after every
              round, currently unsure if there's a cap/reset. It's more difficult than most leveling methods up until
              this point, so it's generally a good idea to refer to guides like these:
            </p>
            <ul>
              <li>
                <a
                  className="link"
                  href="https://thunderized.luigi311.com/guide:worndeity"
                  target="_blank"
                  rel="noopener noreferrer">
                  Worn Deity (Thunderized)
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://community.tdt.net/forum.php?mod=viewthread&tid=81"
                  target="_blank"
                  rel="noopener noreferrer">
                  Worn Messenger Guide
                </a>
              </li>
            </ul>
            <ol>
              <li>Talk to Worn Messenger in Desert City (168, 51)</li>
              <li>
                You'll be tasked with defeating 5 different monsters in any order, all of which can be found in Bone
                Desert south of Desert City:
              </li>
              <ul>
                <li>Worn General (127, 109)</li>
                <li>Princess Agony (147,65)</li>
                <li>Dark Knight (161, 78)</li>
                <li>Prince Zenith (163, 45)</li>
                <li>Borg Giant (187, 101)</li>
              </ul>
              <li>Once you've defeated all 5, return to Worn Messenger in Desert City to start a new round</li>
            </ol>
          </div>
        </div>
      </Section>
    </>
  );
}
