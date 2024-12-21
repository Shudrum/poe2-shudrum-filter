import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import { THEME } from '../configuration.js';

const section = new Section('Uniques');

section.addBlock(new Block({
  rarity: 'Unique',

  text: THEME.COLOR_BLACK,
  background: THEME.COLOR_UNIQUE,
  border: THEME.COLOR_UNIQUE,
  font: 45,

  icon: new MapIcon(
    MapIcon.SIZES.BIG,
    MapIcon.COLORS.BROWN,
    MapIcon.SHAPES.STAR,
  ),
  effect: new Effect(Effect.COLORS.BROWN),
  sound: new Sound(Sound.UNIQUE),
}));

export default section;
