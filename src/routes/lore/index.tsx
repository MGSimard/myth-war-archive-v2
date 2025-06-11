import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/_components/Header";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/lore/")({
  component: PageLore,
});

function PageLore() {
  return (
    <>
      <Header title="Lore" subtitle="Chronicles of Creation and Cataclysm" />
      <Section title="Storyline">
        <div className="papyrus">
          <div className="papyrus-section">
            <p>The war among the Gods had become a pivotal episode in history, leaving the living world in chaos.</p>
            <p>
              The mystical dimension created by the Great One granted the Gods infinite power. Nevertheless, the Gods
              were still severely restricted by the laws of balance, and none of them could escape the final stages of
              life. Driven by their desire to bring about an ending, they broke the promises they had made to the
              Dominator, abandoned the rules they themselves had established, and eventually waged a war that shattered
              every limitation between them. This insulted the pride and honor of the Great One. The chaos engulfing
              this once-balanced world was an ironic joke to the Gods, for it was they who had crafted those rules for
              their own benefit.
            </p>
            <p>
              During this epic age lived Arthunzala, a human prince plagued by recurring dreams of the moment when his
              parents were murdered before his eyes while he was still a child. Yet he became a wandering prince, a
              brave warrior, and ultimately a king who bore great responsibility. The hardships of his youth nurtured
              his kindness and refined his character; his trying experiences made him all the more noble.
            </p>
            <p>
              In the early days of the surreal dimension, an unforgettable war of rank erupted. It ignited fury among
              the Gods, causing them to neglect the dimensional laws laid down by the Dominator. At first, the surreal
              dimension was empty and extremely chaotic—spirits and evil creatures wandered aimlessly. As time passed,
              they realized the potential of united strength and joined forces. Their desire for independence spurred
              their maturity, and thus the Great One came into being. Having lost his way in the chaotic world, he
              resolved to reconstruct it according to his own ideals. In his dream he envisioned a brand-new dimension—a
              peaceful realm, a kingdom of order. The world he created consisted of three layers: the outermost
              dimension, the middle dimension, and the innermost dimension.
            </p>
            <p>
              When the Great One grew weary of thinking and dreaming, he split his body and spirit to spawn six main
              gods: the God of Power, the God of Justice, the God of Fire, the God of Evil, the God of Intelligence, and
              the God of Darkness. With the former ruler&apos;s reign ended, these gods inherited his spirit and took
              charge of the systems and resources of the new dimension. The laws of this world limited each god&apos;s
              power to preserve balance.
            </p>
            <p>
              The Gods created another beautiful and peaceful land for their people. It stood independently in the upper
              dimension between the World of Gods and the balanced living world. Thus the four dimensions were isolated
              from one another. The only way to travel between them was through high-tech shuttle machines that linked
              all four realms. Crystal-blue skies, magnificent waterfalls, a supernatural double moon, vast plains,
              mystical ancient forests, swamps shrouded in toxic black gas, uninhabited deserts, and polar regions of
              extreme temperature—all these features co-existed in harmony and fascinated every onlooker. Here the Great
              One placed two kinds of intelligent beings—humans and centaurs. Neutral and independent, they were free
              from the control of any god and developed unique civilizations of their own. Deep within the innermost
              dimension lay the place of reincarnation.
            </p>
            <p>
              The presence of devils, monsters, and fiendish creatures made this dimension evil and frightening. Black
              soil, burning lava, and bizarre weather shrouded the land in chaos. The God of Hell, ruling this distant
              realm far from the World of Gods, enjoyed greater freedom to wield his power and therefore created five
              magical beasts. To living creatures, their world seemed complicated yet orderly. However, the ostensibly
              peaceful World of Gods was rife with crisis. The God of Evil, born of the Great One&apos;s darker will,
              could not endure the restraints of balanced power distribution and resolved to challenge the
              highest-ranking gods. Believing that selfishness was sometimes necessary for an independent evil will, he
              sought an alliance with the God of Hell. Unaware that desire, once awakened, cannot be controlled, the God
              of Hell accepted his proposal, yet soon broke their pact of mutual benefit. He and his magical beasts were
              the first to launch the Ranking War.
            </p>
            <p>
              The entire dimension trembled during this strange war. Living creatures sensed impending natural
              disasters—tsunamis, earthquakes, tornadoes, hurricanes. They prayed, confessed, and implored the Gods,
              "What have we done wrong?" Their pleas went unanswered; all they received were endless catastrophes and
              death. The God of Hell underestimated the combined might of the other gods. After many defeats he
              retreated deep into the inner dimension and hid within the Tree of Life. The Tree of Life, planted by the
              Great One, was a wondrous entity: the whole dimension, its resources, and even the powers the Gods
              possessed all stemmed from it. It was also the only place beyond the rule of the six Gods. The Tree of
              Life would not shelter rebels, so the God of Hell faced the cruellest punishment—tortured both physically
              and spiritually, bound endlessly by chains of ice and fire. Meanwhile, the five beasts were sealed apart
              from one another within five Spiritual Stones, waiting for time itself to erode their bonds. No one
              suspected that these stones, each bearing a special duty, concealed an even greater power.
            </p>
            <p>
              The Gods&apos; power sprang from the soul, and desire rendered the Evil God silent no longer. He coveted
              the Spiritual Stones. While attempting to unseal them before the holy altar, the Guarding Prime Gods
              discovered him. Another terrible war followed—a conflict of blood and fire, of evil versus justice. The
              Evil God was defeated and lay in a pool of his own blood. As his blood seeped into the Spiritual Stones,
              he uttered a sinister curse with his final breath. None had imagined that divine blood was the key to
              releasing the Stones&apos; power, nor that the Stones could grant wishes in exchange for life. The curse
              proved true. As the Gods died one by one and became spirits, the Sky Passage crashed into the middle
              world.
            </p>
            <p>
              The violent impact drove the civilizations of the middle world backward, pushing the balanced living world
              to the brink of destruction and distorting the dimensions. Having become disembodied spirits, the Gods
              wandered the outer dimension with only the slightest power to sustain their existence. Everything had
              returned to the beginning. To avoid fading away, they strove to win the faith and will of creatures in the
              middle dimension. Even so, the Gods maintained their noble demeanor. They helped the races of the middle
              realm develop technology, establish laws, and even learn to cast spells. In return, each race was required
              to build a sanctuary to honour the Gods and gather more believers. What the Gods needed most was an army
              of devotees. In every dimension, nothing could escape the universal law of returning. Yet the
              Gods—clinging to circular logic and driven by the desire to survive—ignited the greatest conflict of all:
              the War of Gods. Maddened, they no longer acknowledged the rules of the dimensions. Vengeance led to their
              annihilation.
            </p>
            <p>
              Wars, cruelty, murder, contests, desire, and magic—all these define this dimension and fill its history
              with surprises, adventures, and romance.
            </p>
          </div>
        </div>
      </Section>
      <Section title="Races">Races stuff here</Section>
    </>
  );
}
