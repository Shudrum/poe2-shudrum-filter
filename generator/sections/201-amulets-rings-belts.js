import Section from '../entities/section.js';
import Block from '../entities/block.js';
import { MINIMUM_AREA_LEVEL, COLORS } from '../configuration.js';

export default () => {
  const section = new Section('Amulets, rings & belts');

  section.setCommon({
    class: ['Amulets', 'Rings', 'Belts'],
    areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
    itemLevel: `>= ${MINIMUM_AREA_LEVEL}`,
  });

  section.addBlock(new Block({
    rarity: 'Normal',
    font: 40,
    text: COLORS.WHITE,
    border: COLORS.WHITE,
    continue: true,
  }));

  section.addBlock(new Block({
    rarity: 'Magic',
    text: COLORS.MAGIC,
    border: COLORS.MAGIC,
  }));

  section.addBlock(new Block({
    rarity: 'Rare',
    text: COLORS.RARE,
    border: COLORS.RARE,
  }));

  return section;
};
