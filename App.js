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

const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: [ 'gold!' ],
              },
            },
          },
        },
      },
    },
  },
  [ 4, 2, 'tree' ],
];

export default class CardSearch extends Component<{}, {
  results: any,
}> {
  searchBar: ?SearchBar;
  constructor(props: {}) {
    super(props);
    this.state = {
      results: null,
    };
  }
  _handleResults = (results) => {
    this.setState({ results });
  }
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.mainView}
      >
        <CardList />
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={items}
          handleResults={this._handleResults}
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
