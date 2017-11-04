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

const allCards = Object.keys(cards).reduce(
  (allCards, deckKey) => allCards.concat(cards[deckKey]),
  ([]:$ReadOnlyArray<Card>),
);

export default class CardList extends Component<{}> {
  render() {
    return (
      <View>
        <ScrollView>
          {allCards.map((card) => (
            <CardItem
              key={card.code}
              card={card}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
