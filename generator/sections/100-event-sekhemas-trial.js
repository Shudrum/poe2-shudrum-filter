import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MinimapIcon from '../entities/minimap-icon.js';
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

  icon: new MinimapIcon(
    MinimapIcon.SIZE_MEDIUM,
    MinimapIcon.COLOR_PURPLE,
    MinimapIcon.SHAPE_HEXAGON,
  ),
  effect: new Effect(Effect.COLOR_PURPLE),
  sound: new Sound(Sound.IMPORTANCE_7),
  continue: true,
}));

// Relics
section.addBlock(new Block({
  class: 'Relic',
  text: THEME.COLOR_EVENT,
  border: THEME.COLOR_EVENT,
  effect: new Effect(Effect.COLOR_PURPLE),
  font: 40,
  icon: new MinimapIcon(
    MinimapIcon.SIZE_MEDIUM,
    MinimapIcon.COLOR_PURPLE,
    MinimapIcon.SHAPE_DIAMOND,
  ),
  sound: new Sound(Sound.IMPORTANCE_8),
}));

// Different icons keys
section.addBlock(new Block({
  class: [
    'Bronze Key',
    'Silver Key',
    'Gold Key',
  ],
  icon: new MinimapIcon(
    MinimapIcon.SIZE_BIG,
    MinimapIcon.COLOR_PURPLE,
    MinimapIcon.SHAPE_STAR,
  ),
}));

export default section;
