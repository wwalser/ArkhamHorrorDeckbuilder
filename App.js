// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import DeckBuilderScreen from './screens/deck-builder-screen';
import LoadingThrobber from './screens/components/loading-throbber.js';
import HomeScreen from './screens/home-screen.js'

const navigationConfig = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
      header: null,
    },
  },
  DeckBuilder: {
    screen: DeckBuilderScreen,
    navigationOptions: {
      headerTitle: 'Deck',
    },
  },
};

type State = {
  transitioning: boolean,
};

class AppContainer extends Component<{}, State> {
  startTransition: () => void;
  closeThrobber: () => void;
  RootNavigator: *;
  constructor(props: {}) {
    super(props);
    this.state = {
      transitioning: false,
    };
    this.startTransition = this._startTransition.bind(this);
    this.closeThrobber = this._closeThrobber.bind(this);
    this.RootNavigator = StackNavigator(navigationConfig, {
      onTransitionStart: () => this.setState({transitioning: false}),
    })
  }
  _startTransition() {
    this.setState({
      transitioning: true,
    });
  }
  _closeThrobber() {
    this.setState({
      transitioning: false,
    });
  }
  render() {
    const RootNavigator = this.RootNavigator;
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <StatusBar
          backgroundColor={'transparent'}
          translucent
        />
        <RootNavigator
          screenProps={{
            startTransition: this.startTransition,
          }}
        />
        <LoadingThrobber
          visible={this.state.transitioning}
          closeThrobber={this.closeThrobber}
        />
      </View>
    );
  }
}

export default AppContainer;

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'ArkhamHorrorDeckBuilder',
  () => AppContainer);
