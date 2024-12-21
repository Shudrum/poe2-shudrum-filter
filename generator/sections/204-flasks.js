import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MinimapIcon from '../entities/minimap-icon.js';
import Effect from '../entities/effect.js';
import { THEME } from '../configuration.js';

const section = new Section('Flasks');

section.setCommon({
  type: 'Flask',
  rarity: '<= Magic',
});

section.addBlock(new Block({
  text: THEME.COLOR_FLASKS,
  border: THEME.COLOR_FLASKS,
  quality: '>= 10',
  font: 35,
  effect: new Effect(Effect.COLOR_CYAN, Effect.TEMPORARY),
  icon: new MinimapIcon(
    MinimapIcon.SIZE_SMALL,
    MinimapIcon.COLOR_CYAN,
    MinimapIcon.SHAPE_TRIANGLE,
  ),
}));

section.addBlock(new Block({
  visible: false,
}));

export default section;
