// @flow

import apot from './apot';
import bota from './bota';
import core from './core';
import dwl from './dwl';
import eotp from './eotp';
import litas from './litas';
import promo from './promo';
import ptc from './ptc';
import tece from './tece';
import tmm from './tmm';
import tuo from './tuo';
import uau from './uau';
import wda from './wda';

export type FactionName = 'neutral' | 'rogue' | 'guardian' | 'mystic' | 'survivor' | 'seeker';
export type TypeCode = 'investigator' | 'enemy' | 'treachery' | 'asset' | 'event' | 'skill';
export type Card = {
  back_text?: string,
  back_flavor?: string,
  code: string,
  cost?: ?number,
  deck_limit: number,
  deck_options?: Array<any>,
  deck_requirements?: string,
  faction_code: FactionName,
  flavor?: string,
  health?: number,
  illustrator: string,
  is_unique?: ?boolean,
  name: string,
  pack_code: string,
  position: number,
  quantity: number,
  sanity?: number,
  skill_agility?: number,
  skill_combat?: number,
  skill_intellect?: number,
  skill_wild?: number,
  skill_willpower?: number,
  slot?: string,
  subname?: string,
  subtype_code?: string,
  text?: string,
  traits?: string,
  type_code: TypeCode,
  xp?: number,
};

const decks:{[string]: Array<Card>} = {
  apot,
  bota,
  core,
  dwl,
  eotp,
  litas,
  promo,
  ptc,
  tece,
  tmm,
  tuo,
  uau,
  wda,
};

export default decks;
