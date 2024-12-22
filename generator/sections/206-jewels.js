import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import { COLORS } from '../configuration.js';

const section = new Section('Jewels');

section.addBlock(new Block({
  class: 'Jewel',
  rarity: '<= Rare',
  text: COLORS.JEWELS,
  border: COLORS.JEWELS,
  font: 40,

  icon: new MapIcon(
    MapIcon.SIZES.MEDIUM,
    MapIcon.COLORS.GREEN,
    MapIcon.SHAPES.PENTAGON,
  ),
  effect: new Effect(Effect.COLORS.GREEN, Effect.TEMPORARY),
}));

export default section;
