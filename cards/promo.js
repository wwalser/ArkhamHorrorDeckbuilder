// @flow
import type {Card} from './index';

const cards:Array<Card> = [
  {
    "back_flavor": "Marie Lambeau always had a voice to die for. People called her \"the Smoky Velvet.\" They said she was born to sing jazz, that she had the magic touch — and maybe they were right. After all, the songs she heard in her dreams ever since her Grand-Mère passed away were like nothing she'd ever heard before. The vocals sounded like no language spoken on Earth, the notes twisted and warped. Why her Grand-Mère had moved from New Orleans to Arkham, Marie would never know. People used to call her Grand-Mère a witch. Maybe there's more than just jazz in Marie's blood, after all...",
    "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: <i>Spell</i> cards level 0-5, Mystic cards ([mystic]) level 0-3, Neutral cards level 0-5, <i>Occult</i> cards level 0, up to five other level 0 Seeker and/or Survivor cards ([seeker] and/or [survivor]).\n<b>Deckbuilding requirements</b> (do not count toward deck size): Mystifying Song, Baron Samedi, 1 random basic weakness.",
    "code": "99001",
    "deck_limit": 1,
    "deck_options": [
      {"trait":["spell"], "level":{"min":0, "max":5} },
      {"faction":["mystic"], "level":{"min":0, "max":3} },
      {"faction":["neutral"], "level":{"min":0, "max":5} },
      {"trait":["occult"], "level":{"min":0, "max":0} },
      {"faction":["seeker","survivor"],"level":{"min":0, "max":0}, "limit":5}
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
    "type_code": "investigator"
  },
  {
    "code": "99002",
    "cost": 3,
    "deck_limit": 1,
    "faction_code": "neutral",
    "illustrator": "Jeff Lee Johnson",
    "name": "Mystifying Song",
    "pack_code": "promo",
    "position": 2,
    "quantity": 1,
    "restrictions": "investigator:99001",
    "skill_wild": 2,
    "text": "Marie Lambeau deck only.\nFast. Play when the agenda would advance by reaching its doom threshold.\nUntil the end of the phase, the agenda cannot advance by reaching its doom threshold. Remove Mystifying Song from the game.",
    "traits": "Spell. Song.",
    "type_code": "event"
  },
  {
    "code": "99003",
    "deck_limit": 1,
    "faction_code": "neutral",
    "illustrator": "Magali Villeneuve",
    "is_unique": true,
    "name": "Baron Samedi",
    "pack_code": "promo",
    "position": 3,
    "quantity": 1,
    "restrictions": "investigator:99001",
    "subtype_code": "weakness",
    "slot": "Ally",
    "subname": "Lord of the Cemetery",
    "text": "<b>Revelation</b> - Put Baron Samedi into play. He cannot leave play while he has less than 3 doom on him.\n<b>Forced</b> – When any amount of damage is placed on an investigator in Baron Samedi's location: Place 1 additional damage on that investigator.\n[free] Exhaust Baron Samedi: Place 1 doom on Baron Samedi. If he has 3 or more doom on him, discard him.",
    "traits": "Avatar.",
    "type_code": "asset"
  }
];

export default cards;
