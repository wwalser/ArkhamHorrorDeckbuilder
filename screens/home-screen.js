// @flow

import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackRouter } from 'react-navigation';

type Props = {
  navigation: {
    navigate: (screenName: string) => void,
  },
  screenProps: {
    startTransition: () => void,
  },
};

export default class HomeScreen extends Component<Props> {
  buildDeck: () => void;
  constructor(props: Props) {
    super(props);
    this.buildDeck = this._buildDeck.bind(this);
  }
  _buildDeck() {
    this.props.screenProps.startTransition();
    setTimeout(
      () => this.props.navigation.navigate('DeckBuilder'),
      10,
    );
  }
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.titleText}>Arkham Horror Deck Builder</Text>
        <Button
          onPress={this.buildDeck}
          title='Go to deck building'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 22,
    marginBottom: 30,
  }
});
