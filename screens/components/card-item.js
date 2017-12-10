// @flow

import React from 'react';
import {
  Button,
  Text,
  ScrollView,
  Image,
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

import type {Card} from '../../cards';
import type {AddCardDispatcher, RemoveCardDispatcher} from '../../store/deck';
import type AnimatedValue from 'AnimatedValue';

export const CARD_HEIGHT = 100;
const CARD_IMG_DIMENSIONS = {
  HEIGHT: 419,
  WIDTH: 300,
};
const VIEWABLE_CARD_DIMENSIONS = {
  TOP: 35,
  BOTTOM: 150,
}
const WINDOW_HEIGHT = Dimensions.get('window').height;

const factions = {
  neutral: {
    cardHeader: require('../../img/card-header-neutral.png'),
  },
  guardian: {
    token: require('../../img/guardian.png'),
    cardHeader: require('../../img/card-header-guardian.png'),
  },
  rogue: {
    token: require('../../img/rogue.png'),
    cardHeader: require('../../img/card-header-rogue.png'),
  },
  mystic: {
    token: require('../../img/mystic.png'),
    cardHeader: require('../../img/card-header-mystic.png'),
  },
  seeker: {
    token: require('../../img/seeker.png'),
    cardHeader: require('../../img/card-header-seeker.png'),
  },
  survivor: {
    token: require('../../img/survivor.png'),
    cardHeader: require('../../img/card-header-survivor.png'),
  },
};

type Props = {
  card: Card,
  onAdd: AddCardDispatcher,
  onRemove: RemoveCardDispatcher,
  isInDeck: boolean,
  index: number,
  scrollY: AnimatedValue,
};

export default class CardItem extends React.PureComponent<Props> {
  onPress = () => {
    if (this.props.isInDeck) {
      this.props.onRemove(this.props.card);
    } else {
      this.props.onAdd(this.props.card);
    }
  };
  render() {
    //alignItems
    const {
      isInDeck,
      card: {name, faction_code, is_unique, subname, xp, img_src},
    } = this.props;

    const itemOffset = this.props.index * CARD_HEIGHT;
    const parallaxStyle:{[string]: any} = {
      width: CARD_IMG_DIMENSIONS.WIDTH,
      height: CARD_IMG_DIMENSIONS.HEIGHT,
    };
    parallaxStyle.transform = [{
      translateY: this.props.scrollY.interpolate({
        inputRange:   [itemOffset - WINDOW_HEIGHT, itemOffset],
        outputRange:  [
          -VIEWABLE_CARD_DIMENSIONS.BOTTOM,
          -VIEWABLE_CARD_DIMENSIONS.TOP,
        ],
        extrapolate:  'clamp',
      }),
    }, {translateX: -35}]

    return (<View style={styles.cardItem}>
      {img_src ? <Animated.Image
        style={[styles.overlayImage, parallaxStyle]}
        source={img_src}
      /> : null}
      <View style={styles.cardHeader}>
        <Image style={styles.cardHeaderImage} source={factions[faction_code].cardHeader} />
        <Text style={styles.cardName}>{is_unique ? '*' : ''}{name}</Text>
      </View>
      <View style={styles.cardDetails}>
        <View style={styles.faction}>
          {faction_code !== 'neutral'
            ? <Image source={factions[faction_code].token} />
            : null}
          <Text>{faction_code}</Text>
        </View>
        {xp ? <Text style={{paddingLeft: 6}}>XP: {xp}</Text> : null}
      </View>
      <View style={styles.buttons}>
        <Button
          title={isInDeck ? 'Remove' : 'Add'}
          onPress={this.onPress}
          accessibilityLabel='Add card to deck.'
        />
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  cardItem: {
    justifyContent: 'space-between',
    height: CARD_HEIGHT,
    overflow: 'hidden',
    borderWidth: 0,
  },
  cardDetails: {
    flexDirection: 'row',
  },
  faction: {
    flexDirection: 'row',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 28,
  },
  cardHeaderImage: {
    ...StyleSheet.absoluteFillObject,
    height: 28,
    width: 250,
  },
  cardName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    position: 'absolute',
    top: 20,
    right: 25,
  },
  overlayImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'stretch',
  },
});
