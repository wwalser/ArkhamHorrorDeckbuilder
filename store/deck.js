/* @flow */
import {createAction, handleActions, type ActionType} from 'redux-actions';

import type {Card} from '../cards';

// Exported types
export type DeckList = {[code: string]: Card};
export type AddCardDispatcher = (Card) => void;
export type RemoveCardDispatcher = (Card) => void;
export type Deck = {
  +id: number,
  +name: string,
  +investigator: Card,
  +cards: DeckList,
};

export const defaultDeck = {
  id: NaN,
  name: '',
  investigator: {
    "back_flavor": "Roland had always taken comfort in procedure and rules. As an agent in the Bureau, he was relieved to have guidelines to follow in any given situation. But lately, his Federal Agent's Handbook had been entirely unhelpful given the cases he'd been assigned. Try as he might, Roland could find no mention of what to do when confronted with strange creatures, gates through time and space, or magic spells. If he hadn't seen it with his own eyes, he would never have believed it... and there's no way his superiors would understand. Roland knew he would have to handle this one himself.",
    "back_text": "<b>Deck size</b>: 30.\n<b>Deckbuilding options</b>: Guardian cards ([guardian]) level 0-5, Seeker cards ([seeker]) level 0-2, Neutral cards level 0-5.\n<b>Deckbuilding requirements</b> (do not count toward deck size): Roland's .38 Special, Cover Up, 1 random basic weakness.",
    "code": "01001",
    "deck_limit": 1,
    "deck_options": [
        {"faction":["guardian", "neutral"], "level":{"min":0, "max":5} },
        {"faction":["seeker"], "level":{"min":0, "max":2} },
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
  },
  cards: {}
};

// Actions
export const newDeck = createAction(
  'NEW_DECK',
  (name: string, investigator: Card) => (dispatch, getState) => {
    // Save previous deck before creating a new deck.
    return {id: 0, name, investigator};
  },
);
export const addCard = createAction('ADD_CARD', (card: Card) => card);
export const removeCard = createAction('REMOVE_CARD', (card: Card) => card);

// Reducers
export default handleActions(
  {
    NEW_DECK: (state: Deck, action: ActionType<typeof newDeck>) => {
      return {
        ...state,
        'cards': {},
        'investigator': action.payload.investigator,
        'name': action.payload.name,
      };
    },
    'ADD_CARD': (state: Deck, action: ActionType<typeof addCard>): Deck => {
      const {cards} = state;

      return {
        ...state,
        'cards': {
          ...cards,
          [action.payload.code]: action.payload,
        },
      };
    },
    'REMOVE_CARD': (state: Deck, action: ActionType<typeof removeCard>): Deck => {
      const {cards} = state;
      const newCards: DeckList = {
        ...cards,
      };
      delete newCards[action.payload.code];

      return {
        ...state,
        'cards': newCards,
      };
    },
  },
  defaultDeck,
);
