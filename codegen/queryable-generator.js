// @flow

import fs from 'fs';
import cards, {PLAYER_CARD_TYPES} from '../cards';
import type {Card} from '../cards';
import type {FileList} from './grabber.js';

// Flatten a list of cards
const allCards = Object.keys(cards).reduce(
  (allCards, deckKey) => allCards.concat(cards[deckKey]),
  [],
);
const allPlayerCards = allCards.filter(
  card => PLAYER_CARD_TYPES.hasOwnProperty(card.type_code),
);
const investigatorCards = allCards.filter(
  card => card.type_code === 'investigator',
);

function injectCardImages(imageFileList) {
  allPlayerCards.forEach((card, index) => {
    card['img_src'] = imageFileList[card.code];
  });

  investigatorCards.forEach((card, index) => {
    card['img_src'] = imageFileList[card.code];
  });
}

function createObjectKeyedOn(keyToIndex, cardList):{[string]: Array<Card>} {
  return cardList.reduce((acc: {[string]: Array<Card>}, card: Card) => {
    const currentKey = card[keyToIndex];
    if (currentKey) {
      if (acc[currentKey]) {
        acc[currentKey].push(card);
      } else {
        acc[currentKey] = [card];
      }
    }
    return acc;
  }, {});
}

const queryAxisGenerators = {
  name() {
    return createObjectKeyedOn('name', allPlayerCards);
  },
  faction() {
    return createObjectKeyedOn('faction_code', allPlayerCards);
  },
  type() {
    return createObjectKeyedOn('type_code', allPlayerCards);
  },
  investigators() {
    return createObjectKeyedOn('name', investigatorCards);
  },
};

function topContent() {
  return '/**\n' +
    ' * This file is generated code. Do not modify manually.\n' +
    ' * To regenerate: npm run codegen\n' +
    ' * See /codegen directory for implementation details.\n' +
    ' * @flow\n' +
    ' **/\n' +
    '\n' +
    'import type {Card} from \'../cards\';\n';
}

function codeString(objectValue) {
  const strings = Object.keys(objectValue);

  let objectCode = topContent() +
    'export const lookup: {[string]: Array<Card>} = ' +
    JSON.stringify(objectValue, null, 2);

  let arrayCode = ';\nexport const values: Array<string> = ' +
    JSON.stringify(strings, null, 2);

  return objectCode + arrayCode + ';\n';
}

function generate(fileList: FileList, done: () => void = ()=>{}) {
  injectCardImages(fileList);
  const writeFileForHead = (generators) => {
    const generatorName = generators.pop();
    const axisCode = codeString(queryAxisGenerators[generatorName]());

    fs.writeFile(
      `./query/${generatorName}.js`,
      axisCode,
      err => {
        if (err) {
          console.log(err);
        }
        if (generators.length) {
          console.log('Codegen progress.');
          writeFileForHead(generators);
        } else {
          console.log('Done with codegen');
          done();
        }
      },
    );
  };
  writeFileForHead(Object.keys(queryAxisGenerators));
}

export default generate;
