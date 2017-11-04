// @flow

import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import CardItem from './card-item';
import {lookup as cards} from '../query/name';

import type {Card} from '../cards';
import type {DeckList, DeckMutator} from '../store';

const allCards = Object.keys(cards).reduce(
  (allCards, deckKey) => allCards.concat(cards[deckKey]),
  ([]:$ReadOnlyArray<Card>),
);

type Props = {
  addCard: DeckMutator,
  removeCard: DeckMutator,
  currentDeck: DeckList,
};

export default class CardList extends Component<Props> {
  render() {
    const {addCard, removeCard, currentDeck} = this.props;

    return (
      <View>
        <ScrollView>
          {allCards.map((card) => (
            <CardItem
              key={card.code}
              card={card}
              onAdd={addCard}
              onRemove={removeCard}
              isInDeck={!!currentDeck[card.code]}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
