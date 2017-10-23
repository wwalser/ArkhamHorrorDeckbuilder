// @flow

import fs from 'fs';
import cards from '../cards';
import type {Card} from '../cards';

const allCards = Object.keys(cards).reduce(
  (allCards, deckKey) => allCards.concat(cards[deckKey]),
  [],
);

function createObjectKeyedOn(keyToIndex) {
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

function arrayCode(arrayValues) {
  let code = arrayValues.reduce(
    (code, currentValue) => {
      return code + `  '${currentValue}',\n`;
    },
    topComment() + 'const values = [\n',
  );
  return code + '];\n';
}

function generate() {
  const writeFileForHead = (generators) => {
    const generatorName = generators.pop();
    const axisStringsCode = arrayCode(
      Object.keys(queryAxisGenerators[generatorName]()),
    );

    fs.writeFile(
      `./query/${generatorName}.js`,
      axisStringsCode,
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
