// @flow

import React, { Component } from 'react';
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CardItem, {CARD_HEIGHT} from './card-item';
import {lookup as cards} from '../../query/name';

import type {Card} from '../../cards';
import type {
  Cards,
  AddCardDispatcher,
  RemoveCardDispatcher,
} from '../../store/deck-list';
import type {AnimatedEvent} from 'AnimatedEvent';
import type AnimatedValue from 'AnimatedValue';
import type {Styles} from 'StyleSheet';

const allCards = Object.keys(cards).reduce(
  (allCards, deckKey) => allCards.concat(cards[deckKey]),
  ([]:$ReadOnlyArray<Card>),
);

const AnimatableFlatList = Animated.createAnimatedComponent(FlatList);

type Props = {
  addCard: AddCardDispatcher,
  removeCard: RemoveCardDispatcher,
  currentCards: Cards,
  style: $FlowFixMe,
};

type State = {
  scrollY: AnimatedValue,
};

export default class CardList extends Component<Props, State> {
  state: State = { scrollY: new Animated.Value(0) };

  render() {
    const {addCard, removeCard, currentCards} = this.props;

    return (
      <View style={this.props.style}>
        <AnimatableFlatList
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
            {useNativeDriver: true},
          )}
          data={allCards}
          keyExtractor={card => card.code}
          extraData={currentCards}
          getItemLayout={(data, index) => (
            {length: CARD_HEIGHT, offset: CARD_HEIGHT * index, index}
          )}
          renderItem={({item, index}) => (
            <CardItem
              card={item}
              scrollY={this.state.scrollY}
              index={index}
              onAdd={addCard}
              onRemove={removeCard}
              isInDeck={currentCards.indexOf(item.code) !== -1}
            />
          )}
        />
      </View>
    );
  }
}
