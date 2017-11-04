// @flow

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
import CardList from './screens/card-list';
import store, {addCard, removeCard} from './store';

import type {DeckList} from './store';

type State = {
  deck: DeckList,
};

export default class CardSearch extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    store.addListener(() => {
      this.setState({deck: store.deck});
    });

    this.state = {
      deck: store.deck,
    };
  }
  componentWillUpdate(_: {}, nextState: State) {
    console.log(nextState.deck);
  }
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.mainView}
      >
        <CardList
          addCard={addCard}
          removeCard={removeCard}
          currentDeck={this.state.deck}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 24,
  },
});

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'ArkhamHorrorDeckBuilder',
  () => CardSearch);
