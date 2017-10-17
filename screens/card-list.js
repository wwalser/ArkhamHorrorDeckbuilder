import React, { Component } from 'react';
import {
  Text,
  FlatList,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import * as cards from '../pack';

const allCards = Object.keys(cards).reduce(
  (allCards, deckKey) => allCards.concat(cards[deckKey]),
  [],
);

const style = StyleSheet.create({
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
  },
  footer: {
    height: 40,
  }
});

const factions = {
  guardian: require('../img/guardian.png'),
  rogue: require('../img/rogue.png'),
  mystic: require('../img/mystic.png'),
  seeker: require('../img/seeker.png'),
  survivor: require('../img/survivor.png'),
};

export default class CardList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={allCards}
          getItemLayout={(data, index) => ({length:70, offset: 70*index, index})}
          renderItem={
            ({item}) => {
              return (
                <View style={style.cardItem}>
                  <Text>{item.name}</Text>
                  <View style={{flexDirection: 'row'}}>
                    {item.faction_code !== 'neutral'
                      ? <Image source={factions[item.faction_code]} />
                      : null}
                    <Text>{item.faction_code}</Text>
                  </View>
                </View>
              );
            }
          }
          keyExtractor={(item) => item.code}
          ListFooterComponent={
            <View style={style.footer}>
              <Text>Foobar</Text>
            </View>
          }
        />
      </View>
    );
  }
}
