import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MapIcon from '../entities/map-icon.js';
import { MINIMUM_AREA_LEVEL } from '../configuration.js';

const section = new Section('Magic and rare items');

section.setCommon({
  areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
  itemLevel: `>= ${MINIMUM_AREA_LEVEL}`,
});

section.addBlock(new Block({
  rarity: 'Magic',
  icon: new MapIcon(
    MapIcon.SIZES.SMALL,
    MapIcon.COLORS.BLUE,
    MapIcon.SHAPES.CIRCLE,
  ),
}));

section.addBlock(new Block({
  rarity: 'Rare',
  icon: new MapIcon(
    MapIcon.SIZES.SMALL,
    MapIcon.COLORS.YELLOW,
    MapIcon.SHAPES.CIRCLE,
  ),
}));

export default section;
