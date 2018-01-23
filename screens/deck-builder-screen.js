/* @flow */

import CardList from './components/card-list';
import * as deckDispatchers from '../store/deck-list';
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

import type {CardCode} from '../cards';
import type {
  Cards,
  AddCardDispatcher,
  RemoveCardDispatcher,
} from '../store/deck-list';
import type {Store} from '../store/';

class DeckBuilderScreen extends Component<{
  investigator: CardCode,
  name: string,
  cards: Cards,
  addCard: AddCardDispatcher,
  removeCard: RemoveCardDispatcher,
}> {
  render() {
    return (
      <KeyboardAvoidingView style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text>Hello world.</Text>
        </View>
        <CardList
          style={styles.cardList}
          addCard={this.props.addCard}
          removeCard={this.props.removeCard}
          currentCards={this.props.cards}
        />
      </KeyboardAvoidingView>
    );
  }
};

const styles = StyleSheet.create({
  cardList: {
    width: 250,
    flexDirection: 'column',
  }
});

const select = ({deckList}: Store) => {
  const currentDeck = deckList.list[deckList.currentDeck];
  return {
    ...currentDeck,
  };
};

export default connect(select, deckDispatchers)(DeckBuilderScreen);
