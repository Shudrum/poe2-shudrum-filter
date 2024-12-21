import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import { THEME } from '../configuration.js';

const section = new Section('Event: Expedition');

section.addBlock(new Block({
  class: 'Currency',
  type: 'Artifact',

  text: THEME.COLOR_EXPEDITION,
  border: THEME.COLOR_EXPEDITION,
  font: 30,

  icon: new MapIcon(
    MapIcon.SIZES.SMALL,
    MapIcon.COLORS.CYAN,
    MapIcon.SHAPES.DIAMOND,
  ),
  effect: new Effect(Effect.COLORS.CYAN),
  sound: new Sound(Sound.IMPORTANCE_6),
}));

section.addBlock(new Block({
  class: 'Currency',
  type: 'Exotic Coinage',

  text: THEME.COLOR_BLACK,
  border: THEME.COLOR_EXPEDITION,
  background: THEME.COLOR_EXPEDITION,
  font: 40,

  icon: new MapIcon(
    MapIcon.SIZES.BIG,
    MapIcon.COLORS.CYAN,
    MapIcon.SHAPES.STAR,
  ),
  effect: new Effect(Effect.COLORS.CYAN),
  sound: new Sound(Sound.IMPORTANCE_3),
}));

export default section;
