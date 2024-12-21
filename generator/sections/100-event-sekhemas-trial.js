import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import { THEME } from '../configuration.js';

const section = new Section('Event: Sekhemas trial');

section.addBlock(new Block({
  type: [
    'Barya',
    'Bronze Key',
    'Silver Key',
    'Gold Key',
  ],

  text: THEME.COLOR_WHITE,
  border: THEME.COLOR_EVENT,
  background: THEME.COLOR_EVENT,
  font: 40,

  icon: new MapIcon(
    MapIcon.SIZES.MEDIUM,
    MapIcon.COLORS.PURPLE,
    MapIcon.SHAPES.HEXAGON,
  ),
  effect: new Effect(Effect.COLORS.PURPLE),
  sound: new Sound(Sound.TYPES.IMPORTANCE_7),
  continue: true,
}));

// Relics
section.addBlock(new Block({
  class: 'Relic',
  text: THEME.COLOR_EVENT,
  border: THEME.COLOR_EVENT,
  effect: new Effect(Effect.COLORS.PURPLE),
  font: 40,
  icon: new MapIcon(
    MapIcon.SIZES.MEDIUM,
    MapIcon.COLORS.PURPLE,
    MapIcon.SHAPES.DIAMOND,
  ),
  sound: new Sound(Sound.TYPES.IMPORTANCE_8),
}));

// Different icons keys
section.addBlock(new Block({
  class: [
    'Bronze Key',
    'Silver Key',
    'Gold Key',
  ],
  icon: new MapIcon(
    MapIcon.SIZES.BIG,
    MapIcon.COLORS.PURPLE,
    MapIcon.SHAPES.STAR,
  ),
}));

export default section;
