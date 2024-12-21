import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import { THEME } from '../configuration.js';

const section = new Section('Runes');

section.addBlock(new Block({
  type: 'Rune',
  text: THEME.COLOR_RUNES,
  border: THEME.COLOR_RUNES,
  font: 35,
  effect: new Effect(Effect.COLORS.CYAN, Effect.TEMPORARY),
  icon: new MapIcon(
    MapIcon.SIZES.SMALL,
    MapIcon.COLORS.CYAN,
    MapIcon.SHAPES.CIRCLE,
  ),
}));

export default section;
