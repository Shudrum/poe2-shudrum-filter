import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MinimapIcon from '../entities/minimap-icon.js';
import { MINIMUM_AREA_LEVEL, THEME } from '../configuration.js';

const section = new Section('Salvageables');

section.setCommon({
  areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
  rarity: '<= Rare',
  itemLevel: `< ${MINIMUM_AREA_LEVEL}`,
  font: 30,
  icon: new MinimapIcon(
    MinimapIcon.SIZE_SMALL,
    MinimapIcon.COLOR_GREY,
    MinimapIcon.SHAPE_CIRCLE,
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
