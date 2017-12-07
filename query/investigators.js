/**
 * This file is generated code. Do not modify manually.
 * To regenerate: npm run codegen
 * See /codegen directory for implementation details.
 * @flow
 **/

import type {Card} from '../cards';
export const lookup: {[string]: Array<Card>} = {
  "Roland Banks": [
    {
      "back_flavor": "Roland had always taken comfort in procedure and rules. As an agent in the Bureau, he was relieved to have guidelines to follow in any given situation. But lately, his Federal Agent's Handbook had been entirely unhelpful given the cases he'd been assigned. Try as he might, Roland could find no mention of what to do when confronted with strange creatures, gates through time and space, or magic spells. If he hadn't seen it with his own eyes, he would never have believed it... and there's no way his superiors would understand. Roland knew he would have to handle this one himself.",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Guardian cards ([guardian]) level 0-5, Seeker cards ([seeker]) level 0-2, Neutral cards level 0-5.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Roland's .38 Special, Cover Up, 1 random basic weakness.",
      "code": "01001",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "guardian",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "faction": [
            "seeker"
          ],
          "level": {
            "min": 0,
            "max": 2
          }
        }
      ],
      "deck_requirements": "size:30, card:01006, card:01007, random:subtype:basicweakness",
      "double_sided": true,
      "faction_code": "guardian",
      "flavor": "Everything by the book: every \"i\" dotted, every \"t\" crossed. It has worked, until now.",
      "health": 9,
      "illustrator": "Magali Villeneuve",
      "is_unique": true,
      "name": "Roland Banks",
      "pack_code": "core",
      "position": 1,
      "quantity": 1,
      "sanity": 5,
      "skill_agility": 2,
      "skill_intellect": 3,
      "skill_combat": 4,
      "skill_willpower": 3,
      "subname": "The Fed",
      "text": "[reaction] After you defeat an enemy: Discover 1 clue at your location. (Limit once per round.)\n[elder_sign] effect: +1 for each clue on your location.",
      "traits": "Agency. Detective.",
      "type_code": "investigator",
      "img_src": require("../img/cards/01001.png"),
    }
  ],
  "Daisy Walker": [
    {
      "back_flavor": "As a respected librarian at Miskatonic University, Daisy had always felt that books were the most important thing in her life. She explored in fiction what she abhorred in life: horror, violence, fear. Then, she stumbled across the John Dee translation of the Necronomicon. It was blasphemous, unholy, and too awful to be read. But given her studies in obscure and occult subjects, Daisy knew there was more truth than fiction within the book's pages. She began to wonder what other secrets the restricted collection of the Orne Library held...",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Seeker cards ([seeker]) level 0-5, Mystic cards ([mystic]) level 0-2, Neutral cards level 0-5.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Daisy’s Tote Bag,  (John Dee Translation), 1 random basic weakness.",
      "code": "01002",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "seeker",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "faction": [
            "mystic"
          ],
          "level": {
            "min": 0,
            "max": 2
          }
        }
      ],
      "deck_requirements": "size:30, card:01008, card:01009, random:subtype:basicweakness",
      "double_sided": true,
      "faction_code": "seeker",
      "flavor": "\"I know of books so powerful, they can rewrite reality.\"",
      "health": 5,
      "illustrator": "Magali Villeneuve",
      "is_unique": true,
      "name": "Daisy Walker",
      "pack_code": "core",
      "position": 2,
      "quantity": 1,
      "sanity": 9,
      "skill_agility": 2,
      "skill_intellect": 5,
      "skill_combat": 2,
      "skill_willpower": 3,
      "subname": "The Librarian",
      "text": "You may take an additional action during your turn, which can only be used on <i>Tome</i> [action] abilities.\n[elder_sign] effect: +0. If you succeed, draw 1 card for each <i>Tome</i> you control.",
      "traits": "Miskatonic.",
      "type_code": "investigator",
      "img_src": require("../img/cards/01002.png"),
    }
  ],
  "\"Skids\" O'Toole": [
    {
      "back_flavor": "Skids hadn't planned on a life of crime. But sometimes doing the right thing means getting your hands dirty. The cops didn't care that Skids needed the money for his mother's operation. His mother died of her illness during the second year of his sentence. His cellmate, Brad Hollins, told him there were worse fates than death. He ranted and raved in a quiet voice every evening about the \"Old Ones\" and told Skids about bizzare adventures he'd had while dreaming. Skids didn't give it much thought until the night he woke to the sight of his cellmate bursting into flames. When Skids was finally released, he returned to Arkham, looking for answers.",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Rogue cards ([rogue]) level 0-5, Guardian cards ([guardian]) level 0-2, Neutral cards level 0-5.\n<b>Deckbuilding requirements</b> (do not count toward deck size): On the Lam, Hospital Debts, 1 random basic weakness.",
      "code": "01003",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "rogue",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "faction": [
            "guardian"
          ],
          "level": {
            "min": 0,
            "max": 2
          }
        }
      ],
      "deck_requirements": "size:30, card:01010, card:01011, random:subtype:basicweakness",
      "double_sided": true,
      "faction_code": "rogue",
      "flavor": "\"I didn't get out of the joint just to watch the world end.\"",
      "health": 8,
      "illustrator": "Magali Villeneuve",
      "is_unique": true,
      "name": "\"Skids\" O'Toole",
      "pack_code": "core",
      "position": 3,
      "quantity": 1,
      "sanity": 6,
      "skill_agility": 4,
      "skill_intellect": 3,
      "skill_combat": 3,
      "skill_willpower": 2,
      "subname": "The Ex-Con",
      "text": "[free] During your turn, spend 2 resources: You may take an additional action this turn. (Limit once per turn.)\n[elder_sign] effect: +2. If you succeed, gain 2 resources.",
      "traits": "Criminal.",
      "type_code": "investigator",
      "img_src": require("../img/cards/01003.png"),
    }
  ],
  "Agnes Baker": [
    {
      "back_flavor": "Agnes Baker may be just an unassuming waitress in this life, but in a previous life, in a time and age undreamed of in the modern world, she had been a powerful witch. It began when she found a strange artifact — a key of some kind — in a dusty collection of family belongings in her attic. When she touched it, the memories came flooding back, along with one word: \"Hyperborea.\" The more she delved into the visions and memories of her former life, the stronger her powers grew... and the more frightened she became.",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Mystic cards ([mystic]) level 0-5, Survivor cards ([survivor]) level 0-2, Neutral cards level 0-5.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Heirloom of Hyperborea, Dark Memory, 1 random basic weakness.",
      "code": "01004",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "mystic",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "faction": [
            "survivor"
          ],
          "level": {
            "min": 0,
            "max": 2
          }
        }
      ],
      "deck_requirements": "size:30, card:01012, card:01013, random:subtype:basicweakness",
      "double_sided": true,
      "faction_code": "mystic",
      "flavor": "\"I remember another life, one of sorcery and conquest.\"",
      "health": 6,
      "illustrator": "Magali Villeneuve",
      "is_unique": true,
      "name": "Agnes Baker",
      "pack_code": "core",
      "position": 4,
      "quantity": 1,
      "sanity": 8,
      "skill_agility": 3,
      "skill_intellect": 2,
      "skill_combat": 2,
      "skill_willpower": 5,
      "subname": "The Waitress",
      "text": "[reaction] After 1 or more horror is placed on Agnes Baker: Deal 1 damage to an enemy at your location. (Limit once per phase.)\n[elder_sign] effect: +1 for each horror on Agnes Baker.",
      "traits": "Sorcerer.",
      "type_code": "investigator",
      "img_src": require("../img/cards/01004.png"),
    }
  ],
  "Wendy Adams": [
    {
      "back_flavor": "Mama used to let Wendy play with her necklace when she was small. Mama would tell her stories, and Wendy would spin the necklace and watch as it glittered. Then, word came that her father had been lost at sea, and Mama started acting strange, drawing unusual symbols in chalk all over the house. They took Mama to the asylum, and Wendy went to the orphatage. Before they took her away, Mama gave her the necklace, to \"protect her.\" Wendy stayed in the orphanage for several years before running away, deciding that she could take better care of herself on her own.",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Survivor cards ([survivor]) level 0-5, Rogue cards ([rogue]) level 0-2, Neutral cards level 0-5.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Wendy's Amulet, Abandoned and Alone, 1 random basic weakness.",
      "code": "01005",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "survivor",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "faction": [
            "rogue"
          ],
          "level": {
            "min": 0,
            "max": 2
          }
        }
      ],
      "deck_requirements": "size:30, card:01014, card:01015, random:subtype:basicweakness",
      "double_sided": true,
      "faction_code": "survivor",
      "health": 7,
      "illustrator": "Jacob Murray",
      "is_unique": true,
      "name": "Wendy Adams",
      "pack_code": "core",
      "position": 5,
      "quantity": 1,
      "sanity": 7,
      "skill_agility": 4,
      "skill_intellect": 3,
      "skill_combat": 1,
      "skill_willpower": 4,
      "subname": "The Urchin",
      "text": "[reaction] When you reveal a chaos token, choose and discard 1 card from your hand: Cancel that chaos token and return it to the bag. Reveal a new chaos token. (Limit once per test/ability.)\n[elder_sign] effect: +0. If Wendy's Amulet is in play, you automatically succeed instead.",
      "traits": "Drifter.",
      "type_code": "investigator",
      "img_src": require("../img/cards/01005.png"),
    }
  ],
  "Zoey Samaras": [
    {
      "back_flavor": "Zoey had known that she was special ever since God spoke to her one night when she was six years old... the night that terrible fire took away her parents. He told her that He had chosen her from among all the people of the world to be His agent. She would protect the innocent and punish the wicked. Since then, He comes to her in times of trouble, offering guidance and comfort. Zoey now travels from city to city, taking work as a chef to support herself. When she isn't working, she stalks the night, guided by the Lord's voice. Wherever she finds wickedness, she strikes it down without remorse or hesitation.",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Guardian cards ([guardian]) level 0-5, Neutral cards level 0-5, up to five level 0 cards from any other class.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Zoey's Cross, Smite the Wicked, 1 random basic weakness.",
      "code": "02001",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "guardian",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "level": {
            "min": 0,
            "max": 0
          },
          "limit": 5,
          "error": "You cannot have more than 5 cards that are not Guardian or Neutral"
        }
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
      "type_code": "investigator",
      "img_src": require("../img/cards/02001.png"),
    }
  ],
  "Rex Murphy": [
    {
      "back_flavor": "When disaster strikes, Rex Murphy is usually on hand, suffering the consequences. After spending a day with Rex, even the most hardened skeptic will concede that the man is cursed. Anytime he had a lead on a good story, something would go wrong. That business in Innsmouth with the photographs that had blown out to sea. The tracks in Dunwich that had washed away in the rain just before he'd brought the sheriff. His terrible fortune has more than once exposed him to gruesome beasts and occult conspiracies. To survive, Rex has developed an inquisitive mind, keeping one step ahead of the next disaster.",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Seeker cards ([seeker]) level 0-5, Neutral cards level 0-5, up to five level 0 cards from any other class.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Search for the Truth, Rex's Curse, 1 random basic weakness.\n<b>Deckbuilding requirements</b>: No <i>Fortune</i> cards.",
      "code": "02002",
      "deck_limit": 1,
      "deck_options": [
        {
          "not": true,
          "trait": [
            "fortune"
          ]
        },
        {
          "faction": [
            "seeker",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "level": {
            "min": 0,
            "max": 0
          },
          "limit": 5,
          "error": "You cannot have more than 5 cards that are not Seeker or Neutral"
        }
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
      "type_code": "investigator",
      "img_src": require("../img/cards/02002.png"),
    }
  ],
  "Jenny Barnes": [
    {
      "back_flavor": "Jenny Barnes has spent the majority of her young life in pursuit of creature comforts, fine dining, and the latest fashions. That all changed when she received a letter from her sister, Isabelle. In this letter, Isabelle confessed that mysterious forces were aligning against her and that she feared she may fall victim to some paranormal threat. It was the last letter Jenny received from her beloved sister. Jenny has since returned to the States to track down and investigate all occult occurrences she can find. Hardly a wilting flower, she has proven herself a crack shot as well as a fearless and clever investigator of the unknown. Until Isabelle's disappearance is explained, Jenny will never relent in her search.",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Rogue cards ([rogue]) level 0-5, Neutral cards level 0-5, up to five level 0 cards from any other class.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Jenny's Twin .45s, Searching for Izzie, 1 random basic weakness.",
      "code": "02003",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "rogue",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "level": {
            "min": 0,
            "max": 0
          },
          "limit": 5,
          "error": "You cannot have more than 5 cards that are not Rogue or Neutral"
        }
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
      "type_code": "investigator",
      "img_src": require("../img/cards/02003.png"),
    }
  ],
  "Jim Culver": [
    {
      "back_flavor": "Jazz has been nothing but trouble for Jim since the day he picked up his daddy's trumpet. There was something weird and otherworldly about the writing on the inside of the bell, but the tones from it were smooth and dark, like good coffee. That trumpet landed Jim a lot of gigs until the time it made Widow Jenkins get up and dance, the day he played at her funeral. After that, it was kind of hard to find work. Since then, Jim has learned a lot about jazz — and the things the graveyard ghouls talk about on cold autumn nights. Lately, they've been talking about The End, as in the end of everything that is and could be. The Final Rhapsody. The fact is, Jim isn't too keen on that idea.",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Mystic cards ([mystic]) level 0-5, Neutral cards level 0-5, up to five level 0 cards from any other class.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Jim's Trumpet, Final Rhapsody, 1 random basic weakness.",
      "code": "02004",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "mystic",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "level": {
            "min": 0,
            "max": 0
          },
          "limit": 5,
          "error": "You cannot have more than 5 cards that are not Mystic or Neutral"
        }
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
      "type_code": "investigator",
      "img_src": require("../img/cards/02004.png"),
    }
  ],
  "\"Ashcan\" Pete": [
    {
      "back_flavor": "At night, \"Ashcan\" Pete sleeps wherever his travels take him: in a field, on a train, or maybe, if he's lucky, in a barn. He bunks with his loyal hound dog, Duke, on one side and his beat-up guitar on the other. And sometimes when Pete sleeps, he dreams. He dreams of haunted, tortured places and of horrible creatures. When he wakes up, he knows that someone needs his help, because his dreams are true. He could not say how long he has been on the road, living by his wits, but he can say for certain no place is too far to go to help someone in need. And as long as Pete can help people, he is not likely to stop wandering any time soon.",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Survivor cards ([survivor]) level 0-5, Neutral cards level 0-5, up to five level 0 cards from any other class.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Duke, Wracked by Nightmares, 1 random basic weakness.",
      "code": "02005",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "survivor",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "level": {
            "min": 0,
            "max": 0
          },
          "limit": 5,
          "error": "You cannot have more than 5 cards that are not Survivor or Neutral"
        }
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
      "type_code": "investigator",
      "img_src": require("../img/cards/02005.png"),
    }
  ],
  "Marie Lambeau": [
    {
      "back_flavor": "Marie Lambeau always had a voice to die for. People called her \"the Smoky Velvet.\" They said she was born to sing jazz, that she had the magic touch — and maybe they were right. After all, the songs she heard in her dreams ever since her Grand-Mère passed away were like nothing she'd ever heard before. The vocals sounded like no language spoken on Earth, the notes twisted and warped. Why her Grand-Mère had moved from New Orleans to Arkham, Marie would never know. People used to call her Grand-Mère a witch. Maybe there's more than just jazz in Marie's blood, after all...",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: <i>Spell</i> cards level 0-5, Mystic cards ([mystic]) level 0-3, Neutral cards level 0-5, <i>Occult</i> cards level 0, up to five other level 0 Seeker and/or Survivor cards ([seeker] and/or [survivor]).\n<b>Deckbuilding requirements</b> (do not count toward deck size): Mystifying Song, Baron Samedi, 1 random basic weakness.",
      "code": "99001",
      "deck_limit": 1,
      "deck_options": [
        {
          "trait": [
            "spell"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "faction": [
            "mystic"
          ],
          "level": {
            "min": 0,
            "max": 3
          }
        },
        {
          "faction": [
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "trait": [
            "occult"
          ],
          "level": {
            "min": 0,
            "max": 0
          }
        },
        {
          "faction": [
            "seeker",
            "survivor"
          ],
          "level": {
            "min": 0,
            "max": 0
          },
          "limit": 5
        }
      ],
      "deck_requirements": "size:30, card:99002, card:99003, random:subtype:basicweakness",
      "double_sided": true,
      "faction_code": "mystic",
      "health": 6,
      "illustrator": "Tony Foti",
      "is_unique": true,
      "name": "Marie Lambeau",
      "pack_code": "promo",
      "position": 1,
      "quantity": 1,
      "sanity": 8,
      "skill_agility": 3,
      "skill_intellect": 4,
      "skill_combat": 1,
      "skill_willpower": 4,
      "subname": "The Entertainer",
      "text": "While you have 1 or more doom among cards you control, you may take an additional action during your turn, which can only be used to play <i>Spell</i> cards or activate <i>Spell</i> [action] abilities.\n[elder_sign] effect: +1. You may add 1 doom to or remove 1 doom from a card you control.",
      "traits": "Performer. Sorcerer.",
      "type_code": "investigator",
      "img_src": require("../img/cards/99001.png"),
    }
  ],
  "Mark Harrigan": [
    {
      "back_flavor": "There were plenty who returned from the war broken in body or spirit. But Mark Harrigan had witnessed horrors he could not explain. His beloved Sophie believed him when he wrote her about the things he saw - not the men killing other men, but the other things. The creatures. When he came home and went to visit her, he found the reasons she believed him: she had one of the creatures inside her, eating her from the inside out. As he watched in helpless horror, she faded away into the air, screaming as thing finished its meal. Now everyone thinks Mark Harrigan is crazy. Maybe he's finally lost it, after all. But he knows the monsters are real, and he will not rest until every last one is dead.",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding Options</b>: Guardian cards ([guardian]) level 0-5, Neutral cards level 0-5, <i>Tactic</i> cards level 0.\n<b>Deckbuilding Requirements</b> (do not count toward deck size): The Home Front, Shell Shock, Sophie, 1 random basic weakness.",
      "code": "03001",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "guardian",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "trait": [
            "tactic"
          ],
          "level": {
            "min": 0,
            "max": 0
          }
        }
      ],
      "deck_requirements": "size:30, card:03007, card:03008, card:03009, random:subtype:basicweakness",
      "double_sided": true,
      "faction_code": "guardian",
      "flavor": "He'd burn the entire town down if necessary, but he wouldn't let those monsters take anyone else.",
      "health": 9,
      "illustrator": "Magali Villeneuve",
      "is_unique": true,
      "name": "Mark Harrigan",
      "pack_code": "ptc",
      "position": 1,
      "quantity": 1,
      "sanity": 5,
      "skill_agility": 3,
      "skill_intellect": 2,
      "skill_combat": 5,
      "skill_willpower": 3,
      "subname": "The Soldier",
      "text": "You begin the game with Sophie <i>(In Loving Memory)</i> in play.\n[reaction] After damage is placed on a card you control: Draw 1 card. (Limit once per phase.)\n[elder_sign] effect: +1 for each damage on Mark Harrigan.",
      "traits": "Veteran",
      "type_code": "investigator",
      "img_src": require("../img/cards/03001.png"),
    }
  ],
  "Minh Thi Phan": [
    {
      "back_flavor": "Minh never quite felt like she belonged in America. Things were even harder for her family before they moved, being Vietnamese in Korea under Japanese rule. She worked hard to get her college degree, reminding herself that her parents had sacrificed much to come to the States. Finally, her father became acquainted with a man from Arkham, Mr. Thomas, who offered Minh a job at his office. he was kind to her, at first - but then he started reading The King in Yellow, and his demeanor changed completely. He'd lent it to Minh, but she dared not read past the first act. Three weeks later, Mr. Thomas was found dead, having taken his own life… And The King in Yellow is the key to the truth.",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding Options</b>: Seeker cards ([seeker]) level 0-5, Neutral cards level 0-5, Survivor cards ([survivor]) level 0-2.\n<b>Deckbuilding Requirements</b> (do not count toward deck size): Analytical Mind, The King in Yellow <i>(Act 1)</i>, 1 random basic weakness.",
      "code": "03002",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "seeker",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "faction": [
            "survivor"
          ],
          "level": {
            "min": 0,
            "max": 2
          }
        }
      ],
      "deck_requirements": "size:30, card:03010, card:03011, random:subtype:basicweakness",
      "double_sided": true,
      "faction_code": "seeker",
      "flavor": "\"You can depend on me to guide you through the unknown.\"",
      "health": 7,
      "illustrator": "Tony Foti",
      "is_unique": true,
      "name": "Minh Thi Phan",
      "pack_code": "ptc",
      "position": 2,
      "quantity": 1,
      "sanity": 7,
      "skill_agility": 2,
      "skill_intellect": 4,
      "skill_combat": 2,
      "skill_willpower": 4,
      "subname": "The Secretary",
      "text": "[reaction] After an investigator at your location commits a card to a skill test: That card gains a [wild] icon until the end of the test. (Limit once for each investigator per round.)\n[elder_sign] effect: +1. You may choose a skill card committed to this skill test to return to its owner's hand after this test ends.",
      "traits": "Assistant.",
      "type_code": "investigator",
      "img_src": require("../img/cards/03002.png"),
    }
  ],
  "Sefina Rousseau": [
    {
      "back_flavor": "Even when she was young, Sefina's alluring paintings drew the eyes of many. When an art collector from Paris visited Tahiti and discovered Sefina, he offered to support her work in exchange for her services creating imitations. Her keen eye and steady hand were perfect for the task, and Sefina found the art of forgery to be more engaging and captivating than she'd imagined. Her most recent work came from an anonymous stranger with deep pockets, who'd tasked her with recreating a panorama of a strange, alien city. When she completed the final stroke, she was sent hurtling into the world of the painting. She only barely survived the ordeal, passing out from exhaustion. When she awoke in her gallery, she knew it had been real.",
      "back_text": "<b>Deck size</b>: 33.\n<b>Deckbuilding Options</b>: Rogue cards ([rogue]) level 0-5, Neutral cards level 0-5, Mystic cards ([mystic]) level 0-2.\n<b>Deckbuilding Requirements</b> (do not count toward deck size): 3 copies of The Painted World, 1 copy of Stars of Hyades, 1 random basic weakness.",
      "code": "03003",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "rogue",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "faction": [
            "mystic"
          ],
          "level": {
            "min": 0,
            "max": 2
          }
        }
      ],
      "deck_requirements": "size:33, card:03012, card:03013, random:subtype:basicweakness",
      "double_sided": true,
      "faction_code": "rogue",
      "health": 5,
      "illustrator": "Jake Murray",
      "is_unique": true,
      "name": "Sefina Rousseau",
      "pack_code": "ptc",
      "position": 3,
      "quantity": 1,
      "sanity": 9,
      "skill_agility": 4,
      "skill_intellect": 2,
      "skill_combat": 2,
      "skill_willpower": 4,
      "subname": "The Painter",
      "text": "<b>Forced</b> - When you would draw your opening hand: Draw 13 cards, instead. Choose up to 5 events to place beneath this card and keep 8 cards as your opening hand. Discard the rest. <i>(You cannot mulligan.)</i>\n[action]: Choose an event beneath this card and draw it. Does not provoke attacks of opportunity.\n[elder_sign] effect: +3. You may choose an event beneath this card and draw it.",
      "traits": "Artist.",
      "type_code": "investigator",
      "img_src": require("../img/cards/03003.png"),
    }
  ],
  "Akachi Onyele": [
    {
      "back_flavor": "As a young girl in Nigeria, Akachi became used to being set apart. Her habits of chattering away at thin air and secluding herself from other children led her village to believe she was mad. Her village Dibia was the first to see her true potential. He believed Akachi was marked by the spirits for greatness, and he taught her how to commune with them to her advantage. Under his tutelage, Akachi grew into a wise young leader, respected not just in her village, but in every community she aided. Now she meets her destiny head on, seeking out unnatural troubles that only her knowledge can stop.",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding Options</b>: Mystic cards ([mystic]) level 0-5, Neutral cards level 0-5, cards with \"uses (charges)\" level 0-4, <i>Occult</i> cards level 0.\n<b>Deckbuilding Requirements</b> (do not count toward deck size): Spirit-Speaker, Angered Spirits, 1 random basic weakness.",
      "code": "03004",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "mystic",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "uses": [
            "charges"
          ],
          "level": {
            "min": 0,
            "max": 4
          }
        },
        {
          "trait": [
            "occult"
          ],
          "level": {
            "min": 0,
            "max": 0
          }
        }
      ],
      "deck_requirements": "size:30, card:03014, card:03015, random:subtype:basicweakness",
      "double_sided": true,
      "faction_code": "mystic",
      "flavor": "\"I will journey to the lands beyond. I do not fear them.\"",
      "health": 6,
      "illustrator": "Magali Villeneuve",
      "is_unique": true,
      "name": "Akachi Onyele",
      "pack_code": "ptc",
      "position": 4,
      "quantity": 1,
      "sanity": 8,
      "skill_agility": 3,
      "skill_intellect": 2,
      "skill_combat": 3,
      "skill_willpower": 5,
      "subname": "The Shaman",
      "text": "Your assets with \"uses (charges)\" enter play with 1 additional charge on them.\n[elder_sign] effect: +1. Add 1 charge to an asset with \"uses (charges)\" you control.",
      "traits": "Sorcerer.",
      "type_code": "investigator",
      "img_src": require("../img/cards/03004.png"),
    }
  ],
  "William Yorick": [
    {
      "back_flavor": "William Yorick never wanted to be a gravedigger. He had trained to be an actor and had worked for years in Boston, taking whatever parts were available. Shakespeare was the best stuff, of course, but after many years and hardly any roles, he was forced to admit that the stage was not his destiny. Digging graves was tedious work, but the dead made for an excellent audience, and William always did love a soliloquy. The job took a dark turn when he found degenerate creatures eating the dead in their graves. Ever since that night, Yorick has kept the creatures at bay, using whatever means he can to protect the dead.",
      "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding Options</b>: Survivor cards ([survivor]) level 0-5, Neutral cards level 0-5, Guardian cards ([guardian]) level 0-2.\n<b>Deckbuilding Requirements</b> (do not count toward deck size): Bury Them Deep, Graveyard Ghouls, 1 random basic weakness.",
      "code": "03005",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "survivor",
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        },
        {
          "faction": [
            "guardian"
          ],
          "level": {
            "min": 0,
            "max": 2
          }
        }
      ],
      "deck_requirements": "size:30, card:03016, card:03017, random:subtype:basicweakness",
      "double_sided": true,
      "faction_code": "survivor",
      "flavor": "\"I am but a simple player in this drama, but if I am lucky, I'll live to see the curtains fall.\"",
      "health": 8,
      "illustrator": "Jake Murray",
      "is_unique": true,
      "name": "William Yorick",
      "pack_code": "ptc",
      "position": 5,
      "quantity": 1,
      "sanity": 6,
      "skill_agility": 3,
      "skill_intellect": 2,
      "skill_combat": 4,
      "skill_willpower": 3,
      "subname": "The Gravedigger",
      "text": "[reaction] After you defeat an enemy: Play an asset from your discard pile <i>(paying its cost)</i>. (Limit once per round.)\n[elder_sign] effect: +2. If this test is successful, return 1 card from your discard pile to your hand.",
      "traits": "Warden.",
      "type_code": "investigator",
      "img_src": require("../img/cards/03005.png"),
    }
  ],
  "Lola Hayes": [
    {
      "back_flavor": "Lola has performed to sold-out houses worldwide, but no play has been as haunting or as odd as The King in Yellow. Even during rehearsals, everything about it brought calamity and dread. When her co-star, Miriam, was found floating dead in the Seine, she decided she'd had enough, and penned a letter to the director explaining that her next performance would be her last. Now she heads home to Arkham for one final show, hoping she can finally be rid of this dreadful play.",
      "back_text": "<b>Deck size</b>: 35.\n<b>Deckbuilding Options</b>: Survivor, Guardian, Seeker, Rogue, and Mystic cards ([survivor], [guardian], [seeker], [rogue], and [mystic]) level 0-3, Neutral cards level 0-5.\n<b>Deckbuilding Requirements</b> (do not count toward deck size): 2 copies of Improvisation, 2 copies of Crisis of Identity, 1 random basic weakness.\n<b>Additional Requirements</b>: Your deck must include at least 7 cards each from 3 different classes ([survivor], [guardian], [seeker], [rogue], or [mystic]).",
      "code": "03006",
      "deck_limit": 1,
      "deck_options": [
        {
          "faction": [
            "survivor",
            "guardian",
            "seeker",
            "rogue",
            "mystic"
          ],
          "level": {
            "min": 0,
            "max": 3
          },
          "atleast": {
            "factions": 3,
            "min": 7
          },
          "error": "You must have at least 7 cards from 3 different factions"
        },
        {
          "faction": [
            "neutral"
          ],
          "level": {
            "min": 0,
            "max": 5
          }
        }
      ],
      "deck_requirements": "size:35, card:03018, card:03018, card:03019, card:03019, random:subtype:basicweakness",
      "double_sided": true,
      "faction_code": "neutral",
      "flavor": "Perhaps this would be her big comeback.",
      "health": 6,
      "illustrator": "Magali Villeneuve",
      "is_unique": true,
      "name": "Lola Hayes",
      "pack_code": "ptc",
      "position": 6,
      "quantity": 1,
      "sanity": 6,
      "skill_agility": 3,
      "skill_intellect": 3,
      "skill_combat": 3,
      "skill_willpower": 3,
      "subname": "The Actress",
      "text": "<b>Forced</b> - After you draw your opening hand: Choose a role ([survivor], [guardian], [seeker], [rogue], [mystic], or Neutral).\nYou can only play, commit, or trigger abilities on Neutral cards or cards of your role.\n[lightning]: Switch your role. (Limit once per round.)\n[elder_sign] effect: +2. You may switch roles.",
      "traits": "Performer.",
      "type_code": "investigator",
      "img_src": require("../img/cards/03006.png"),
    }
  ]
};
export const values: Array<string> = [
  "Roland Banks",
  "Daisy Walker",
  "\"Skids\" O'Toole",
  "Agnes Baker",
  "Wendy Adams",
  "Zoey Samaras",
  "Rex Murphy",
  "Jenny Barnes",
  "Jim Culver",
  "\"Ashcan\" Pete",
  "Marie Lambeau",
  "Mark Harrigan",
  "Minh Thi Phan",
  "Sefina Rousseau",
  "Akachi Onyele",
  "William Yorick",
  "Lola Hayes"
];
