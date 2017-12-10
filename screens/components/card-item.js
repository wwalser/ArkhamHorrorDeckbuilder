// @flow

import React from 'react';
import {
  Button,
  ScrollView,
  Image,
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import ArkhamText from '../util-components/arkham-text.js';

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
    statGlif: require('../../img/neutral-stat-oval.png'),
  },
  guardian: {
    token: require('../../img/guardian.png'),
    cardHeader: require('../../img/card-header-guardian.png'),
    statGlif: require('../../img/guardian-stat-oval.png'),
  },
  rogue: {
    token: require('../../img/rogue.png'),
    cardHeader: require('../../img/card-header-rogue.png'),
    statGlif: require('../../img/rogue-stat-oval.png'),
  },
  mystic: {
    token: require('../../img/mystic.png'),
    cardHeader: require('../../img/card-header-mystic.png'),
    statGlif: require('../../img/mystic-stat-oval.png'),
  },
  seeker: {
    token: require('../../img/seeker.png'),
    cardHeader: require('../../img/card-header-seeker.png'),
    statGlif: require('../../img/seeker-stat-oval.png'),
  },
  survivor: {
    token: require('../../img/survivor.png'),
    cardHeader: require('../../img/card-header-survivor.png'),
    statGlif: require('../../img/survivor-stat-oval.png'),
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
        <ArkhamText style={styles.cardName}>{is_unique ? '*' : ''}{name}</ArkhamText>
      </View>
      <View style={styles.cardDetails}>
        <View style={styles.cardStats}>
          <Image style={styles.cardStatOval} source={factions[faction_code].statGlif} />
          <ArkhamText>5</ArkhamText>
        </View>
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
    height: 25,
    width: 250,
  },
  cardName: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingLeft: 10,
  },
  cardStats: {
    width: 46,
    height: 46,
  },
  cardStatOval: {
    height: 46,
    width: 46,
    ...StyleSheet.absoluteFillObject,
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
