// @flow

import fs from 'fs';
import cards from '../cards';
import request from 'request';
import type {Card} from '../cards';

const cardDirPrefix = 'img/cards/';
const cardUrlPrefix = 'https://arkhamdb.com/bundles/cards/';

const allCards = Object.keys(cards).reduce(
  (allCards, deckKey) => allCards.concat(cards[deckKey]),
  [],
);

const download = function(code, callback, extension = '.png'){
  const url = cardUrlPrefix + code + extension;
  const filename = cardDirPrefix + code + extension;

  request.head(url, function(err, res){
    if (extension === '.png' && !res.headers['content-length']) {
      download(code, callback, '.jpg');
      return;
    } else if (!res.headers['content-length']) {
      console.error('No file found for: ', url);
    }

    fs.mkdir(cardDirPrefix, undefined, () => {
      request(url).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  });
};

function exists(code, callback, extension = '.png') {
  const filename = cardDirPrefix + code + extension;
  fs.stat(filename, (err, stats) => {
    if (err && err.code === 'ENOENT' && extension === '.png') {
      exists(code, callback, '.jpg');
    } else if (err) {
      callback(err);
    } else {
      callback(null, true);
    }
  });
}

function generate(done: () => void = ()=>{}) {
  let cardsExist = 0;
  let cardsGrabbed = 0;
  const grabCardForHead = (cardList) => {
    const recurse = () => {
      if (cardList.length) {
        grabCardForHead(cardList)
      } else {
        console.log('Cards grabbbed: ', cardsGrabbed);
        console.log('Cards Existed: ', cardsExist);
        done()
      }
    }
    const {code} = cardList.pop();

    if (cardList.length % 50 === 0) {
      console.log(`${cardList.length} cards remaining.`);
    }

    exists(code, (err, doesExist) => {
      if (doesExist) {
        cardsExist++;
        recurse();
      } else {
        download(code, (err: Error) => {
          if (err) {
            console.error(`Error on card: ${code}`, err);
          }
          cardsGrabbed++;
          setTimeout(recurse, 250);
        });
      }
    });
  };
  console.log(`Grabbing ${allCards.length} cards from ArkhamDB.`);
  grabCardForHead(allCards);
}

export default generate;
