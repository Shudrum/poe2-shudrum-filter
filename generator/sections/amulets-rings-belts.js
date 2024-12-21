import Section from '../entities/section.js';
import Block from '../entities/block.js';

import { MINIMUM_AREA_LEVEL, THEME } from '../configuration.js';

const section = new Section('Amulets, rings & belts');

section.setCommon({
  class: ['Amulets', 'Rings', 'Belts'],
  areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
  itemLevel: `>= ${MINIMUM_AREA_LEVEL}`,
});

section.addBlock(new Block({
  rarity: 'Normal',
  font: 40,
  text: THEME.COLOR_WHITE,
  border: THEME.COLOR_WHITE,
  continue: true,
}));

section.addBlock(new Block({
  rarity: 'Magic',
  text: THEME.COLOR_MAGIC,
  border: THEME.COLOR_MAGIC,
}));

section.addBlock(new Block({
  rarity: 'Rare',
  text: THEME.COLOR_RARE,
  border: THEME.COLOR_RARE,
}));

export default section;
