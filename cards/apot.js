// @flow
import type {Card} from './index';

const cards:Array<Card> = [
	{
		"code": "03190",
		"cost": 4,
		"deck_limit": 2,
		"faction_code": "guardian",
		"illustrator": "John Pacer",
		"name": ".45 Automatic",
		"pack_code": "apot",
		"position": 190,
		"quantity": 2,
		"skill_agility": 1,
		"skill_combat": 1,
		"slot": "Hand",
		"text": "Uses (4 ammo).\n[action] Spend 1 ammo: <b>Fight.</b> You get +2 combat for this attack. This attack deals +1 damage. Ignore the retaliate keyword for this attack.",
		"traits": "Item. Weapon. Firearm.",
		"type_code": "asset",
		"xp": 2
	},
	{
		"code": "03195",
		"cost": 2,
		"deck_limit": 2,
		"faction_code": "rogue",
		"illustrator": "Stanislav Dikolenko",
		"name": "Pickpocketing",
		"pack_code": "apot",
		"position": 195,
		"quantity": 2,
		"skill_agility": 2,
		"text": "Fast.\n[reaction] After you evade an enemy, exhaust Pickpocketing: Draw 1 card or gain 1 resource. If you succeeded by 2 or more, do both instead.",
		"traits": "Talent. Illicit.",
		"type_code": "asset",
		"xp": 2
	}
]

export default cards;
