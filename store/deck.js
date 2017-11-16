/* @flow */
import {createAction, handleActions, type ActionType} from 'redux-actions';

import type {Card} from '../cards';

// Exported types
export type DeckList = {[code: string]: Card};
export type AddCardDispatcher = (Card) => void;
export type RemoveCardDispatcher = (Card) => void;

// Actions
export const newDeck = createAction(
  'NEW_DECK',
  (name: string, investigator: Card) => ({name, investigator}),
);
export const addCard = createAction('ADD_CARD', (card: Card) => card);
export const removeCard = createAction('REMOVE_CARD', (card: Card) => card);

// Reducers
export type Deck = {
  +cards: DeckList,
  +investigator?: Card,
  +name?: string,
};

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
  {cards: {}},
);
