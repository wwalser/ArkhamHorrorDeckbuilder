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
import CardList from './components/card-list';
import store, {addCard, removeCard} from '../store';

import type {DeckList} from '../store';

type State = {
  deck: DeckList,
};

export default class DeckBuilderScreen extends Component<{}, State> {
  handleChange: () => void;
  constructor(props: {}) {
    super(props);
    this.handleChange = this._handleChange.bind(this);
    store.addListener(this.handleChange);

    this.state = {
      deck: store.deck,
    };
  }
  _handleChange() {
    this.setState({deck: store.deck});
  }
  componentWillUnmount() {
    store.removeListener(this.handleChange);
  }
  render() {
    return (
      <KeyboardAvoidingView>
        <CardList
          addCard={addCard}
          removeCard={removeCard}
          currentDeck={this.state.deck}
        />
      </KeyboardAvoidingView>
    );
  }
}
