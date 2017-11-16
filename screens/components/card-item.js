// @flow

import React from 'react';
import {
  Button,
  Text,
  ScrollView,
  Image,
  View,
  StyleSheet,
} from 'react-native';

import type {Card} from '../../cards';
import type {AddCardDispatcher, RemoveCardDispatcher} from '../../store/deck';

const factions = {
  guardian: require('../../img/guardian.png'),
  rogue: require('../../img/rogue.png'),
  mystic: require('../../img/mystic.png'),
  seeker: require('../../img/seeker.png'),
  survivor: require('../../img/survivor.png'),
};

type Props = {
  card: Card,
  onAdd: AddCardDispatcher,
  onRemove: RemoveCardDispatcher,
  isInDeck: boolean,
};

export default class CardItem extends React.PureComponent<Props> {
  onPress: AddCardDispatcher | RemoveCardDispatcher;
  constructor(props: Props) {
    super(props);
    this.onPress = this._onPress.bind(this);
  }
  _onPress() {
    if (this.props.isInDeck) {
      this.props.onRemove(this.props.card);
    } else {
      this.props.onAdd(this.props.card);
    }
  }
  render() {
    //alignItems
    const {
      isInDeck,
      card: {name, faction_code, is_unique, subname, xp},
    } = this.props;

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
      <View style={style.buttons}>
        <Button
          title={isInDeck ? 'Remove' : 'Add'}
          onPress={this.onPress}
          accessibilityLabel='Add card to deck.'
        />
      </View>
    </View>);
  }
}

const style = StyleSheet.create({
  cardItem: {
    justifyContent: 'space-between',
    height: 100,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 3,
  },
  cardDetails: {
    flexDirection: 'row',
  },
  faction: {
    flexDirection: 'row',
  },
  cardName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttons: {
    position: 'absolute',
    top: 20,
    right: 25,
  }
});
