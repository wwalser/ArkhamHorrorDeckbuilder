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
import * as cards from '../cards';

const allCards = Object.keys(cards).reduce(
  (allCards, deckKey) => allCards.concat(cards[deckKey]),
  [],
);

export default class CardList extends Component<{}> {
  render() {
    return (
      <View>
        <ScrollView>
          {allCards.map((item) => (
            <CardItem
              key={item.code}
              name={item.name}
              faction_code={item.faction_code}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
