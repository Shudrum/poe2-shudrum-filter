import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MinimapIcon from '../entities/minimap-icon.js';
import Effect from '../entities/effect.js';
import { THEME } from '../configuration.js';

const section = new Section('Jewels');

section.addBlock(new Block({
  class: 'Jewel',
  rarity: '<= Rare',
  text: THEME.COLOR_JEWELS,
  border: THEME.COLOR_JEWELS,
  font: 40,

  icon: new MinimapIcon(
    MinimapIcon.SIZE_MEDIUM,
    MinimapIcon.COLOR_GREEN,
    MinimapIcon.SHAPE_PENTAGON,
  ),
  effect: new Effect(Effect.COLOR_GREEN, Effect.TEMPORARY),
}));

export default section;
