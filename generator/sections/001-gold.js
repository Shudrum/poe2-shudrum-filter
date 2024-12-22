import Section from '../entities/section.js';
import Block from '../entities/block.js';

import { MINIMUM_AREA_LEVEL, COLORS } from '../configuration.js';

const section = new Section('Gold');

section.setCommon({
  type: 'Gold',
});

section.addBlock(new Block({
  text: COLORS.GOLD,
  font: 25,
  continue: true,
}));

[
  [1000, 45, true],
  [750, 40],
  [500, 35],
  [250, 30],
  [100, 25],
  [50, 20],
].forEach(([stackSize, font, showBorder]) => {
  section.addBlock(new Block({
    stackSize: `>= ${stackSize}`,
    font,
    ...showBorder && { border: COLORS.GOLD },
  }));
});

section.addBlock(new Block({
  visible: false,
  areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
  stackSize: '< 50',
}));

export default section;
