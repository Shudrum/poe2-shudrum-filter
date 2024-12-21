import { DEBUG } from '../configuration.js';
import defaultSection from './default.js';
import gold from './gold.js';
import sekhemasTrial from './sekhemas-trial.js';
import expeditions from './expeditions.js';
import uniques from './uniques.js';
import amuletsRingsBelts from './amulets-rings-belts.js';
import charms from './charms.js';
import runes from './runes.js';
import flasks from './flasks.js';
import ultimatum from './ultimatum.js';
import gems from './gems.js';
import jewels from './jewels.js';
import currencies from './currencies.js';
import waystones from './waystones.js';
import magicRares from './magic-rares.js';
import salvageables from './salvageables.js';
import useless from './useless.js';
import debug from './debug.js';

export default [
  defaultSection,
  gold,
  uniques,
  sekhemasTrial,
  ultimatum,
  expeditions,
  amuletsRingsBelts,
  charms,
  runes,
  flasks,
  gems,
  jewels,
  currencies,
  waystones,
  magicRares,
  salvageables,
  useless,
  DEBUG && debug,
].filter(Boolean);
