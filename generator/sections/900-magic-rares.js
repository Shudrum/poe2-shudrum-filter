import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MinimapIcon from '../entities/minimap-icon.js';
import { MINIMUM_AREA_LEVEL } from '../configuration.js';

const section = new Section('Magic and rare items');

section.setCommon({
  areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
  itemLevel: `>= ${MINIMUM_AREA_LEVEL}`,
});

section.addBlock(new Block({
  rarity: 'Magic',
  icon: new MinimapIcon(
    MinimapIcon.SIZE_SMALL,
    MinimapIcon.COLOR_BLUE,
    MinimapIcon.SHAPE_CIRCLE,
  ),
}));

section.addBlock(new Block({
  rarity: 'Rare',
  icon: new MinimapIcon(
    MinimapIcon.SIZE_SMALL,
    MinimapIcon.COLOR_YELLOW,
    MinimapIcon.SHAPE_CIRCLE,
  ),
}));

export default section;
