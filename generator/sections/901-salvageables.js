import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MapIcon from '../entities/map-icon.js';
import { MINIMUM_AREA_LEVEL, THEME } from '../configuration.js';

const section = new Section('Salvageables');

section.setCommon({
  areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
  rarity: '<= Rare',
  itemLevel: `< ${MINIMUM_AREA_LEVEL}`,
  font: 30,
  icon: new MapIcon(
    MapIcon.SIZES.SMALL,
    MapIcon.COLORS.GREY,
    MapIcon.SHAPES.CIRCLE,
  ),
  text: THEME.COLOR_CURRENCY,
  border: THEME.COLOR_CURRENCY,
});

section.addBlock(new Block({
  quality: '>= 1',
}));

section.addBlock(new Block({
  sockets: '>= 1',
}));

export default section;
