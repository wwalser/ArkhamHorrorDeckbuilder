// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import DeckBuilderScreen from './screens/deck-builder-screen';
import HomeScreen from './screens/home-screen.js'

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  DeckBuilder: {
    screen: DeckBuilderScreen,
    navigationOptions: {
      headerTitle: 'Deck',
    },
  },
}, {
  onTransitionStart: () => {/*Handle loading state using this*/},
});


const AppContainer = () => (
  <View style={{flex: 1, paddingTop: 20}}>
    <StatusBar
      backgroundColor={'transparent'}
      translucent
    />
    <RootNavigator />
  </View>
);

export default AppContainer;

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'ArkhamHorrorDeckBuilder',
  () => AppContainer);
