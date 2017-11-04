// @flow
import type {Card} from './index';

const cards:Array<Card> = [
	{
		"code": "03149",
		"cost": 2,
		"deck_limit": 2,
		"faction_code": "seeker",
		"health": 1,
		"illustrator": "Romain Leguay",
		"is_unique": true,
		"name": "Charles Ross, Esq.",
		"pack_code": "tuo",
		"position": 149,
		"quantity": 2,
		"sanity": 2,
		"skill_intellect": 1,
		"slot": "Ally",
		"subname": "Acquisitions and Solicitation",
		"text": "You may spend resources to pay for <b>Item</b> assets played by other investigators at your location.\n[lightning] Exhaust Charles Ross, Esq.: Reduce the cost of the next <b>Item</b> asset played by an investigator at your location by 1.",
		"traits": "Ally. Patron.",
		"type_code": "asset",
		"xp": 0
	},
	{
		"code": "03150",
		"cost": 0,
		"deck_limit": 2,
		"faction_code": "seeker",
		"flavor": "Knowing is half the battle.",
		"illustrator": "Mark Molnar",
		"name": "Forewarned",
		"pack_code": "tuo",
		"position": 150,
		"quantity": 2,
		"skill_willpower": 1,
		"text": "Fast. Play when you draw a non-weakness treachery card.\nPlace 1 of your clues on your location. Then, cancel that card's revelation effect.",
		"traits": "Insight.",
		"type_code": "event",
		"xp": 1
	},
	{
		"code": "03151",
		"cost": 4,
		"deck_limit": 2,
		"faction_code": "rogue",
		"health": 2,
		"illustrator": "Colin Boyer",
		"is_unique": true,
		"name": "Dario El-Amin",
		"pack_code": "tuo",
		"position": 151,
		"quantity": 2,
		"sanity": 2,
		"skill_intellect": 1,
		"slot": "Ally",
		"subname": "Unscrupulous Investor",
		"text": "While you have 10 or more resources, you get +1 [willpower] and +1 [intellect].\n[action] If there are no enemies at your location, exhaust Dario El-Amin: Gain 2 resources.",
		"traits": "Ally. Patron.",
		"type_code": "asset",
		"xp": 0
	},
	{
		"code": "03156",
		"cost": 1,
		"deck_limit": 2,
		"faction_code": "survivor",
		"flavor": "With or without hope, all you can do is resist.",
		"illustrator": "Stanislav Dikolenko",
		"name": "A Test of Will",
		"pack_code": "tuo",
		"position": 156,
		"quantity": 2,
		"skill_willpower": 1,
		"text": "Fast. Play when an investigator at your location draws a non-weakness treachery card.\nCancel that card's revelation effect. Exile A Test of Will.",
		"traits": "Spirit.",
		"type_code": "event",
		"xp": 1
	}
];

export default cards;