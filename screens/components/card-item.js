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
import ArkhamText from '../util-components/arkham-text';
import factions from '../util-components/faction-images';
import DeckBuilderButton from '../util-components/deck-builder-button';

import type {Card} from '../../cards';
import type {AddCardDispatcher, RemoveCardDispatcher} from '../../store/deck-list';
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

const cardTypeGlif = require('../../img/card-type.png');

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
      this.props.onRemove(this.props.card.code);
    } else {
      this.props.onAdd(this.props.card.code);
    }
  };
  render() {
    //alignItems
    const {
      isInDeck,
      card: {cost, name, faction_code, is_unique, subname, xp, type_code, img_src},
    } = this.props;
    // 'asset': 1,
    // 'event': 1,
    // 'skill': 1,
    // 'treachery': 1,
    const cardType = ['asset', 'skill', 'event'].indexOf(type_code) === -1
      ? null : type_code;

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
        <Image
          style={styles.cardStatOval}
          source={factions[faction_code].statGlifs[xp || 0]}
        >
          <ArkhamText style={styles.cardCost}>{cost}</ArkhamText>
        </Image>
        {cardType ? (<Image
            style={styles.cardTypeGlif}
            source={cardTypeGlif}
          >
            <ArkhamText style={styles.cardType}>{cardType}</ArkhamText>
          </Image>) : null}
      </View>
      <View style={styles.cardDetails}>
        <View style={styles.cardStats}>

        </View>
      </View>
      <View style={styles.buttons}>
        <DeckBuilderButton
          disabled={isInDeck}
          style={styles.deckButton}
          textStyle={styles.deckButtonText}
          disabledStyle={styles.deckButtonDisabled}
          title="+"
          onPress={this.onPress}
          accessibilityLabel='Add card to deck.'
        />
        <DeckBuilderButton
          disabled={!isInDeck}
          style={styles.deckButton}
          textStyle={styles.deckButtonText}
          disabledStyle={styles.deckButtonDisabled}
          title="-"
          onPress={this.onPress}
          accessibilityLabel='Remove card from deck.'
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
    paddingLeft: 47,
  },
  cardType: {
    fontSize: 10,
    fontWeight: 'bold',
    paddingTop: 4,
    color: 'black',
  },
  cardCost: {
    fontSize: 20,
    color: 'white',
    paddingTop: 6,
  },
  cardStats: {
    width: 46,
    height: 46,
  },
  cardStatOval: {
    height: 46,
    width: 46,
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  cardTypeGlif: {
    position: 'absolute',
    height: 21,
    width: 47,
    top: 40,
    alignItems: 'center',
  },
  buttons: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: CARD_HEIGHT,
    width: 60,
  },
  deckButton: {
    height: 40,
    width: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0)',
  },
  deckButtonDisabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  deckButtonText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  overlayImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'stretch',
  },
});
