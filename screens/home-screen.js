// @flow

import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { StackRouter } from 'react-navigation';

type Props = {
  navigation: {
    navigate: (screenName: string) => void,
  }
}

export default class HomeScreen extends Component<Props> {

  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('DeckBuilder')}
          title='Go to deck building'
        />
      </View>
    );
  }
}
