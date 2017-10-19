// @flow
import type {Card} from './index';

const cards:Array<Card> = [
  {
    "code": "03115",
    "cost": 1,
    "deck_limit": 2,
    "faction_code": "survivor",
    "illustrator": "Dani Hartel",
    "name": "Plucky",
    "pack_code": "eotp",
    "position": 115,
    "quantity": 2,
    "sanity": 1,
  "skill_intellect": 1,
  "skill_willpower": 1,
    "text": "Fast. Limit 1 <b>Composure</b> in play.\nNon-direct horror must be assigned to Plucky before it can be assigned to your investigator card.\n[free] Spend 1 resource: You get +1 [willpower] for this skill test.\n[free] Spend 1 resource: You get +1 [intellect] for this test.",
    "traits": "Talent. Composure.",
    "type_code": "asset",
    "xp": 1
  },
  {
    "code": "03119",
    "deck_limit": 2,
    "faction_code": "neutral",
    "illustrator": "Nicholas Elias",
    "name": "Run For Your Life",
    "pack_code": "eotp",
    "position": 119,
    "quantity": 2,
    "skill_agility": 4,
    "text": "Max 1 committed per skill test.\nCommit to a skill test only if you have 3 or fewer remaining sanity.",
    "traits": "Desperate.",
    "type_code": "skill",
    "xp": 0
  }
];

export default cards;
