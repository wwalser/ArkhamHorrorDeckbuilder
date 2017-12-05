// @flow

import React, { Component } from 'react';
import {
  FlatList,
  Text,
  ScrollView,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import CardItem, {CARD_HEIGHT} from './card-item';
import {lookup as cards} from '../../query/name';

import type {Card} from '../../cards';
import type {
  DeckList,
  AddCardDispatcher,
  RemoveCardDispatcher,
} from '../../store/deck';

const allCards = Object.keys(cards).reduce(
  (allCards, deckKey) => allCards.concat(cards[deckKey]),
  ([]:$ReadOnlyArray<Card>),
);

type Props = {
  addCard: AddCardDispatcher,
  removeCard: RemoveCardDispatcher,
  currentDeck: DeckList,
};

export default class CardList extends Component<Props> {
  render() {
    const {addCard, removeCard, currentDeck} = this.props;

    return (
      <View>
        <FlatList
          data={allCards}
          keyExtractor={card => card.code}
          extraData={this.props.currentDeck}
          getItemLayout={(data, index) => (
            {length: CARD_HEIGHT, offset: CARD_HEIGHT * index, index}
          )}
          renderItem={({item}) => (
            <CardItem
              card={item}
              onAdd={addCard}
              onRemove={removeCard}
              isInDeck={!!currentDeck[item.code]}
            />
          )}
        />
      </View>
    );
  }
}
