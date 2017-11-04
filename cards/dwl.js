// @flow
import type {Card} from './index';

const cards:Array<Card> = [
  {
    "back_flavor": "Zoey had known that she was special ever since God spoke to her one night when she was six years old... the night that terrible fire took away her parents. He told her that He had chosen her from among all the people of the world to be His agent. She would protect the innocent and punish the wicked. Since then, He comes to her in times of trouble, offering guidance and comfort. Zoey now travels from city to city, taking work as a chef to support herself. When she isn't working, she stalks the night, guided by the Lord's voice. Wherever she finds wickedness, she strikes it down without remorse or hesitation.",
    "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Guardian cards ([guardian]) level 0-5, Neutral cards level 0-5, up to five level 0 cards from any other class.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Zoey's Cross, Smite the Wicked, 1 random basic weakness.",
    "code": "02001",
    "deck_limit": 1,
    "deck_options": [
        {"faction":["guardian", "neutral"], "level":{"min":0, "max":5} },
        {"level":{"min":0, "max":0}, "limit":5, "error": "You cannot have more than 5 cards that are not Guardian or Neutral"}
    ],
    "deck_requirements": "size:30, card:02006, card:02007, random:subtype:basicweakness",
    "double_sided": true,
    "faction_code": "guardian",
    "flavor": "\"God has spoken. I will do His work without hesitation.\"",
    "health": 9,
    "illustrator": "Magali Villeneuve",
    "is_unique": true,
    "name": "Zoey Samaras",
    "pack_code": "dwl",
    "position": 1,
    "quantity": 1,
    "sanity": 6,
    "skill_agility": 2,
    "skill_intellect": 2,
    "skill_combat": 4,
    "skill_willpower": 4,
    "subname": "The Chef",
    "text": "[reaction] After you become engaged with an enemy: Gain 1 resource.\n[elder_sign] effect: +1. If this skill test is successful during an attack, that attack deals +1 damage.",
    "traits": "Believer. Hunter.",
    "type_code": "investigator"
  },
  {
    "back_flavor": "When disaster strikes, Rex Murphy is usually on hand, suffering the consequences. After spending a day with Rex, even the most hardened skeptic will concede that the man is cursed. Anytime he had a lead on a good story, something would go wrong. That business in Innsmouth with the photographs that had blown out to sea. The tracks in Dunwich that had washed away in the rain just before he'd brought the sheriff. His terrible fortune has more than once exposed him to gruesome beasts and occult conspiracies. To survive, Rex has developed an inquisitive mind, keeping one step ahead of the next disaster.",
    "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Seeker cards ([seeker]) level 0-5, Neutral cards level 0-5, up to five level 0 cards from any other class.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Search for the Truth, Rex's Curse, 1 random basic weakness.\n<b>Deckbuilding requirements</b>: No <i>Fortune</i> cards.",
    "code": "02002",
    "deck_limit": 1,
    "deck_options": [
        {"not": true, "trait": ["fortune"] },
        {"faction":["seeker", "neutral"], "level":{"min":0, "max":5} },
        {"level":{"min":0, "max":0}, "limit":5, "error": "You cannot have more than 5 cards that are not Seeker or Neutral"}
    ],
    "deck_requirements": "size:30, card:02008, card:02009, random:subtype:basicweakness",
    "double_sided": true,
    "faction_code": "seeker",
    "flavor": "\"This time, nothing will stop me from getting at the truth!\"",
    "health": 6,
    "illustrator": "Cristi Balanescu",
    "is_unique": true,
    "name": "Rex Murphy",
    "pack_code": "dwl",
    "position": 2,
    "quantity": 1,
    "sanity": 9,
    "skill_agility": 3,
    "skill_intellect": 4,
    "skill_combat": 2,
    "skill_willpower": 3,
    "subname": "The Reporter",
    "text": "[reaction] After you succeed at a skill test by 2 or more while investigating: Discover 1 clue at your location.\n[elder_sign] effect: +2. You may instead choose to automatically fail this skill test to draw 3 cards.",
    "traits": "Reporter.",
    "type_code": "investigator"
  },
  {
    "back_flavor": "Jenny Barnes has spent the majority of her young life in pursuit of creature comforts, fine dining, and the latest fashions. That all changed when she received a letter from her sister, Isabelle. In this letter, Isabelle confessed that mysterious forces were aligning against her and that she feared she may fall victim to some paranormal threat. It was the last letter Jenny received from her beloved sister. Jenny has since returned to the States to track down and investigate all occult occurrences she can find. Hardly a wilting flower, she has proven herself a crack shot as well as a fearless and clever investigator of the unknown. Until Isabelle's disappearance is explained, Jenny will never relent in her search.",
    "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Rogue cards ([rogue]) level 0-5, Neutral cards level 0-5, up to five level 0 cards from any other class.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Jenny's Twin .45s, Searching for Izzie, 1 random basic weakness.",
    "code": "02003",
    "deck_limit": 1,
    "deck_options": [
        {"faction":["rogue", "neutral"], "level":{"min":0, "max":5} },
        {"level":{"min":0, "max":0}, "limit":5, "error": "You cannot have more than 5 cards that are not Rogue or Neutral"}
    ],
    "deck_requirements": "size:30, card:02010, card:02011, random:subtype:basicweakness",
    "double_sided": true,
    "faction_code": "rogue",
    "flavor": "\"No more 'Miss Barnes' from you. My friends call me Jenny.\"",
    "health": 8,
    "illustrator": "Tony Foti",
    "is_unique": true,
    "name": "Jenny Barnes",
    "pack_code": "dwl",
    "position": 3,
    "quantity": 1,
    "sanity": 7,
    "skill_agility": 3,
    "skill_intellect": 3,
    "skill_combat": 3,
    "skill_willpower": 3,
    "subname": "The Dilettante",
    "text": "You collect 1 additional resource during each upkeep phase.\n[elder_sign] effect: +1 for each resource you have.",
    "traits": "Drifter.",
    "type_code": "investigator"
  },
  {
    "back_flavor": "Jazz has been nothing but trouble for Jim since the day he picked up his daddy's trumpet. There was something weird and otherworldly about the writing on the inside of the bell, but the tones from it were smooth and dark, like good coffee. That trumpet landed Jim a lot of gigs until the time it made Widow Jenkins get up and dance, the day he played at her funeral. After that, it was kind of hard to find work. Since then, Jim has learned a lot about jazz — and the things the graveyard ghouls talk about on cold autumn nights. Lately, they've been talking about The End, as in the end of everything that is and could be. The Final Rhapsody. The fact is, Jim isn't too keen on that idea.",
    "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Mystic cards ([mystic]) level 0-5, Neutral cards level 0-5, up to five level 0 cards from any other class.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Jim's Trumpet, Final Rhapsody, 1 random basic weakness.",
    "code": "02004",
    "deck_limit": 1,
    "deck_options": [
        {"faction":["mystic", "neutral"], "level":{"min":0, "max":5} },
        {"level":{"min":0, "max":0}, "limit":5,  "error": "You cannot have more than 5 cards that are not Mystic or Neutral"}
    ],
    "deck_requirements": "size:30, card:02012, card:02013, random:subtype:basicweakness",
    "double_sided": true,
    "faction_code": "mystic",
    "flavor": "\"No, not quiet at all. Dead folks get downright rambunctious when I play my horn.\"",
    "health": 7,
    "illustrator": "Magali Villeneuve",
    "is_unique": true,
    "name": "Jim Culver",
    "pack_code": "dwl",
    "position": 4,
    "quantity": 1,
    "sanity": 8,
    "skill_agility": 2,
    "skill_intellect": 3,
    "skill_combat": 3,
    "skill_willpower": 4,
    "subname": "The Musician",
    "text": "Treat the modifier on [skull] tokens you reveal as \"0.\"\nAnytime you reveal a [elder_sign] token, you may choose to instead treat it as a [skull] token.\n[elder_sign] effect: +1.",
    "traits": "Performer.",
    "type_code": "investigator"
  },
  {
    "back_flavor": "At night, \"Ashcan\" Pete sleeps wherever his travels take him: in a field, on a train, or maybe, if he's lucky, in a barn. He bunks with his loyal hound dog, Duke, on one side and his beat-up guitar on the other. And sometimes when Pete sleeps, he dreams. He dreams of haunted, tortured places and of horrible creatures. When he wakes up, he knows that someone needs his help, because his dreams are true. He could not say how long he has been on the road, living by his wits, but he can say for certain no place is too far to go to help someone in need. And as long as Pete can help people, he is not likely to stop wandering any time soon.",
    "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Survivor cards ([survivor]) level 0-5, Neutral cards level 0-5, up to five level 0 cards from any other class.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Duke, Wracked by Nightmares, 1 random basic weakness.",
    "code": "02005",
    "deck_limit": 1,
    "deck_options": [
        {"faction":["survivor", "neutral"], "level":{"min":0, "max":5} },
        {"level":{"min":0, "max":0}, "limit":5,  "error": "You cannot have more than 5 cards that are not Survivor or Neutral"}
    ],
    "deck_requirements": "size:30, card:02014, card:02015, random:subtype:basicweakness",
    "double_sided": true,
    "faction_code": "survivor",
    "flavor": "\"C'mere, boy. We got work to do.\"",
    "health": 6,
    "illustrator": "Jake Murray",
    "is_unique": true,
    "name": "\"Ashcan\" Pete",
    "pack_code": "dwl",
    "position": 5,
    "quantity": 1,
    "sanity": 5,
    "skill_agility": 3,
    "skill_intellect": 2,
    "skill_combat": 2,
    "skill_willpower": 4,
    "subname": "The Drifter",
    "text": "You begin the game with Duke in play.\n[free] Discard a card from your hand: Ready an asset you control. (Limit once per round.)\n[elder_sign] effect: +2. Ready Duke.",
    "traits": "Drifter.",
    "type_code": "investigator"
  },
  {
    "code": "02006",
    "cost": 1,
    "deck_limit": 1,
    "faction_code": "neutral",
    "illustrator": "Preston Stone",
    "is_unique": true,
    "name": "Zoey's Cross",
    "pack_code": "dwl",
    "position": 6,
    "quantity": 1,
    "restrictions": "investigator:02001",
    "skill_combat": 2,
    "skill_wild": 1,
    "slot": "Accessory",
    "subname": "Symbol of Righteousness",
    "text": "Zoey Samaras deck only.\n[reaction] After an enemy becomes engaged with you, exhaust Zoey's Cross and spend 1 resource: Deal 1 damage to that enemy.",
    "traits": "Item. Charm.",
    "type_code": "asset"
  },
  {
    "code": "02007",
    "deck_limit": 1,
    "faction_code": "neutral",
    "illustrator": "Preston Stone",
    "name": "Smite the Wicked",
    "pack_code": "dwl",
    "position": 7,
    "quantity": 1,
    "restrictions": "investigator:02001",
    "subtype_code": "weakness",
    "text": "<b>Revelation</b> – Discard cards from the top of the encounter deck until an enemy is discarded. Attach Smite the Wicked to that enemy and spawn it at the location farthest from you.\n<b>Forced</b> – When the game ends, if attached enemy is in play: You suffer 1 mental trauma.",
    "traits": "Task.",
    "type_code": "treachery"
  },
  {
    "code": "02008",
    "cost": 1,
    "deck_limit": 1,
    "faction_code": "neutral",
    "flavor": "When things went his way, which wasn't often these days, Rex was a good reporter, with a nose for a story and an eye for detail... <cite>Graham McNeill, Ghouls of the Miskatonic,</cite>",
    "illustrator": "Torstein Nordstrand",
    "name": "Search for the Truth",
    "pack_code": "dwl",
    "position": 8,
    "quantity": 1,
    "restrictions": "investigator:02002",
    "skill_intellect": 2,
    "skill_wild": 1,
    "text": "Rex Murphy deck only.\nDraw X cards, where X is the number of clues on Rex Murphy (to a maximum of 5).",
    "traits": "Insight.",
    "type_code": "event"
  },
  {
    "code": "02009",
    "deck_limit": 1,
    "faction_code": "neutral",
    "illustrator": "Falk",
    "name": "Rex's Curse",
    "pack_code": "dwl",
    "position": 9,
    "quantity": 1,
    "restrictions": "investigator:02002",
    "subtype_code": "weakness",
    "text": "<b>Revelation</b> - Put Rex's Curse into play in your threat area.\n<b>Forced</b> - When you would succeed at a skill test: Return the revealed chaos token to the bag and reveal a new chaos token. If this effect causes you to fail the test, shuffle Rex's Curse into your deck. (Limit once per test.)",
    "traits": "Curse.",
    "type_code": "treachery"
  },
  {
    "code": "02010",
    "cost": null,
    "deck_limit": 1,
    "faction_code": "neutral",
    "flavor": "\"...Say, are those Mr. Donohue's guns?\" Jenny held a pistol over her shoulder and struck a pose. \"I think they suit me better than him. Don't you agree?\"",
    "illustrator": "John Pacer",
    "is_unique": true,
    "name": "Jenny's Twin .45s",
    "pack_code": "dwl",
    "position": 10,
    "quantity": 1,
    "restrictions": "investigator:02003",
    "skill_agility": 2,
    "skill_wild": 1,
    "slot": "Hand x2",
    "subname": "A Perfect Fit",
    "text": "Jenny Barnes deck only. Uses (X ammo).\n[action] Spend 1 ammo: <b>Fight.</b> You get +2 [combat] for this attack. This attack deals +1 damage.",
    "traits": "Item. Weapon. Firearm.",
    "type_code": "asset"
  },
  {
    "code": "02011",
    "deck_limit": 1,
    "faction_code": "neutral",
    "illustrator": "Jeff Lee Johnson",
    "name": "Searching for Izzie",
    "pack_code": "dwl",
    "position": 11,
    "quantity": 1,
    "restrictions": "investigator:02003",
    "subtype_code": "weakness",
    "text": "<b>Revelation</b> - Attach Searching for Izzie to the location farthest from you.\n[action][action]: <b>Investigate</b>. If you succeed, instead of discovering clues, discard Searching for Izzie.\n<b>Forced</b> - When the game ends, if Searching for Izzie is in play: You suffer 1 mental trauma.",
    "traits": "Task.",
    "type_code": "treachery"
  },
  {
    "code": "02012",
    "cost": 2,
    "deck_limit": 1,
    "faction_code": "neutral",
    "flavor": "Daddy used to say, \"Jazz is a lot like liquor, it makes everything go down a little smoother.\" Daddy used to say a lot of stupid things.",
    "illustrator": "John Pacer",
    "is_unique": true,
    "name": "Jim's Trumpet",
    "pack_code": "dwl",
    "position": 12,
    "quantity": 1,
    "restrictions": "investigator:02004",
    "skill_wild": 1,
    "skill_willpower": 2,
    "slot": "Hand",
    "subname": "The Dead Listen",
    "text": "Jim Culver deck only.\n[reaction] When a [skull] token is revealed during a skill test, exhaust Jim's Trumpet: Heal 1 horror from an investigator at your location or a connecting location.",
    "traits": "Item. Instrument. Relic.",
    "type_code": "asset"
  },
  {
    "code": "02013",
    "deck_limit": 1,
    "faction_code": "neutral",
    "flavor": "When the dead start talking about what scares them, that's when it's time to listen.",
    "illustrator": "Preston Stone",
    "name": "Final Rhapsody",
    "pack_code": "dwl",
    "position": 13,
    "quantity": 1,
    "restrictions": "investigator:02004",
    "subtype_code": "weakness",
    "text": "<b>Revelation</b> - Reveal 5 chaos tokens from the chaos bag. For each [skull] and [auto_fail] token revealed, take 1 damage and 1 horror.",
    "traits": "Endtimes.",
    "type_code": "treachery"
  },
  {
    "code": "02014",
    "cost": 2,
    "deck_limit": 1,
    "faction_code": "neutral",
    "health": 2,
    "illustrator": "Owen William Weber",
    "is_unique": true,
    "name": "Duke",
    "pack_code": "dwl",
    "position": 14,
    "quantity": 1,
    "restrictions": "investigator:02005",
    "sanity": 3,
    "subname": "Loyal Hound",
    "text": "\"Ashcan\" Pete deck only.\n[action] Exhaust Duke: <b>Fight.</b> You attack with a base [combat] skill of 4. This attack deals +1 damage.\n[action] Exhaust Duke: <b>Investigate.</b> You investigate with a base [intellect] skill of 4. You may move to a connecting location immediately before investigating with this effect.",
    "traits": "Ally. Creature.",
    "type_code": "asset"
  },
  {
    "code": "02015",
    "deck_limit": 1,
    "faction_code": "neutral",
    "illustrator": "Colin Boyer",
    "name": "Wracked by Nightmares",
    "pack_code": "dwl",
    "position": 15,
    "quantity": 1,
    "restrictions": "investigator:02005",
    "subtype_code": "weakness",
    "text": "<b>Revelation</b> - Exhaust all assets you control and put Wracked by Nightmares into play in your threat area.\nAssets you control cannot ready.\n[action][action]: Discard Wracked by Nightmares.",
    "traits": "Madness.",
    "type_code": "treachery"
  },
  {
    "code": "02016",
    "cost": 1,
    "deck_limit": 2,
    "faction_code": "guardian",
    "illustrator": "Matthew Cowdery",
    "name": "Blackjack",
    "pack_code": "dwl",
    "position": 16,
    "quantity": 2,
    "skill_combat": 1,
    "slot": "Hand",
    "text": "[action]: <b>Fight.</b> You get +1 [combat] for this attack. If you perform this attack against an enemy engaged with another investigator and you fail, you deal no damage.",
    "traits": "Item. Weapon. Melee.",
    "type_code": "asset",
    "xp": 0
  },
  {
    "code": "02017",
    "cost": 1,
    "deck_limit": 2,
    "faction_code": "guardian",
    "flavor": "You steel your nerves and shout into the darkness. \"Come and get me!\"",
    "illustrator": "John Pacer",
    "name": "Taunt",
    "pack_code": "dwl",
    "position": 17,
    "quantity": 2,
    "skill_combat": 1,
    "skill_willpower": 1,
    "text": "Fast. Play only during your turn.\nEngage any number of enemies at your location.",
    "traits": "Tactic.",
    "type_code": "event",
    "xp": 0
  },
  {
    "code": "02018",
    "cost": 0,
    "deck_limit": 2,
    "faction_code": "guardian",
    "flavor": "It's dangerous to go alone.",
    "illustrator": "Adam Lane",
    "name": "Teamwork",
    "pack_code": "dwl",
    "position": 18,
    "quantity": 2,
    "skill_wild": 1,
    "text": "Investigators at your location may give or trade any number of <b>Item</b> assets, <b>Ally</b> assets, or resources among one another.",
    "traits": "Tactic.",
    "type_code": "event",
    "xp": 0
  },
  {
    "code": "02019",
    "cost": 1,
    "deck_limit": 2,
    "faction_code": "guardian",
    "flavor": "You steel your nerves and shout into the darkness. \"Come and get me!\"",
    "illustrator": "John Pacer",
    "name": "Taunt",
    "pack_code": "dwl",
    "position": 19,
    "quantity": 2,
    "skill_agility": 1,
    "skill_combat": 1,
    "skill_willpower": 1,
    "text": "Fast. Play only during your turn.\nEngage any number of enemies at your location. Draw 1 card for each enemy engaged in this way.",
    "traits": "Tactic.",
    "type_code": "event",
    "xp": 2
  },
  {
    "code": "02020",
    "cost": 2,
    "deck_limit": 2,
    "faction_code": "seeker",
    "health": 1,
    "illustrator": "Magali Villeneuve",
    "name": "Laboratory Assistant",
    "pack_code": "dwl",
    "position": 20,
    "quantity": 2,
    "sanity": 2,
    "skill_intellect": 1,
    "slot": "Ally",
    "text": "Your maximum hand size is increased by 2 while checking your hand size during the upkeep phase.\n[reaction] After Laboratory Assistant enters play: Draw 2 cards.",
    "traits": "Ally. Miskatonic. Science.",
    "type_code": "asset",
    "xp": 0
  },
  {
    "code": "02021",
    "cost": 1,
    "deck_limit": 2,
    "faction_code": "seeker",
    "flavor": "By all accounts, it should not even exist.",
    "illustrator": "Tiziano Baracchi",
    "name": "Strange Solution",
    "pack_code": "dwl",
    "position": 21,
    "quantity": 2,
    "skill_wild": 1,
    "subname": "Unidentified",
    "text": "[action] Test [intellect] (4). If you succeed, discard Strange Solution and draw 2 cards. Record in your Campaign Log that \"you have identified the solution.\"",
    "traits": "Item. Science.",
    "type_code": "asset",
    "xp": 0
  },
  {
    "code": "02022",
    "cost": 0,
    "deck_limit": 2,
    "faction_code": "seeker",
    "flavor": "You know this town like the back of your hand.",
    "illustrator": "Derk Venneman",
    "name": "Shortcut",
    "pack_code": "dwl",
    "position": 22,
    "quantity": 2,
    "skill_agility": 1,
    "skill_willpower": 1,
    "text": "Fast. Play only during your turn.\nChoose an investigator at your location. Move that investigator to a connecting location.",
    "traits": "Insight. Tactic.",
    "type_code": "event",
    "xp": 0
  },
  {
    "code": "02023",
    "cost": 1,
    "deck_limit": 2,
    "faction_code": "seeker",
    "flavor": "Some people need to know the truth at any cost. Some truths can cut like knives.",
    "illustrator": "Andreia Ugrai",
    "name": "Seeking Answers",
    "pack_code": "dwl",
    "position": 23,
    "quantity": 2,
    "skill_agility": 1,
    "skill_intellect": 1,
    "text": "<b>Investigate.</b> If you succeed, instead of discovering a clue at your location, discover a clue at a connecting location.",
    "traits": "Insight.",
    "type_code": "event",
    "xp": 0
  },
  {
    "code": "02024",
    "cost": 1,
    "deck_limit": 2,
    "faction_code": "rogue",
    "illustrator": "Dani Hartel",
    "name": "Liquid Courage",
    "pack_code": "dwl",
    "position": 24,
    "quantity": 2,
    "skill_willpower": 1,
    "text": "Uses (4 supplies).\n[action] Spend 1 supply: Choose an investigator at your location to heal 1 horror. Then, that investigator tests [willpower] (2). If the test succeeds, he or she heals 1 additional horror. If the test fails, he or she discards 1 card at random from his or her hand.",
    "traits": "Item. Illicit.",
    "type_code": "asset",
    "xp": 0
  },
  {
    "code": "02025",
    "cost": 1,
    "deck_limit": 2,
    "faction_code": "rogue",
    "illustrator": "JB Casacop",
    "name": "Think on Your Feet",
    "pack_code": "dwl",
    "position": 25,
    "quantity": 2,
    "skill_agility": 1,
    "skill_intellect": 1,
    "text": "Fast. Play when an enemy would spawn at your location.\nImmediately move to a connecting location. (The enemy still spawns at your previous location.)",
    "traits": "Trick.",
    "type_code": "event",
    "xp": 0
  },
  {
    "code": "02026",
    "deck_limit": 2,
    "faction_code": "rogue",
    "illustrator": "Mark Molnar",
    "name": "Double or Nothing",
    "pack_code": "dwl",
    "position": 26,
    "quantity": 2,
    "skill_wild": 1,
    "text": "Max 1 committed per skill test.\nDouble the difficulty of this skill test. If this skill test is successful, resolve the effects of the successful test twice.",
    "traits": "Fortune.",
    "type_code": "skill",
    "xp": 0
  },
  {
    "code": "02027",
    "cost": 1,
    "deck_limit": 2,
    "faction_code": "rogue",
    "health": 3,
    "illustrator": "Mike Capprotti",
    "name": "Hired Muscle",
    "pack_code": "dwl",
    "position": 27,
    "quantity": 2,
    "sanity": 1,
    "skill_combat": 1,
    "slot": "Ally",
    "text": "You get +1 [combat].\n<b>Forced</b> – At the end of the upkeep phase: You must either pay 1 resource or discard Hired Muscle.",
    "traits": "Ally. Criminal.",
    "type_code": "asset",
    "xp": 1
  },
  {
    "code": "02028",
    "cost": 4,
    "deck_limit": 2,
    "faction_code": "mystic",
    "illustrator": "Romana Kendelic",
    "name": "Rite of Seeking",
    "pack_code": "dwl",
    "position": 28,
    "quantity": 2,
    "skill_intellect": 1,
    "slot": "Arcane",
    "text": "Uses (3 charges).\n[action] Spend 1 charge: <b>Investigate.</b> Investigate using [willpower] instead of [intellect]. If you succeed, discover 1 additional clue at this location. If a [skull], [cultist], [tablet], [elder_thing], or [auto_fail] symbol is revealed during this test, after this test resolves lose all remaining actions and immediately end your turn.",
    "traits": "Spell.",
    "type_code": "asset",
    "xp": 0
  },
  {
    "code": "02029",
    "cost": 1,
    "deck_limit": 2,
    "faction_code": "mystic",
    "flavor": "The wax tapers give off an eerie glow, and the flames move as if they are alive.",
    "illustrator": "Kristina Gehrmann",
    "name": "Ritual Candles",
    "pack_code": "dwl",
    "position": 29,
    "quantity": 2,
    "skill_willpower": 1,
    "slot": "Hand",
    "text": "[reaction] After a [skull], [cultist], [tablet], or [elder_thing] symbol is revealed during a test you are performing: You get +1 skill value for this test.",
    "traits": "Item.",
    "type_code": "asset",
    "xp": 0
  },
  {
    "code": "02030",
    "cost": 2,
    "deck_limit": 2,
    "faction_code": "mystic",
    "flavor": "From the unreal lead me to the real<br>From the darkness lead me to the light<br>From the dead lead me to the immortal",
    "illustrator": "Aaron B. Miller",
    "name": "Clarity of Mind",
    "pack_code": "dwl",
    "position": 30,
    "quantity": 2,
    "skill_willpower": 1,
    "slot": "Arcane",
    "text": "Uses (3 charges).\n[action] Spend 1 charge: Heal 1 horror from an investigator at your location.",
    "traits": "Spell.",
    "type_code": "asset",
    "xp": 0
  },
  {
    "code": "02031",
    "cost": 3,
    "deck_limit": 2,
    "faction_code": "mystic",
    "illustrator": "Christina Davis",
    "name": "Bind Monster",
    "pack_code": "dwl",
    "position": 31,
    "quantity": 2,
    "skill_intellect": 1,
    "skill_willpower": 1,
    "text": "<b>Evade.</b> This evasion attempt uses [willpower] instead of [agility]. If you succeed and the enemy is non‑<i>Elite</i>, evade it and attach Bind Monster to it.\n[reaction] When attached enemy would ready: Test [willpower] (3). If you succeed, attached enemy does not ready. If you fail, discard Bind Monster.",
    "traits": "Spell.",
    "type_code": "event",
    "xp": 2
  },
  {
    "code": "02032",
    "cost": 1,
    "deck_limit": 2,
    "faction_code": "survivor",
    "illustrator": "Stephen Somers",
    "name": "Fire Axe",
    "pack_code": "dwl",
    "position": 32,
    "quantity": 2,
    "skill_combat": 1,
    "slot": "Hand",
    "text": "[action]: <b>Fight.</b> If you have no resources in your resource pool, this attack deals +1 damage.\n[free] During an attack using Fire Axe, spend 1 resource: You get +2 [combat] for this skill test. (Limit three times per attack.)",
    "traits": "Item. Weapon. Melee.",
    "type_code": "asset",
    "xp": 0
  },
  {
    "code": "02033",
    "cost": 3,
    "deck_limit": 2,
    "faction_code": "survivor",
    "flavor": "The broad-shouldered young man exudes the sort of confidence one only finds in youth.",
    "health": 1,
    "illustrator": "Arden Beckwith",
    "is_unique": true,
    "name": "Peter Sylvestre",
    "pack_code": "dwl",
    "position": 33,
    "quantity": 2,
    "sanity": 2,
    "skill_willpower": 1,
    "slot": "Ally",
    "subname": "Big Man on Campus",
    "text": "You get +1 [agility].\n[reaction] After your turn ends: Heal 1 horror from Peter Sylvestre.",
    "traits": "Ally. Miskatonic.",
    "type_code": "asset",
    "xp": 0
  },
  {
    "code": "02034",
    "cost": 1,
    "deck_limit": 2,
    "faction_code": "survivor",
    "illustrator": "Rafał Hrynkiewicz",
    "name": "Bait and Switch",
    "pack_code": "dwl",
    "position": 34,
    "quantity": 2,
    "skill_agility": 1,
    "skill_intellect": 1,
    "text": "<b>Evade.</b> If you succeed, if the enemy is non-<i>Elite</i>, evade the enemy and move it to a connecting location.",
    "traits": "Trick.",
    "type_code": "event",
    "xp": 0
  },
  {
    "code": "02035",
    "cost": 3,
    "deck_limit": 2,
    "faction_code": "survivor",
    "flavor": "The broad-shouldered young man exudes the sort of confidence one only finds in youth.",
    "health": 1,
    "illustrator": "Arden Beckwith",
    "is_unique": true,
    "name": "Peter Sylvestre",
    "pack_code": "dwl",
    "position": 35  ,
    "quantity": 2,
    "sanity": 3,
    "skill_willpower": 1,
    "slot": "Ally",
    "subname": "Big Man on Campus",
    "text": "You get +1 [agility] and +1 [willpower].\n[reaction] After your turn ends: Heal 1 horror from Peter Sylvestre.",
    "traits": "Ally. Miskatonic.",
    "type_code": "asset",
    "xp": 2
  },
  {
    "code": "02036",
    "cost": 2,
    "deck_limit": 2,
    "faction_code": "neutral",
    "illustrator": "Ilich Henriquez",
    "name": "Kukri",
    "pack_code": "dwl",
    "position": 36  ,
    "quantity": 2,
    "skill_combat": 1,
    "slot": "Hand",
    "text": "[action]: <b>Fight.</b> You get +1 [combat] for this attack. If you succeed, you may spend 1 additional action to deal +1 damage for this attack.",
    "traits": "Item. Weapon. Melee.",
    "type_code": "asset",
    "xp": 0
  },
  {
    "code": "02037",
    "deck_limit": 2,
    "faction_code": "neutral",
    "flavor": "One man's loan is another man's treasure.",
    "illustrator": "Sara Biddle",
    "name": "Indebted",
    "pack_code": "dwl",
    "position": 37,
    "quantity": 2,
    "subtype_code": "basicweakness",
    "text": "Permanent.\nYou start each game with 2 fewer resources.",
    "traits": "Flaw.",
    "type_code": "treachery"
  },
  {
    "code": "02038",
    "deck_limit": 2,
    "faction_code": "neutral",
    "illustrator": "Andreia Ugrai",
    "name": "Internal Injury",
    "pack_code": "dwl",
    "position": 38,
    "quantity": 2,
    "subtype_code": "basicweakness",
    "text": "<b>Revelation</b> - Place Internal Injury into play in your threat area.\n<b>Forced</b> - At the end of your turn: Take 1 direct damage.\n[action][action]: Discard Internal Injury.",
    "traits": "Injury.",
    "type_code": "treachery"
  },
  {
    "code": "02039",
    "deck_limit": 2,
    "faction_code": "neutral",
    "illustrator": "Sara Biddle",
    "name": "Chronophobia",
    "pack_code": "dwl",
    "position": 39,
    "quantity": 2,
    "subtype_code": "basicweakness",
    "text": "<b>Revelation</b> - Place Chronophobia into play in your threat area.\n<b>Forced</b> - At the end of your turn: Take 1 direct horror.\n[action][action]: Discard Chronophobia.",
    "traits": "Madness.",
    "type_code": "treachery"
  }
];

export default cards;