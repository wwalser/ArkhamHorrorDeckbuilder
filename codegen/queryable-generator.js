// @flow

import fs from 'fs';
import cards from '../cards';
import type {Card} from '../cards';

const allCards = Object.keys(cards).reduce(
  (allCards, deckKey) => allCards.concat(cards[deckKey]),
  [],
);

function createObjectKeyedOn(keyToIndex):{[string]: Array<Card>} {
  return allCards.reduce((acc: {[string]: Array<Card>}, card: Card) => {
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
    return createObjectKeyedOn('name');
  },
  faction() {
    return createObjectKeyedOn('faction_code');
  },
  type() {
    return createObjectKeyedOn('type_code');
  },
};

function topComment() {
  return '/**\n' +
    ' * This file is generated code. Do not modify manually.\n' +
    ' * To regenerate: npm run codegen\n' +
    ' * See /codegen directory for implementation details.\n' +
    ' **/\n';
}

function codeString(objectValue) {
  const strings = Object.keys(objectValue);

  let objectCode = topComment() + 'const lookup = ' +
    JSON.stringify(objectValue, null, 2);
  let arrayCode = ';\nconst values = ' +
    JSON.stringify(strings, null, 2);

  return objectCode + arrayCode + ';\n';
}

function generate() {
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
        generators.length && writeFileForHead(generators)
      },
    );
  };
  writeFileForHead(Object.keys(queryAxisGenerators));
}

export default generate;
