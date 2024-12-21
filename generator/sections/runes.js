import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MinimapIcon from '../entities/minimap-icon.js';
import Effect from '../entities/effect.js';
import { THEME } from '../configuration.js';

const section = new Section('Runes');

section.addBlock(new Block({
  type: 'Rune',
  text: THEME.COLOR_RUNES,
  border: THEME.COLOR_RUNES,
  font: 35,
  effect: new Effect(Effect.COLOR_CYAN, Effect.TEMPORARY),
  icon: new MinimapIcon(
    MinimapIcon.SIZE_SMALL,
    MinimapIcon.COLOR_CYAN,
    MinimapIcon.SHAPE_CIRCLE,
  ),
}));

export default section;
