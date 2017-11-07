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
import {lookup as cards} from '../../query/name';

import type {Card} from '../../cards';
import type {DeckList, DeckMutator} from '../../store';

const allCards = Object.keys(cards).reduce(
  (allCards, deckKey) => allCards.concat(cards[deckKey]),
  ([]:$ReadOnlyArray<Card>),
);

type Props = {
  addCard: DeckMutator,
  removeCard: DeckMutator,
  currentDeck: DeckList,
};

export default class CardList extends Component<Props, {
  cardsToShow: Array<Card>,
}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cardsToShow: allCards.slice(0, 10),
    };
  }
  componentDidMount() {
    this.renderMore();
  }
  componentDidUpdate() {
    this.renderMore();
  }
  renderMore() {
    const numShowing = this.state.cardsToShow.length;
    if (numShowing < allCards.length) {
      const numToShow = numShowing + Math.min(numShowing + 10, allCards.length);
      this.setState({
        cardsToShow: allCards.slice(0, numToShow),
      });
    }
  }
  render() {
    const {addCard, removeCard, currentDeck} = this.props;

    return (
      <View>
        <ScrollView>
          {this.state.cardsToShow.map((card) => (
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
