/* @flow */
import {createAction, handleActions, type ActionType} from 'redux-actions';

import type {CardCode} from '../cards';

export type newDeckDispatcher = (name: string, investigator: CardCode) => void;
export type loadDeckListDispatcher = () => void;
export type AddCardDispatcher = (card: CardCode) => void;
export type RemoveCardDispatcher = (card: CardCode) => void;
export type SetCurrentDeckDispatcher = (currentDeck: number) => void;
export type Cards = Array<CardCode>;
export type Deck = {
  +id: number,
  +name: string,
  +investigator: CardCode,
  +cards: Cards,
};
export type Decks = Array<Deck>;
export type DeckList = {
  +list: Decks,
  +loading: boolean,
  +currentDeck: number,
};

// @todo goes away after real deck loading implemented.
const defaultDeck = {
  id: 1,
  name: '',
  investigator: "01001",
  cards: [],
};
const defaultDeckList = {
  list: [defaultDeck],
  loading: true,
  currentDeck: 0,
};

// Actions
const newDeckCreated = createAction(
  'NEW_DECK_CREATED',
  (name: string, investigator: CardCode) => ({name, investigator}),
);
export const newDeck = (name: string, investigator: CardCode) =>
  (dispatch: (*) => void, getState: () => {'deck-list': DeckList}) => {
      // @todo Save data before updating.
      dispatch(newDeckCreated(name, investigator));
  };
const deckListLoaded = createAction('DECK_LIST_LOADED', (list: Decks) => list);
export const loadDeckList = () =>
  (dispatch: (*) => void) => {
    // @todo Load deck list from local storeage.
    dispatch(deckListLoaded([defaultDeck]));
  };
export const addCard = createAction('ADD_CARD', (card: CardCode) => card);
export const removeCard = createAction('REMOVE_CARD', (card: CardCode) => card);
export const setCurrentDeck = createAction('SET_CURRENT_DECK', (deck: number) => deck);

// Reducers
export default handleActions(
  {
    NEW_DECK_CREATED: (state: DeckList, action: ActionType<typeof newDeckCreated>) => {
      const newDeckList = Array.from(state.list);
      newDeckList.push({
        // Ids start a 1 instead of 0
        id: newDeckList.length + 1,
        cards: [],
        name: action.payload.name,
        investigator: action.payload.investigator,
      });
      return {
        ...state,
        list: newDeckList,
      };
    },
    DECK_LIST_LOADED: (state: DeckList, action: ActionType<typeof deckListLoaded>) => {
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    },
    ADD_CARD: (state: DeckList, action: ActionType<typeof addCard>) => {
      return {
        ...state,
        list: Array.from(state.list, (deck, idx) => {
          if (idx === state.currentDeck) {
            return {
              ...deck,
              cards: deck.cards.concat(action.payload),
            };
          }

          return deck;
        }),
      };
    },
    REMOVE_CARD: (state: DeckList, action: ActionType<typeof removeCard>) => {
      return {
        ...state,
        list: Array.from(state.list, (deck, idx) => {
          if (idx === state.currentDeck) {
            const cardToRemove = deck.cards.indexOf(action.payload);
            if (cardToRemove) {
              const newCards = deck.cards.slice();
              newCards.splice(cardToRemove, 1);
              return {
                ...deck,
                cards: newCards,
              };
            }
          }

          return deck;
        }),
      }
    },
    SET_CURRENT_DECK: (state: DeckList, action: ActionType<typeof setCurrentDeck>) => {
      return {
        ...state,
        currentDeck: action.payload,
      }
    }
  },
  defaultDeckList,
);
