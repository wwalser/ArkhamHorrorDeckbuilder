import Immutable from 'immutable';
import {createAction, handleActions} from 'redux-actions';

import type {Card} from '../cards';

// Reducers
type Deck = Immutable.Map<{
  cards: Immutable.Map<DeckList>,
  investigator: Card,
  name: string,
}>;
type NewDeckAction = {
  payload: {
    investigator: Card,
    name: string,
  }
};
type MutateDeckAction = {
  payload: Card,
};
type PayloadOptions = NewDeckAction | MutateDeckAction;
const reductions: {
  [actionName: string]: (state: Deck, action: {payload: PayloadOptions}) => Deck,
} = {
  'NEW_DECK': (state: Deck, action: NewDeckAction) => {
    return state
      .set('cards', Immutable.Map())
      .set('investigator', action.payload.investigator)
      .set('name', action.payload.name);
    });
  },
  'ADD_CARD': (state: Deck, action: MutateDeckAction) => {
    return state.set(
      'cards',
      state.get('cards').set(action.payload.code, action.payload),
    );
  },
  'REMOVE_CARD': (state: Deck, action: MutateDeckAction) => {
    return state.set(
      'cards',
      state.get('cards').remove(action.payload.code),
    );
  },
};

// Actions
export const newDeck = (name: string, investigator: Card) =>
  (dispatch) =>
    dispatch(createAction('NEW_DECK')({name, investigator}));
export const addCard = createAction('ADD_CARD');
export const removeCard = createAction('REMOVE_CARD');

// Exported types
export type DeckList = {[code: string]: Card};
export type AddCardDispatcher = (Card) => void;
export type RemoveCardDispatcher = (Card) => void;

export default handleActions(
  reductions,
  Immutable.Map(),
);
