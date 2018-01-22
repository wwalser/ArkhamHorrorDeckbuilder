// @flow

import fs from 'fs';
import cards from '../cards';
import request from 'request';
import type {Card} from '../cards';

type RequestResult = {
  headers: {
    'content-length': ?number,
  },
};

const cardDirPrefix = 'img/cards/';
const cardUrlPrefix = 'https://arkhamdb.com/bundles/cards/';

const allCards = Object.keys(cards).reduce(
  (allCards, deckKey) => allCards.concat(cards[deckKey]),
  [],
);

const download = function(code, callback, extension = '.png'){
  const url = cardUrlPrefix + code + extension;
  const filename = cardDirPrefix + code + extension;

  request.head(url, function(err: ?Error, res: RequestResult){
    if (extension === '.png' && !res.headers['content-length']) {
      download(code, callback, '.jpg');
      return;
    } else if (!res.headers['content-length']) {
      console.error('No file found for: ', url);
      callback(new Error('Not found on ArkhamDB.'));
      return;
    }

    fs.mkdir(cardDirPrefix, undefined, () => {
      request(url).pipe(
        fs.createWriteStream(filename),
      ).on(
        'close',
        (err: ?Error) => callback(err, filename),
      );
    });
  });
};

function exists(code, callback, extension = '.png') {
  const filename = cardDirPrefix + code + extension;
  fs.stat(filename, (err, stats) => {
    if (err && err.code === 'ENOENT' && extension === '.png') {
      exists(code, callback, '.jpg');
    } else if (err) {
      callback(err, false, filename);
    } else {
      callback(null, true, filename);
    }
  });
}

type FileName = string;
export type FileList = {[code: string]: FileName};
function generate(done: (files: FileList) => void = ()=>{}) {
  const cardsExist:FileList = {};
  const cardsGrabbed:FileList = {};
  const cardsNotFound:Array<string> = [];
  const grabCardForHead = (cardList) => {
    const recurse = () => {
      if (cardList.length) {
        grabCardForHead(cardList)
      } else {
        console.log('Cards grabbbed: ', Object.keys(cardsGrabbed).length);
        console.log('Cards existed: ', Object.keys(cardsExist).length);
        console.log('Cards not found: ', cardsNotFound);
        done(Object.assign(cardsExist, cardsGrabbed));
      }
    }
    const {code} = cardList.pop();

    if (cardList.length % 50 === 0) {
      console.log(`${cardList.length} cards remaining.`);
    }

    exists(code, (err: ?Error, doesExist: boolean, fileName: string) => {
      if (doesExist) {
        cardsExist[code] = fileName;
        recurse();
      } else {
        download(code, (err: ?Error, fileName: string = '') => {
          if (err) {
            console.error(`Error on card: ${code}`, err.message);
            cardsNotFound.push(code);
          } else {
            cardsGrabbed[code] = fileName;
          }
          setTimeout(recurse, 250);
        });
      }
    });
  };
  console.log(`Grabbing ${allCards.length} cards from ArkhamDB.`);
  grabCardForHead(allCards);
}

export default generate;
