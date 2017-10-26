// @flow

import React from 'react';
import {
  Text,
  ScrollView,
  Image,
  View,
  StyleSheet,
} from 'react-native';

import type {Card} from '../cards';

const factions = {
  guardian: require('../img/guardian.png'),
  rogue: require('../img/rogue.png'),
  mystic: require('../img/mystic.png'),
  seeker: require('../img/seeker.png'),
  survivor: require('../img/survivor.png'),
};

export default class CardItem extends React.PureComponent<{
  card: Card,
}> {
  render() {
    //alignItems
    const {card: {name, faction_code, is_unique, subname, xp}} = this.props;
    return (<View style={style.cardItem}>
      <View style={style.cardName}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{is_unique ? '*' : ''}{name}</Text>
        {subname ? <Text style={{paddingLeft: 3}}>{subname}</Text> : null}
      </View>
      <View style={style.cardDetails}>
        <View style={style.faction}>
          {faction_code !== 'neutral'
            ? <Image source={factions[faction_code]} />
            : null}
          <Text>{faction_code}</Text>
        </View>
        {xp ? <Text style={{paddingLeft: 6}}>XP: {xp}</Text> : null}
      </View>
    </View>);
  }
}

const style = StyleSheet.create({
  cardItem: {
    //flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 3,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  faction: {
    flexDirection: 'row',
  },
  cardName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
});
