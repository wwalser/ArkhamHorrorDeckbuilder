// @flow
import type {Card} from '../cards';
import React from 'React';

export type DeckList = {[code: string]: Card};
export type DeckMutator = (card: Card) => void;

const listening: Array<() => void> = [];
const change = () => listening.forEach(listener => listener());
const store: {
  'deck': DeckList,
  'addListener': (listener: () => void) => void,
  'removeListener': (listener: () => void) => void,
} = {
  deck: {},
  addListener: (listener) => {
    listening.push(listener)
  },
  removeListener: (listener) => {
    listening.splice(listening.indexOf(listener), 1);
  },
};

function addCard(card: Card){
  if (store.deck[card.code]) {
    return;
  }
  store.deck[card.code] = card;
  change();
}

function removeCard(card: Card) {
  if (store.deck[card.code]) {
    delete store.deck[card.code];
    change();
  }
}

export default store;
export {addCard, removeCard};
