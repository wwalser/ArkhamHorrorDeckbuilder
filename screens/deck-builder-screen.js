// @flow

import CardList from './components/card-list';
import * as deckDispatchers from '../store/deck';
import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  Image,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from 'react-native';
import SearchBar from 'react-native-searchbar';
import {connect} from 'react-redux';

import type {Card} from '../cards';
import type {
  DeckList,
  AddCardDispatcher,
  RemoveCardDispatcher,
} from '../store/deck';

class DeckBuilderScreen extends Component<{
  investigator: Card,
  name: string,
  cards: DeckList,
  addCard: AddCardDispatcher,
  removeCard: RemoveCardDispatcher,
}> {
  render() {
    return (
      <KeyboardAvoidingView>
        <CardList
          addCard={this.props.addCard}
          removeCard={this.props.removeCard}
          currentDeck={this.props.cards}
        />
      </KeyboardAvoidingView>
    );
  }
};

const select = (state) => {
  const deck = {
    investigator: state.deck.get('investigator'),
    name: state.deck.get('name'),
    cards: state.deck.get('cards').toJS(),
  }
  return deck;
};

export default connect(select, deckDispatchers)(DeckBuilderScreen);
