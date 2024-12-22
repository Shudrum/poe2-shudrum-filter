import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import { COLORS } from '../configuration.js';

const section = new Section('Event: Ultimatum');

section.addBlock(new Block({
  type: 'Ultimatum',

  text: COLORS.WHITE,
  border: COLORS.EVENT,
  background: COLORS.EVENT,
  font: 40,

  icon: new MapIcon(
    MapIcon.SIZES.MEDIUM,
    MapIcon.COLORS.PURPLE,
    MapIcon.SHAPES.HEXAGON,
  ),
  effect: new Effect(Effect.COLORS.PURPLE),
  sound: new Sound(Sound.TYPES.IMPORTANCE_7),
}));

export default section;
