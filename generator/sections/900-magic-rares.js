import Section from '../entities/section.js';
import Block from '../entities/block.js';
import MapIcon from '../entities/map-icon.js';
import { MINIMUM_AREA_LEVEL, VARIABLES } from '../configuration.js';

export default (mode) => {
  const section = new Section('Magic and rare items');

  section.setCommon({
    areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
    itemLevel: `>= ${VARIABLES.MIN_ITEM_LEVEL_NORMAL_MAGIC_RARE[mode]}`,
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

  return section;
};
