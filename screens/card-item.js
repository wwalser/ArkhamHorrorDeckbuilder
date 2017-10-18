// @flow

import React from 'react';
import {
  Text,
  ScrollView,
  Image,
  View,
  StyleSheet,
} from 'react-native';

const factions = {
  guardian: require('../img/guardian.png'),
  rogue: require('../img/rogue.png'),
  mystic: require('../img/mystic.png'),
  seeker: require('../img/seeker.png'),
  survivor: require('../img/survivor.png'),
};

export default class CardItem extends React.PureComponent<{
  name: string,
  faction_code: string
}> {
  render() {
    const {name, faction_code} = this.props;
    return (<View style={style.cardItem}>
      <Text>{name}</Text>
      <View style={{flexDirection: 'row'}}>
        {faction_code !== 'neutral'
          ? <Image source={factions[faction_code]} />
          : null}
        <Text>{faction_code}</Text>
      </View>
    </View>);
  }
}

const style = StyleSheet.create({
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    paddingRight: 10,
    paddingLeft: 10,
  },
});
