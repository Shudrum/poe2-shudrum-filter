import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import { COLORS } from '../configuration.js';

const section = new Section('Flasks');

section.setCommon({
  type: 'Flask',
  rarity: '<= Magic',
});

section.addBlock(new Block({
  text: COLORS.FLASKS,
  border: COLORS.FLASKS,
  quality: '>= 10',
  font: 35,
  effect: new Effect(Effect.COLORS.CYAN, Effect.TEMPORARY),
  icon: new MapIcon(
    MapIcon.SIZES.SMALL,
    MapIcon.COLORS.CYAN,
    MapIcon.SHAPES.TRIANGLE,
  ),
}));

section.addBlock(new Block({
  visible: false,
}));

export default section;
